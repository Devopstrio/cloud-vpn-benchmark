import logging
import time
from fastapi import FastAPI, Depends, HTTPException, status, Request
from fastapi.middleware.cors import CORSMiddleware
from prometheus_client import make_asgi_app
from pythonjsonlogger import jsonlogger

# Logger setup
logger = logging.getLogger("vpn-benchmark-api")
logHandler = logging.StreamHandler()
formatter = jsonlogger.JsonFormatter()
logHandler.setFormatter(formatter)
logger.addHandler(logHandler)
logger.setLevel(logging.INFO)

app = FastAPI(title="Cloud VPN Benchmark API", version="1.0.0")

app.add_middleware(
    CORSMiddleware,
    allow_origins=["*"],
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)

# Metrics
metrics_app = make_asgi_app()
app.mount("/metrics", metrics_app)

@app.middleware("http")
async def log_requests(request: Request, call_next):
    start_time = time.time()
    response = await call_next(request)
    duration = time.time() - start_time
    logger.info(f"Path: {request.url.path} Duration: {duration:.4f}s Status: {response.status_code}")
    return response

@app.get("/health")
def health():
    return {"status": "healthy"}

@app.get("/benchmarks/results")
def get_benchmark_results():
    return [
        {"id": 1, "path": "Azure-to-OnPrem", "latency": "22ms", "throughput": "850Mbps", "status": "Optimal"},
        {"id": 2, "path": "AWS-to-OnPrem", "latency": "45ms", "throughput": "420Mbps", "status": "Degraded"},
        {"id": 3, "path": "GCP-to-Azure", "latency": "12ms", "throughput": "920Mbps", "status": "Optimal"}
    ]

@app.get("/tunnels/status")
def get_tunnels_status():
    return {
        "active_tunnels": 42,
        "down_tunnels": 1,
        "flapping_tunnels": 2,
        "total_bandwidth": "12.5 Gbps"
    }

@app.get("/costs/comparison")
def get_costs_comparison():
    return {
        "azure_avg": "$0.05/GB",
        "aws_avg": "$0.09/GB",
        "gcp_avg": "$0.04/GB",
        "potential_savings": "$1,200/mo"
    }

@app.get("/dashboard/summary")
def get_dashboard_summary():
    return {
        "avg_latency": "28ms",
        "avg_packet_loss": "0.02%",
        "uptime_24h": "99.98%",
        "active_alerts": 3
    }
