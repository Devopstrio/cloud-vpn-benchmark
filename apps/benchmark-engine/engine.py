import numpy as np
import time

class VPNBenchmarkEngine:
    def __init__(self):
        pass

    def calculate_latency_score(self, latencies: list):
        """
        Calculates a score (0-100) based on average and standard deviation (jitter).
        """
        if not latencies: return 0
        avg = np.mean(latencies)
        std = np.std(latencies)
        
        # Penalize for high latency (>50ms) and high jitter (>5ms)
        score = 100 - (avg * 0.5) - (std * 2)
        return max(0, min(100, score))

    def analyze_throughput_efficiency(self, measured_mbps: float, advertised_mbps: float):
        """
        Calculates efficiency of the tunnel compared to advertised bandwidth.
        """
        if advertised_mbps == 0: return 0
        efficiency = (measured_mbps / advertised_mbps) * 100
        return min(100, efficiency)

    def detect_mtu_bottleneck(self, packet_loss_at_size: dict):
        """
        Identifies MTU issues by looking at packet loss at different sizes.
        """
        # Example: {1400: 0, 1450: 0, 1500: 100}
        for size, loss in sorted(packet_loss_at_size.items()):
            if loss > 50:
                return f"MTU Bottleneck likely around {size} bytes"
        return "No MTU bottleneck detected"

if __name__ == "__main__":
    engine = VPNBenchmarkEngine()
    
    # Latency Score Test
    test_latencies = [20, 22, 19, 21, 25, 20] # Avg 21.1, Std 1.8
    print(f"Latency Score: {engine.calculate_latency_score(test_latencies):.2f}/100")
    
    # Throughput Efficiency
    print(f"Efficiency: {engine.analyze_throughput_efficiency(850, 1000):.2f}%")
    
    # MTU Test
    print(engine.detect_mtu_bottleneck({1400: 0, 1450: 10, 1500: 100}))
