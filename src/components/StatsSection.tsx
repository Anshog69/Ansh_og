import { useEffect, useState, useRef } from 'react';
import { motion, useInView } from 'motion/react';
import { Activity } from 'lucide-react';
import { STATS_DATA } from '../data/portfolioData';

function AnimatedStat({ value, numericTarget, suffix, label, index }: { value: string; numericTarget?: number; suffix?: string; label: string; index: number }) {
  const [count, setCount] = useState(0);
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { once: true, margin: "-20px" });

  useEffect(() => {
    if (isInView && numericTarget !== undefined) {
      let start = 0;
      const duration = 1400;
      const stepTime = 25;
      const totalSteps = duration / stepTime;
      const increment = numericTarget / totalSteps;

      const timer = setInterval(() => {
        start += increment;
        if (start >= numericTarget) {
          setCount(numericTarget);
          clearInterval(timer);
        } else {
          setCount(Math.floor(start * 10) / 10);
        }
      }, stepTime);

      return () => clearInterval(timer);
    }
  }, [isInView, numericTarget]);

  return (
    <div ref={ref} className="flex flex-col items-center justify-center relative select-none p-5 sm:p-6 bg-zinc-950 border border-zinc-800 rounded-2xl">
      {/* Top tag */}
      <span className="text-[10px] font-mono text-zinc-500 mb-2 uppercase tracking-widest">
        METRIC_0{index + 1}
      </span>

      <span className="text-3xl sm:text-4xl md:text-5xl font-black text-white mb-2 tabular-nums">
        {numericTarget !== undefined ? `${count}${suffix || ''}` : value}
      </span>
      <span className="text-xs font-mono text-zinc-400 uppercase tracking-wider text-center font-medium">
        {label}
      </span>
    </div>
  );
}

export function StatsSection() {
  return (
    <section id="stats" className="max-w-4xl mx-auto px-4 sm:px-6 pt-24 pb-12 relative z-10">
      {/* Section Header */}
      <div className="mb-12 text-center">
        <motion.span 
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-xs font-mono tracking-widest text-zinc-400 uppercase bg-zinc-900 border border-zinc-800 px-3.5 py-1 rounded-full inline-flex items-center gap-1.5 mb-3"
        >
          <Activity className="w-3.5 h-3.5 text-zinc-300" />
          VERIFIED SYSTEM METRICS
        </motion.span>
        <motion.h2 
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.1 }}
          className="text-3xl sm:text-4xl md:text-5xl font-black text-white tracking-tight"
        >
          Production Record
        </motion.h2>
      </div>

      {/* Grid of stats */}
      <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
        {STATS_DATA.map((stat, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.4, delay: index * 0.08 }}
          >
            <AnimatedStat 
              value={stat.value} 
              numericTarget={stat.numericTarget}
              suffix={stat.suffix}
              label={stat.label} 
              index={index} 
            />
          </motion.div>
        ))}
      </div>
    </section>
  );
}
