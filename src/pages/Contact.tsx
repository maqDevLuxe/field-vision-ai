import { useState } from "react";
import SectionReveal from "@/components/SectionReveal";
import MagneticButton from "@/components/MagneticButton";
import { MapPin, Mail, Phone } from "lucide-react";
import { toast } from "sonner";

const Contact = () => {
  const [form, setForm] = useState({ name: "", email: "", company: "", acres: "", message: "" });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    toast.success("Message received. Our team will contact you within 24 hours.");
    setForm({ name: "", email: "", company: "", acres: "", message: "" });
  };

  return (
    <div className="pt-16">
      <section className="py-24 bg-grid relative">
        <div className="container relative z-10">
          <SectionReveal>
            <span className="font-mono text-xs uppercase tracking-[0.3em] text-primary">Contact</span>
            <h1 className="font-display text-5xl md:text-7xl font-bold mt-4 mb-6">
              Let's Start
              <br />
              <span className="text-gradient-green">Monitoring</span>
            </h1>
          </SectionReveal>
        </div>
      </section>

      <section className="py-24">
        <div className="container">
          <div className="grid md:grid-cols-2 gap-16">
            <SectionReveal>
              <form onSubmit={handleSubmit} className="space-y-5">
                {[
                  { name: "name" as const, label: "Full Name", type: "text" },
                  { name: "email" as const, label: "Email", type: "email" },
                  { name: "company" as const, label: "Company / Farm Name", type: "text" },
                  { name: "acres" as const, label: "Total Acreage", type: "text" },
                ].map((field) => (
                  <div key={field.name}>
                    <label className="font-mono text-xs uppercase tracking-widest text-muted-foreground mb-2 block">
                      {field.label}
                    </label>
                    <input
                      type={field.type}
                      value={form[field.name]}
                      onChange={(e) => setForm({ ...form, [field.name]: e.target.value })}
                      required={field.name === "name" || field.name === "email"}
                      className="w-full px-4 py-3 bg-card border border-border rounded-sm font-mono text-sm text-foreground focus:outline-none focus:border-primary transition-colors"
                    />
                  </div>
                ))}
                <div>
                  <label className="font-mono text-xs uppercase tracking-widest text-muted-foreground mb-2 block">
                    Message
                  </label>
                  <textarea
                    value={form.message}
                    onChange={(e) => setForm({ ...form, message: e.target.value })}
                    rows={4}
                    className="w-full px-4 py-3 bg-card border border-border rounded-sm font-mono text-sm text-foreground focus:outline-none focus:border-primary transition-colors resize-none"
                  />
                </div>
                <MagneticButton>Submit Request</MagneticButton>
              </form>
            </SectionReveal>
            <SectionReveal delay={0.2}>
              <div className="space-y-8">
                <div>
                  <h3 className="font-display text-xl font-semibold mb-4">Get in Touch</h3>
                  <p className="text-sm text-muted-foreground leading-relaxed">
                    Our agronomy specialists are ready to configure AgriScan for your specific crop types,
                    climate zone, and operational scale.
                  </p>
                </div>
                <div className="space-y-4">
                  {[
                    { icon: Mail, label: "contact@agriscan.ai" },
                    { icon: Phone, label: "+1 (555) 247-3200" },
                    { icon: MapPin, label: "San Francisco, CA — Austin, TX — Amsterdam, NL" },
                  ].map((item) => (
                    <div key={item.label} className="flex items-start gap-3">
                      <item.icon className="w-4 h-4 text-primary mt-0.5" />
                      <span className="text-sm text-foreground/80">{item.label}</span>
                    </div>
                  ))}
                </div>
                <div className="p-6 bg-card border border-border rounded-sm">
                  <div className="font-mono text-xs uppercase tracking-widest text-primary mb-2">Enterprise</div>
                  <p className="text-sm text-muted-foreground leading-relaxed">
                    Managing 50,000+ acres? Contact our enterprise team for custom pricing, 
                    dedicated support, and on-premise deployment options.
                  </p>
                </div>
              </div>
            </SectionReveal>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Contact;
