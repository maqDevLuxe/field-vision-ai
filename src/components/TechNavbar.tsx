import { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X, Satellite } from "lucide-react";

const navItems = [
  { label: "Home", path: "/" },
  { label: "Software", path: "/software" },
  { label: "Data", path: "/data" },
  { label: "Contact", path: "/contact" },
];

const TechNavbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const location = useLocation();

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 border-b border-border/50 bg-background/80 backdrop-blur-xl">
      <div className="container flex items-center justify-between h-16">
        <Link to="/" className="flex items-center gap-2">
          <div className="relative w-8 h-8 flex items-center justify-center">
            <Satellite className="w-5 h-5 text-primary" />
            <div className="absolute inset-0 rounded-full border border-primary/30 animate-pulse-green" />
          </div>
          <span className="font-display text-lg font-bold tracking-tight">
            Agri<span className="text-primary">Scan</span>
          </span>
          <span className="hidden sm:inline font-mono text-[10px] text-muted-foreground border border-border px-1.5 py-0.5 rounded-sm uppercase">
            AI v3.2
          </span>
        </Link>

        {/* Desktop nav */}
        <div className="hidden md:flex items-center gap-1">
          {navItems.map((item) => (
            <Link
              key={item.path}
              to={item.path}
              className="relative px-4 py-2 font-mono text-xs uppercase tracking-wider text-muted-foreground hover:text-foreground transition-colors"
            >
              {location.pathname === item.path && (
                <motion.div
                  layoutId="activeNav"
                  className="absolute inset-0 bg-secondary rounded-sm"
                  transition={{ type: "spring", stiffness: 380, damping: 30 }}
                />
              )}
              <span className="relative z-10">{item.label}</span>
            </Link>
          ))}
        </div>

        <div className="hidden md:flex items-center gap-3">
          <div className="flex items-center gap-2 font-mono text-[10px] text-muted-foreground">
            <div className="w-1.5 h-1.5 rounded-full bg-primary animate-pulse-green" />
            SYS ONLINE
          </div>
          <Link
            to="/contact"
            className="px-4 py-2 font-mono text-xs uppercase tracking-wider bg-primary text-primary-foreground rounded-sm hover:shadow-[0_0_20px_hsl(var(--electric-green)/0.3)] transition-shadow"
          >
            Start Trial
          </Link>
        </div>

        {/* Mobile toggle */}
        <button
          className="md:hidden text-foreground"
          onClick={() => setIsOpen(!isOpen)}
        >
          {isOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
        </button>
      </div>

      {/* Mobile menu */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            className="md:hidden border-t border-border bg-background"
          >
            {navItems.map((item) => (
              <Link
                key={item.path}
                to={item.path}
                className="block px-6 py-3 font-mono text-sm uppercase tracking-wider text-muted-foreground hover:text-foreground hover:bg-secondary transition-colors"
                onClick={() => setIsOpen(false)}
              >
                {item.label}
              </Link>
            ))}
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
};

export default TechNavbar;
