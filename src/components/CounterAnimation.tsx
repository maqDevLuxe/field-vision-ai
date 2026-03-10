import { useEffect, useState, useRef } from "react";
import { useInView } from "framer-motion";

interface CounterProps {
  end: number;
  suffix?: string;
  prefix?: string;
  duration?: number;
  label: string;
}

const CounterAnimation = ({ end, suffix = "", prefix = "", duration = 2000, label }: CounterProps) => {
  const [count, setCount] = useState(0);
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });
  const hasAnimated = useRef(false);

  useEffect(() => {
    if (!isInView || hasAnimated.current) return;
    hasAnimated.current = true;
    const startTime = Date.now();
    const timer = setInterval(() => {
      const elapsed = Date.now() - startTime;
      const progress = Math.min(elapsed / duration, 1);
      const eased = 1 - Math.pow(1 - progress, 3);
      setCount(Math.floor(eased * end));
      if (progress >= 1) clearInterval(timer);
    }, 16);
    return () => clearInterval(timer);
  }, [isInView, end, duration]);

  return (
    <div ref={ref} className="text-center">
      <div className="font-mono text-4xl md:text-5xl font-bold text-gradient-green glow-text">
        {prefix}{count.toLocaleString()}{suffix}
      </div>
      <div className="mt-2 font-mono text-xs uppercase tracking-widest text-muted-foreground">
        {label}
      </div>
    </div>
  );
};

export default CounterAnimation;
