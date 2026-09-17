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
    face: 'front',
  },
  {
    id: 'experience',
    label: 'Experience',
    icon: Briefcase,
    color: '#7c3aed',
    glow: 'rgba(124,58,237,0.4)',
    desc: 'Internships & timeline',
    face: 'right',
  },
  {
    id: 'skills',
    label: 'Skills',
    icon: Cpu,
    color: '#00d4ff',
    glow: 'rgba(0,212,255,0.4)',
    desc: 'Tech stack & expertise',
    face: 'top',
  },
  {
    id: 'certifications',
    label: 'Certificates',
    icon: Award,
    color: '#ec4899',
    glow: 'rgba(236,72,153,0.4)',
    desc: 'Verified achievements',
    face: 'bottom',
  },
];

export default function JourneyExplorer() {
  const [hovered, setHovered] = useState(null);

  const scrollTo = (id) => {
    document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' });
  };

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
          <p className="section-subtitle mt-2">Drag to explore · Click to navigate</p>
        </motion.div>

        {/* Desktop: 3D Cube concept */}
        <div className="hidden md:flex justify-center">
          <CubeVisual categories={categories} scrollTo={scrollTo} />
        </div>

        {/* Mobile: Cards */}
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
                  focusVisibleRingColor: cat.color,
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

function CubeVisual({ categories, scrollTo }) {
  const [rotateX, setRotateX] = useState(-15);
  const [rotateY, setRotateY] = useState(30);
  const [isDragging, setIsDragging] = useState(false);
  const [startPos, setStartPos] = useState({ x: 0, y: 0 });
  const [autoRotate, setAutoRotate] = useState(true);

  // Auto rotation effect via inline animation
  return (
    <div
      className="relative"
      style={{ width: 480, height: 460 }}
      onMouseEnter={() => setAutoRotate(false)}
      onMouseLeave={() => { setAutoRotate(true); setIsDragging(false); }}
      onMouseDown={e => { setIsDragging(true); setStartPos({ x: e.clientX, y: e.clientY }); }}
      onMouseMove={e => {
        if (!isDragging) return;
        const dx = e.clientX - startPos.x;
        const dy = e.clientY - startPos.y;
        setRotateY(ry => ry + dx * 0.4);
        setRotateX(rx => Math.max(-40, Math.min(40, rx - dy * 0.4)));
        setStartPos({ x: e.clientX, y: e.clientY });
      }}
      onMouseUp={() => setIsDragging(false)}
    >
      {/* Central sphere */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2">
        <motion.div
          className="w-28 h-28 rounded-full flex items-center justify-center"
          style={{
            background: 'radial-gradient(circle at 35% 35%, rgba(0,212,255,0.3), rgba(124,58,237,0.2))',
            border: '2px solid rgba(0,212,255,0.4)',
            boxShadow: '0 0 60px rgba(0,212,255,0.3), 0 0 120px rgba(124,58,237,0.1)',
          }}
          animate={{ rotate: autoRotate ? [0, 360] : rotateY }}
          transition={autoRotate ? { duration: 20, repeat: Infinity, ease: 'linear' } : {}}
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

      {/* Cards around the sphere */}
      {categories.map((cat, i) => {
        const positions = [
          { x: -180, y: -100 },  // Projects - top left
          { x: 80,  y: -100 },   // Experience - top right
          { x: -180, y: 80 },    // Skills - bottom left
          { x: 80,  y: 80 },     // Certs - bottom right
        ];
        const pos = positions[i];
        const Icon = cat.icon;

        return (
          <motion.button
            key={cat.id}
            onClick={() => scrollTo(cat.id)}
            className="absolute group focus-visible:outline-none"
            style={{
              left: '50%',
              top: '50%',
              transform: `translate(calc(-50% + ${pos.x}px), calc(-50% + ${pos.y}px))`,
              width: 130,
            }}
            whileHover={{ scale: 1.08, zIndex: 10 }}
            initial={{ opacity: 0, scale: 0.8 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ delay: i * 0.15, duration: 0.5, type: 'spring' }}
            aria-label={`Go to ${cat.label} section`}
          >
            <div
              className="rounded-2xl p-4 text-center transition-all duration-300"
              style={{
                background: `linear-gradient(135deg, ${cat.color}12, rgba(2,8,24,0.8))`,
                border: `1px solid ${cat.color}35`,
                backdropFilter: 'blur(12px)',
              }}
              onMouseEnter={e => {
                e.currentTarget.parentElement.style.zIndex = '20';
                e.currentTarget.style.boxShadow = `0 0 30px ${cat.glow}`;
                e.currentTarget.style.borderColor = `${cat.color}70`;
              }}
              onMouseLeave={e => {
                e.currentTarget.style.boxShadow = 'none';
                e.currentTarget.style.borderColor = `${cat.color}35`;
              }}
            >
              <div
                className="w-10 h-10 rounded-xl flex items-center justify-center mx-auto mb-3 transition-transform duration-300 group-hover:scale-110"
                style={{ background: `${cat.color}18`, border: `1px solid ${cat.color}40` }}
              >
                <Icon size={20} style={{ color: cat.color }} aria-hidden="true" />
              </div>
              <div className="text-sm font-bold text-white">{cat.label}</div>
              <div className="text-xs text-slate-400 mt-0.5">{cat.desc}</div>
            </div>
            {/* Connector line to center */}
            <svg
              className="absolute top-1/2 left-1/2 pointer-events-none"
              style={{
                width: Math.abs(pos.x),
                height: 2,
                position: 'absolute',
                top: '50%',
                left: pos.x < 0 ? '100%' : 'auto',
                right: pos.x > 0 ? '100%' : 'auto',
                zIndex: -1,
              }}
              aria-hidden="true"
            >
              <line
                x1="0"
                y1="1"
                x2={Math.abs(pos.x)}
                y2="1"
                stroke={cat.color}
                strokeWidth="1"
                strokeOpacity="0.2"
                strokeDasharray="4 4"
              />
            </svg>
          </motion.button>
        );
      })}

      {/* Drag hint */}
      <div className="absolute bottom-4 left-1/2 -translate-x-1/2 text-xs text-slate-600 font-mono">
        Click a section to navigate
      </div>
    </div>
  );
}
