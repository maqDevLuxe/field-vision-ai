import SectionReveal from "@/components/SectionReveal";
import CounterAnimation from "@/components/CounterAnimation";
import RadarScan from "@/components/RadarScan";
import { motion } from "framer-motion";

const Data = () => {
  const dataStreams = [
    { label: "Satellite Imagery", status: "ACTIVE", latency: "2.3s", throughput: "1.2 TB/hr" },
    { label: "Weather Stations", status: "ACTIVE", latency: "0.8s", throughput: "340 GB/hr" },
    { label: "Soil Sensors", status: "ACTIVE", latency: "1.1s", throughput: "89 GB/hr" },
    { label: "Drone Fleet", status: "ACTIVE", latency: "3.4s", throughput: "2.8 TB/hr" },
    { label: "IoT Devices", status: "ACTIVE", latency: "0.5s", throughput: "120 GB/hr" },
    { label: "Market Feeds", status: "ACTIVE", latency: "0.2s", throughput: "12 GB/hr" },
  ];

  return (
    <div className="pt-16">
      <section className="py-24 bg-grid relative">
        <div className="container relative z-10">
          <SectionReveal>
            <span className="font-mono text-xs uppercase tracking-[0.3em] text-primary">Data Center</span>
            <h1 className="font-display text-5xl md:text-7xl font-bold mt-4 mb-6">
              Live Data
              <br />
              <span className="text-gradient-green">Intelligence</span>
            </h1>
            <p className="text-lg text-muted-foreground max-w-xl">
              Real-time overview of all data streams, processing metrics, and system health.
            </p>
          </SectionReveal>
        </div>
      </section>

      <section className="py-16 border-y border-border">
        <div className="container">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-12">
            <CounterAnimation end={2400} suffix="M" label="Daily Data Points" />
            <CounterAnimation end={847} suffix="K" label="Active Sensors" />
            <CounterAnimation end={12} label="Sat Constellations" />
            <CounterAnimation end={99} suffix=".97%" label="Uptime SLA" />
          </div>
        </div>
      </section>

      <section className="py-24">
        <div className="container">
          <div className="grid md:grid-cols-2 gap-16 items-start">
            <div>
              <SectionReveal>
                <h2 className="font-display text-3xl font-bold mb-8">
                  Active <span className="text-gradient-green">Data Streams</span>
                </h2>
              </SectionReveal>
              <div className="space-y-3">
                {dataStreams.map((stream, i) => (
                  <SectionReveal key={stream.label} delay={i * 0.08}>
                    <div className="flex items-center justify-between p-4 bg-card border border-border rounded-sm">
                      <div className="flex items-center gap-3">
                        <div className="w-1.5 h-1.5 rounded-full bg-primary animate-pulse-green" />
                        <span className="font-mono text-sm">{stream.label}</span>
                      </div>
                      <div className="flex items-center gap-6 font-mono text-xs text-muted-foreground">
                        <span>{stream.latency}</span>
                        <span className="text-primary">{stream.throughput}</span>
                      </div>
                    </div>
                  </SectionReveal>
                ))}
              </div>
            </div>
            <SectionReveal delay={0.2}>
              <div className="flex flex-col items-center gap-6 p-8 bg-card border border-border rounded-sm">
                <h3 className="font-mono text-xs uppercase tracking-widest text-muted-foreground">Global Coverage Radar</h3>
                <RadarScan size={250} />
                <div className="flex gap-6 font-mono text-xs text-muted-foreground">
                  <div className="flex items-center gap-2">
                    <div className="w-1.5 h-1.5 rounded-full bg-primary" />
                    Active Zones
                  </div>
                  <div className="flex items-center gap-2">
                    <div className="w-1.5 h-1.5 rounded-full bg-muted-foreground" />
                    Pending
                  </div>
                </div>
              </div>
            </SectionReveal>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Data;
