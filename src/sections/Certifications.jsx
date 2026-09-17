import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Award, ChevronLeft, ChevronRight, ExternalLink } from 'lucide-react';
import { certifications } from '../data/portfolioData';

const categoryIcons = {
  Cisco: '🌐',
  NPTEL: '🎓',
  Unstop: '⚡',
  Tata: '💼',
  Internship: '🏢',
};

export default function Certifications() {
  const [activeCategory, setActiveCategory] = useState('All');
  const categories = ['All', ...new Set(certifications.map(c => c.category))];

  const filtered = activeCategory === 'All'
    ? certifications
    : certifications.filter(c => c.category === activeCategory);

  return (
    <section
      id="certifications"
      className="section-padding relative z-10"
      aria-labelledby="certs-heading"
    >
      <div className="max-w-6xl mx-auto">
        {/* Header */}
        <motion.div
          className="text-center mb-12"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <h2 id="certs-heading" className="section-title">Certifications</h2>
          <p className="section-subtitle mt-2">Verified skills. Real achievements.</p>
        </motion.div>

        {/* Category filter */}
        <div className="flex flex-wrap justify-center gap-2 mb-10" role="group" aria-label="Filter certifications by organization">
          {categories.map(cat => {
            const isActive = activeCategory === cat;
            return (
              <button
                key={cat}
                onClick={() => setActiveCategory(cat)}
                className="px-4 py-2 rounded-full text-xs font-semibold transition-all duration-200 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-cyan-400"
                style={{
                  background: isActive ? 'rgba(0,212,255,0.15)' : 'rgba(255,255,255,0.03)',
                  border: `1px solid ${isActive ? 'rgba(0,212,255,0.5)' : 'rgba(255,255,255,0.08)'}`,
                  color: isActive ? '#00d4ff' : '#94a3b8',
                  boxShadow: isActive ? '0 0 12px rgba(0,212,255,0.2)' : 'none',
                }}
                aria-pressed={isActive}
              >
                {cat !== 'All' && categoryIcons[cat] && (
                  <span className="mr-1" aria-hidden="true">{categoryIcons[cat]}</span>
                )}
                {cat}
              </button>
            );
          })}
        </div>

        {/* Cert cards grid */}
        <motion.div
          layout
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-5"
        >
          <AnimatePresence mode="popLayout">
            {filtered.map((cert, i) => (
              <CertCard key={cert.id} cert={cert} index={i} />
            ))}
          </AnimatePresence>
        </motion.div>

        {/* Note about certificate files */}
        <motion.div
          className="mt-10 rounded-xl p-4 text-center"
          style={{
            background: 'rgba(245,158,11,0.06)',
            border: '1px solid rgba(245,158,11,0.2)',
          }}
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
        >
          <p className="text-sm text-amber-400/80">
            <span className="font-semibold text-amber-400">📌 Note:</span>{' '}
            To enable "View Certificate" links, add your certificate PDF files to{' '}
            <code className="font-mono bg-white/5 px-1.5 py-0.5 rounded text-amber-300">public/certificates/</code>{' '}
            and update the paths in{' '}
            <code className="font-mono bg-white/5 px-1.5 py-0.5 rounded text-amber-300">src/data/portfolioData.js</code>.
          </p>
        </motion.div>
      </div>
    </section>
  );
}

function CertCard({ cert, index }) {
  return (
    <motion.div
      layout
      className="group relative rounded-2xl overflow-hidden card-hover"
      style={{
        background: `linear-gradient(135deg, ${cert.color}08, rgba(2,8,24,0.95))`,
        border: `1px solid ${cert.color}20`,
      }}
      initial={{ opacity: 0, scale: 0.9 }}
      animate={{ opacity: 1, scale: 1 }}
      exit={{ opacity: 0, scale: 0.9 }}
      transition={{ delay: index * 0.05 }}
      onMouseEnter={e => {
        e.currentTarget.style.border = `1px solid ${cert.color}45`;
        e.currentTarget.style.boxShadow = `0 0 30px ${cert.color}15`;
      }}
      onMouseLeave={e => {
        e.currentTarget.style.border = `1px solid ${cert.color}20`;
        e.currentTarget.style.boxShadow = 'none';
      }}
    >
      {/* Top accent bar */}
      <div
        className="h-0.5 w-full"
        style={{ background: `linear-gradient(90deg, ${cert.color}, transparent)` }}
      />

      <div className="p-5">
        {/* Icon + org */}
        <div className="flex items-center gap-3 mb-4">
          <div
            className="w-10 h-10 rounded-xl flex items-center justify-center text-lg flex-shrink-0"
            style={{
              background: `${cert.color}15`,
              border: `1px solid ${cert.color}30`,
            }}
            aria-hidden="true"
          >
            {categoryIcons[cert.category] || '🏆'}
          </div>
          <div>
            <div
              className="text-xs font-semibold"
              style={{ color: cert.color }}
            >
              {cert.issuer}
            </div>
            <div className="text-xs text-slate-500">{cert.category}</div>
          </div>
        </div>

        {/* Title */}
        <h3 className="text-sm font-bold text-white mb-4 leading-snug group-hover:text-cyan-400 transition-colors">
          {cert.title}
        </h3>

        {/* Action */}
        <div className="flex items-center justify-between">
          <span
            className="flex items-center gap-1.5 text-xs font-medium px-2.5 py-1 rounded-lg"
            style={{ background: `${cert.color}12`, color: cert.color, border: `1px solid ${cert.color}25` }}
          >
            <Award size={11} aria-hidden="true" />
            Certified
          </span>
          <span className="text-xs text-slate-600 italic">
            Add PDF to unlock
          </span>
        </div>
      </div>
    </motion.div>
  );
}
