import { Briefcase, Calendar, CheckCircle2 } from 'lucide-react';
import { motion } from 'motion/react';
import { EXPERIENCE_DATA } from '../data/portfolioData';

export function ExperienceSection() {
  return (
    <section id="experience" className="max-w-4xl mx-auto px-4 sm:px-6 pt-24 pb-12 relative z-10">
      {/* Section Header */}
      <div className="mb-12 text-center">
        <motion.span 
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-xs font-mono tracking-widest text-zinc-400 uppercase bg-zinc-900 border border-zinc-800 px-3.5 py-1 rounded-full inline-flex items-center gap-1.5 mb-3"
        >
          <Briefcase className="w-3.5 h-3.5 text-zinc-300" />
          SYSTEMS DEPLOYMENT TRACK RECORD
        </motion.span>
        <motion.h2 
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.1 }}
          className="text-3xl sm:text-4xl md:text-5xl font-black text-white tracking-tight"
        >
          Experience &amp; Milestones
        </motion.h2>
        <motion.p 
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.2 }}
          className="text-zinc-400 text-sm sm:text-base mt-3 max-w-xl mx-auto leading-relaxed"
        >
          Infrastructure engineering, bot deployment clusters, and server hardening history.
        </motion.p>
      </div>

      {/* Experience List */}
      <div className="flex flex-col gap-4 relative">
        {EXPERIENCE_DATA.map((exp, index) => {
          return (
            <motion.div
              key={exp.id}
              id={`experience-item-${exp.id}`}
              initial={{ opacity: 0, y: 15 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-30px" }}
              transition={{ duration: 0.4, delay: index * 0.08 }}
              className="bg-zinc-950 border border-zinc-800 hover:border-zinc-600 p-6 sm:p-7 rounded-2xl flex flex-col sm:flex-row justify-between items-start sm:items-center gap-5 transition-all duration-200 group shadow-sm"
            >
              <div className="flex-1">
                {/* Meta Header */}
                <div className="flex items-center gap-2 text-xs font-mono text-zinc-400 mb-2">
                  <div className="p-1.5 rounded-lg bg-zinc-900 border border-zinc-800">
                    <Briefcase className="w-3.5 h-3.5 text-zinc-300" />
                  </div>
                  <span className="font-bold text-white">{exp.company}</span>
                  {exp.badge && (
                    <span className="bg-zinc-900 text-zinc-300 text-[10px] font-mono px-2 py-0.5 rounded border border-zinc-700 flex items-center gap-1.5 ml-1">
                      <span className="w-1.5 h-1.5 rounded-full bg-emerald-400" />
                      {exp.badge}
                    </span>
                  )}
                </div>

                {/* Role Title */}
                <h3 className="text-lg sm:text-xl font-bold text-white group-hover:text-zinc-100 transition-colors mb-2">
                  {exp.role}
                </h3>

                {/* Description */}
                <p className="text-zinc-400 text-xs sm:text-sm leading-relaxed max-w-2xl font-normal">
                  {exp.description}
                </p>
              </div>

              {/* Period Badge */}
              <div className="shrink-0 flex items-center gap-1.5 text-xs font-mono text-zinc-400 bg-zinc-900 border border-zinc-800 px-3 py-1.5 rounded-lg">
                <Calendar className="w-3.5 h-3.5 text-zinc-500" />
                <span>{exp.period}</span>
              </div>
            </motion.div>
          );
        })}
      </div>
    </section>
  );
}
