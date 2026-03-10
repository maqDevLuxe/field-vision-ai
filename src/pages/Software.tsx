import SectionReveal from "@/components/SectionReveal";
import MagneticButton from "@/components/MagneticButton";
import { motion } from "framer-motion";
import { useNavigate } from "react-router-dom";
import { Cpu, Layers, Shield, Zap, Cloud, BarChart3, Satellite, Eye } from "lucide-react";
import satelliteView from "@/assets/satellite-view.jpg";

const Software = () => {
  const navigate = useNavigate();

  const features = [
    { icon: Satellite, title: "Satellite Integration", desc: "Real-time imagery from 12 constellation partners with 3m resolution and 3-hour revisit cycles." },
    { icon: Cpu, title: "AI Processing Engine", desc: "Custom ML pipeline processing multi-spectral data through 47 detection models simultaneously." },
    { icon: Layers, title: "Multi-Layer Analysis", desc: "Stack NDVI, thermal, moisture, and topographic layers for comprehensive field intelligence." },
    { icon: Shield, title: "Enterprise Security", desc: "SOC 2 Type II certified. End-to-end encryption with role-based access and audit logging." },
    { icon: Zap, title: "Real-Time Alerts", desc: "Sub-15-minute alert latency for weather events, pest detection, and irrigation anomalies." },
    { icon: Cloud, title: "Cloud-Native Architecture", desc: "Auto-scaling infrastructure handling 2.4B data points daily with 99.97% uptime SLA." },
    { icon: BarChart3, title: "Predictive Analytics", desc: "Yield forecasting, optimal harvest windows, and market timing recommendations." },
    { icon: Eye, title: "Computer Vision", desc: "12M+ training images powering crop health, weed detection, and growth stage classification." },
  ];

  return (
    <div className="pt-16">
      <section className="py-24 bg-grid relative">
        <div className="container relative z-10">
          <SectionReveal>
            <span className="font-mono text-xs uppercase tracking-[0.3em] text-primary">Platform</span>
            <h1 className="font-display text-5xl md:text-7xl font-bold mt-4 mb-6 max-w-4xl">
              The Most Advanced
              <br />
              <span className="text-gradient-green">AgTech Platform</span>
            </h1>
            <p className="text-lg text-muted-foreground max-w-xl mb-10">
              Purpose-built for precision agriculture at scale. From individual farms to enterprise operations.
            </p>
          </SectionReveal>
          <SectionReveal delay={0.2}>
            <div className="relative rounded-sm overflow-hidden border border-border">
              <img src={satelliteView} alt="AgriScan software dashboard" className="w-full aspect-video object-cover" />
              <div className="absolute inset-0 bg-gradient-to-t from-background/80 to-transparent" />
              <div className="absolute bottom-6 left-6 flex items-center gap-2 font-mono text-xs text-primary">
                <div className="w-1.5 h-1.5 rounded-full bg-primary animate-pulse-green" />
                DASHBOARD — LIVE PREVIEW
              </div>
            </div>
          </SectionReveal>
        </div>
      </section>

      <section className="py-24">
        <div className="container">
          <SectionReveal>
            <h2 className="font-display text-4xl font-bold mb-16 text-center">
              Core <span className="text-gradient-green">Capabilities</span>
            </h2>
          </SectionReveal>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-4">
            {features.map((f, i) => (
              <SectionReveal key={f.title} delay={i * 0.08}>
                <motion.div
                  className="p-6 bg-card border border-border rounded-sm h-full"
                  whileHover={{ y: -4, borderColor: "hsl(142 72% 50% / 0.3)" }}
                >
                  <f.icon className="w-6 h-6 text-primary mb-4" />
                  <h3 className="font-display font-semibold mb-2">{f.title}</h3>
                  <p className="text-sm text-muted-foreground leading-relaxed">{f.desc}</p>
                </motion.div>
              </SectionReveal>
            ))}
          </div>
        </div>
      </section>

      <section className="py-24 border-t border-border bg-card">
        <div className="container text-center">
          <SectionReveal>
            <h2 className="font-display text-4xl font-bold mb-4">
              Ready to <span className="text-gradient-green">Transform</span> Your Operation?
            </h2>
            <p className="text-muted-foreground mb-10">Start your 14-day free trial today.</p>
            <MagneticButton onClick={() => navigate("/contact")}>Get Started</MagneticButton>
          </SectionReveal>
        </div>
      </section>
    </div>
  );
};

export default Software;
