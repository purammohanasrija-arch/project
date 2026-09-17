import { useState, useEffect, useRef } from 'react';
import { motion } from 'framer-motion';
import { skills } from '../data/portfolioData';

const categoryColors = {
  'Programming Languages': '#3b82f6',
  'Web Technologies': '#06b6d4',
  'Databases': '#22c55e',
  'Tools & Platforms': '#f59e0b',
  'AI / ML': '#ec4899',
  'APIs': '#10b981',
  'UI/UX': '#a78bfa',
};

export default function Skills() {
  const [activeCategory, setActiveCategory] = useState('All');
  const categories = ['All', ...Object.keys(skills)];

  const filtered = activeCategory === 'All'
    ? Object.entries(skills)
    : [[activeCategory, skills[activeCategory]]];

  return (
    <section
      id="skills"
      className="section-padding relative z-10"
      aria-labelledby="skills-heading"
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
          <h2 id="skills-heading" className="section-title">My Skills</h2>
          <p className="section-subtitle mt-2">Technologies I work with</p>
        </motion.div>

        {/* Constellation Visual (desktop) */}
        <div className="hidden lg:block mb-16">
          <SkillConstellation />
        </div>

        {/* Category filter */}
        <div className="flex flex-wrap justify-center gap-2 mb-10" role="group" aria-label="Filter skills by category">
          {categories.map(cat => {
            const color = cat === 'All' ? '#00d4ff' : categoryColors[cat];
            const isActive = activeCategory === cat;
            return (
              <button
                key={cat}
                onClick={() => setActiveCategory(cat)}
                className="px-4 py-2 rounded-full text-xs font-semibold transition-all duration-200 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-cyan-400"
                style={{
                  background: isActive ? `${color}20` : 'rgba(255,255,255,0.03)',
                  border: `1px solid ${isActive ? color : 'rgba(255,255,255,0.08)'}`,
                  color: isActive ? color : '#94a3b8',
                  boxShadow: isActive ? `0 0 12px ${color}30` : 'none',
                }}
                aria-pressed={isActive}
              >
                {cat}
              </button>
            );
          })}
        </div>

        {/* Skill groups */}
        <div className="space-y-6">
          {filtered.map(([category, items], gi) => {
            const color = categoryColors[category] || '#00d4ff';
            return (
              <motion.div
                key={category}
                className="rounded-2xl p-5 md:p-6"
                style={{
                  background: `linear-gradient(135deg, ${color}06, rgba(2,8,24,0.8))`,
                  border: `1px solid ${color}20`,
                }}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: gi * 0.08 }}
              >
                <div className="flex items-center gap-2 mb-4">
                  <div
                    className="w-2 h-2 rounded-full"
                    style={{ background: color, boxShadow: `0 0 6px ${color}` }}
                    aria-hidden="true"
                  />
                  <h3
                    className="text-sm font-bold"
                    style={{ color }}
                  >
                    {category}
                  </h3>
                </div>
                <div className="flex flex-wrap gap-2">
                  {items.map((skill, si) => (
                    <motion.span
                      key={skill}
                      className="px-3 py-1.5 rounded-lg text-sm font-medium cursor-default transition-all duration-200"
                      style={{
                        background: `${color}10`,
                        border: `1px solid ${color}25`,
                        color: '#e2e8f0',
                      }}
                      onMouseEnter={e => {
                        e.currentTarget.style.background = `${color}22`;
                        e.currentTarget.style.borderColor = `${color}55`;
                        e.currentTarget.style.boxShadow = `0 0 10px ${color}30`;
                        e.currentTarget.style.color = color;
                      }}
                      onMouseLeave={e => {
                        e.currentTarget.style.background = `${color}10`;
                        e.currentTarget.style.borderColor = `${color}25`;
                        e.currentTarget.style.boxShadow = 'none';
                        e.currentTarget.style.color = '#e2e8f0';
                      }}
                      initial={{ opacity: 0, scale: 0.8 }}
                      whileInView={{ opacity: 1, scale: 1 }}
                      viewport={{ once: true }}
                      transition={{ delay: gi * 0.05 + si * 0.04 }}
                    >
                      {skill}
                    </motion.span>
                  ))}
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}

function SkillConstellation() {
  const canvasRef = useRef(null);

  const centerNode = { label: 'Mohana', x: 0, y: 0, r: 36, color: '#00d4ff' };
  const allSkills = Object.entries(skills).flatMap(([cat, items]) =>
    items.map(item => ({ label: item, category: cat }))
  );

  const nodes = allSkills.map((s, i) => {
    const angle = (i / allSkills.length) * Math.PI * 2;
    const layer = Math.floor(i / 7);
    const radius = 140 + layer * 90;
    const color = categoryColors[s.category] || '#00d4ff';
    return { ...s, angle, radius, color };
  });

  return (
    <div className="relative w-full overflow-hidden" style={{ height: 340 }} aria-hidden="true">
      <div className="absolute inset-0 flex items-center justify-center">
        <div className="relative" style={{ width: 700, height: 320 }}>
          {/* SVG connection lines */}
          <svg className="absolute inset-0 w-full h-full" viewBox="0 0 700 320">
            {nodes.slice(0, 25).map((node, i) => {
              const cx = 350 + node.radius * Math.cos(node.angle) * 0.85;
              const cy = 160 + node.radius * Math.sin(node.angle) * 0.6;
              return (
                <line
                  key={i}
                  x1={350} y1={160}
                  x2={Math.max(10, Math.min(690, cx))}
                  y2={Math.max(10, Math.min(310, cy))}
                  stroke={node.color}
                  strokeWidth="0.5"
                  strokeOpacity="0.2"
                />
              );
            })}
          </svg>

          {/* Center node */}
          <div
            className="absolute z-10 flex items-center justify-center rounded-full font-black text-sm"
            style={{
              left: 350 - 36,
              top: 160 - 36,
              width: 72,
              height: 72,
              background: 'radial-gradient(circle, rgba(0,212,255,0.25), rgba(124,58,237,0.15))',
              border: '2px solid rgba(0,212,255,0.6)',
              boxShadow: '0 0 30px rgba(0,212,255,0.4)',
            }}
          >
            <span style={{
              background: 'linear-gradient(135deg, #00d4ff, #a78bfa)',
              WebkitBackgroundClip: 'text',
              WebkitTextFillColor: 'transparent',
              backgroundClip: 'text',
            }}>
              MSP
            </span>
          </div>

          {/* Skill nodes */}
          {nodes.slice(0, 25).map((node, i) => {
            const cx = 350 + node.radius * Math.cos(node.angle) * 0.85;
            const cy = 160 + node.radius * Math.sin(node.angle) * 0.6;
            const clampedX = Math.max(30, Math.min(670, cx));
            const clampedY = Math.max(14, Math.min(306, cy));

            return (
              <motion.div
                key={i}
                className="absolute flex items-center justify-center"
                style={{
                  left: clampedX,
                  top: clampedY,
                  transform: 'translate(-50%, -50%)',
                }}
                animate={{ scale: [1, 1.1, 1] }}
                transition={{ duration: 3 + (i % 4), repeat: Infinity, delay: i * 0.15 }}
              >
                <div
                  className="px-2 py-1 rounded-lg text-xs font-medium whitespace-nowrap"
                  style={{
                    background: `${node.color}12`,
                    border: `1px solid ${node.color}35`,
                    color: node.color,
                    fontSize: '11px',
                  }}
                >
                  {node.label}
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </div>
  );
}
