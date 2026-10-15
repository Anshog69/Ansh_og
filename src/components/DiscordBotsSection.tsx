import { Bot, Music, Shield, ExternalLink, Sparkles } from 'lucide-react';
import { motion } from 'motion/react';
import { DISCORD_BOTS_DATA } from '../data/portfolioData';
import { TiltCard } from './TiltCard';

export function DiscordBotsSection() {
  return (
    <section id="bots" className="max-w-5xl mx-auto px-4 sm:px-6 pt-20 pb-12 relative z-10">
      {/* Section Header */}
      <div className="mb-12 text-center">
        <motion.span 
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-xs font-mono tracking-widest text-zinc-400 uppercase bg-zinc-900 border border-zinc-800 px-3.5 py-1 rounded-full inline-flex items-center gap-1.5 mb-3"
        >
          <Bot className="w-3.5 h-3.5 text-zinc-300" />
          FEATURED PRODUCTION DISCORD BOTS
        </motion.span>
        <motion.h2 
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.1 }}
          className="text-3xl sm:text-4xl md:text-5xl font-black text-white tracking-tight"
        >
          Flagship Discord Bots
        </motion.h2>
        <motion.p 
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.2 }}
          className="text-zinc-400 text-sm sm:text-base mt-3 max-w-xl mx-auto leading-relaxed"
        >
          Built for Discord communities. Direct invite links ready to elevate your server with enterprise moderation and 24/7 crystal-clear audio.
        </motion.p>
      </div>

      {/* Bots Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {DISCORD_BOTS_DATA.map((bot, index) => {
          const isMirsa = bot.id === 'mirsa-bot';
          const Icon = isMirsa ? Shield : Music;

          return (
            <motion.div
              key={bot.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-40px" }}
              transition={{ duration: 0.45, delay: index * 0.1 }}
              className="flex"
            >
              <TiltCard maxTilt={5} scale={1.01} className="w-full flex flex-col" dataCursor={bot.name.toUpperCase()}>
                <div 
                  id={`bot-card-${bot.id}`}
                  className="w-full h-full flex flex-col justify-between bg-zinc-950 border border-zinc-800 hover:border-zinc-600 rounded-3xl p-6 sm:p-8 transition-all duration-200 group shadow-lg relative overflow-hidden"
                >
                  {/* Subtle Aurora Ambient Glow in Card Header */}
                  <div 
                    className={`absolute -top-16 -right-16 w-44 h-44 rounded-full blur-3xl opacity-20 pointer-events-none transition-opacity group-hover:opacity-35 ${
                      isMirsa ? 'bg-cyan-500' : 'bg-purple-500'
                    }`} 
                  />

                  <div>
                    {/* Top Status & Badge */}
                    <div className="flex items-center justify-between gap-3 mb-5">
                      <div className="flex items-center gap-2">
                        <span className="text-[10px] font-mono font-bold tracking-widest uppercase bg-zinc-900 text-zinc-300 px-2.5 py-1 rounded-lg border border-zinc-800 flex items-center gap-1.5">
                          <Icon className={`w-3.5 h-3.5 ${isMirsa ? 'text-cyan-400' : 'text-purple-400'}`} />
                          {bot.badge}
                        </span>
                      </div>

                      <div className="flex items-center gap-1.5 text-[11px] font-mono text-zinc-400 bg-zinc-900/90 border border-zinc-800 px-2.5 py-1 rounded-lg">
                        <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse" />
                        <span>{bot.status}</span>
                      </div>
                    </div>

                    {/* Bot Title & Category */}
                    <div className="mb-3">
                      <h3 className="text-2xl sm:text-3xl font-black text-white group-hover:text-zinc-100 transition-colors flex items-center gap-2.5">
                        <span>{bot.name}</span>
                        {isMirsa && (
                          <span className="text-xs font-mono font-normal text-zinc-500 bg-zinc-900 border border-zinc-800 px-2 py-0.5 rounded">
                            Moderation &amp; All-in-One
                          </span>
                        )}
                        {!isMirsa && (
                          <span className="text-xs font-mono font-normal text-zinc-500 bg-zinc-900 border border-zinc-800 px-2 py-0.5 rounded">
                            24/7 Music
                          </span>
                        )}
                      </h3>
                      <p className="text-xs font-mono text-zinc-400 mt-1">
                        {bot.tagline}
                      </p>
                    </div>

                    {/* Description */}
                    <p className="text-zinc-400 text-xs sm:text-sm leading-relaxed mb-6 font-normal">
                      {bot.description}
                    </p>

                    {/* Features List */}
                    <div className="space-y-2 mb-7">
                      <div className="text-[10px] font-mono text-zinc-500 uppercase tracking-widest mb-1">
                        Core Capabilities
                      </div>
                      {bot.features.map((feat, fIdx) => (
                        <div key={fIdx} className="flex items-center gap-2 text-xs text-zinc-300">
                          <span className={`w-1 h-1 rounded-full ${isMirsa ? 'bg-cyan-400' : 'bg-purple-400'}`} />
                          <span>{feat}</span>
                        </div>
                      ))}
                    </div>
                  </div>

                  {/* Invite Button Action */}
                  <div className="pt-4 border-t border-zinc-900 flex flex-col sm:flex-row gap-3">
                    <a
                      id={`invite-btn-${bot.id}`}
                      href={bot.inviteUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      data-cursor="INVITE"
                      className="flex-1 inline-flex items-center justify-center gap-2 bg-white hover:bg-zinc-200 text-black font-bold py-3.5 px-5 rounded-xl transition-all shadow-md text-xs sm:text-sm cursor-pointer group/btn"
                    >
                      <Bot className="w-4 h-4 text-black" />
                      <span>Invite {bot.name}</span>
                      <ExternalLink className="w-3.5 h-3.5 text-zinc-700 group-hover/btn:translate-x-0.5 transition-transform" />
                    </a>
                  </div>
                </div>
              </TiltCard>
            </motion.div>
          );
        })}
      </div>
    </section>
  );
}
