import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Github, ExternalLink, X, ChevronLeft, ChevronRight, Eye, ArrowRight } from 'lucide-react';
import { projects } from '../data/portfolioData';

export default function Projects() {
  const [selected, setSelected] = useState(null);
  const [activeIdx, setActiveIdx] = useState(0);

  const open = (project) => { setSelected(project); document.body.style.overflow = 'hidden'; };
  const close = () => { setSelected(null); document.body.style.overflow = ''; };

  return (
    <section
      id="projects"
      className="section-padding relative z-10"
      aria-labelledby="projects-heading"
    >
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <motion.div
          className="text-center mb-14"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <h2 id="projects-heading" className="section-title">Featured Projects</h2>
          <p className="section-subtitle mt-2">Real Problems. Creative Solutions.</p>
        </motion.div>

        {/* Project cards grid */}
        <div className="grid md:grid-cols-2 gap-6 lg:gap-8">
          {projects.map((project, i) => (
            <ProjectCard key={project.id} project={project} index={i} onOpen={open} />
          ))}
        </div>
      </div>

      {/* Project Detail Modal */}
      <AnimatePresence>
        {selected && (
          <ProjectModal project={selected} onClose={close} />
        )}
      </AnimatePresence>
    </section>
  );
}

function ProjectCard({ project, index, onOpen }) {
  return (
    <motion.div
      className="group relative rounded-2xl overflow-hidden card-hover"
      style={{
        background: `linear-gradient(135deg, ${project.color}08, rgba(2,8,24,0.95))`,
        border: `1px solid ${project.color}25`,
      }}
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      onMouseEnter={e => {
        e.currentTarget.style.border = `1px solid ${project.color}50`;
        e.currentTarget.style.boxShadow = `0 0 40px ${project.color}20`;
      }}
      onMouseLeave={e => {
        e.currentTarget.style.border = `1px solid ${project.color}25`;
        e.currentTarget.style.boxShadow = 'none';
      }}
    >
      {/* Top banner */}
      <div
        className="h-2 w-full"
        style={{ background: `linear-gradient(90deg, ${project.color}, transparent)` }}
      />

      <div className="p-6 md:p-7">
        {/* Icon + title */}
        <div className="flex items-start justify-between mb-4">
          <div className="flex items-center gap-3">
            <span className="text-3xl" role="img" aria-label={project.shortTitle}>{project.icon}</span>
            <div>
              <h3 className="text-lg font-bold text-white leading-tight group-hover:text-cyan-400 transition-colors">
                {project.shortTitle}
              </h3>
              <p className="text-xs text-slate-500 mt-0.5">{project.tagline}</p>
            </div>
          </div>
        </div>

        {/* Description */}
        <p className="text-sm text-slate-400 leading-relaxed mb-5 line-clamp-3">
          {project.description}
        </p>

        {/* Tech stack */}
        <div className="flex flex-wrap gap-2 mb-6">
          {project.tech.slice(0, 5).map(t => (
            <span key={t} className="skill-badge">{t}</span>
          ))}
          {project.tech.length > 5 && (
            <span className="skill-badge">+{project.tech.length - 5}</span>
          )}
        </div>

        {/* Actions */}
        <div className="flex flex-wrap gap-3">
          <a
            href={project.github}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2 px-4 py-2 rounded-xl text-xs font-medium text-slate-300 hover:text-white transition-all duration-200 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-cyan-400"
            style={{
              background: 'rgba(255,255,255,0.05)',
              border: '1px solid rgba(255,255,255,0.1)',
            }}
            onMouseEnter={e => { e.currentTarget.style.borderColor = 'rgba(255,255,255,0.25)'; }}
            onMouseLeave={e => { e.currentTarget.style.borderColor = 'rgba(255,255,255,0.1)'; }}
            aria-label={`View ${project.shortTitle} on GitHub`}
          >
            <Github size={13} aria-hidden="true" />
            GitHub
          </a>
          {project.demo && (
            <a
              href={project.demo}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 px-4 py-2 rounded-xl text-xs font-medium transition-all duration-200 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-cyan-400"
              style={{
                background: `${project.color}15`,
                border: `1px solid ${project.color}40`,
                color: project.color,
              }}
              onMouseEnter={e => { e.currentTarget.style.boxShadow = `0 0 12px ${project.color}30`; }}
              onMouseLeave={e => { e.currentTarget.style.boxShadow = 'none'; }}
              aria-label={`View live demo of ${project.shortTitle}`}
            >
              <ExternalLink size={13} aria-hidden="true" />
              Live Demo
            </a>
          )}
          <button
            onClick={() => onOpen(project)}
            className="flex items-center gap-2 px-4 py-2 rounded-xl text-xs font-medium text-slate-300 hover:text-white transition-all duration-200 ml-auto focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-cyan-400"
            style={{
              background: 'rgba(0,212,255,0.05)',
              border: '1px solid rgba(0,212,255,0.15)',
            }}
            onMouseEnter={e => { e.currentTarget.style.borderColor = 'rgba(0,212,255,0.35)'; }}
            onMouseLeave={e => { e.currentTarget.style.borderColor = 'rgba(0,212,255,0.15)'; }}
            aria-label={`View details for ${project.shortTitle}`}
          >
            <Eye size={13} aria-hidden="true" />
            Details
            <ArrowRight size={11} aria-hidden="true" />
          </button>
        </div>
      </div>
    </motion.div>
  );
}

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
      {/* Backdrop */}
      <div
        className="absolute inset-0 bg-black/70 backdrop-blur-md"
        onClick={onClose}
        aria-hidden="true"
      />

      {/* Modal content */}
      <motion.div
        className="relative w-full max-w-3xl max-h-[90vh] overflow-y-auto rounded-2xl"
        style={{
          background: 'rgba(5, 13, 31, 0.97)',
          border: `1px solid ${project.color}30`,
          boxShadow: `0 0 60px ${project.color}20`,
        }}
        initial={{ scale: 0.9, opacity: 0, y: 30 }}
        animate={{ scale: 1, opacity: 1, y: 0 }}
        exit={{ scale: 0.9, opacity: 0, y: 30 }}
        transition={{ type: 'spring', stiffness: 300, damping: 30 }}
      >
        {/* Top bar */}
        <div
          className="h-1.5 w-full rounded-t-2xl"
          style={{ background: `linear-gradient(90deg, ${project.color}, #7c3aed)` }}
        />

        <div className="p-6 md:p-8">
          {/* Header */}
          <div className="flex items-start justify-between mb-6">
            <div className="flex items-center gap-4">
              <span className="text-4xl">{project.icon}</span>
              <div>
                <h2 className="text-xl md:text-2xl font-bold text-white leading-tight">{project.title}</h2>
                <p className="text-sm text-slate-400 mt-1">{project.tagline}</p>
              </div>
            </div>
            <button
              onClick={onClose}
              className="p-2 rounded-xl text-slate-400 hover:text-white transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-cyan-400"
              style={{ background: 'rgba(255,255,255,0.05)' }}
              aria-label="Close project details"
            >
              <X size={18} />
            </button>
          </div>

          {/* Problem / Solution */}
          <div className="grid md:grid-cols-2 gap-4 mb-6">
            {[
              { label: 'Problem', text: project.problem, color: '#ef4444' },
              { label: 'Solution', text: project.solution, color: '#22c55e' },
            ].map(({ label, text, color }) => (
              <div
                key={label}
                className="rounded-xl p-4"
                style={{ background: `${color}08`, border: `1px solid ${color}20` }}
              >
                <div className="text-xs font-semibold mb-2 font-mono" style={{ color }}>
                  {label.toUpperCase()}
                </div>
                <p className="text-sm text-slate-300 leading-relaxed">{text}</p>
              </div>
            ))}
          </div>

          {/* Features */}
          <div className="mb-6">
            <h3 className="text-sm font-bold text-white mb-3 flex items-center gap-2">
              <span style={{ color: project.color }}>◆</span> Key Features
            </h3>
            <ul className="grid grid-cols-1 sm:grid-cols-2 gap-2">
              {project.features.map((f, i) => (
                <li key={i} className="flex items-start gap-2 text-sm text-slate-400">
                  <span className="mt-0.5 text-cyan-500" aria-hidden="true">›</span>
                  {f}
                </li>
              ))}
            </ul>
          </div>

          {/* Architecture */}
          <div className="mb-6">
            <h3 className="text-sm font-bold text-white mb-4 flex items-center gap-2">
              <span style={{ color: project.color }}>◆</span> Architecture
            </h3>
            <div className="flex flex-wrap items-center gap-2">
              {project.architecture.map((layer, i) => (
                <div key={i} className="flex items-center gap-2">
                  <div
                    className="rounded-xl px-3 py-2 text-center min-w-[100px]"
                    style={{
                      background: `${project.color}10`,
                      border: `1px solid ${project.color}30`,
                    }}
                  >
                    <div className="text-xs font-bold text-white mb-1">{layer.layer}</div>
                    {layer.items.map((item, j) => (
                      <div key={j} className="text-xs text-slate-400">{item}</div>
                    ))}
                  </div>
                  {i < project.architecture.length - 1 && (
                    <span className="text-slate-600 text-lg" aria-hidden="true">↓</span>
                  )}
                </div>
              ))}
            </div>
          </div>

          {/* Tech stack */}
          <div className="mb-6">
            <h3 className="text-sm font-bold text-white mb-3 flex items-center gap-2">
              <span style={{ color: project.color }}>◆</span> Tech Stack
            </h3>
            <div className="flex flex-wrap gap-2">
              {project.tech.map(t => (
                <span key={t} className="skill-badge">{t}</span>
              ))}
            </div>
          </div>

          {/* Links */}
          <div className="flex flex-wrap gap-3 pt-4 border-t border-white/5">
            <a
              href={project.github}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 px-5 py-2.5 rounded-xl text-sm font-medium transition-all duration-200 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-cyan-400"
              style={{
                background: 'rgba(255,255,255,0.06)',
                border: '1px solid rgba(255,255,255,0.12)',
                color: 'white',
              }}
              onMouseEnter={e => { e.currentTarget.style.background = 'rgba(255,255,255,0.1)'; }}
              onMouseLeave={e => { e.currentTarget.style.background = 'rgba(255,255,255,0.06)'; }}
            >
              <Github size={15} aria-hidden="true" />
              View on GitHub
            </a>
            {project.demo && (
              <a
                href={project.demo}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 px-5 py-2.5 rounded-xl text-sm font-semibold transition-all duration-200 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-cyan-400"
                style={{
                  background: `linear-gradient(135deg, ${project.color}25, ${project.color}10)`,
                  border: `1px solid ${project.color}50`,
                  color: project.color,
                }}
                onMouseEnter={e => { e.currentTarget.style.boxShadow = `0 0 20px ${project.color}30`; }}
                onMouseLeave={e => { e.currentTarget.style.boxShadow = 'none'; }}
              >
                <ExternalLink size={15} aria-hidden="true" />
                Live Demo
              </a>
            )}
          </div>
        </div>
      </motion.div>
    </motion.div>
  );
}
