import { motion } from 'framer-motion';
import { Github, Linkedin, Mail, ChevronDown, Download, ExternalLink } from 'lucide-react';
import { personal } from '../data/portfolioData';

const fadeUp = (delay = 0) => ({
  initial: { opacity: 0, y: 30 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 0.7, delay, ease: 'easeOut' },
});

export default function Hero() {
  const scrollToProjects = () => {
    document.getElementById('projects')?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section
      id="home"
      className="relative min-h-screen flex items-center justify-center overflow-hidden"
      aria-label="Hero section"
    >
      {/* Background gradient orbs */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden">
        <div
          className="absolute -top-40 -left-40 w-96 h-96 rounded-full opacity-20"
          style={{ background: 'radial-gradient(circle, #00d4ff, transparent 70%)', filter: 'blur(60px)' }}
        />
        <div
          className="absolute bottom-0 right-0 w-[500px] h-[500px] rounded-full opacity-10"
          style={{ background: 'radial-gradient(circle, #7c3aed, transparent 70%)', filter: 'blur(80px)' }}
        />
        <div
          className="absolute top-1/3 right-1/4 w-72 h-72 rounded-full opacity-10"
          style={{ background: 'radial-gradient(circle, #06b6d4, transparent 70%)', filter: 'blur(50px)' }}
        />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 md:px-8 pt-24 pb-16 w-full">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">

          {/* Left — text content */}
          <div className="space-y-6 lg:space-y-8">
            {/* Status badge */}
            <motion.div {...fadeUp(0.1)}>
              <span
                className="inline-flex items-center gap-2 px-4 py-2 rounded-full text-xs font-semibold font-mono tracking-wider"
                style={{
                  background: 'rgba(0, 212, 255, 0.08)',
                  border: '1px solid rgba(0, 212, 255, 0.25)',
                  color: '#00d4ff',
                }}
              >
                <span className="w-2 h-2 rounded-full bg-green-400 animate-pulse" aria-hidden="true" />
                Available for Internships & Projects
              </span>
            </motion.div>

            {/* Name */}
            <motion.h1
              className="text-4xl sm:text-5xl lg:text-6xl font-black leading-tight"
              {...fadeUp(0.2)}
            >
              <span className="block text-white">Mohana</span>
              <span
                className="block"
                style={{
                  background: 'linear-gradient(135deg, #00d4ff 0%, #7c3aed 60%, #ec4899 100%)',
                  WebkitBackgroundClip: 'text',
                  WebkitTextFillColor: 'transparent',
                  backgroundClip: 'text',
                }}
              >
                Srija Puram
              </span>
            </motion.h1>

            {/* Title */}
            <motion.p
              className="text-base md:text-lg text-slate-300 font-medium"
              {...fadeUp(0.3)}
            >
              Computer Science Engineering Student&nbsp;|&nbsp;Aspiring Software Developer
            </motion.p>

            {/* Bio */}
            <motion.p
              className="text-sm md:text-base text-slate-400 leading-relaxed max-w-xl"
              {...fadeUp(0.4)}
            >
              Motivated CSE student with expertise in <span className="text-cyan-400 font-medium">full-stack development</span>,
              passionate about <span className="text-purple-400 font-medium">AI/ML</span> and building
              intelligent solutions that solve real-world problems. Currently pursuing B.Tech at Vignan's University with <span className="text-cyan-400 font-medium">8.15 CGPA</span>.
            </motion.p>

            {/* Tech tags */}
            <motion.div
              className="flex flex-wrap gap-2"
              {...fadeUp(0.5)}
            >
              {['React', 'Node.js', 'Python', 'MongoDB', 'AI/ML', 'Flask', 'Groq LLM'].map(tag => (
                <span key={tag} className="skill-badge">{tag}</span>
              ))}
            </motion.div>

            {/* CTA Buttons */}
            <motion.div
              className="flex flex-wrap gap-4"
              {...fadeUp(0.6)}
            >
              <button
                onClick={scrollToProjects}
                className="btn-primary flex items-center gap-2"
                aria-label="View my projects"
              >
                <span className="relative z-10">View My Projects</span>
                <ExternalLink size={15} className="relative z-10" />
              </button>
              <a
                href={personal.resume}
                download="Mohana-Srija-Puram-Resume.pdf"
                className="btn-outline flex items-center gap-2"
                aria-label="Download resume"
              >
                <Download size={15} />
                Download Resume
              </a>
            </motion.div>

            {/* Social links */}
            <motion.div
              className="flex items-center gap-4"
              {...fadeUp(0.7)}
            >
              <span className="text-xs text-slate-500 font-mono">Find me on</span>
              <div className="flex gap-3">
                {[
                  { href: personal.github, icon: Github, label: 'GitHub' },
                  { href: personal.linkedin, icon: Linkedin, label: 'LinkedIn' },
                  { href: `mailto:${personal.email}`, icon: Mail, label: 'Email' },
                ].map(({ href, icon: Icon, label }) => (
                  <a
                    key={label}
                    href={href}
                    target={href.startsWith('mailto') ? '_self' : '_blank'}
                    rel="noopener noreferrer"
                    className="w-10 h-10 rounded-xl flex items-center justify-center text-slate-400 hover:text-cyan-400 transition-all duration-200 hover:scale-110 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-cyan-400"
                    style={{
                      background: 'rgba(255,255,255,0.04)',
                      border: '1px solid rgba(255,255,255,0.08)',
                    }}
                    onMouseEnter={e => {
                      e.currentTarget.style.border = '1px solid rgba(0,212,255,0.35)';
                      e.currentTarget.style.boxShadow = '0 0 15px rgba(0,212,255,0.15)';
                    }}
                    onMouseLeave={e => {
                      e.currentTarget.style.border = '1px solid rgba(255,255,255,0.08)';
                      e.currentTarget.style.boxShadow = 'none';
                    }}
                    aria-label={label}
                  >
                    <Icon size={18} />
                  </a>
                ))}
              </div>
            </motion.div>
          </div>

          {/* Right — abstract AI visual */}
          <motion.div
            className="hidden lg:flex items-center justify-center relative"
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1, delay: 0.3, ease: 'easeOut' }}
          >
            <AbstractAIVisual />
          </motion.div>
        </div>

        {/* Scroll indicator */}
        <motion.div
          className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 text-slate-500"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.5 }}
        >
          <span className="text-xs font-mono tracking-widest">SCROLL</span>
          <motion.div
            animate={{ y: [0, 8, 0] }}
            transition={{ duration: 1.5, repeat: Infinity }}
          >
            <ChevronDown size={18} />
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}

