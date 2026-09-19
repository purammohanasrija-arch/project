import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Github, ExternalLink, X, Eye, ArrowRight, Layers, Cpu, Database, Globe } from 'lucide-react';
import { projects } from '../data/portfolioData';

export default function Projects() {
  const [selected, setSelected] = useState(null);

  const open = (p) => { setSelected(p); document.body.style.overflow = 'hidden'; };
  const close = () => { setSelected(null); document.body.style.overflow = ''; };

  return (
    <section id="projects" className="section-padding relative z-10" aria-labelledby="projects-heading">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <motion.div
          className="text-center mb-14"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          <h2 id="projects-heading" className="section-title">Featured Projects</h2>
          <p className="section-subtitle mt-2">Real Problems · Creative Solutions</p>
        </motion.div>

        {/* Grid */}
        <div className="grid md:grid-cols-2 gap-6 lg:gap-8">
          {projects.map((project, i) => (
            <ProjectCard key={project.id} project={project} index={i} onOpen={open} />
          ))}
        </div>
      </div>

      <AnimatePresence>
        {selected && <ProjectModal project={selected} onClose={close} />}
      </AnimatePresence>
    </section>
  );
}

function ProjectCard({ project, index, onOpen }) {
  const [hovered, setHovered] = useState(false);

  return (
    <motion.div
      className="relative rounded-2xl overflow-hidden group holographic"
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6, delay: index * 0.12, type: 'spring', stiffness: 150 }}
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
      whileHover={{ y: -6 }}
      style={{
        background: `linear-gradient(135deg, ${project.color}08, rgba(2,8,24,0.97))`,
        border: `1px solid ${project.color}${hovered ? '50' : '20'}`,
        boxShadow: hovered ? `0 30px 80px ${project.color}20, 0 0 0 1px ${project.color}30` : 'none',
        transition: 'border-color 0.3s, box-shadow 0.3s',
      }}
    >
      {/* Animated shimmer */}
      <motion.div
        className="absolute inset-0 pointer-events-none"
        style={{
          background: `linear-gradient(105deg, transparent 40%, ${project.color}08 50%, transparent 60%)`,
          backgroundSize: '200% 100%',
        }}
        animate={{ backgroundPosition: hovered ? ['200% 0', '-100% 0'] : '200% 0' }}
        transition={{ duration: 1.2, ease: 'easeInOut' }}
      />

      {/* Top gradient bar */}
      <motion.div
        className="h-1 w-full"
        style={{ background: `linear-gradient(90deg, ${project.color}, #7c3aed, ${project.color})` }}
        animate={{ backgroundPosition: hovered ? ['0% 0', '100% 0'] : '0% 0' }}
        transition={{ duration: 2, repeat: hovered ? Infinity : 0 }}
      />

      {/* Project icon — large floating background emoji */}
      <motion.div
        className="absolute top-4 right-4 text-6xl opacity-10 select-none"
        animate={{ rotate: hovered ? [0, 5, -5, 0] : 0, scale: hovered ? 1.2 : 1 }}
        transition={{ duration: 0.5 }}
        aria-hidden="true"
      >
        {project.icon}
      </motion.div>

      <div className="relative p-6 md:p-7">
        {/* Header row */}
        <div className="flex items-start gap-4 mb-4">
          <motion.div
            className="w-12 h-12 rounded-2xl flex items-center justify-center text-2xl flex-shrink-0"
            style={{
              background: `${project.color}15`,
              border: `1px solid ${project.color}35`,
              boxShadow: hovered ? `0 0 20px ${project.color}30` : 'none',
            }}
            animate={{ rotate: hovered ? [0, -10, 10, 0] : 0 }}
            transition={{ duration: 0.5 }}
            aria-hidden="true"
          >
            {project.icon}
          </motion.div>
          <div className="flex-1 min-w-0">
            <h3
              className="text-lg font-bold leading-tight transition-colors duration-200"
              style={{ color: hovered ? project.color : 'white' }}
            >
              {project.shortTitle}
            </h3>
            <p className="text-xs text-slate-500 mt-0.5">{project.tagline}</p>
          </div>
        </div>

        {/* Description */}
        <p className="text-sm text-slate-400 leading-relaxed mb-5 line-clamp-2">
          {project.description}
        </p>

        {/* Tech stack with animated badges */}
        <div className="flex flex-wrap gap-2 mb-6">
          {project.tech.slice(0, 5).map((t, ti) => (
            <motion.span
              key={t}
              className="px-2.5 py-1 rounded-lg text-xs font-medium"
              style={{
                background: `${project.color}10`,
                border: `1px solid ${project.color}25`,
                color: '#94a3b8',
              }}
              whileHover={{ scale: 1.05, color: project.color, borderColor: project.color + '60' }}
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 + ti * 0.05 }}
            >
              {t}
            </motion.span>
          ))}
          {project.tech.length > 5 && (
            <span className="px-2.5 py-1 rounded-lg text-xs font-medium bg-white/5 text-slate-500">
              +{project.tech.length - 5}
            </span>
          )}
        </div>

        {/* Actions */}
        <div className="flex flex-wrap gap-3">
          <motion.a
            href={project.github}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-1.5 px-4 py-2 rounded-xl text-xs font-medium text-slate-300 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-cyan-400"
            style={{ background: 'rgba(255,255,255,0.05)', border: '1px solid rgba(255,255,255,0.1)' }}
            whileHover={{ scale: 1.05, background: 'rgba(255,255,255,0.1)' }}
            whileTap={{ scale: 0.95 }}
            aria-label={`GitHub: ${project.shortTitle}`}
          >
            <Github size={13} aria-hidden="true" />
            GitHub
          </motion.a>
          {project.demo && (
            <motion.a
              href={project.demo}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-1.5 px-4 py-2 rounded-xl text-xs font-medium focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-cyan-400"
              style={{
                background: `${project.color}15`,
                border: `1px solid ${project.color}40`,
                color: project.color,
              }}
              whileHover={{ scale: 1.05, boxShadow: `0 0 15px ${project.color}30` }}
              whileTap={{ scale: 0.95 }}
              aria-label={`Live demo: ${project.shortTitle}`}
            >
              <ExternalLink size={13} aria-hidden="true" />
              Live Demo
            </motion.a>
          )}
          <motion.button
            onClick={() => onOpen(project)}
            className="flex items-center gap-1.5 px-4 py-2 rounded-xl text-xs font-medium text-slate-300 ml-auto focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-cyan-400"
            style={{ background: 'rgba(0,212,255,0.06)', border: '1px solid rgba(0,212,255,0.2)' }}
            whileHover={{ scale: 1.05, background: 'rgba(0,212,255,0.12)', borderColor: 'rgba(0,212,255,0.5)' }}
            whileTap={{ scale: 0.95 }}
            aria-label={`Details: ${project.shortTitle}`}
          >
            <Eye size={13} aria-hidden="true" />
            Details
            <motion.span animate={{ x: hovered ? 2 : 0 }} transition={{ duration: 0.2 }}>
              <ArrowRight size={11} aria-hidden="true" />
            </motion.span>
          </motion.button>
        </div>
      </div>
    </motion.div>
  );
}

