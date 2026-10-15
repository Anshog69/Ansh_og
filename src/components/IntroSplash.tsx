import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';

interface IntroSplashProps {
  onComplete: () => void;
}

export function IntroSplash({ onComplete }: IntroSplashProps) {
  const [progress, setProgress] = useState(0);
  const [isFadingOut, setIsFadingOut] = useState(false);

  useEffect(() => {
    // Scroll to top immediately
    window.scrollTo({ top: 0, left: 0, behavior: 'instant' });

    let current = 0;
    const interval = setInterval(() => {
      // Non-linear easing for natural feeling load
      const step = current < 30 ? 3 : current < 70 ? 2 : current < 92 ? 1.5 : 2.5;
      current = Math.min(100, current + step);
      setProgress(Math.round(current));

      if (current >= 100) {
        clearInterval(interval);
        setTimeout(() => {
          setIsFadingOut(true);
          setTimeout(() => {
            onComplete();
          }, 600);
        }, 250);
      }
    }, 28);

    return () => clearInterval(interval);
  }, [onComplete]);

  const handleSkip = () => {
    setIsFadingOut(true);
    setTimeout(() => {
      onComplete();
    }, 250);
  };

  const getStatusText = (val: number) => {
    if (val < 25) return 'INITIALIZING CORE ENVIRONMENT';
    if (val < 55) return 'CALIBRATING DISTRIBUTED SHARDS';
    if (val < 85) return 'CONNECTING DISCORD GATEWAY NODES';
    if (val < 100) return 'SYNCHRONIZING REPOSITORIES';
    return 'SYSTEM OPERATIONAL';
  };

  return (
    <AnimatePresence>
      {!isFadingOut && (
        <motion.div
          id="loading-splash-screen"
          initial={{ opacity: 1 }}
          exit={{ opacity: 0, scale: 0.99, filter: 'blur(8px)' }}
          transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
          className="fixed inset-0 z-50 flex flex-col items-center justify-center bg-[#050505] text-zinc-100 select-none cursor-pointer"
          onClick={handleSkip}
        >
          {/* Subtle Ambient Monochrome Grid */}
          <div className="absolute inset-0 bg-obsidian-grid opacity-30 pointer-events-none" />

          {/* Minimal Center Content */}
          <div className="relative z-10 flex flex-col items-center max-w-sm w-full px-6">
            {/* Header Brand */}
            <div className="flex items-center gap-2 mb-3">
              <span className="text-sm font-black tracking-tight text-white">ANSH</span>
              <span className="w-1 h-1 rounded-full bg-zinc-600" />
              <span className="text-[11px] font-mono tracking-widest text-zinc-400 uppercase">
                INFRASTRUCTURE &amp; BOT SYSTEMS
              </span>
            </div>

            {/* Numeric Percentage Display */}
            <div className="text-5xl sm:text-6xl font-mono font-bold tracking-tight text-white mb-6 tabular-nums">
              {progress < 10 ? `0${progress}` : progress}
              <span className="text-xl sm:text-2xl text-zinc-500 font-normal ml-1">%</span>
            </div>

            {/* Center Loading Bar */}
            <div className="w-full max-w-[280px] sm:max-w-[320px] h-[2px] bg-zinc-900 rounded-full overflow-hidden relative border border-zinc-800/80 mb-4">
              <motion.div
                className="h-full bg-gradient-to-r from-zinc-500 via-white to-zinc-300 rounded-full"
                style={{ width: `${progress}%` }}
                transition={{ ease: 'easeOut', duration: 0.1 }}
              />
            </div>

            {/* Dynamic Status Readout */}
            <div className="h-5 flex items-center justify-center text-[10px] font-mono text-zinc-500 tracking-widest uppercase">
              <span>{getStatusText(progress)}</span>
            </div>
          </div>

          {/* Minimal Skip Indicator at Bottom */}
          <div className="absolute bottom-8 text-[11px] font-mono text-zinc-600 tracking-wider hover:text-zinc-400 transition-colors">
            CLICK ANYWHERE TO ENTER
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
