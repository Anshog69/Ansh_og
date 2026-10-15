import { useState } from 'react';
import { MessageSquare, Copy, Check, ExternalLink, Send, ArrowUpRight, Sparkles } from 'lucide-react';
import { motion } from 'motion/react';
import confetti from 'canvas-confetti';
import { PERSONAL_INFO } from '../data/portfolioData';
import { DiscordQRCard } from './DiscordQRCard';

export function ContactSection() {
  const [copied, setCopied] = useState(false);

  const copyDiscordHandle = () => {
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

  return (
    <section id="contact" className="max-w-5xl mx-auto px-4 sm:px-6 pt-24 pb-16 relative z-10">
      <div id="discord-connect-hub" className="scroll-mt-28">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-40px" }}
          transition={{ duration: 0.5 }}
          className="bg-zinc-950 border border-zinc-800 p-6 sm:p-12 rounded-3xl relative overflow-hidden group shadow-sm"
        >
          {/* Section Header */}
          <div className="text-center max-w-2xl mx-auto mb-12">
            <span className="text-xs font-mono tracking-widest text-zinc-400 uppercase bg-zinc-900 border border-zinc-800 px-3.5 py-1 rounded-full inline-flex items-center gap-1.5 mb-3">
              <span className="w-1.5 h-1.5 rounded-full bg-cyan-400" />
              DIRECT DISCORD INTERACTION HUB
            </span>

            <h2 className="text-3xl sm:text-4xl md:text-5xl font-black mt-2 mb-4 text-white tracking-tight leading-tight">
              Let's Build or Collaborate
            </h2>

            <p className="text-zinc-400 text-sm sm:text-base leading-relaxed text-balance font-normal">
              Scan the QR code with your Discord app or copy my handle to connect directly regarding custom Minecraft plugins, Fabric/Forge mods, custom servers, or Discord bots at reliable prices.
            </p>
          </div>

          {/* Grid Layout: Left Info & Actions, Right QR Card */}
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
            {/* Left Column: Direct Access Details */}
            <div className="lg:col-span-7 space-y-6">
              <div className="bg-zinc-900/60 border border-zinc-800 rounded-2xl p-6">
                <div className="flex items-center gap-3 mb-4">
                  <div className="w-10 h-10 rounded-xl bg-zinc-800 border border-zinc-700 flex items-center justify-center text-white">
                    <MessageSquare className="w-5 h-5 text-white" />
                  </div>
                  <div>
                    <span className="text-[11px] font-mono text-zinc-500 uppercase tracking-wider block">
                      PRIMARY CONTACT
                    </span>
                    <strong className="text-lg font-mono text-white">
                      @{PERSONAL_INFO.discordUsername}
                    </strong>
                  </div>
                </div>

                <p className="text-xs sm:text-sm text-zinc-400 leading-relaxed mb-6 font-normal">
                  Direct messages are always open for custom Minecraft plugin &amp; mod commissions, custom server network setups, and Discord bot engineering (Mirsa &amp; MIR).
                </p>

                <div className="flex flex-wrap gap-3">
                  <button
                    type="button"
                    data-cursor="COPY"
                    onClick={copyDiscordHandle}
                    className="inline-flex items-center gap-2 bg-white hover:bg-zinc-200 text-black font-bold px-4 py-2.5 rounded-xl transition-colors text-xs shadow-sm cursor-pointer"
                  >
                    {copied ? (
                      <>
                        <Check className="w-3.5 h-3.5 text-black" />
                        <span>Handle Copied!</span>
                      </>
                    ) : (
                      <>
                        <Copy className="w-3.5 h-3.5 text-black" />
                        <span>Copy Discord Tag</span>
                      </>
                    )}
                  </button>

                  <a
                    href="https://discord.com"
                    target="_blank"
                    rel="noopener noreferrer"
                    data-cursor="EXTERNAL"
                    className="inline-flex items-center gap-1.5 bg-zinc-900 hover:bg-zinc-800 border border-zinc-700 text-zinc-200 hover:text-white px-4 py-2.5 rounded-xl text-xs font-medium transition-colors"
                  >
                    <span>Open Discord</span>
                    <ExternalLink className="w-3.5 h-3.5" />
                  </a>
                </div>
              </div>

              {/* Inquiry points */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                <div className="p-4 rounded-xl bg-zinc-900/40 border border-zinc-800/80">
                  <span className="text-[10px] font-mono uppercase text-zinc-500 block mb-1">AVAILABILITY</span>
                  <span className="text-xs font-semibold text-zinc-200">Open for Commissions &amp; Contracts</span>
                </div>
                <div className="p-4 rounded-xl bg-zinc-900/40 border border-zinc-800/80">
                  <span className="text-[10px] font-mono uppercase text-zinc-500 block mb-1">RATES &amp; PRICING</span>
                  <span className="text-xs font-semibold text-zinc-200">Reliable &amp; Affordable Quotes</span>
                </div>
              </div>
            </div>

            {/* Right Column: QR Code Card */}
            <div className="lg:col-span-5 flex justify-center">
              <DiscordQRCard compact={false} />
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
