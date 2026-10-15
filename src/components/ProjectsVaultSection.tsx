import { useState, useEffect } from 'react';
import { Layers, ArrowUpRight, X, Cpu, Server, ShieldCheck, Check, Terminal, ExternalLink, Code2, Zap } from 'lucide-react';
import { motion, AnimatePresence } from 'motion/react';
import { PROJECTS_DATA, PERSONAL_INFO } from '../data/portfolioData';
import { ProjectBentoItem } from '../types';
import { TiltCard } from './TiltCard';

export function ProjectsVaultSection() {
  const [selectedProject, setSelectedProject] = useState<ProjectBentoItem | null>(null);

  // Close modal on Escape key
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') {
        setSelectedProject(null);
      }
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, []);

  return (
    <section id="projects" className="max-w-5xl mx-auto px-4 sm:px-6 pt-24 pb-16 relative z-10">
      {/* Section Header */}
      <div className="mb-12 text-center">
        <motion.span 
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-xs font-mono tracking-widest text-zinc-400 uppercase bg-zinc-900 border border-zinc-800 px-3.5 py-1 rounded-full inline-flex items-center gap-1.5 mb-3"
        >
          <Layers className="w-3.5 h-3.5 text-zinc-300" />
          SYSTEMS &amp; PRODUCTION VAULT
        </motion.span>
        <motion.h2 
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.1 }}
          className="text-3xl sm:text-4xl md:text-5xl font-black text-white tracking-tight"
        >
          Built Systems &amp; Deployments
        </motion.h2>
        <motion.p 
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.2 }}
          className="text-zinc-400 text-sm sm:text-base mt-3 max-w-xl mx-auto leading-relaxed"
        >
          Engineered Discord bot clusters, backend orchestration daemons, and low-latency game node bridges.
        </motion.p>
      </div>

      {/* Modern Editorial Bento Grid */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
        {PROJECTS_DATA.map((project, index) => {
          const isDouble = project.colSpan === 'double';

          return (
            <motion.div
              key={project.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-40px" }}
              transition={{ duration: 0.45, delay: index * 0.08 }}
              className={`${isDouble ? 'md:col-span-2' : 'md:col-span-1'} flex`}
            >
              <TiltCard maxTilt={5} scale={1.01} className="w-full h-full flex flex-col" dataCursor="EXPAND">
                <div
                  id={`project-card-${project.id}`}
                  onClick={() => setSelectedProject(project)}
                  className="w-full h-full flex flex-col justify-between bg-zinc-950 hover:bg-zinc-900/80 border border-zinc-800 hover:border-zinc-500 rounded-2xl p-6 sm:p-7 transition-all duration-200 cursor-pointer group shadow-sm relative overflow-hidden"
                >
                  {/* Subtle Top Border Highlight on Hover */}
                  <div className="absolute top-0 left-0 right-0 h-[1px] bg-gradient-to-r from-transparent via-zinc-400 to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />

                  {/* Header info */}
                  <div>
                    <div className="flex items-center justify-between gap-2 mb-4">
                      <div className="flex items-center gap-2">
                        <span className="text-[10px] font-mono font-bold tracking-widest text-zinc-400 uppercase bg-zinc-900 px-2 py-0.5 rounded border border-zinc-800">
                          {project.tag}
                        </span>
                        <span className="text-[10px] font-mono text-zinc-500">
                          {project.category}
                        </span>
                      </div>

                      <div className="w-7 h-7 rounded-lg bg-zinc-900 border border-zinc-800 flex items-center justify-center text-zinc-400 group-hover:text-white group-hover:border-zinc-600 transition-all">
                        <ArrowUpRight className="w-3.5 h-3.5" />
                      </div>
                    </div>

                    <h3 className="text-xl sm:text-2xl font-bold text-white mb-2 group-hover:text-zinc-100 transition-colors">
                      {project.title}
                    </h3>

                    <p className="text-zinc-400 text-xs sm:text-sm leading-relaxed mb-6 font-normal">
                      {project.tagline}
                    </p>
                  </div>

                  {/* Metrics and Tech stack */}
                  <div className="pt-4 border-t border-zinc-900 flex flex-col gap-4">
                    {/* Metrics Row */}
                    <div className="grid grid-cols-3 gap-2">
                      {project.metrics.map((metric, mIdx) => (
                        <div key={mIdx} className="bg-zinc-900/90 border border-zinc-800/80 rounded-lg p-2 text-center">
                          <div className="text-[10px] font-mono text-zinc-500 uppercase truncate">
                            {metric.label}
                          </div>
                          <div className="text-xs font-bold font-mono text-white mt-0.5 truncate">
                            {metric.value}
                          </div>
                        </div>
                      ))}
                    </div>

                    {/* Tech chips preview */}
                    <div className="flex flex-wrap items-center justify-between gap-2">
                      <div className="flex flex-wrap gap-1.5">
                        {project.technologies.slice(0, 3).map((tech, tIdx) => (
                          <span
                            key={tIdx}
                            className="text-[10px] font-mono text-zinc-400 bg-zinc-900 px-2 py-0.5 rounded border border-zinc-800"
                          >
                            {tech}
                          </span>
                        ))}
                        {project.technologies.length > 3 && (
                          <span className="text-[10px] font-mono text-zinc-500 px-1 py-0.5">
                            +{project.technologies.length - 3}
                          </span>
                        )}
                      </div>

                      <span className="text-xs font-mono text-zinc-400 group-hover:text-white transition-colors flex items-center gap-1 font-semibold">
                        View Details <ArrowUpRight className="w-3 h-3" />
                      </span>
                    </div>
                  </div>
                </div>
              </TiltCard>
            </motion.div>
          );
        })}
      </div>

      {/* Interactive Project Preview Modal */}
      <AnimatePresence>
        {selectedProject && (
          <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 select-none">
            {/* Backdrop */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setSelectedProject(null)}
              className="absolute inset-0 bg-black/80 backdrop-blur-md cursor-pointer"
            />

            {/* Modal Box */}
            <motion.div
              initial={{ opacity: 0, scale: 0.95, y: 15 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.95, y: 15 }}
              transition={{ duration: 0.25, ease: 'easeOut' }}
              className="relative z-10 w-full max-w-2xl bg-zinc-950 border border-zinc-700 rounded-3xl p-6 sm:p-8 shadow-2xl overflow-y-auto max-h-[90vh] text-left"
            >
              {/* Close Button */}
              <button
                type="button"
                onClick={() => setSelectedProject(null)}
                aria-label="Close modal"
                className="absolute top-5 right-5 p-2 rounded-xl bg-zinc-900 border border-zinc-800 text-zinc-400 hover:text-white hover:border-zinc-600 transition-colors cursor-pointer"
              >
                <X className="w-4 h-4" />
              </button>

              {/* Tag & Status Header */}
              <div className="flex flex-wrap items-center gap-2 mb-3">
                <span className="text-[10px] font-mono font-bold tracking-widest text-white uppercase bg-zinc-900 border border-zinc-700 px-2.5 py-1 rounded">
                  {selectedProject.tag}
                </span>
                <span className="text-xs font-mono text-zinc-400">
                  {selectedProject.category}
                </span>
                <span className="text-[10px] font-mono text-emerald-400 bg-emerald-950/60 border border-emerald-800 px-2 py-0.5 rounded flex items-center gap-1.5 ml-auto mr-10">
                  <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse" />
                  {selectedProject.status}
                </span>
              </div>

              {/* Title & Tagline */}
              <h3 className="text-2xl sm:text-3xl font-black text-white mb-2">
                {selectedProject.title}
              </h3>
              <p className="text-zinc-400 text-sm sm:text-base leading-relaxed mb-6 font-normal">
                {selectedProject.description}
              </p>

              {/* Key Metrics */}
              <div className="grid grid-cols-3 gap-3 mb-6">
                {selectedProject.metrics.map((metric, idx) => (
                  <div key={idx} className="bg-zinc-900/90 border border-zinc-800 rounded-xl p-3 text-center">
                    <div className="text-[10px] font-mono text-zinc-500 uppercase tracking-wider">
                      {metric.label}
                    </div>
                    <div className="text-sm sm:text-base font-bold font-mono text-white mt-1">
                      {metric.value}
                    </div>
                  </div>
                ))}
              </div>

              {/* Architecture Overview */}
              <div className="mb-6 bg-zinc-900/60 border border-zinc-800 rounded-2xl p-4">
                <h4 className="text-xs font-mono uppercase tracking-wider text-zinc-300 font-bold mb-2 flex items-center gap-1.5">
                  <Cpu className="w-3.5 h-3.5 text-zinc-400" />
                  System Architecture
                </h4>
                <p className="text-xs sm:text-sm text-zinc-300 leading-relaxed font-sans">
                  {selectedProject.architectureOverview}
                </p>
              </div>

              {/* Code Snippet if present */}
              {selectedProject.codeSnippet && (
                <div className="mb-6 rounded-2xl border border-zinc-800 overflow-hidden bg-black">
                  <div className="flex items-center justify-between px-4 py-2 border-b border-zinc-800 text-[11px] font-mono text-zinc-400">
                    <span className="flex items-center gap-1.5">
                      <Code2 className="w-3.5 h-3.5 text-zinc-500" />
                      {selectedProject.codeSnippet.filename}
                    </span>
                    <span className="text-[10px] text-zinc-600 uppercase">
                      {selectedProject.codeSnippet.language}
                    </span>
                  </div>
                  <pre className="p-4 text-xs font-mono text-zinc-300 overflow-x-auto leading-relaxed">
                    <code>{selectedProject.codeSnippet.code}</code>
                  </pre>
                </div>
              )}

              {/* Engineering Highlights */}
              <div className="mb-6">
                <h4 className="text-xs font-mono uppercase tracking-wider text-zinc-300 font-bold mb-3 flex items-center gap-1.5">
                  <ShieldCheck className="w-3.5 h-3.5 text-zinc-400" />
                  Technical Highlights
                </h4>
                <div className="space-y-2">
                  {selectedProject.highlights.map((highlight, idx) => (
                    <div key={idx} className="flex items-start gap-2.5 text-xs text-zinc-300 leading-relaxed">
                      <span className="w-4 h-4 rounded bg-zinc-900 border border-zinc-800 text-white flex items-center justify-center shrink-0 mt-0.5 text-[10px]">
                        ✓
                      </span>
                      <span>{highlight}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Technologies Stack */}
              <div className="mb-8">
                <h4 className="text-xs font-mono uppercase tracking-wider text-zinc-400 mb-2">
                  Technologies &amp; Libraries
                </h4>
                <div className="flex flex-wrap gap-1.5">
                  {selectedProject.technologies.map((tech, idx) => (
                    <span
                      key={idx}
                      className="text-xs font-mono text-zinc-300 bg-zinc-900 border border-zinc-800 px-2.5 py-1 rounded-lg"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>

              {/* Modal Action CTA */}
              <div className="pt-4 border-t border-zinc-800 flex flex-col sm:flex-row items-center justify-between gap-3">
                <div className="text-xs font-mono text-zinc-500">
                  Repository access granted via private invite
                </div>
                <a
                  href="#contact"
                  onClick={() => setSelectedProject(null)}
                  className="w-full sm:w-auto inline-flex items-center justify-center gap-2 bg-white hover:bg-zinc-200 text-black font-bold px-5 py-2.5 rounded-xl text-xs transition-colors shadow-sm"
                >
                  <span>Inquire on Discord</span>
                  <ExternalLink className="w-3.5 h-3.5" />
                </a>
              </div>
            </motion.div>
          </div>
        )}
      </AnimatePresence>
    </section>
  );
}
