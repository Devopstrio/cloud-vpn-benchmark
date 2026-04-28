provider "azurerm" {
  features {}
}

provider "aws" {
  region = var.aws_region
}

resource "azurerm_resource_group" "rg" {
  name     = "rg-${var.project_name}-${var.environment}"
  location = var.location
}

# Azure VPN Gateway for Benchmarking
resource "azurerm_public_ip" "vpn_ip" {
  name                = "pip-vpn-${var.environment}"
  location            = azurerm_resource_group.rg.location
  resource_group_name = azurerm_resource_group.rg.name
  allocation_method   = "Static"
  sku                 = "Standard"
}

resource "azurerm_virtual_network_gateway" "vpn" {
  name                = "vpng-hub-${var.environment}"
  location            = azurerm_resource_group.rg.location
  resource_group_name = azurerm_resource_group.rg.name

  type     = "Vpn"
  vpn_type = "RouteBased"

  active_active = false
  enable_bgp    = true
  sku           = "VpnGw1"

  ip_configuration {
    name                          = "vnetGatewayConfig"
    public_ip_address_id          = azurerm_public_ip.vpn_ip.id
    private_ip_address_allocation = "Dynamic"
    subnet_id                     = var.gateway_subnet_id
  }
}

# AWS Site-to-Site VPN
resource "aws_vpn_gateway" "vpn" {
  vpc_id = var.aws_vpc_id

  tags = {
    Name = "vgw-${var.project_name}-${var.environment}"
  }
}

# Kubernetes Cluster for Hosting Benchmark Agents
resource "azurerm_kubernetes_cluster" "aks" {
  name                = "aks-network-probes-${var.environment}"
  location            = azurerm_resource_group.rg.location
  resource_group_name = azurerm_resource_group.rg.name
  dns_prefix          = "networkiq"

  default_node_pool {
    name       = "default"
    node_count = 2
    vm_size    = "Standard_DS3_v2"
  }

  identity {
    type = "SystemAssigned"
  }
}
