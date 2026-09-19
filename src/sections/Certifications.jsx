import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Award, ChevronLeft, ChevronRight, CheckCircle, ExternalLink } from 'lucide-react';
import { certifications } from '../data/portfolioData';

const categoryIcons = { Cisco: '🌐', NPTEL: '🎓', Unstop: '⚡', Tata: '💼', Internship: '🏢' };
const categoryColors = { Cisco: '#0ea5e9', NPTEL: '#f59e0b', Unstop: '#22c55e', Tata: '#ec4899', Internship: '#7c3aed' };

export default function Certifications() {
  const [activeCategory, setActiveCategory] = useState('All');
  const categories = ['All', ...new Set(certifications.map(c => c.category))];
  const filtered = activeCategory === 'All' ? certifications : certifications.filter(c => c.category === activeCategory);

  return (
    <section id="certifications" className="section-padding relative z-10" aria-labelledby="certs-heading">
      <div className="max-w-6xl mx-auto">
        {/* Header */}
        <motion.div
          className="text-center mb-12"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          <h2 id="certs-heading" className="section-title">Certifications</h2>
          <p className="section-subtitle mt-2">Verified skills · Real achievements</p>
        </motion.div>

        {/* Filter pills */}
        <div className="flex flex-wrap justify-center gap-2 mb-10" role="group" aria-label="Filter certifications">
          {categories.map(cat => {
            const isActive = activeCategory === cat;
            const color = cat === 'All' ? '#00d4ff' : (categoryColors[cat] || '#00d4ff');
            return (
              <motion.button
                key={cat}
                onClick={() => setActiveCategory(cat)}
                className="px-4 py-2 rounded-full text-xs font-semibold transition-colors duration-200 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-cyan-400"
                style={{
                  background: isActive ? `${color}20` : 'rgba(255,255,255,0.03)',
                  border: `1px solid ${isActive ? color : 'rgba(255,255,255,0.08)'}`,
                  color: isActive ? color : '#94a3b8',
                }}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                aria-pressed={isActive}
              >
                {cat !== 'All' && categoryIcons[cat] && (
                  <span className="mr-1.5" aria-hidden="true">{categoryIcons[cat]}</span>
                )}
                {cat}
              </motion.button>
            );
          })}
        </div>

        {/* 3D Card Grid */}
        <motion.div layout className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
          <AnimatePresence mode="popLayout">
            {filtered.map((cert, i) => (
              <CertCard3D key={cert.id} cert={cert} index={i} />
            ))}
          </AnimatePresence>
        </motion.div>


      </div>
    </section>
  );
}

function CertCard3D({ cert, index }) {
  const [tilt, setTilt] = useState({ x: 0, y: 0 });
  const color = categoryColors[cert.category] || cert.color || '#00d4ff';

  const handleMouseMove = (e) => {
    const rect = e.currentTarget.getBoundingClientRect();
    const x = ((e.clientX - rect.left) / rect.width - 0.5) * 16;
    const y = ((e.clientY - rect.top) / rect.height - 0.5) * -16;
    setTilt({ x, y });
  };

  return (
    <motion.div
      layout
      initial={{ opacity: 0, scale: 0.85, y: 30 }}
      animate={{ opacity: 1, scale: 1, y: 0 }}
      exit={{ opacity: 0, scale: 0.85, y: 30 }}
      transition={{ delay: index * 0.06, type: 'spring', stiffness: 200 }}
      style={{ perspective: 800 }}
      onMouseMove={handleMouseMove}
      onMouseLeave={() => setTilt({ x: 0, y: 0 })}
    >
      <motion.div
        className="relative rounded-2xl overflow-hidden cursor-default holographic glow-border"
        style={{
          background: `linear-gradient(135deg, ${color}10, rgba(2,8,24,0.97))`,
          border: `1px solid ${color}25`,
          transformStyle: 'preserve-3d',
        }}
        animate={{
          rotateX: tilt.y,
          rotateY: tilt.x,
          boxShadow: tilt.x !== 0
            ? `0 25px 60px ${color}20, 0 0 0 1px ${color}35`
            : `0 4px 20px rgba(0,0,0,0.3)`,
        }}
        transition={{ duration: 0.15 }}
        whileHover={{ scale: 1.02 }}
      >
        {/* Top accent */}
        <div
          className="h-0.5 w-full"
          style={{ background: `linear-gradient(90deg, transparent, ${color}, transparent)` }}
        />

        {/* Holographic shimmer overlay */}
        <motion.div
          className="absolute inset-0 pointer-events-none opacity-0"
          style={{
            background: `linear-gradient(105deg, transparent 30%, ${color}12 50%, transparent 70%)`,
          }}
          whileHover={{ opacity: 1, backgroundPosition: ['-100% 0', '200% 0'] }}
          transition={{ duration: 0.8 }}
        />

        <div className="p-5">
          {/* Org icon + badge */}
          <div className="flex items-center justify-between mb-4">
            <div className="flex items-center gap-3">
              <motion.div
                className="w-11 h-11 rounded-2xl flex items-center justify-center text-xl"
                style={{
                  background: `${color}15`,
                  border: `1px solid ${color}30`,
                  boxShadow: `0 0 15px ${color}15`,
                }}
                whileHover={{ rotate: [0, -10, 10, 0], transition: { duration: 0.4 } }}
                aria-hidden="true"
              >
                {categoryIcons[cert.category] || '🏆'}
              </motion.div>
              <div>
                <div className="text-xs font-bold" style={{ color }}>{cert.issuer}</div>
                <div className="text-xs text-slate-600">{cert.category}</div>
              </div>
            </div>

            {/* Verified badge */}
            <motion.div
              className="flex items-center gap-1 px-2 py-1 rounded-full text-xs font-semibold"
              style={{
                background: 'rgba(34,197,94,0.1)',
                border: '1px solid rgba(34,197,94,0.3)',
                color: '#4ade80',
              }}
              animate={{ scale: [1, 1.05, 1] }}
              transition={{ duration: 2, repeat: Infinity, delay: index * 0.1 }}
            >
              <CheckCircle size={9} aria-hidden="true" />
              Verified
            </motion.div>
          </div>

          {/* Title */}
          <h3 className="text-sm font-bold text-white mb-4 leading-snug">{cert.title}</h3>

          {/* Award icon row */}
          <div className="flex items-center justify-between">
            <div
              className="flex items-center gap-1.5 text-xs font-medium px-2.5 py-1 rounded-lg"
              style={{ background: `${color}10`, color, border: `1px solid ${color}25` }}
            >
              <Award size={11} aria-hidden="true" />
              Certificate
            </div>
            {cert.file ? (
              <a
                href={cert.file}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-1 text-xs font-medium px-2.5 py-1 rounded-lg transition-all duration-200 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-cyan-400"
                style={{
                  background: `${color}10`,
                  border: `1px solid ${color}30`,
                  color,
                }}
                onMouseEnter={e => { e.currentTarget.style.boxShadow = `0 0 10px ${color}30`; }}
                onMouseLeave={e => { e.currentTarget.style.boxShadow = 'none'; }}
                aria-label={`View ${cert.title} certificate`}
              >
                <ExternalLink size={10} aria-hidden="true" />
                View
              </a>
            ) : (
              <span className="text-xs text-slate-700 italic"></span>
            )}
          </div>
        </div>
      </motion.div>
    </motion.div>
  );
}
