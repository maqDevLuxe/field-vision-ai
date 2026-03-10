import { useRef, useState } from "react";
import { motion } from "framer-motion";
import { cn } from "@/lib/utils";

interface MagneticButtonProps {
  children: React.ReactNode;
  className?: string;
  onClick?: () => void;
  variant?: "primary" | "outline" | "ghost";
}

const MagneticButton = ({ children, className, onClick, variant = "primary" }: MagneticButtonProps) => {
  const ref = useRef<HTMLButtonElement>(null);
  const [position, setPosition] = useState({ x: 0, y: 0 });

  const handleMouse = (e: React.MouseEvent<HTMLButtonElement>) => {
    const { clientX, clientY } = e;
    const { left, top, width, height } = ref.current!.getBoundingClientRect();
    const x = (clientX - (left + width / 2)) * 0.2;
    const y = (clientY - (top + height / 2)) * 0.2;
    setPosition({ x, y });
  };

  const reset = () => setPosition({ x: 0, y: 0 });

  const variantStyles = {
    primary: "bg-primary text-primary-foreground hover:shadow-[0_0_30px_hsl(var(--electric-green)/0.4)]",
    outline: "border border-primary/30 text-primary hover:border-primary hover:shadow-[0_0_20px_hsl(var(--electric-green)/0.2)]",
    ghost: "text-foreground hover:text-primary",
  };

  return (
    <motion.button
      ref={ref}
      className={cn(
        "relative px-8 py-3 font-mono text-sm uppercase tracking-wider rounded-sm transition-all duration-300",
        variantStyles[variant],
        className
      )}
      animate={{ x: position.x, y: position.y }}
      transition={{ type: "spring", stiffness: 150, damping: 15, mass: 0.1 }}
      onMouseMove={handleMouse}
      onMouseLeave={reset}
      onClick={onClick}
    >
      {children}
    </motion.button>
  );
};

export default MagneticButton;
