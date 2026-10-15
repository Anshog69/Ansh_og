import { ShieldCheck, Server, Cpu, Zap, ArrowUpRight } from 'lucide-react';
import { motion } from 'motion/react';

const corePillars = [
  {
    icon: Server,
    title: "High-Throughput Discord Bots",
    desc: "Node.js & discord.js engines handling concurrent commands, automated ticketing, and real-time community events with zero-drop queuing.",
    tag: "DISCORD CLUSTERS"
  },
  {
    icon: ShieldCheck,
    title: "Automated Security & Moderation",
    desc: "Smart anti-raid filters, instant verification flows, webhook gateways, and automated threat mitigations with audit trails.",
    tag: "CYBER SECURITY"
  },
  {
    icon: Cpu,
    title: "Linux VPS & Node Orchestration",
    desc: "Hardened infrastructure running with automated cron failovers, resource monitoring, and 99.99% operational uptime.",
    tag: "INFRASTRUCTURE"
  },
  {
    icon: Zap,
    title: "Custom Minecraft Systems",
    desc: "Paper/Spigot plugin development, network bridges, cross-server sync, and custom server game mechanics.",
    tag: "GAME SYSTEMS"
  }
];

export function RoleHighlightSection() {
  return (
    <section id="architecture" className="max-w-5xl mx-auto px-4 sm:px-6 pt-24 pb-12 relative z-10">
      <motion.div 
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-40px" }}
        transition={{ duration: 0.5 }}
        className="bg-zinc-950 border border-zinc-800 p-7 sm:p-12 rounded-3xl relative overflow-hidden group shadow-sm"
      >
        {/* Eyebrow */}
        <div className="flex items-center gap-2 mb-3">
          <span className="text-xs font-mono tracking-widest text-zinc-400 uppercase bg-zinc-900 border border-zinc-800 px-3.5 py-1 rounded-full flex items-center gap-2">
            <span className="w-1.5 h-1.5 rounded-full bg-white" />
            <span>CORE ARCHITECTURE &amp; SYSTEM NODES</span>
          </span>
        </div>

        {/* Title */}
        <h3 className="text-2xl sm:text-4xl font-black text-white tracking-tight mb-4">
          Architectural Pillars
        </h3>

        {/* Subtitle */}
        <p className="text-zinc-400 text-sm sm:text-base max-w-2xl leading-relaxed mb-10 font-normal">
          Designed for resilient 24/7 availability, strict security boundary isolation, and rapid asynchronous event handling across Discord and game node clusters.
        </p>

        {/* Pillars Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          {corePillars.map((pillar, idx) => {
            const Icon = pillar.icon;
            return (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 15 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: idx * 0.08 }}
                className="bg-zinc-900/60 hover:bg-zinc-900 border border-zinc-800 hover:border-zinc-600 rounded-2xl p-5 sm:p-6 transition-all duration-200 group/card"
              >
                <div className="flex items-center justify-between gap-3 mb-4">
                  <div className="p-2.5 rounded-xl bg-zinc-800 border border-zinc-700 text-white group-hover/card:border-zinc-500 transition-colors">
                    <Icon className="w-4 h-4 text-white" />
                  </div>
                  <span className="text-[10px] font-mono tracking-wider uppercase text-zinc-500 bg-zinc-950 px-2 py-0.5 rounded border border-zinc-800">
                    {pillar.tag}
                  </span>
                </div>

                <h4 className="text-base sm:text-lg font-bold text-white mb-2 group-hover/card:text-zinc-100 transition-colors">
                  {pillar.title}
                </h4>

                <p className="text-xs sm:text-sm text-zinc-400 leading-relaxed font-normal">
                  {pillar.desc}
                </p>
              </motion.div>
            );
          })}
        </div>
      </motion.div>
    </section>
  );
}