function AbstractAIVisual() {
  const rings = [
    { r: 200, speed: 20, color: '#00d4ff', opacity: 0.3, dash: '8 4' },
    { r: 150, speed: -15, color: '#7c3aed', opacity: 0.4, dash: '4 8' },
    { r: 100, speed: 25, color: '#06b6d4', opacity: 0.5, dash: '12 6' },
  ];

  const nodes = [
    { angle: 0, r: 200, label: 'React', color: '#06b6d4' },
    { angle: 72, r: 200, label: 'Python', color: '#3b82f6' },
    { angle: 144, r: 200, label: 'MongoDB', color: '#22c55e' },
    { angle: 216, r: 200, label: 'Node.js', color: '#22c55e' },
    { angle: 288, r: 200, label: 'AI/ML', color: '#ec4899' },
    { angle: 0, r: 140, label: 'Flask', color: '#22c55e' },
    { angle: 120, r: 140, label: 'JWT', color: '#f59e0b' },
    { angle: 240, r: 140, label: 'LLM', color: '#7c3aed' },
  ];

  return (
    <div className="relative w-[420px] h-[420px]" aria-hidden="true">
      {/* SVG rings */}
      <svg
        className="absolute inset-0 w-full h-full"
        viewBox="0 0 420 420"
      >
        <defs>
          <radialGradient id="centerGlow">
            <stop offset="0%" stopColor="#00d4ff" stopOpacity="0.3" />
            <stop offset="100%" stopColor="#7c3aed" stopOpacity="0" />
          </radialGradient>
        </defs>
        <circle cx="210" cy="210" r="120" fill="url(#centerGlow)" />
        {rings.map((ring, i) => (
          <motion.circle
            key={i}
            cx="210"
            cy="210"
            r={ring.r}
            fill="none"
            stroke={ring.color}
            strokeWidth="1"
            strokeOpacity={ring.opacity}
            strokeDasharray={ring.dash}
            animate={{ rotate: [0, ring.speed > 0 ? 360 : -360] }}
            transition={{ duration: Math.abs(ring.speed), repeat: Infinity, ease: 'linear' }}
            style={{ transformOrigin: '210px 210px' }}
          />
        ))}
      </svg>

      {/* Center node */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2">
        <motion.div
          className="w-24 h-24 rounded-full flex items-center justify-center float-anim"
          style={{
            background: 'linear-gradient(135deg, rgba(0,212,255,0.15), rgba(124,58,237,0.25))',
            border: '2px solid rgba(0,212,255,0.4)',
            boxShadow: '0 0 40px rgba(0,212,255,0.3), 0 0 80px rgba(124,58,237,0.1)',
          }}
        >
          <span
            className="text-2xl font-black"
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

      {/* Orbital nodes */}
      {nodes.map((node, i) => {
        const rad = (node.angle * Math.PI) / 180;
        const cx = 210 + node.r * Math.cos(rad);
        const cy = 210 + node.r * Math.sin(rad);
        return (
          <motion.div
            key={i}
            className="absolute flex items-center justify-center"
            style={{
              left: cx,
              top: cy,
              transform: 'translate(-50%, -50%)',
            }}
            animate={{ scale: [1, 1.15, 1], opacity: [0.7, 1, 0.7] }}
            transition={{ duration: 2 + i * 0.3, repeat: Infinity, delay: i * 0.2 }}
          >
            <div
              className="px-2 py-1 rounded-lg text-xs font-semibold"
              style={{
                background: `${node.color}18`,
                border: `1px solid ${node.color}50`,
                color: node.color,
                whiteSpace: 'nowrap',
                boxShadow: `0 0 8px ${node.color}30`,
              }}
            >
              {node.label}
            </div>
          </motion.div>
        );
      })}
    </div>
  );
}
