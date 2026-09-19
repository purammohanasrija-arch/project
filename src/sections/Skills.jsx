import { useState } from 'react';
import { motion } from 'framer-motion';
import { skills } from '../data/portfolioData';

const categoryColors = {
  'Programming Languages': '#3b82f6',
  'Web Technologies':      '#06b6d4',
  'Databases':             '#22c55e',
  'Tools & Platforms':     '#f59e0b',
  'AI / ML':               '#ec4899',
  'APIs':                  '#10b981',
  'UI/UX':                 '#a78bfa',
};

/* ── flatten all skills with their category colour ── */
function getAllSkillNodes() {
  return Object.entries(skills).flatMap(([cat, items]) =>
    items.map(label => ({ label, category: cat, color: categoryColors[cat] || '#00d4ff' }))
  );
}

export default function Skills() {
  const [activeCategory, setActiveCategory] = useState('All');
  const [hoveredSkill, setHoveredSkill] = useState(null);
  const categories = ['All', ...Object.keys(skills)];
  const filtered =
    activeCategory === 'All'
      ? Object.entries(skills)
      : [[activeCategory, skills[activeCategory]]];

  return (
    <section id="skills" className="section-padding relative z-10" aria-labelledby="skills-heading">
      <div className="max-w-6xl mx-auto">
        {/* Header */}
        <motion.div
          className="text-center mb-12"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          <h2 id="skills-heading" className="section-title">My Skills</h2>
          <p className="section-subtitle mt-2">Technologies I work with</p>
        </motion.div>

        {/* Constellation — desktop only */}
        <div className="hidden lg:block mb-14">
          <SkillConstellation
            hoveredSkill={hoveredSkill}
            onHover={setHoveredSkill}
          />
        </div>

        {/* Filter pills */}
        <div
          className="flex flex-wrap justify-center gap-2 mb-10"
          role="group"
          aria-label="Filter skills by category"
        >
          {categories.map(cat => {
            const isActive = activeCategory === cat;
            const color = cat === 'All' ? '#00d4ff' : categoryColors[cat];
            return (
              <motion.button
                key={cat}
                onClick={() => setActiveCategory(cat)}
                className="px-4 py-2 rounded-full text-xs font-semibold focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-cyan-400"
                style={{
                  background: isActive ? `${color}20` : 'rgba(255,255,255,0.03)',
                  border: `1px solid ${isActive ? color : 'rgba(255,255,255,0.08)'}`,
                  color: isActive ? color : '#94a3b8',
                  boxShadow: isActive ? `0 0 15px ${color}25` : 'none',
                }}
                whileHover={{ scale: 1.06 }}
                whileTap={{ scale: 0.94 }}
                aria-pressed={isActive}
              >
                {cat}
              </motion.button>
            );
          })}
        </div>

        {/* Skill group cards */}
        <div className="space-y-5">
          {filtered.map(([category, items], gi) => {
            const color = categoryColors[category] || '#00d4ff';
            return (
              <motion.div
                key={category}
                className="rounded-2xl p-5 md:p-6"
                style={{
                  background: `linear-gradient(135deg, ${color}06, rgba(2,8,24,0.85))`,
                  border: `1px solid ${color}20`,
                }}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: gi * 0.08 }}
                whileHover={{ borderColor: `${color}40`, boxShadow: `0 0 30px ${color}10` }}
              >
                <div className="flex items-center gap-2 mb-4">
                  <motion.div
                    className="w-2 h-2 rounded-full"
                    style={{ background: color }}
                    animate={{ boxShadow: [`0 0 4px ${color}`, `0 0 12px ${color}`, `0 0 4px ${color}`] }}
                    transition={{ duration: 2, repeat: Infinity }}
                    aria-hidden="true"
                  />
                  <h3 className="text-sm font-bold" style={{ color }}>{category}</h3>
                </div>
                <div className="flex flex-wrap gap-2">
                  {items.map((skill, si) => (
                    <motion.span
                      key={skill}
                      className="px-3 py-1.5 rounded-lg text-sm font-medium cursor-default"
                      style={{
                        background: `${color}10`,
                        border: `1px solid ${color}25`,
                        color: '#e2e8f0',
                      }}
                      initial={{ opacity: 0, scale: 0.7 }}
                      whileInView={{ opacity: 1, scale: 1 }}
                      viewport={{ once: true }}
                      transition={{ delay: gi * 0.05 + si * 0.04, type: 'spring', stiffness: 300 }}
                      whileHover={{ scale: 1.1, color, borderColor: `${color}60`, boxShadow: `0 0 12px ${color}30`, y: -2 }}
                      onMouseEnter={() => setHoveredSkill(skill)}
                      onMouseLeave={() => setHoveredSkill(null)}
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

/* ────────────────────────────────────────────────
   SKILL CONSTELLATION — always centred
   Uses a square inner wrapper so 50%/50% always
   resolves to the true geometric centre.
   ──────────────────────────────────────────────── */
function SkillConstellation({ hoveredSkill, onHover }) {
  const all = getAllSkillNodes();

  // Three concentric rings
  const inner  = all.slice(0, 8);
  const middle = all.slice(8, 20);
  const outer  = all.slice(20);

  // The orb size — everything is relative to this square
  const SIZE = 560; // px — inner square that holds the constellation

  return (
    // Outer wrapper: full width, vertically padded so outer ring never clips
    <div className="w-full flex justify-center items-center" style={{ height: 580 }} aria-hidden="true">

      {/* Inner fixed-size square — this is our coordinate space */}
      <div className="relative flex-shrink-0" style={{ width: SIZE, height: SIZE }}>

        {/* SVG guide rings + connection lines — fills the square exactly */}
        <svg
          className="absolute inset-0 w-full h-full pointer-events-none"
          viewBox={`0 0 ${SIZE} ${SIZE}`}
        >
          {/* Guide rings */}
          {[90, 160, 240].map(r => (
            <circle key={r}
              cx={SIZE / 2} cy={SIZE / 2} r={r}
              fill="none"
              stroke="rgba(0,212,255,0.1)"
              strokeWidth="1"
              strokeDasharray="6 4"
            />
          ))}

          {/* Connection lines from centre to each node */}
          {all.map((node, i) => {
            const radii  = [90, 160, 240];
            const counts = [8, 12, outer.length || 1];
            const ri     = i < 8 ? 0 : i < 20 ? 1 : 2;
            const offset = i < 8 ? 0 : i < 20 ? 8 : 20;
            const r = radii[ri];
            const n = counts[ri];
            const a = ((i - offset) / n) * Math.PI * 2 - Math.PI / 2; // start from top
            const nx = SIZE / 2 + r * Math.cos(a);
            const ny = SIZE / 2 + r * Math.sin(a);
            const isHov = hoveredSkill === node.label;
            return (
              <line key={i}
                x1={SIZE / 2} y1={SIZE / 2}
                x2={nx} y2={ny}
                stroke={node.color}
                strokeWidth={isHov ? 1.5 : 0.6}
                strokeOpacity={isHov ? 0.55 : 0.14}
              />
            );
          })}
        </svg>

        {/* Rotating rings — pivot is the exact centre of the square */}
        <ConstellationRing
          nodes={inner}  radius={90}  speed={22}
          size={SIZE} hoveredSkill={hoveredSkill} onHover={onHover}
        />
        <ConstellationRing
          nodes={middle} radius={160} speed={36} reverse
          size={SIZE} hoveredSkill={hoveredSkill} onHover={onHover}
        />
        <ConstellationRing
          nodes={outer}  radius={240} speed={52}
          size={SIZE} hoveredSkill={hoveredSkill} onHover={onHover}
        />

        {/* Centre node — absolutely centred */}
        <motion.div
          className="absolute flex items-center justify-center rounded-full"
          style={{
            width: 108, height: 108,
            top: '50%', left: '50%',
            transform: 'translate(-50%, -50%)',
            background: 'radial-gradient(circle at 40% 40%, rgba(0,212,255,0.3), rgba(124,58,237,0.2))',
            border: '2px solid rgba(0,212,255,0.6)',
            boxShadow: '0 0 40px rgba(0,212,255,0.5)',
          }}
          animate={{
            boxShadow: [
              '0 0 20px rgba(0,212,255,0.3)',
              '0 0 55px rgba(0,212,255,0.65)',
              '0 0 20px rgba(0,212,255,0.3)',
            ],
          }}
          transition={{ duration: 3, repeat: Infinity }}
        >
          <span style={{
            background: 'linear-gradient(135deg, #00d4ff, #a78bfa)',
            WebkitBackgroundClip: 'text',
            WebkitTextFillColor: 'transparent',
            backgroundClip: 'text',
            fontWeight: 900,
            fontSize: 14,
            textAlign: 'center',
            lineHeight: 1.35,
          }}>
            My<br />Skills
          </span>
        </motion.div>
      </div>
    </div>
  );
}

/* One rotating ring of skill nodes — pivots from centre of its SIZE×SIZE container */
function ConstellationRing({ nodes, radius, speed, reverse = false, size, hoveredSkill, onHover }) {
  if (!nodes.length) return null;
  const count = nodes.length;
  const half  = size / 2;

  return (
    <motion.div
      className="absolute inset-0"
      style={{ transformOrigin: `${half}px ${half}px` }}
      animate={{ rotate: reverse ? -360 : 360 }}
      transition={{ duration: speed, repeat: Infinity, ease: 'linear' }}
    >
      {nodes.map((node, i) => {
        // Start from top (−π/2) so first node is at 12 o'clock
        const a  = (i / count) * Math.PI * 2 - Math.PI / 2;
        const nx = half + radius * Math.cos(a);
        const ny = half + radius * Math.sin(a);
        const isHov = hoveredSkill === node.label;

        return (
          <div
            key={node.label}
            className="absolute"
            style={{ left: nx, top: ny, transform: 'translate(-50%, -50%)' }}
          >
            {/* Counter-rotate so text stays upright */}
            <motion.div
              animate={{ rotate: reverse ? 360 : -360 }}
              transition={{ duration: speed, repeat: Infinity, ease: 'linear' }}
              onMouseEnter={() => onHover(node.label)}
              onMouseLeave={() => onHover(null)}
              style={{ cursor: 'default' }}
            >
              <motion.div
                className="rounded-xl font-semibold whitespace-nowrap"
                style={{
                  fontSize: 11,
                  padding: '3px 9px',
                  background: isHov ? `${node.color}28` : `${node.color}12`,
                  border: `1px solid ${isHov ? node.color + '70' : node.color + '35'}`,
                  color: node.color,
                  boxShadow: isHov ? `0 0 18px ${node.color}55` : `0 0 6px ${node.color}20`,
                  backdropFilter: 'blur(6px)',
                  transition: 'all 0.25s',
                }}
                animate={{ scale: isHov ? 1.15 : 1 }}
              >
                {node.label}
              </motion.div>
            </motion.div>
          </div>
        );
      })}
    </motion.div>
  );
}
