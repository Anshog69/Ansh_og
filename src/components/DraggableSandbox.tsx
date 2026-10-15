import { useState, useRef } from 'react';
import { motion } from 'motion/react';
import { Shield, Cpu, RefreshCw, Zap, Server, Bot, Terminal, Sparkles } from 'lucide-react';
import confetti from 'canvas-confetti';

interface Sticker {
  id: string;
  label: string;
  icon: typeof Bot;
  initialX: number;
  initialY: number;
  rotation: number;
}

const DEFAULT_STICKERS: Sticker[] = [
  { id: '1', label: 'DISCORD BOT ARCHITECT', icon: Bot, initialX: 10, initialY: 15, rotation: -4 },
  { id: '2', label: 'MINECRAFT PLUGINS & MODS', icon: Cpu, initialX: 220, initialY: 35, rotation: 3 },
  { id: '3', label: 'MIRSA & MIR DISCORD BOTS', icon: Sparkles, initialX: 40, initialY: 100, rotation: -2 },
  { id: '4', label: '20.0 TPS LOCKED SERVERS', icon: Zap, initialX: 250, initialY: 115, rotation: 4 },
  { id: '5', label: 'RELIABLE & AFFORDABLE RATES', icon: Server, initialX: 120, initialY: 60, rotation: -1 },
  { id: '6', label: 'VELOCITY PROXY CLUSTERS', icon: Terminal, initialX: 350, initialY: 75, rotation: 3 },
];

export function DraggableSandbox() {
  const containerRef = useRef<HTMLDivElement>(null);
  const [stickers, setStickers] = useState<Sticker[]>(DEFAULT_STICKERS);
  const [tossCount, setTossCount] = useState(0);

  const handleReset = () => {
    setStickers([...DEFAULT_STICKERS]);
    confetti({
      particleCount: 25,
      spread: 50,
      origin: { y: 0.7 },
      colors: ['#06b6d4', '#a855f7', '#ffffff']
    });
  };

  const handleDragEnd = () => {
    setTossCount(prev => prev + 1);
  };

  return (
    <div className="max-w-5xl mx-auto px-4 sm:px-6 my-12 relative z-10">
      <div className="bg-zinc-950 border border-zinc-800 rounded-3xl p-6 sm:p-8 relative overflow-hidden shadow-sm">
        {/* Header */}
        <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 mb-6">
          <div>
            <div className="flex items-center gap-2 mb-1">
              <span className="w-1.5 h-1.5 rounded-full bg-cyan-400" />
              <span className="text-[11px] font-mono tracking-wider uppercase text-zinc-400 font-bold">
                PHYSICS BADGE SANDBOX
              </span>
            </div>
            <h3 className="text-xl sm:text-2xl font-bold text-white tracking-tight">
              Interactive System Badges
            </h3>
            <p className="text-xs sm:text-sm text-zinc-400 mt-1">
              Drag, throw, and arrange Minecraft &amp; Discord badges freely across the kinetic surface.
            </p>
          </div>

          <div className="flex items-center gap-3 self-end sm:self-auto">
            {tossCount > 0 && (
              <span className="text-[11px] font-mono text-zinc-500">
                Interactions: <strong className="text-zinc-300">{tossCount}</strong>
              </span>
            )}

            <button
              id="reset-sandbox-stickers-btn"
              type="button"
              data-cursor="RESET"
              onClick={handleReset}
              className="inline-flex items-center gap-1.5 text-xs font-mono bg-zinc-900 hover:bg-zinc-800 border border-zinc-700 hover:border-zinc-500 text-zinc-300 hover:text-white px-3.5 py-1.5 rounded-lg transition-all cursor-pointer shadow-sm"
              title="Reset badges to initial positions"
            >
              <RefreshCw className="w-3.5 h-3.5" />
              <span>Reset Canvas</span>
            </button>
          </div>
        </div>

        {/* Interactive Physics / Drag Surface */}
        <div
          ref={containerRef}
          className="relative w-full h-[240px] sm:h-[220px] rounded-2xl bg-black border border-zinc-900 overflow-hidden select-none bg-obsidian-dots"
        >
          {stickers.map((sticker) => {
            const Icon = sticker.icon;
            return (
              <motion.div
                key={sticker.id}
                drag
                dragConstraints={containerRef}
                dragElastic={0.2}
                dragTransition={{ bounceStiffness: 400, bounceDamping: 25 }}
                whileDrag={{ scale: 1.08, zIndex: 40 }}
                whileHover={{ scale: 1.04 }}
                onDragEnd={handleDragEnd}
                data-cursor="DRAG"
                className="absolute cursor-grab active:cursor-grabbing px-3.5 py-2 rounded-xl text-xs font-mono font-bold tracking-wider text-zinc-200 bg-zinc-900/90 border border-zinc-700 shadow-md backdrop-blur-sm flex items-center gap-2"
                style={{
                  left: sticker.initialX,
                  top: sticker.initialY,
                  rotate: sticker.rotation,
                }}
              >
                <Icon className="w-3.5 h-3.5 text-zinc-400" />
                <span>{sticker.label}</span>
              </motion.div>
            );
          })}
        </div>
      </div>
    </div>
  );
}
