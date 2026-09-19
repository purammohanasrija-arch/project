import { useState } from 'react';
import { motion } from 'framer-motion';
import { FolderKanban, Briefcase, Cpu, Award, ChevronRight } from 'lucide-react';

const categories = [
  {
    id: 'projects',
    label: 'Projects',
    icon: FolderKanban,
    color: '#06b6d4',
    glow: 'rgba(6,182,212,0.4)',
    desc: 'Real-world apps & visualizers',
  },
  {
    id: 'experience',
    label: 'Experience',
    icon: Briefcase,
    color: '#7c3aed',
    glow: 'rgba(124,58,237,0.4)',
    desc: 'Internships & timeline',
  },
  {
    id: 'skills',
    label: 'Skills',
    icon: Cpu,
    color: '#00d4ff',
    glow: 'rgba(0,212,255,0.4)',
    desc: 'Tech stack & expertise',
  },
  {
    id: 'certifications',
    label: 'Certificates',
    icon: Award,
    color: '#ec4899',
    glow: 'rgba(236,72,153,0.4)',
    desc: 'Verified achievements',
  },
];

function scrollTo(id) {
  document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' });
}

export default function JourneyExplorer() {
  return (
    <section
      id="journey"
      className="section-padding relative z-10"
      aria-labelledby="journey-heading"
    >
      <div className="max-w-6xl mx-auto">
        {/* Header */}
        <motion.div
          className="text-center mb-14"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <h2 id="journey-heading" className="section-title">Explore My Journey</h2>
          <p className="section-subtitle mt-2">Click a section to navigate</p>
        </motion.div>

        {/* Desktop layout */}
        <div className="hidden md:block">
          <DesktopGrid />
        </div>

        {/* Mobile: 2x2 cards */}
        <div className="grid grid-cols-2 gap-4 md:hidden">
          {categories.map((cat, i) => {
            const Icon = cat.icon;
            return (
              <motion.button
                key={cat.id}
                onClick={() => scrollTo(cat.id)}
                className="group relative p-5 rounded-2xl text-left transition-all duration-300 focus-visible:outline-none focus-visible:ring-2"
                style={{
                  background: `linear-gradient(135deg, ${cat.color}10, ${cat.color}05)`,
                  border: `1px solid ${cat.color}30`,
                }}
                onMouseEnter={e => {
                  e.currentTarget.style.boxShadow = `0 0 30px ${cat.glow}`;
                  e.currentTarget.style.borderColor = `${cat.color}60`;
                }}
                onMouseLeave={e => {
                  e.currentTarget.style.boxShadow = 'none';
                  e.currentTarget.style.borderColor = `${cat.color}30`;
                }}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                aria-label={`Go to ${cat.label} section`}
              >
                <div
                  className="w-10 h-10 rounded-xl flex items-center justify-center mb-3"
                  style={{ background: `${cat.color}18`, border: `1px solid ${cat.color}40` }}
                >
                  <Icon size={20} style={{ color: cat.color }} aria-hidden="true" />
                </div>
                <div className="font-bold text-white text-sm">{cat.label}</div>
                <div className="text-xs text-slate-400 mt-1">{cat.desc}</div>
                <ChevronRight
                  size={14}
                  className="absolute bottom-4 right-4 text-slate-600 group-hover:text-slate-300 transition-colors"
                  aria-hidden="true"
                />
              </motion.button>
            );
          })}
        </div>
      </div>
    </section>
  );
}

function DesktopGrid() {
  const [hovered, setHovered] = useState(null);

  const positions = [
    { top: '10%', left: '5%' },
    { top: '10%', right: '5%' },
    { bottom: '10%', left: '5%' },
    { bottom: '10%', right: '5%' },
  ];

  return (
    <div
      className="relative mx-auto"
      style={{ width: '100%', maxWidth: 700, height: 420 }}
    >
      {/* Center sphere */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 z-10">
        <motion.div
          className="w-28 h-28 rounded-full flex items-center justify-center"
          style={{
            background: 'radial-gradient(circle at 35% 35%, rgba(0,212,255,0.3), rgba(124,58,237,0.2))',
            border: '2px solid rgba(0,212,255,0.4)',
            boxShadow: '0 0 60px rgba(0,212,255,0.3), 0 0 120px rgba(124,58,237,0.1)',
          }}
          animate={{ rotate: [0, 360] }}
          transition={{ duration: 20, repeat: Infinity, ease: 'linear' }}
        >
          <span
            className="text-xl font-black"
            style={{
              background: 'linear-gradient(135deg, #00d4ff, #a78bfa)',
              WebkitBackgroundClip: 'text',
              WebkitTextFillColor: 'transparent',
              backgroundClip: 'text',
            }}
          >
            MSP
          </span>
        </motion.div>
      </div>

      {/* Connection lines SVG */}
      <svg
        className="absolute inset-0 w-full h-full pointer-events-none"
        aria-hidden="true"
      >
        {categories.map((cat, i) => {
          const px = i < 2 ? (i === 0 ? '18%' : '82%') : (i === 2 ? '18%' : '82%');
          const py = i < 2 ? '28%' : '72%';
          return (
            <line
              key={cat.id}
              x1="50%" y1="50%"
              x2={px} y2={py}
              stroke={cat.color}
              strokeWidth="1"
              strokeOpacity={hovered === cat.id ? 0.5 : 0.15}
              strokeDasharray="6 4"
            />
          );
        })}
      </svg>

      {/* Category cards */}
      {categories.map((cat, i) => {
        const Icon = cat.icon;
        const pos = positions[i];
        return (
          <motion.button
            key={cat.id}
            onClick={() => scrollTo(cat.id)}
            className="absolute focus-visible:outline-none focus-visible:ring-2"
            style={{
              ...pos,
              width: 150,
            }}
            onMouseEnter={() => setHovered(cat.id)}
            onMouseLeave={() => setHovered(null)}
            whileHover={{ scale: 1.06 }}
            initial={{ opacity: 0, scale: 0.85 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ delay: i * 0.12, duration: 0.5, type: 'spring' }}
            aria-label={`Go to ${cat.label} section`}
          >
            <div
              className="rounded-2xl p-4 text-center transition-all duration-300"
              style={{
                background: `linear-gradient(135deg, ${cat.color}12, rgba(2,8,24,0.85))`,
                border: `1px solid ${hovered === cat.id ? cat.color + '70' : cat.color + '35'}`,
                backdropFilter: 'blur(12px)',
                boxShadow: hovered === cat.id ? `0 0 30px ${cat.glow}` : 'none',
              }}
            >
              <div
                className="w-10 h-10 rounded-xl flex items-center justify-center mx-auto mb-3 transition-transform duration-300"
                style={{
                  background: `${cat.color}18`,
                  border: `1px solid ${cat.color}40`,
                  transform: hovered === cat.id ? 'scale(1.1)' : 'scale(1)',
                }}
              >
                <Icon size={20} style={{ color: cat.color }} aria-hidden="true" />
              </div>
              <div className="text-sm font-bold text-white">{cat.label}</div>
              <div className="text-xs text-slate-400 mt-0.5">{cat.desc}</div>
            </div>
          </motion.button>
        );
      })}
    </div>
  );
}
