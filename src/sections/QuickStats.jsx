import { useEffect, useRef, useState } from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { GraduationCap, FolderKanban, Briefcase, Award } from 'lucide-react';
import { stats } from '../data/portfolioData';

const icons = [GraduationCap, FolderKanban, Briefcase, Award];
const cardColors = ['#00d4ff', '#7c3aed', '#22c55e', '#ec4899'];

function CountUp({ end, decimals = 0, suffix = '', started }) {
  const [val, setVal] = useState(0);
  const raf = useRef(null);
  useEffect(() => {
    if (!started) return;
    const duration = 2000;
    const startTime = performance.now();
    const update = (now) => {
      const p = Math.min((now - startTime) / duration, 1);
      const eased = 1 - Math.pow(1 - p, 4);
      setVal(eased * end);
      if (p < 1) raf.current = requestAnimationFrame(update);
    };
    raf.current = requestAnimationFrame(update);
    return () => cancelAnimationFrame(raf.current);
  }, [started, end]);
  return <span>{decimals > 0 ? val.toFixed(decimals) : Math.floor(val)}{suffix}</span>;
}

function TiltCard({ children, color, delay }) {
  const ref = useRef(null);
  const handleMouseMove = (e) => {
    if (!ref.current) return;
    const rect = ref.current.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;
    const cx = rect.width / 2;
    const cy = rect.height / 2;
    const rotX = ((y - cy) / cy) * -10;
    const rotY = ((x - cx) / cx) * 10;
    ref.current.style.transform = `perspective(600px) rotateX(${rotX}deg) rotateY(${rotY}deg) translateZ(10px)`;
  };
  const handleMouseLeave = () => {
    if (!ref.current) return;
    ref.current.style.transform = 'perspective(600px) rotateX(0deg) rotateY(0deg) translateZ(0)';
  };
  return (
    <motion.div
      ref={ref}
      className="relative rounded-2xl p-6 text-center cursor-default"
      style={{
        background: `linear-gradient(135deg, ${color}10, rgba(2,8,24,0.9))`,
        border: `1px solid ${color}30`,
        transition: 'transform 0.15s ease, box-shadow 0.3s ease',
        transformStyle: 'preserve-3d',
      }}
      initial={{ opacity: 0, y: 40, scale: 0.9 }}
      whileInView={{ opacity: 1, y: 0, scale: 1 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6, delay, type: 'spring', stiffness: 200 }}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      onMouseEnter={e => {
        e.currentTarget.style.boxShadow = `0 20px 60px ${color}25, 0 0 30px ${color}15`;
        e.currentTarget.style.borderColor = `${color}55`;
      }}
    >
      {/* Glow top bar */}
      <div
        className="absolute top-0 left-0 right-0 h-0.5 rounded-t-2xl"
        style={{ background: `linear-gradient(90deg, transparent, ${color}, transparent)` }}
      />
      {/* Ambient glow */}
      <motion.div
        className="absolute inset-0 rounded-2xl opacity-0 group-hover:opacity-100"
        style={{ background: `radial-gradient(circle at 50% 50%, ${color}08, transparent 70%)` }}
        animate={{ opacity: [0.3, 0.6, 0.3] }}
        transition={{ duration: 3, repeat: Infinity }}
      />
      {children}
    </motion.div>
  );
}

export default function QuickStats() {
  const { ref, inView } = useInView({ threshold: 0.3, triggerOnce: true });

  return (
    <section id="about" ref={ref} className="section-padding relative z-10 scanline" aria-labelledby="stats-heading">
      <div className="max-w-6xl mx-auto">
        {/* Header */}
        <motion.div
          className="text-center mb-14"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <h2 id="stats-heading" className="section-title">My Achievements at a Glance</h2>
          <p className="section-subtitle mt-2">Numbers that reflect the journey so far</p>
        </motion.div>

        {/* Cards */}
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 md:gap-6">
          {stats.map((stat, i) => {
            const Icon = icons[i];
            const color = cardColors[i];
            return (
              <TiltCard key={stat.label} color={color} delay={i * 0.12}>
                {/* Icon */}
                <motion.div
                  className="w-14 h-14 rounded-2xl flex items-center justify-center mx-auto mb-4"
                  style={{
                    background: `linear-gradient(135deg, ${color}20, ${color}08)`,
                    border: `1px solid ${color}35`,
                    boxShadow: `0 0 20px ${color}15`,
                  }}
                  animate={{ rotateY: [0, 360] }}
                  transition={{ duration: 6 + i, repeat: Infinity, ease: 'linear', delay: i * 1 }}
                >
                  <Icon size={24} style={{ color }} aria-hidden="true" />
                </motion.div>

                {/* Number */}
                <div
                  className="text-4xl md:text-5xl font-black mb-1"
                  style={{
                    background: `linear-gradient(135deg, ${color}, #ffffff)`,
                    WebkitBackgroundClip: 'text',
                    WebkitTextFillColor: 'transparent',
                    backgroundClip: 'text',
                    filter: `drop-shadow(0 0 10px ${color}60)`,
                  }}
                  aria-label={`${stat.value}${stat.suffix} ${stat.label}`}
                >
                  <CountUp end={stat.value} decimals={stat.decimals} suffix={stat.suffix} started={inView} />
                </div>

                <div className="text-white font-semibold text-sm">{stat.label}</div>
                <div className="text-slate-500 text-xs mt-0.5">{stat.sublabel}</div>

                {/* Bottom pulse line */}
                <motion.div
                  className="absolute bottom-0 left-1/2 -translate-x-1/2 h-0.5 rounded-full"
                  style={{ background: `linear-gradient(90deg, transparent, ${color}, transparent)` }}
                  animate={{ width: ['0%', '80%', '0%'] }}
                  transition={{ duration: 3, repeat: Infinity, delay: i * 0.5 }}
                />
              </TiltCard>
            );
          })}
        </div>
      </div>
    </section>
  );
}
