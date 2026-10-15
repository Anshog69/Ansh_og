import { useState, useEffect } from 'react';
import { ArrowRight, MessageSquare, Copy, Check, QrCode, Cpu, Layers, Bot, Sparkles } from 'lucide-react';
import { motion, AnimatePresence } from 'motion/react';
import confetti from 'canvas-confetti';
import { PERSONAL_INFO } from '../data/portfolioData';
import { ScrambleText } from './ScrambleText';

interface HeroSectionProps {
  onOpenQRModal?: () => void;
}

export function HeroSection({ onOpenQRModal }: HeroSectionProps) {
  const [copied, setCopied] = useState(false);
  const [roleIndex, setRoleIndex] = useState(0);

  const roles = PERSONAL_INFO.roles || [
    "Custom Discord Bot Developer",
    "Minecraft Plugin Engineer (Spigot/Paper)",
    "Minecraft Mod Developer (Fabric/Forge)",
    "Custom Minecraft Server Architect",
    "Linux Infrastructure & VPS Engineer"
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      setRoleIndex(prev => (prev + 1) % roles.length);
    }, 2800);
    return () => clearInterval(interval);
  }, [roles.length]);

  const copyDiscord = () => {
    navigator.clipboard.writeText(PERSONAL_INFO.discordUsername);
    setCopied(true);
    confetti({
      particleCount: 35,
      spread: 60,
      origin: { y: 0.8 },
      colors: ['#06b6d4', '#a855f7', '#ffffff']
    });
    setTimeout(() => setCopied(false), 2000);
  };

  const scrollToSection = (hash: string) => {
    const target = document.querySelector(hash);
    if (target) {
      const yOffset = -75;
      const y = target.getBoundingClientRect().top + window.pageYOffset + yOffset;
      window.scrollTo({ top: y, behavior: 'smooth' });
    }
  };

  return (
    <section 
      id="about" 
      className="max-w-5xl mx-auto px-4 sm:px-6 min-h-[84vh] flex flex-col justify-center items-center text-center relative z-10 py-16 sm:py-24"
    >
      {/* Subtle Aurora Ambient Spotlight */}
      <div className="absolute top-1/3 left-1/2 -translate-x-1/2 -translate-y-1/2 w-72 sm:w-[560px] h-72 sm:h-[560px] bg-gradient-to-tr from-cyan-500/10 to-purple-600/10 rounded-full blur-[130px] pointer-events-none -z-10" />

      {/* Status Pill */}
      <motion.div
        initial={{ opacity: 0, y: -15 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="mb-6 inline-flex items-center gap-2.5 px-3.5 py-1.5 rounded-full bg-zinc-900/90 border border-zinc-800 text-xs font-mono text-zinc-300 backdrop-blur-md shadow-sm"
      >
        <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
        <span className="text-zinc-200 font-medium">AVAILABLE FOR HIRE • RELIABLE &amp; AFFORDABLE PRICING</span>
      </motion.div>

      {/* Animated Role Badge */}
      <div className="h-8 mb-5 flex items-center justify-center overflow-hidden">
        <AnimatePresence mode="wait">
          <motion.div
            key={roleIndex}
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -12 }}
            transition={{ duration: 0.3 }}
            className="inline-flex items-center gap-2 text-xs sm:text-sm font-mono font-semibold tracking-wider uppercase text-zinc-200 bg-zinc-900/90 border border-zinc-700/80 px-3.5 py-1 rounded-lg shadow-sm"
          >
            <span className="text-cyan-400">•</span>
            <span>{roles[roleIndex]}</span>
            <span className="text-purple-400">•</span>
          </motion.div>
        </AnimatePresence>
      </div>

      {/* Main Display Headline */}
      <motion.h1 
        initial={{ opacity: 0, y: 15 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.1 }}
        className="text-4xl sm:text-6xl md:text-7xl lg:text-8xl font-black tracking-tight text-white mb-6 leading-tight select-none"
      >
        Hey, I'm{' '}
        <span className="relative inline-block">
          <span className="text-white drop-shadow-[0_0_25px_rgba(255,255,255,0.2)]">
            <ScrambleText text={PERSONAL_INFO.name} className="text-white" />
          </span>
          <span className="text-zinc-600 font-mono text-xl sm:text-2xl font-light ml-2">
            _
          </span>
        </span>
      </motion.h1>

      {/* Editorial Bio Description */}
      <motion.p 
        initial={{ opacity: 0, y: 15 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.2 }}
        className="text-zinc-300 text-base sm:text-lg md:text-xl max-w-2xl leading-relaxed mb-10 text-balance font-normal"
      >
        I build custom <strong className="text-white font-semibold">Minecraft plugins</strong> (Spigot/Paper), bespoke <strong className="text-white font-semibold">mods</strong> (Fabric/Forge), complete <strong className="text-white font-semibold">Minecraft servers</strong>, and stunning <strong className="text-white font-semibold">Discord bots</strong> at completely reliable prices.
      </motion.p>

      {/* Action Buttons */}
      <motion.div 
        initial={{ opacity: 0, y: 15 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.3 }}
        className="flex flex-wrap gap-3.5 w-full sm:w-auto items-center justify-center mb-10"
      >
        {/* Explore Discord Bots */}
        <a 
          id="hero-explore-bots-btn"
          href="#bots"
          data-cursor="BOTS"
          onClick={(e) => {
            e.preventDefault();
            scrollToSection('#bots');
          }}
          className="w-full sm:w-auto inline-flex items-center justify-center gap-2 bg-white hover:bg-zinc-200 text-black font-bold px-7 py-3 rounded-xl transition-all shadow-md text-sm cursor-pointer"
        >
          <Bot className="w-4 h-4 text-black" />
          <span>Invite Discord Bots (Mirsa &amp; MIR)</span>
        </a>

        {/* Explore Minecraft & Bot Services */}
        <a 
          id="hero-skills-pricing-btn"
          href="#skills"
          data-cursor="SKILLS"
          onClick={(e) => {
            e.preventDefault();
            scrollToSection('#skills');
          }}
          className="w-full sm:w-auto inline-flex items-center justify-center gap-2 bg-zinc-900 hover:bg-zinc-800 border border-zinc-700 hover:border-zinc-500 text-zinc-200 hover:text-white font-medium px-6 py-3 rounded-xl transition-all shadow-sm text-sm cursor-pointer"
        >
          <Sparkles className="w-4 h-4 text-cyan-400" />
          <span>Hire Me • Services &amp; Pricing</span>
        </a>

        {/* View Minecraft Systems */}
        <a 
          id="hero-explore-projects-btn"
          href="#projects" 
          data-cursor="SYSTEMS"
          onClick={(e) => {
            e.preventDefault();
            scrollToSection('#projects');
          }}
          className="w-full sm:w-auto inline-flex items-center justify-center gap-2 bg-transparent hover:bg-zinc-900/60 border border-zinc-800 hover:border-zinc-700 text-zinc-400 hover:text-zinc-200 font-medium px-5 py-3 rounded-xl transition-all text-sm"
        >
          <Layers className="w-4 h-4" />
          <span>Minecraft &amp; Systems Vault</span>
        </a>
      </motion.div>

      {/* Interactive Quick Connect Handle */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.5, delay: 0.4 }}
        className="flex flex-wrap items-center justify-center gap-3 text-xs text-zinc-400 font-mono"
      >
        <button
          id="hero-discord-copy-btn"
          type="button"
          data-cursor="COPY"
          onClick={copyDiscord}
          className="group flex items-center gap-2 bg-zinc-950 hover:bg-zinc-900 border border-zinc-800 hover:border-zinc-600 text-zinc-300 px-4 py-2 rounded-lg transition-all cursor-pointer shadow-sm"
          title="Click to copy Discord username"
        >
          <MessageSquare className="w-3.5 h-3.5 text-zinc-400 group-hover:text-cyan-400 transition-colors" />
          <span>discord: <strong className="text-white font-bold">@{PERSONAL_INFO.discordUsername}</strong></span>
          {copied ? (
            <span className="flex items-center gap-1 text-emerald-400 text-[11px] font-sans font-medium ml-1">
              <Check className="w-3.5 h-3.5" /> Copied
            </span>
          ) : (
            <Copy className="w-3.5 h-3.5 text-zinc-600 group-hover:text-zinc-400 transition-colors ml-1" />
          )}
        </button>

        <div className="flex items-center gap-2 bg-zinc-950 border border-zinc-800 px-3.5 py-2 rounded-lg text-zinc-400">
          <Cpu className="w-3.5 h-3.5 text-zinc-500" />
          <span>Stack: <strong className="text-zinc-300">Java 21 • Node.js v22</strong></span>
        </div>

        <div className="flex items-center gap-2 bg-zinc-950 border border-zinc-800 px-3.5 py-2 rounded-lg text-zinc-400">
          <span className="w-2 h-2 rounded-full bg-emerald-400" />
          <span>Rates: <strong className="text-zinc-300">Reliable &amp; Affordable</strong></span>
        </div>
      </motion.div>
    </section>
  );
}
