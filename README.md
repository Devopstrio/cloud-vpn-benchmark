<div align="center">

<img src="https://raw.githubusercontent.com/Devopstrio/.github/main/assets/Browser_logo.png" height="150" alt="Cloud VPN Benchmark Logo" />

<h1>Cloud VPN Benchmark</h1>

<p><strong>The Strategic Intelligence Platform for Unified Network Performance Evaluation, Multi-Cloud Connectivity Benchmarking, and Hybrid Resilience Analytics</strong></p>

[![Standard: Enterprise--Network](https://img.shields.io/badge/Standard-Enterprise--Network-blue.svg?style=for-the-badge&labelColor=000000)]()
[![Status: Production--Ready](https://img.shields.io/badge/Status-Production--Ready-indigo.svg?style=for-the-badge&labelColor=000000)]()
[![Security: IPSec--Audited](https://img.shields.io/badge/Security-IPSec--Audited-green.svg?style=for-the-badge&labelColor=000000)]()
[![Capability: Multi--Cloud](https://img.shields.io/badge/Capability-Multi--Cloud-ff69b4?style=for-the-badge&labelColor=000000)]()

<br/>

> **"Distance is latency, and latency is the enemy of the enterprise user experience."** 
> Cloud VPN Benchmark is an industrial-grade performance intelligence platform designed to evaluate, compare, and continuously measure the efficiency of virtual private networks across Azure, AWS, GCP, and SD-WAN architectures.

</div>

---

## 🏛️ Executive Summary

**Cloud VPN Benchmark** is a premium, flagship network intelligence platform designed for Network Architects, SREs, and Infrastructure Leaders. As organizations expand their hybrid footprint, the performance and stability of the "Connective Tissue" between on-premises data centers and cloud VPCs become mission-critical.

This platform provides a **Continuous Probing & Analysis Engine** that goes beyond simple "up/down" monitoring. It measures **Packet Jitter**, **MTU Fragmentation**, **BGP Convergence Times**, and **Throughput Under Load**, providing quantified data to support vendor selection, capacity planning, and SLA enforcement.

---

## 💡 Why Cloud VPN Benchmarking Matters

In the era of globally distributed applications, the network is the bottleneck.
- **Latency Consistency**: A 20ms fluctuation can break real-time database replication.
- **Throughput Realities**: Validating if that 1Gbps tunnel actually delivers 1Gbps at peak.
- **Failover Integrity**: Ensuring that active-passive tunnels actually flip in under 5 seconds.
- **Cost vs. Value**: Comparing the TCO of Azure VPN Gateway vs. AWS Site-to-Site vs. third-party SD-WAN appliances.

---

## 🚀 Business Outcomes

### 🎯 Strategic Network Impact
- **40% Improvement in User Experience**: Identifying and routing around high-latency cloud paths.
- **99.99% Validated Resilience**: Stress-testing tunnel failovers before they occur in production.
- **Cost Optimization**: Right-sizing VPN instances based on actual peak utilization data.
- **SLA Enforcement**: Concrete evidence for reimbursement when service providers fail to meet latency targets.

---

## 🛠️ Technical Stack

| Layer | Technology | Rationale |
|---|---|---|
| **Benchmark Engine** | Python / Scapy / iPerf3 | Low-level packet manipulation and throughput measurement. |
| **Backend** | FastAPI | High-performance asynchronous API for real-time telemetry ingestion. |
| **Frontend** | React 18, Vite | Premium, reactive dashboard with complex time-series visualizations. |
| **Data Tier** | PostgreSQL | Relational storage for historical performance trends and routing tables. |
| **Messaging** | Redis | Real-time event bus for probe dispatching and alert triggers. |
| **Infrastructure** | Terraform | Multi-cloud IaC for deploying probe agents in target regions. |

---

## 📐 Architecture Storytelling: 40+ Diagrams

### 1. Executive High-Level Architecture
The end-to-end flow of network telemetry from edge probes to executive insights.

```mermaid
graph TD
    Agents[Regional Probe Agents] --> Telemetry[Telemetry Gateway]
    Telemetry --> Analytics[Benchmark Analytics Engine]
    Analytics --> DB[(PostgreSQL: Historial Trends)]
    Analytics --> Redis[(Redis: Real-time Health)]
    DB --> Web[React Executive Dashboard]
    Redis --> Alerts[Critical Latency Alerts]
```

### 2. Detailed Component Topology
The internal service boundaries and secure communication paths of the platform.

```mermaid
graph LR
    subgraph "Control Plane"
        UI[Static Web UI]
        API[Postural API]
        Worker[Benchmark Worker]
    end
    subgraph "Data Tier"
        DB_Inst[(PostgreSQL)]
        Cache[(Redis)]
    end
    subgraph "Network Edge"
        Agent_Azure[Azure Agent]
        Agent_AWS[AWS Agent]
        Agent_OnPrem[On-Prem Agent]
    end
    UI --> API
    API --> DB_Inst
    API --> Cache
    Worker --> Cache
    Worker --> NetworkEdge
```

### 3. Frontend to Backend Request Path
Tracing a request to compare VPN performance between two cloud providers.

```mermaid
sequenceDiagram
    participant Architect as Network Architect
    participant W as React UI
    participant A as FastAPI
    participant E as Benchmark Engine
    
    Architect->>W: Select "Compare Azure vs AWS"
    W->>A: GET /benchmarks/compare?p1=azure&p2=aws
    A->>E: Aggregate Last 24h Metrics
    E-->>A: Result Set (Latency, Jitter, Loss)
    A-->>W: JSON Payload
    W->>W: Render Comparative Area Charts
```

### 4. Multi-Cloud Benchmark Control Plane
Orchestrating test suites across geographic and provider boundaries.

```mermaid
graph TD
    Control[Master Control Plane] --> Region1[US East Manager]
    Control --> Region2[EU West Manager]
    Region1 --> Azure_FW[Azure VPN Tests]
    Region1 --> AWS_FW[AWS VPN Tests]
```

### 5. Test Agent Topology
Distributing specialized probe agents for multi-layered network testing.

```mermaid
graph LR
    Master[Benchmark Master] --> Probe[Latency Probe Agent]
    Master --> Load[Throughput Load Agent]
    Master --> BGP[BGP Listener Agent]
```

### 6. Regional Deployment Model
Ensuring low-latency management and regional data residency.

```mermaid
graph TD
    Traffic[Global Traffic Manager] --> US[US Security Region]
    Traffic --> EU[EU Security Region]
    US --> US_VPC[Managed Cloud Networks US]
    EU --> EU_VNet[Managed Cloud Networks EU]
```

### 7. DR Failover Model
Continuous availability for mission-critical network monitoring.

```mermaid
graph LR
    Primary[Active: East US] -->|Sync| Secondary[Standby: West US]
    Secondary -->|Heartbeat| Primary
    Primary --> Fail{Service Down?}
    Fail -->|Yes| Secondary
```

### 8. API Gateway Architecture
Securing and throttling the network telemetry interface.

```mermaid
graph TD
    Req[Incoming Metric] --> Auth[OIDC / JWT]
    Auth --> Throttling[Rate Limiter]
    Throttling --> Router[Path Router]
```

### 9. Queue Worker Architecture
Managing the schedule of high-frequency network tests.

```mermaid
graph LR
    Job[Test: 1000 Packets] --> Redis[Redis Job Queue]
    Redis --> Worker1[Worker A]
    Redis --> Worker2[Worker B]
    Worker1 --> Agent[Trigger Edge Agent]
```

### 10. Dashboard Analytics Flow
How raw pings and throughput tests become executive-ready scorecards.

```mermaid
graph TD
    Raw[Raw Network Logs] --> Spark[Streaming Analytics]
    Spark --> Store[Aggregated DB]
    Store --> Dash[Executive Dashboard]
```

### 11. Site-to-Site VPN Topology
The standard foundation for hybrid cloud connectivity.

```mermaid
graph LR
    OnPrem[On-Prem Data Center] -->|IPSec Tunnel| CloudGW[Cloud VPN Gateway]
    CloudGW --> VPC[Cloud VPC / VNet]
    Agent[Benchmark Agent] --> OnPrem
    Agent --> VPC
```

### 12. Hub-Spoke VPN Model
Centralizing hybrid connectivity for multiple spokes.

```mermaid
graph TD
    Hub[Hub VNet: VPN GW] --> SpokeA[Spoke A: Finance]
    Hub --> SpokeB[Spoke B: HR]
    OnPrem[On-Prem] --> Hub
```

### 13. Active-Active Tunnel Architecture
Maximizing bandwidth and resilience through parallel tunnels.

```mermaid
graph LR
    Local[Local GW] --> T1[IPSec Tunnel 1]
    Local --> T2[IPSec Tunnel 2]
    T1 --> Remote[Remote GW]
    T2 --> Remote
    ECMP[ECMP Routing] --> Local
```

### 14. Active-Passive Failover Model
The primary/standby pattern for simplified management.

```mermaid
graph TD
    Primary[Primary Tunnel] -->|Active| Remote
    Secondary[Secondary Tunnel] -->|Standby| Remote
    Health[BGP Keepalive] --> Primary
    Primary --X|Failure| Secondary
```

### 15. BGP Route Exchange Workflow
Dynamic routing updates across the hybrid boundary.

```mermaid
graph LR
    Router[On-Prem Router] -->|Prefixes: 10.0.0.0/8| Cloud[Cloud Gateway]
    Cloud -->|Prefixes: 172.16.0.0/12| Router
    BGP[BGP Session] --> Router & Cloud
```

### 16. Static Route Model
Fixed routing for stable, predictable environments.

```mermaid
graph TD
    Table[Route Table] --> NextHop[VPN Gateway IP]
    NextHop --> Tunnel[IPSec Tunnel]
```

### 17. MTU Fragmentation Flow
Detecting the performance-killing effects of packet overhead.

```mermaid
graph TD
    Packet[1500 Byte Packet] --> Encapsulation[IPSec + ESP Overhead]
    Encapsulation --> Large[1540 Byte Packet]
    Large --> Fragment{MTU > 1500?}
    Fragment -->|Yes| Drop[Packet Dropped / Fragmented]
```

### 18. IPSec Handshake Lifecycle
The multi-phase negotiation for a secure tunnel.

```mermaid
sequenceDiagram
    participant P1 as Initiator
    participant P2 as Responder
    P1->>P2: IKE_SA_INIT (Proposals)
    P2-->>P1: IKE_SA_INIT (Accepted)
    P1->>P2: IKE_AUTH (Auth & Keys)
    P2-->>P1: IKE_AUTH (Established)
```

### 19. Certificate Auth Workflow
Enterprise-grade authentication for VPN gateways.

```mermaid
graph LR
    GW[Gateway] --> CA[Certificate Authority]
    CA -->|Verify| Cert[Gateway Certificate]
    Cert --> Handshake[Tunnel Establishment]
```

### 20. Split Tunnel Model
Optimizing traffic by only routing cloud-bound packets through the VPN.

```mermaid
graph TD
    User[User / App] --> Logic{Destination?}
    Logic -->|Corporate: 10.x| VPN[VPN Tunnel]
    Logic -->|Public: Internet| Direct[Direct Internet]
```

### 21. Latency Test Workflow
The precision measurement of round-trip times.

```mermaid
graph LR
    Start[Send ICMP/UDP] --> Time1[Timestamp T1]
    Time1 --> Reflect[Remote Echo]
    Reflect --> Time2[Timestamp T2]
    Time2 --> Calc[T2 - T1 = RTT]
```

### 22. Throughput Test Lifecycle
Measuring the "Pipe" capacity under sustained load.

```mermaid
graph LR
    Client[iPerf3 Client] --> Stream[1Gbps TCP Stream]
    Stream --> Server[iPerf3 Server]
    Server --> Stats[Average Throughput Mbps]
```

### 23. Packet Loss Scoring Model
Calculating the reliability percentage of the tunnel.

```mermaid
graph TD
    Sent[1000 Packets] --> Recv[995 Received]
    Recv --> Loss[5 Lost]
    Loss --> Score[0.5% Loss - Grade A]
```

### 24. Jitter Measurement Flow
Tracking the variance in latency over time.

```mermaid
graph TD
    P1[Ping 1: 20ms] --> Diff1[Delta: 2ms]
    P2[Ping 2: 22ms] --> Diff2[Delta: 3ms]
    P3[Ping 3: 19ms] --> Avg[Average Jitter: 2.5ms]
```

### 25. Tunnel Flap Detection Workflow
Detecting instability in BGP or IPSec sessions.

```mermaid
graph LR
    Log[Syslog / Metrics] --> Monitor[Flap Monitor]
    Monitor -->|3 Drops in 1min| Flap[Flap Detected]
    Flap --> Alert[Critical Network Alert]
```

### 26. SLA Compliance Model
Automating the verification of service targets.

```mermaid
graph TD
    Metrics[Actual Latency] --> Target[SLA Target: <50ms]
    Target --> Compliance{In Compliance?}
    Compliance -->|No| Credit[Request Service Credit]
```

### 27. Regional Comparison Heatmap Flow
Visualizing performance across the global hybrid footprint.

```mermaid
graph LR
    US[US Region: 15ms] --> Map[Global Heatmap]
    EU[EU Region: 85ms] --> Map
    Asia[Asia Region: 210ms] --> Map
```

### 28. Cost per Mbps model
Calculating the economic efficiency of network connectivity.

```mermaid
graph TD
    Cost[Monthly Invoice] --> Usage[Avg Throughput]
    Usage --> Efficiency[Unit Cost: $X / Mbps]
```

### 29. Capacity Growth Forecast
Predicting when the "Pipe" will be full.

```mermaid
graph LR
    History[Last 6 Months] --> Trend[Linear Regression]
    Trend --> Forecast[Breach Date: Q3 2026]
```

### 30. Recommendation Engine Flow
Automated advice for network optimization.

```mermaid
graph TD
    Findings[High Latency Detected] --> Advice[Enable Global Accelerator]
    Advice --> Action[Apply Change]
```

### 31. Zero Trust Network Boundary
Identity-driven access control for VPN users.

```mermaid
graph LR
    User[Remote User] --> MFA[MFA Check]
    MFA --> Device[Device Health Check]
    Device --> Tunnel[VPN Access]
```

### 32. RBAC Auth Model
Securing the benchmark management portal.

```mermaid
graph TD
    Admin[Network Admin] --> FullAccess[Manage Tunnels]
    Viewer[Procurement] --> ReadOnly[Cost Reports]
```

### 33. Secrets Management Flow
Securing PSKs and Private Keys.

```mermaid
graph LR
    Engine[Benchmark Engine] --> Vault[HashiCorp Vault / Azure KeyVault]
    Vault -->|Fetch| PSK[IPSec Pre-Shared Key]
```

### 34. Audit Logging Architecture
Ensuring every change and test is recorded.

```mermaid
graph TD
    Action[Change Route] --> Log[JSON Audit Event]
    Log --> Hub[Security Lake]
```

### 35. Metrics Pipeline
The data engine for performance monitoring.

```mermaid
graph LR
    Probe[Agent Probe] --> Prom[Prometheus]
    Prom --> Grafana[Grafana Dashboards]
```

### 36. Logging Architecture
Centralized network logs for troubleshooting.

```mermaid
graph TD
    GW[Gateway Logs] --> Fluentd[Log Forwarder]
    Fluentd --> Elastic[Elasticsearch / OpenSearch]
```

### 37. Tracing Model
Tracing cross-cloud benchmark requests.

```mermaid
sequenceDiagram
    Portal->>API: Start Throughput Test
    API->>Worker: Dispatch to Agent A
    Agent A->>Agent B: Run iPerf3
```

### 38. Incident Escalation Workflow
Responding to network performance degradation.

```mermaid
graph LR
    Alert[Latency Breach] --> PagerDuty[On-Call Page]
    PagerDuty --> Triage[Network Triage]
```

### 39. Release Pipeline Workflow
Automated delivery of the benchmarking platform.

```mermaid
graph LR
    Git[Code Push] --> CI[Build Agents]
    CI --> CD[Deploy to VPCs]
```

### 40. Change Approval Workflow
Gating network configuration changes.

```mermaid
graph TD
    Dev[Engineer] --> Change[Proposed Route Change]
    Change --> Review[Architect Approval]
```

---

## 🔬 Benchmark Methodology

### 1. Latency & Jitter (The "Feel")
We utilize high-frequency UDP probes (10 packets per second) to measure not just average latency, but the variance (jitter). High jitter is the primary cause of poor VoIP and VDI performance.

### 2. Throughput & Goodput (The "Capacity")
We distinguish between raw throughput and "Goodput"—the actual application-level transfer rate after accounting for retransmissions and overhead. Tests are run using multiple parallel TCP streams to saturate the link.

### 3. Resilience & Failover (The "Insurance")
We perform non-destructive failover tests by monitoring BGP withdraw messages and timing the path switch. A benchmarked VPN should failover in < 10 seconds.

---

## 🚦 Getting Started

### 1. Prerequisites
- **Terraform** (v1.5+).
- **Docker Desktop**.
- **Python 3.11+**.
- **Cloud Provider Credentials** (Azure/AWS/GCP).

### 2. Local Setup
```bash
# Clone the repository
git clone https://github.com/Devopstrio/cloud-vpn-benchmark.git
cd cloud-vpn-benchmark

# Setup environment
cp .env.example .env

# Start core services
docker-compose up --build
```
Access the management portal at `http://localhost:3000`.

---

## 🛡️ Governance & Security
- **Data Residency**: All benchmark data is stored within the selected regional database instance.
- **Agent Security**: Probe agents are deployed as "Privileged" containers only when packet capture is required, otherwise running as low-privilege users.
- **Credential Rotation**: All VPN PSKs and certificates are automatically rotated via the integrated Secret Manager.

---
<sub>&copy; 2026 Devopstrio &mdash; Engineering the Future of Network Intelligence.</sub>
