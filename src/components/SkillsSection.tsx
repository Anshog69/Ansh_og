import { useState } from 'react';
import { MessageSquare, Boxes, Cpu, Server, Terminal, Bot, Sparkles, Check, ArrowRight, ExternalLink } from 'lucide-react';
import { motion, AnimatePresence } from 'motion/react';
import { SKILLS_DATA, PERSONAL_INFO } from '../data/portfolioData';
import { TiltCard } from './TiltCard';

const iconMap: Record<string, typeof MessageSquare> = {
  MessageSquare,
  Boxes,
  Cpu,
  Server,
  Terminal,
  Bot,
  Sparkles
};

export function SkillsSection() {
  const [selectedSkill, setSelectedSkill] = useState<string | null>(null);
  const [filter, setFilter] = useState<string>('ALL');

  const categories = ['ALL', 'MINECRAFT', 'DISCORD', 'INFRASTRUCTURE', 'HIRE & RATES'];

  const filteredSkills = filter === 'ALL' 
    ? SKILLS_DATA 
    : SKILLS_DATA.filter(s => s.category.toUpperCase() === filter.toUpperCase());

  const scrollToContact = () => {
    const target = document.querySelector('#contact');
    if (target) {
      const yOffset = -75;
      const y = target.getBoundingClientRect().top + window.pageYOffset + yOffset;
      window.scrollTo({ top: y, behavior: 'smooth' });
    }
  };

  return (
    <section id="skills" className="max-w-5xl mx-auto px-4 sm:px-6 pt-24 pb-12 relative z-10">
      {/* Header */}
      <div className="mb-10 text-center">
        <motion.span 
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-xs font-mono tracking-widest text-zinc-400 uppercase bg-zinc-900 border border-zinc-800 px-3.5 py-1 rounded-full inline-flex items-center gap-1.5 mb-3"
        >
          <Sparkles className="w-3.5 h-3.5 text-cyan-400" />
          SERVICES, EXPERTISE &amp; RATES
        </motion.span>
        <motion.h2 
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.1 }}
          className="text-3xl sm:text-4xl md:text-5xl font-black text-white tracking-tight"
        >
          Skills, Offerings &amp; Pricing
        </motion.h2>
        <motion.p 
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.2 }}
          className="text-zinc-400 text-sm sm:text-base mt-3 max-w-xl mx-auto leading-relaxed"
        >
          Custom Minecraft plugins, Fabric/Forge mods, enterprise server builds, and stunning Discord bots at reliable prices.
        </motion.p>

        {/* Category Filters */}
        <motion.div 
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="flex flex-wrap items-center justify-center gap-1.5 sm:gap-2 mt-7"
        >
          {categories.map((cat) => (
            <button
              key={cat}
              type="button"
              data-cursor="FILTER"
              onClick={() => setFilter(cat)}
              className={`text-[11px] font-mono px-3.5 py-1.5 rounded-lg transition-all cursor-pointer ${
                filter === cat
                  ? 'bg-white text-black font-bold shadow-sm'
                  : 'bg-zinc-900 text-zinc-400 border border-zinc-800 hover:text-white hover:border-zinc-600'
              }`}
            >
              {cat}
            </button>
          ))}
        </motion.div>
      </div>

      {/* Skills Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
        {filteredSkills.map((skill, index) => {
          const Icon = iconMap[skill.iconName] || MessageSquare;
          const isSelected = selectedSkill === skill.id;
          const isPricing = skill.id === 'reliable-pricing';

          return (
            <motion.div
              key={skill.id}
              id={`skill-card-${skill.id}`}
              initial={{ opacity: 0, y: 15 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-30px" }}
              transition={{ duration: 0.4, delay: index * 0.05 }}
              onClick={() => setSelectedSkill(isSelected ? null : skill.id)}
              className="flex"
            >
              <TiltCard maxTilt={5} scale={1.01} dataCursor="SKILL" className="w-full flex flex-col">
                <div 
                  className={`w-full h-full bg-zinc-950 border transition-all duration-200 rounded-2xl p-6 flex flex-col justify-between cursor-pointer group shadow-sm ${
                    isPricing 
                      ? 'border-cyan-500/60 bg-gradient-to-b from-zinc-950 to-zinc-900/90' 
                      : isSelected 
                        ? 'border-white bg-zinc-900' 
                        : 'border-zinc-800 hover:border-zinc-600 hover:bg-zinc-900/60'
                  }`}
                >
                  <div>
                    {/* Card Top */}
                    <div className="flex items-center justify-between gap-3 mb-4">
                      <div className="flex items-center gap-2.5">
                        <div className={`p-2.5 rounded-xl border transition-colors ${
                          isPricing 
                            ? 'bg-cyan-950/60 border-cyan-500/50 text-cyan-300' 
                            : 'bg-zinc-900 border-zinc-800 group-hover:border-zinc-600 text-white'
                        }`}>
                          <Icon className="w-4 h-4" />
                        </div>
                        <span className="text-[10px] font-mono tracking-widest uppercase text-zinc-400 bg-zinc-900 px-2 py-0.5 rounded border border-zinc-800">
                          {skill.category}
                        </span>
                      </div>
                      <span className="font-mono text-xs font-bold text-zinc-500">
                        {skill.num}
                      </span>
                    </div>

                    {/* Card Title */}
                    <h3 className="text-lg font-bold text-white mb-2 group-hover:text-zinc-100 transition-colors">
                      {skill.title}
                    </h3>

                    {/* Card Description */}
                    <p className="text-zinc-400 text-xs sm:text-sm leading-relaxed mb-5 font-normal">
                      {skill.description}
                    </p>
                  </div>

                  <div>
                    {/* Tags */}
                    {skill.tags && (
                      <div className="flex flex-wrap gap-1.5 pt-3 border-t border-zinc-900">
                        {skill.tags.map((tag, tIdx) => (
                          <span 
                            key={tIdx}
                            className={`text-[10px] font-mono px-2 py-0.5 rounded border ${
                              isPricing 
                                ? 'bg-cyan-950/40 border-cyan-800/60 text-cyan-300' 
                                : 'bg-zinc-900/90 border-zinc-800 text-zinc-400'
                            }`}
                          >
                            {tag}
                          </span>
                        ))}
                      </div>
                    )}

                    {/* Direct CTA on Pricing Card */}
                    {isPricing && (
                      <div className="mt-4 pt-3 border-t border-zinc-800">
                        <button
                          type="button"
                          onClick={(e) => {
                            e.stopPropagation();
                            scrollToContact();
                          }}
                          className="w-full inline-flex items-center justify-center gap-2 bg-white hover:bg-zinc-200 text-black text-xs font-bold py-2.5 rounded-xl transition-all shadow-sm cursor-pointer"
                        >
                          <span>Hire Ansh on Discord</span>
                          <ArrowRight className="w-3.5 h-3.5" />
                        </button>
                      </div>
                    )}
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
