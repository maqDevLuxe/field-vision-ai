import { Link } from "react-router-dom";
import { Satellite } from "lucide-react";

const Footer = () => {
  return (
    <footer className="border-t border-border bg-background">
      <div className="container py-16">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-10">
          <div className="md:col-span-1">
            <div className="flex items-center gap-2 mb-4">
              <Satellite className="w-5 h-5 text-primary" />
              <span className="font-display text-lg font-bold">Agri<span className="text-primary">Scan</span></span>
            </div>
            <p className="text-sm text-muted-foreground leading-relaxed">
              AI-powered precision agriculture. Satellite monitoring, weather prediction, and crop intelligence.
            </p>
          </div>
          {[
            { title: "Platform", links: ["Dashboard", "Weather API", "Satellite Feed", "Pest Detection"] },
            { title: "Company", links: ["About", "Careers", "Research", "Press"] },
            { title: "Resources", links: ["Documentation", "API Reference", "Case Studies", "Blog"] },
          ].map((col) => (
            <div key={col.title}>
              <h4 className="font-mono text-xs uppercase tracking-widest text-muted-foreground mb-4">{col.title}</h4>
              <ul className="space-y-2">
                {col.links.map((link) => (
                  <li key={link}>
                    <Link to="#" className="text-sm text-foreground/70 hover:text-primary transition-colors">
                      {link}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
        <div className="mt-12 pt-8 border-t border-border flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="font-mono text-xs text-muted-foreground">
            © 2026 AgriScan AI. All rights reserved.
          </p>
          <div className="flex items-center gap-2 font-mono text-[10px] text-muted-foreground">
            <div className="w-1.5 h-1.5 rounded-full bg-primary animate-pulse-green" />
            ALL SYSTEMS OPERATIONAL — UPTIME 99.97%
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