const archIcons = { Frontend: Globe, Backend: Layers, 'AI Agents': Cpu, Database, 'AI Layer': Cpu, 'AI Model': Cpu, 'Algorithm': Cpu, 'External APIs': Globe, 'Visualization': Layers, 'UX Layer': Layers };

function ProjectModal({ project, onClose }) {
  return (
    <motion.div
      className="fixed inset-0 z-50 flex items-center justify-center p-4"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      role="dialog"
      aria-modal="true"
      aria-label={`${project.title} details`}
    >
      <motion.div
        className="absolute inset-0 bg-black/80 backdrop-blur-xl"
        onClick={onClose}
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        aria-hidden="true"
      />

      <motion.div
        className="relative w-full max-w-3xl max-h-[90vh] overflow-y-auto rounded-3xl"
        style={{
          background: 'rgba(4,10,28,0.98)',
          border: `1px solid ${project.color}30`,
          boxShadow: `0 0 100px ${project.color}20, 0 40px 80px rgba(0,0,0,0.8)`,
        }}
        initial={{ scale: 0.85, opacity: 0, y: 40 }}
        animate={{ scale: 1, opacity: 1, y: 0 }}
        exit={{ scale: 0.85, opacity: 0, y: 40 }}
        transition={{ type: 'spring', stiffness: 280, damping: 28 }}
      >
        {/* Top gradient bar */}
        <div
          className="h-1.5 rounded-t-3xl"
          style={{ background: `linear-gradient(90deg, ${project.color}, #7c3aed, #ec4899)` }}
        />

        <div className="p-6 md:p-8">
          {/* Modal header */}
          <div className="flex items-start justify-between mb-8">
            <motion.div
              className="flex items-center gap-4"
              initial={{ x: -20, opacity: 0 }}
              animate={{ x: 0, opacity: 1 }}
              transition={{ delay: 0.1 }}
            >
              <div
                className="w-14 h-14 rounded-2xl flex items-center justify-center text-3xl"
                style={{
                  background: `${project.color}15`,
                  border: `1px solid ${project.color}35`,
                  boxShadow: `0 0 30px ${project.color}20`,
                }}
              >
                {project.icon}
              </div>
              <div>
                <h2 className="text-xl md:text-2xl font-bold text-white leading-tight">{project.title}</h2>
                <p className="text-sm mt-0.5" style={{ color: project.color }}>{project.tagline}</p>
              </div>
            </motion.div>
            <motion.button
              onClick={onClose}
              className="p-2 rounded-xl text-slate-400 hover:text-white focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-cyan-400"
              style={{ background: 'rgba(255,255,255,0.05)' }}
              whileHover={{ scale: 1.1, rotate: 90 }}
              whileTap={{ scale: 0.9 }}
              aria-label="Close"
            >
              <X size={18} />
            </motion.button>
          </div>

          {/* Problem / Solution */}
          <div className="grid md:grid-cols-2 gap-4 mb-6">
            {[
              { label: 'Problem', text: project.problem, color: '#ef4444' },
              { label: 'Solution', text: project.solution, color: '#22c55e' },
            ].map(({ label, text, color }, i) => (
              <motion.div
                key={label}
                className="rounded-2xl p-4"
                style={{ background: `${color}08`, border: `1px solid ${color}20` }}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.15 + i * 0.1 }}
              >
                <div className="text-xs font-bold mb-2 font-mono tracking-widest" style={{ color }}>
                  ◆ {label.toUpperCase()}
                </div>
                <p className="text-sm text-slate-300 leading-relaxed">{text}</p>
              </motion.div>
            ))}
          </div>

          {/* Architecture — animated flow */}
          <motion.div
            className="mb-6"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3 }}
          >
            <h3 className="text-sm font-bold text-white mb-4 flex items-center gap-2">
              <span style={{ color: project.color }}>◆</span> Architecture
            </h3>
            <div className="flex flex-wrap items-center gap-2">
              {project.architecture.map((layer, i) => {
                const LayerIcon = archIcons[layer.layer] || Layers;
                return (
                  <div key={i} className="flex items-center gap-2">
                    <motion.div
                      className="rounded-xl px-3 py-2.5 text-center min-w-[90px]"
                      style={{
                        background: `${project.color}10`,
                        border: `1px solid ${project.color}30`,
                      }}
                      initial={{ opacity: 0, scale: 0.8 }}
                      animate={{ opacity: 1, scale: 1 }}
                      transition={{ delay: 0.3 + i * 0.1, type: 'spring' }}
                      whileHover={{ scale: 1.05, boxShadow: `0 0 15px ${project.color}25` }}
                    >
                      <LayerIcon size={14} style={{ color: project.color, margin: '0 auto 4px' }} aria-hidden="true" />
                      <div className="text-xs font-bold text-white">{layer.layer}</div>
                      {layer.items.slice(0, 2).map((item, j) => (
                        <div key={j} className="text-xs text-slate-500 leading-tight">{item}</div>
                      ))}
                    </motion.div>
                    {i < project.architecture.length - 1 && (
                      <motion.span
                        className="text-slate-600 text-xl font-thin"
                        animate={{ opacity: [0.3, 1, 0.3] }}
                        transition={{ duration: 1.5, repeat: Infinity, delay: i * 0.2 }}
                        aria-hidden="true"
                      >
                        →
                      </motion.span>
                    )}
                  </div>
                );
              })}
            </div>
          </motion.div>

          {/* Features */}
          <motion.div
            className="mb-6"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4 }}
          >
            <h3 className="text-sm font-bold text-white mb-3 flex items-center gap-2">
              <span style={{ color: project.color }}>◆</span> Key Features
            </h3>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
              {project.features.map((f, i) => (
                <motion.div
                  key={i}
                  className="flex items-start gap-2 text-sm text-slate-400 rounded-lg px-3 py-2"
                  style={{ background: 'rgba(255,255,255,0.02)', border: '1px solid rgba(255,255,255,0.05)' }}
                  initial={{ opacity: 0, x: -10 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: 0.4 + i * 0.04 }}
                  whileHover={{ background: `${project.color}08`, borderColor: `${project.color}20`, color: '#e2e8f0' }}
                >
                  <span style={{ color: project.color }} className="mt-0.5 text-xs">✦</span>
                  {f}
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* Tech badges */}
          <div className="flex flex-wrap gap-2 mb-6">
            {project.tech.map(t => (
              <span key={t} className="skill-badge">{t}</span>
            ))}
          </div>

          {/* Links */}
          <div className="flex flex-wrap gap-3 pt-4 border-t border-white/5">
            <motion.a
              href={project.github}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 px-5 py-2.5 rounded-xl text-sm font-medium text-white focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-cyan-400"
              style={{ background: 'rgba(255,255,255,0.06)', border: '1px solid rgba(255,255,255,0.12)' }}
              whileHover={{ scale: 1.04, background: 'rgba(255,255,255,0.1)' }}
              whileTap={{ scale: 0.97 }}
            >
              <Github size={15} aria-hidden="true" /> GitHub
            </motion.a>
            {project.demo && (
              <motion.a
                href={project.demo}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 px-5 py-2.5 rounded-xl text-sm font-semibold focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-cyan-400"
                style={{
                  background: `linear-gradient(135deg, ${project.color}25, ${project.color}10)`,
                  border: `1px solid ${project.color}50`,
                  color: project.color,
                }}
                whileHover={{ scale: 1.04, boxShadow: `0 0 25px ${project.color}35` }}
                whileTap={{ scale: 0.97 }}
              >
                <ExternalLink size={15} aria-hidden="true" /> Live Demo
              </motion.a>
            )}
          </div>
        </div>
      </motion.div>
    </motion.div>
  );
}
