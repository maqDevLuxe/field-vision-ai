import { motion } from "framer-motion";

const RadarScan = ({ size = 200 }: { size?: number }) => {
  return (
    <div className="relative" style={{ width: size, height: size }}>
      {/* Radar circles */}
      {[1, 2, 3].map((i) => (
        <div
          key={i}
          className="absolute inset-0 rounded-full border border-primary/10"
          style={{
            width: `${(i / 3) * 100}%`,
            height: `${(i / 3) * 100}%`,
            top: `${((3 - i) / 3) * 50}%`,
            left: `${((3 - i) / 3) * 50}%`,
          }}
        />
      ))}
      {/* Cross lines */}
      <div className="absolute top-1/2 left-0 w-full h-px bg-primary/10" />
      <div className="absolute top-0 left-1/2 w-px h-full bg-primary/10" />
      {/* Sweep */}
      <motion.div
        className="absolute inset-0 rounded-full radar-sweep"
        style={{ width: size, height: size }}
      />
      {/* Dots */}
      {[
        { x: 65, y: 30 },
        { x: 35, y: 70 },
        { x: 75, y: 65 },
      ].map((dot, i) => (
        <motion.div
          key={i}
          className="absolute w-1.5 h-1.5 rounded-full bg-primary animate-pulse-green"
          style={{ left: `${dot.x}%`, top: `${dot.y}%` }}
          initial={{ opacity: 0 }}
          animate={{ opacity: [0, 1, 0] }}
          transition={{ duration: 2, repeat: Infinity, delay: i * 0.7 }}
        />
      ))}
      {/* Center dot */}
      <div className="absolute top-1/2 left-1/2 w-2 h-2 -translate-x-1/2 -translate-y-1/2 rounded-full bg-primary" />
    </div>
  );
};

export default RadarScan;
