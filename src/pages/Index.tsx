import SectionReveal from "@/components/SectionReveal";
import CounterAnimation from "@/components/CounterAnimation";
import MagneticButton from "@/components/MagneticButton";
import RadarScan from "@/components/RadarScan";
import { motion } from "framer-motion";
import { useNavigate } from "react-router-dom";
import {
  Satellite, Cloud, Bug, BarChart3, Layers, Cpu, Sprout,
  Droplets, Star, ArrowRight, Radio, ThermometerSun, Radar,
  Shield, Zap, Eye
} from "lucide-react";
import heroFarm from "@/assets/hero-farm.jpg";
import satelliteView from "@/assets/satellite-view.jpg";
import droneField from "@/assets/drone-field.jpg";
import soilAnalysis from "@/assets/soil-analysis.jpg";

const Index = () => {
  const navigate = useNavigate();

  return (
    <div className="relative">
      {/* 1. HERO */}
      <section className="relative min-h-screen flex items-center overflow-hidden">
        <div className="absolute inset-0">
          <img src={heroFarm} alt="Precision farming landscape with drone HUD overlay" className="w-full h-full object-cover opacity-40" />
          <div className="absolute inset-0 bg-gradient-to-b from-background/60 via-background/80 to-background" />
        </div>
        <div className="absolute inset-0 bg-grid opacity-30" />
        {/* Scan line effect */}
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          <div className="scan-line w-full h-32" />
        </div>
        <div className="container relative z-10 pt-24">
          <SectionReveal>
            <div className="flex items-center gap-3 mb-6">
              <div className="w-2 h-2 rounded-full bg-primary animate-pulse-green" />
              <span className="font-mono text-xs uppercase tracking-[0.3em] text-primary">Live Monitoring Active</span>
            </div>
          </SectionReveal>
          <SectionReveal delay={0.1}>
            <h1 className="font-display text-5xl md:text-7xl lg:text-8xl font-bold leading-[0.9] max-w-5xl">
              Precision Agriculture
              <br />
              <span className="text-gradient-green glow-text">Powered by AI</span>
            </h1>
          </SectionReveal>
          <SectionReveal delay={0.2}>
            <p className="mt-6 max-w-xl text-lg text-muted-foreground leading-relaxed">
              Real-time satellite imagery, predictive weather algorithms, and AI-driven crop intelligence.
              Monitor 10,000+ acres from a single dashboard.
            </p>
          </SectionReveal>
          <SectionReveal delay={0.3}>
            <div className="mt-10 flex flex-wrap gap-4">
              <MagneticButton onClick={() => navigate("/contact")}>
                Start Free Trial
              </MagneticButton>
              <MagneticButton variant="outline" onClick={() => navigate("/software")}>
                View Platform
              </MagneticButton>
            </div>
          </SectionReveal>
          <SectionReveal delay={0.4}>
            <div className="mt-16 flex flex-wrap gap-8 font-mono text-xs text-muted-foreground">
              {["SAT-7 CONNECTED", "WEATHER: CLEAR", "NDVI: 0.82", "SOIL pH: 6.5"].map((item) => (
                <div key={item} className="flex items-center gap-2">
                  <div className="w-1 h-1 rounded-full bg-primary" />
                  {item}
                </div>
              ))}
            </div>
          </SectionReveal>
        </div>
      </section>

      {/* 2. HARDWARE PARTNERS */}
      <section className="py-20 border-t border-border">
        <div className="container">
          <SectionReveal>
            <p className="text-center font-mono text-xs uppercase tracking-[0.3em] text-muted-foreground mb-10">
              Integrated Hardware Ecosystem
            </p>
          </SectionReveal>
          <SectionReveal delay={0.1}>
            <div className="flex flex-wrap justify-center gap-12 items-center opacity-50">
              {["John Deere", "DJI Agras", "Planet Labs", "Trimble", "CLAAS", "Sentera"].map((partner) => (
                <span key={partner} className="font-display text-lg md:text-xl font-semibold text-foreground/60 hover:text-primary transition-colors cursor-default">
                  {partner}
                </span>
              ))}
            </div>
          </SectionReveal>
        </div>
      </section>

      {/* 3. PREDICTIVE WEATHER */}
      <section className="py-24 bg-grid relative overflow-hidden">
        <div className="container relative z-10">
          <div className="grid md:grid-cols-2 gap-16 items-center">
            <SectionReveal>
              <div>
                <div className="flex items-center gap-2 mb-4">
                  <ThermometerSun className="w-4 h-4 text-primary" />
                  <span className="font-mono text-xs uppercase tracking-widest text-primary">Weather Intelligence</span>
                </div>
                <h2 className="font-display text-4xl md:text-5xl font-bold mb-6">
                  Predictive Weather
                  <br />
                  <span className="text-gradient-green">Algorithms</span>
                </h2>
                <p className="text-muted-foreground leading-relaxed mb-8">
                  72-hour hyperlocal forecasts with 97.3% accuracy. Our ML models process 2.4B data points 
                  daily from satellite, ground sensors, and atmospheric readings.
                </p>
                <div className="grid grid-cols-2 gap-4">
                  {[
                    { label: "Forecast Accuracy", value: "97.3%" },
                    { label: "Update Interval", value: "15 min" },
                    { label: "Data Sources", value: "48+" },
                    { label: "Coverage", value: "Global" },
                  ].map((stat) => (
                    <div key={stat.label} className="p-4 bg-card rounded-sm border border-border">
                      <div className="font-mono text-2xl font-bold text-primary">{stat.value}</div>
                      <div className="font-mono text-[10px] uppercase tracking-widest text-muted-foreground mt-1">{stat.label}</div>
                    </div>
                  ))}
                </div>
              </div>
            </SectionReveal>
            <SectionReveal delay={0.2}>
              <div className="flex justify-center">
                <RadarScan size={300} />
              </div>
            </SectionReveal>
          </div>
        </div>
      </section>

      {/* 4. PEST & DISEASE DETECTION */}
      <section className="py-24">
        <div className="container">
          <div className="grid md:grid-cols-2 gap-16 items-center">
            <SectionReveal>
              <div className="relative rounded-sm overflow-hidden border border-border">
                <img src={droneField} alt="Agricultural drone scanning crops" className="w-full aspect-video object-cover" />
                <div className="absolute inset-0 bg-gradient-to-t from-background/80 to-transparent" />
                <div className="absolute bottom-4 left-4 right-4">
                  <div className="flex items-center gap-2 font-mono text-xs text-primary">
                    <Bug className="w-3 h-3" />
                    THREAT SCAN: ACTIVE
                  </div>
                  <div className="mt-2 flex gap-2">
                    {["Aphids: 0%", "Blight: 0.2%", "Rust: 0%"].map((item) => (
                      <span key={item} className="px-2 py-1 bg-background/80 border border-border rounded-sm font-mono text-[10px] text-foreground">
                        {item}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            </SectionReveal>
            <SectionReveal delay={0.1}>
              <div>
                <div className="flex items-center gap-2 mb-4">
                  <Bug className="w-4 h-4 text-primary" />
                  <span className="font-mono text-xs uppercase tracking-widest text-primary">Pest Detection</span>
                </div>
                <h2 className="font-display text-4xl md:text-5xl font-bold mb-6">
                  AI-Powered Pest &
                  <br />
                  <span className="text-gradient-green">Disease Detection</span>
                </h2>
                <p className="text-muted-foreground leading-relaxed mb-6">
                  Computer vision models trained on 12M+ crop images detect 200+ pest species and 
                  150+ diseases before visible symptoms appear. Early detection saves up to 40% of crop yield.
                </p>
                <ul className="space-y-3">
                  {[
                    "Real-time drone & satellite image analysis",
                    "Pre-symptomatic detection (3-5 days early)",
                    "Automated treatment recommendations",
                    "Historical outbreak pattern mapping",
                  ].map((item) => (
                    <li key={item} className="flex items-start gap-3 text-sm text-foreground/80">
                      <div className="w-1 h-1 rounded-full bg-primary mt-2 flex-shrink-0" />
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
            </SectionReveal>
          </div>
        </div>
      </section>

      {/* 5. DATA PRECISION METRICS */}
      <section className="py-24 border-y border-border bg-card">
        <div className="container">
          <SectionReveal>
            <div className="text-center mb-16">
              <span className="font-mono text-xs uppercase tracking-[0.3em] text-primary">Performance Metrics</span>
              <h2 className="font-display text-4xl md:text-5xl font-bold mt-4">
                Data-Driven <span className="text-gradient-green">Precision</span>
              </h2>
            </div>
          </SectionReveal>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {[
              { value: 99.2, suffix: "%", label: "Detection Accuracy" },
              { value: 15, suffix: "min", label: "Alert Latency" },
              { value: 200, suffix: "+", label: "Crop Species" },
              { value: 50, suffix: "M", label: "Acres Monitored" },
            ].map((stat, i) => (
              <SectionReveal key={stat.label} delay={i * 0.1}>
                <CounterAnimation end={stat.value} suffix={stat.suffix} label={stat.label} />
              </SectionReveal>
            ))}
          </div>
        </div>
      </section>

      {/* 6. FIELD ANALYSIS DASHBOARD */}
      <section className="py-24 bg-grid relative">
        <div className="container relative z-10">
          <SectionReveal>
            <div className="text-center mb-16">
              <span className="font-mono text-xs uppercase tracking-[0.3em] text-primary">Dashboard</span>
              <h2 className="font-display text-4xl md:text-5xl font-bold mt-4">
                Field Analysis <span className="text-gradient-green">Command Center</span>
              </h2>
            </div>
          </SectionReveal>
          <SectionReveal delay={0.2}>
            <div className="grid md:grid-cols-3 gap-4">
              {[
                { icon: Layers, title: "NDVI Mapping", desc: "Normalized vegetation index with sub-meter resolution", value: "0.82" },
                { icon: Droplets, title: "Irrigation Zones", desc: "AI-optimized water distribution planning", value: "12 zones" },
                { icon: BarChart3, title: "Yield Forecast", desc: "ML-predicted harvest estimates per zone", value: "+23%" },
                { icon: Radar, title: "Soil Sensors", desc: "Real-time moisture, pH, and nutrient levels", value: "348 pts" },
                { icon: Shield, title: "Crop Health", desc: "Multi-spectral health scoring per field", value: "94/100" },
                { icon: Zap, title: "Growth Rate", desc: "Daily biomass accumulation tracking", value: "2.1cm/d" },
              ].map((card) => (
                <motion.div
                  key={card.title}
                  className="p-6 bg-card border border-border rounded-sm hover:border-primary/30 transition-all group cursor-default"
                  whileHover={{ y: -4, boxShadow: "0 0 30px hsl(142 72% 50% / 0.08)" }}
                >
                  <div className="flex items-center justify-between mb-4">
                    <card.icon className="w-5 h-5 text-primary" />
                    <span className="font-mono text-lg font-bold text-primary">{card.value}</span>
                  </div>
                  <h3 className="font-display font-semibold mb-1">{card.title}</h3>
                  <p className="text-sm text-muted-foreground">{card.desc}</p>
                </motion.div>
              ))}
            </div>
          </SectionReveal>
        </div>
      </section>

      {/* 7. SATELLITE IMAGERY */}
      <section className="py-24">
        <div className="container">
          <div className="grid md:grid-cols-2 gap-16 items-center">
            <SectionReveal>
              <div>
                <div className="flex items-center gap-2 mb-4">
                  <Satellite className="w-4 h-4 text-primary" />
                  <span className="font-mono text-xs uppercase tracking-widest text-primary">Satellite Integration</span>
                </div>
                <h2 className="font-display text-4xl md:text-5xl font-bold mb-6">
                  Multi-Spectral
                  <br />
                  <span className="text-gradient-green">Satellite Imagery</span>
                </h2>
                <p className="text-muted-foreground leading-relaxed mb-6">
                  Access real-time imagery from 12 satellite constellations. NDVI, EVI, and thermal 
                  bands updated every 3 hours with 3m spatial resolution.
                </p>
                <div className="flex gap-3 flex-wrap">
                  {["Sentinel-2", "Landsat-9", "Planet", "MODIS"].map((sat) => (
                    <span key={sat} className="px-3 py-1.5 bg-secondary border border-border rounded-sm font-mono text-xs text-foreground">
                      {sat}
                    </span>
                  ))}
                </div>
              </div>
            </SectionReveal>
            <SectionReveal delay={0.2}>
              <div className="relative rounded-sm overflow-hidden border border-border">
                <img src={satelliteView} alt="Satellite view of agricultural fields" className="w-full aspect-video object-cover" />
                <div className="absolute top-3 left-3 flex items-center gap-2 px-2 py-1 bg-background/80 border border-border rounded-sm font-mono text-[10px] text-primary">
                  <Eye className="w-3 h-3" />
                  LIVE FEED — SAT-7
                </div>
              </div>
            </SectionReveal>
          </div>
        </div>
      </section>

      {/* 8. FULL-WIDTH TECH-FARM IMAGE */}
      <section className="relative h-[60vh] overflow-hidden">
        <img src={heroFarm} alt="High-tech precision farming landscape" className="w-full h-full object-cover" />
        <div className="absolute inset-0 bg-background/60" />
        <div className="absolute inset-0 bg-grid opacity-40" />
        <div className="absolute inset-0 flex items-center justify-center">
          <SectionReveal>
            <div className="text-center">
              <h2 className="font-display text-4xl md:text-6xl font-bold mb-4">
                The Future of Farming
                <br />
                <span className="text-gradient-green glow-text">Is Already Here</span>
              </h2>
              <p className="font-mono text-sm text-muted-foreground max-w-lg mx-auto">
                Processing 2.4 billion data points daily across 50 million acres worldwide
              </p>
            </div>
          </SectionReveal>
        </div>
      </section>

      {/* 9. DATA POINTS COUNTERS */}
      <section className="py-24 border-y border-border">
        <div className="container">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-12">
            <CounterAnimation end={2400} suffix="M" label="Data Points / Day" />
            <CounterAnimation end={12} label="Satellite Feeds" />
            <CounterAnimation end={847} suffix="K" label="Active Sensors" />
            <CounterAnimation end={99} suffix="%" label="Platform Uptime" />
          </div>
        </div>
      </section>

      {/* 10. AGRONOMY INSIGHTS */}
      <section className="py-24 bg-grid relative">
        <div className="container relative z-10">
          <SectionReveal>
            <div className="text-center mb-16">
              <span className="font-mono text-xs uppercase tracking-[0.3em] text-primary">Intelligence</span>
              <h2 className="font-display text-4xl md:text-5xl font-bold mt-4">
                Agronomy <span className="text-gradient-green">Insights</span>
              </h2>
            </div>
          </SectionReveal>
          <div className="grid md:grid-cols-3 gap-6">
            {[
              {
                icon: Sprout,
                title: "Growth Optimization",
                desc: "ML models analyze 40+ variables to optimize planting density, irrigation schedules, and fertilizer application rates per micro-zone.",
              },
              {
                icon: Cloud,
                title: "Climate Adaptation",
                desc: "Predictive models recommend crop variety switches and planting date adjustments based on 30-year climate trend analysis.",
              },
              {
                icon: Cpu,
                title: "Autonomous Operations",
                desc: "Integrate with autonomous tractors and drones for fully automated field operations from sowing to harvest.",
              },
            ].map((insight, i) => (
              <SectionReveal key={insight.title} delay={i * 0.15}>
                <motion.div
                  className="p-8 bg-card border border-border rounded-sm h-full"
                  whileHover={{ borderColor: "hsl(142 72% 50% / 0.3)" }}
                >
                  <insight.icon className="w-8 h-8 text-primary mb-4" />
                  <h3 className="font-display text-xl font-semibold mb-3">{insight.title}</h3>
                  <p className="text-sm text-muted-foreground leading-relaxed">{insight.desc}</p>
                </motion.div>
              </SectionReveal>
            ))}
          </div>
        </div>
      </section>

      {/* 11. SOIL HEALTH */}
      <section className="py-24">
        <div className="container">
          <div className="grid md:grid-cols-2 gap-16 items-center">
            <SectionReveal delay={0.1}>
              <div className="relative rounded-sm overflow-hidden border border-border">
                <img src={soilAnalysis} alt="AI soil health analysis with data overlay" className="w-full aspect-square object-cover" />
                <div className="absolute inset-0 bg-gradient-to-t from-background/60 to-transparent" />
              </div>
            </SectionReveal>
            <SectionReveal>
              <div>
                <div className="flex items-center gap-2 mb-4">
                  <Droplets className="w-4 h-4 text-primary" />
                  <span className="font-mono text-xs uppercase tracking-widest text-primary">Soil Intelligence</span>
                </div>
                <h2 className="font-display text-4xl md:text-5xl font-bold mb-6">
                  Deep Soil
                  <br />
                  <span className="text-gradient-green">Health Analysis</span>
                </h2>
                <p className="text-muted-foreground leading-relaxed mb-8">
                  Continuous monitoring of soil moisture, organic carbon, NPK levels, microbial activity, 
                  and compaction across every zone of your field.
                </p>
                <div className="space-y-4">
                  {[
                    { label: "Nitrogen (N)", value: 78 },
                    { label: "Phosphorus (P)", value: 65 },
                    { label: "Potassium (K)", value: 82 },
                    { label: "Organic Carbon", value: 71 },
                  ].map((nutrient) => (
                    <div key={nutrient.label}>
                      <div className="flex justify-between font-mono text-xs mb-1">
                        <span className="text-muted-foreground">{nutrient.label}</span>
                        <span className="text-primary">{nutrient.value}%</span>
                      </div>
                      <div className="h-1.5 bg-secondary rounded-full overflow-hidden">
                        <motion.div
                          className="h-full bg-primary rounded-full"
                          initial={{ width: 0 }}
                          whileInView={{ width: `${nutrient.value}%` }}
                          viewport={{ once: true }}
                          transition={{ duration: 1, delay: 0.3 }}
                        />
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </SectionReveal>
          </div>
        </div>
      </section>

      {/* 12. FARMER REVIEWS */}
      <section className="py-24 border-y border-border bg-card">
        <div className="container">
          <SectionReveal>
            <div className="text-center mb-16">
              <span className="font-mono text-xs uppercase tracking-[0.3em] text-primary">Testimonials</span>
              <h2 className="font-display text-4xl md:text-5xl font-bold mt-4">
                Trusted by <span className="text-gradient-green">Leading Farmers</span>
              </h2>
            </div>
          </SectionReveal>
          <div className="grid md:grid-cols-3 gap-6">
            {[
              {
                name: "James Mitchell",
                role: "CEO, Mitchell Farms (12,000 acres)",
                text: "AgriScan's predictive weather model saved us $2.3M in crop losses last season. The pest detection caught a blight outbreak 4 days before it was visible.",
              },
              {
                name: "Dr. Sarah Chen",
                role: "Director, Pacific AgriTech Research",
                text: "The satellite imagery integration is unmatched. We can monitor vegetation health across our entire research network from a single dashboard.",
              },
              {
                name: "Carlos Rodriguez",
                role: "Operations Manager, Valle Verde Cooperative",
                text: "We've increased yield by 34% since implementing AgriScan. The soil health analytics alone justified the investment within the first quarter.",
              },
            ].map((review, i) => (
              <SectionReveal key={review.name} delay={i * 0.15}>
                <div className="p-8 bg-background border border-border rounded-sm h-full flex flex-col">
                  <div className="flex gap-1 mb-4">
                    {[...Array(5)].map((_, j) => (
                      <Star key={j} className="w-4 h-4 fill-primary text-primary" />
                    ))}
                  </div>
                  <p className="text-sm text-foreground/80 leading-relaxed flex-1 mb-6">
                    "{review.text}"
                  </p>
                  <div>
                    <div className="font-display font-semibold text-sm">{review.name}</div>
                    <div className="font-mono text-[10px] text-muted-foreground mt-0.5">{review.role}</div>
                  </div>
                </div>
              </SectionReveal>
            ))}
          </div>
        </div>
      </section>

      {/* 13. CTA */}
      <section className="py-32 bg-grid relative overflow-hidden">
        <div className="absolute inset-0 pointer-events-none">
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] rounded-full border border-primary/5" />
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[400px] h-[400px] rounded-full border border-primary/10" />
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[200px] h-[200px] rounded-full border border-primary/20" />
        </div>
        <div className="container relative z-10 text-center">
          <SectionReveal>
            <div className="inline-flex items-center gap-2 px-3 py-1 border border-primary/30 rounded-full font-mono text-xs text-primary mb-8">
              <Radio className="w-3 h-3" />
              14-Day Free Trial — No Credit Card
            </div>
          </SectionReveal>
          <SectionReveal delay={0.1}>
            <h2 className="font-display text-5xl md:text-7xl font-bold max-w-3xl mx-auto leading-[0.95]">
              Start Monitoring
              <br />
              <span className="text-gradient-green glow-text">Your Fields Today</span>
            </h2>
          </SectionReveal>
          <SectionReveal delay={0.2}>
            <p className="mt-6 text-lg text-muted-foreground max-w-lg mx-auto">
              Join 12,000+ agricultural operations using AgriScan to optimize yield, reduce waste, and protect crops.
            </p>
          </SectionReveal>
          <SectionReveal delay={0.3}>
            <div className="mt-10 flex flex-wrap justify-center gap-4">
              <MagneticButton onClick={() => navigate("/contact")}>
                <span className="flex items-center gap-2">
                  Start Free Trial <ArrowRight className="w-4 h-4" />
                </span>
              </MagneticButton>
              <MagneticButton variant="outline" onClick={() => navigate("/data")}>
                View Live Data
              </MagneticButton>
            </div>
          </SectionReveal>
        </div>
      </section>
    </div>
  );
};

export default Index;
