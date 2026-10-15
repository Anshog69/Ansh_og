import { motion } from 'motion/react';
import { Cpu, ShieldCheck, Zap, Server, Activity, Layers, Code, Bot, Sparkles } from 'lucide-react';

const MARQUEE_ITEMS_1 = [
  { icon: Bot, text: 'MIRSA ALL-IN-ONE MODERATION BOT' },
  { icon: Sparkles, text: 'MIR 24/7 CRYSTAL AUDIO MUSIC BOT' },
  { icon: Code, text: 'CUSTOM MINECRAFT PLUGINS (PAPER / SPIGOT)' },
  { icon: Layers, text: 'MINECRAFT MODS (FABRIC & FORGE)' },
  { icon: Server, text: 'CUSTOM MINECRAFT SERVERS & VELOCITY' },
  { icon: Zap, text: 'RELIABLE & AFFORDABLE PRICING' },
];

const MARQUEE_ITEMS_2 = [
  { icon: Activity, text: 'LOCKED 20.0 TPS OPTIMIZATION' },
  { icon: Bot, text: 'DISCORD.JS v14 ARCHITECTURE' },
  { icon: ShieldCheck, text: 'ANTI-RAID & DDOS MITIGATION' },
  { icon: Server, text: 'LINUX VPS & SYSTEMD AUTOMATION' },
  { icon: Sparkles, text: 'HIRE ME FOR CUSTOM BOTS & SERVERS' },
  { icon: Code, text: 'JAVA 21 & TYPESCRIPT STACK' },
];

export function MarqueeTicker() {
  return (
    <div className="w-full py-6 overflow-hidden relative select-none border-y border-zinc-800 bg-zinc-950/90 backdrop-blur-md">
      {/* Side Fade Gradients */}
      <div className="absolute left-0 top-0 bottom-0 w-16 sm:w-32 bg-gradient-to-r from-[#050505] to-transparent z-20 pointer-events-none" />
      <div className="absolute right-0 top-0 bottom-0 w-16 sm:w-32 bg-gradient-to-l from-[#050505] to-transparent z-20 pointer-events-none" />

      {/* Row 1: Leftward Marquee */}
      <div className="flex w-max mb-3">
        <motion.div
          animate={{ x: ['0%', '-50%'] }}
          transition={{ duration: 25, repeat: Infinity, ease: 'linear' }}
          className="flex items-center gap-4 whitespace-nowrap"
        >
          {[...MARQUEE_ITEMS_1, ...MARQUEE_ITEMS_1].map((item, idx) => {
            const Icon = item.icon;
            return (
              <div
                key={idx}
                className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-lg bg-zinc-900 border border-zinc-800 text-xs font-mono font-bold tracking-wider hover:border-zinc-500 hover:bg-zinc-850 transition-all cursor-default group"
              >
                <Icon className="w-3.5 h-3.5 text-zinc-400 group-hover:text-cyan-400 transition-colors" />
                <span className="text-zinc-300 group-hover:text-white transition-colors">{item.text}</span>
              </div>
            );
          })}
        </motion.div>
      </div>

      {/* Row 2: Rightward Marquee */}
      <div className="flex w-max">
        <motion.div
          animate={{ x: ['-50%', '0%'] }}
          transition={{ duration: 27, repeat: Infinity, ease: 'linear' }}
          className="flex items-center gap-4 whitespace-nowrap"
        >
          {[...MARQUEE_ITEMS_2, ...MARQUEE_ITEMS_2].map((item, idx) => {
            const Icon = item.icon;
            return (
              <div
                key={idx}
                className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-lg bg-zinc-900 border border-zinc-800 text-xs font-mono font-bold tracking-wider hover:border-zinc-500 hover:bg-zinc-850 transition-all cursor-default group"
              >
                <Icon className="w-3.5 h-3.5 text-zinc-400 group-hover:text-purple-400 transition-colors" />
                <span className="text-zinc-300 group-hover:text-white transition-colors">{item.text}</span>
              </div>
            );
          })}
        </motion.div>
      </div>
    </div>
  );
}
