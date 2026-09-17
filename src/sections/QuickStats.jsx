import { useEffect, useRef, useState } from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { GraduationCap, FolderKanban, Briefcase, Award } from 'lucide-react';
import { stats } from '../data/portfolioData';

const icons = [GraduationCap, FolderKanban, Briefcase, Award];

function CountUp({ end, decimals = 0, suffix = '', started }) {
  const [val, setVal] = useState(0);
  const raf = useRef(null);

  useEffect(() => {
    if (!started) return;
    const duration = 1800;
    const startTime = performance.now();

    const update = (now) => {
      const elapsed = now - startTime;
      const progress = Math.min(elapsed / duration, 1);
      const eased = 1 - Math.pow(1 - progress, 3); // ease-out cubic
      setVal(eased * end);
      if (progress < 1) raf.current = requestAnimationFrame(update);
    };

    raf.current = requestAnimationFrame(update);
    return () => cancelAnimationFrame(raf.current);
  }, [started, end]);

  return (
    <span>
      {decimals > 0 ? val.toFixed(decimals) : Math.floor(val)}
      {suffix}
    </span>
  );
}

export default function QuickStats() {
  const { ref, inView } = useInView({ threshold: 0.3, triggerOnce: true });

  return (
    <section
      id="about"
      ref={ref}
      className="section-padding relative z-10"
      aria-labelledby="stats-heading"
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
          <h2 id="stats-heading" className="section-title">My Achievements at a Glance</h2>
          <p className="section-subtitle mt-2">Numbers that reflect my journey so far</p>
        </motion.div>

        {/* Stats grid */}
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 md:gap-6">
          {stats.map((stat, i) => {
            const Icon = icons[i];
            return (
              <motion.div
                key={stat.label}
                className="relative group card-hover"
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: i * 0.1 }}
              >
                <div
                  className="glass rounded-2xl p-6 text-center h-full neon-border"
                  style={{
                    '--glow-color': '#00d4ff',
                  }}
                >
                  {/* Icon */}
                  <div
                    className="w-12 h-12 rounded-xl flex items-center justify-center mx-auto mb-4 transition-all duration-300 group-hover:scale-110"
                    style={{
                      background: 'linear-gradient(135deg, rgba(0,212,255,0.15), rgba(124,58,237,0.15))',
                      border: '1px solid rgba(0,212,255,0.25)',
                      boxShadow: '0 0 20px rgba(0,212,255,0.1)',
                    }}
                  >
                    <Icon size={22} className="text-cyan-400" aria-hidden="true" />
                  </div>

                  {/* Number */}
                  <div
                    className="text-3xl md:text-4xl font-black mb-1"
                    style={{
                      background: 'linear-gradient(135deg, #00d4ff, #7c3aed)',
                      WebkitBackgroundClip: 'text',
                      WebkitTextFillColor: 'transparent',
                      backgroundClip: 'text',
                    }}
                    aria-label={`${stat.value}${stat.suffix} ${stat.label}`}
                  >
                    <CountUp end={stat.value} decimals={stat.decimals} suffix={stat.suffix} started={inView} />
                  </div>

                  {/* Label */}
                  <div className="text-white font-semibold text-sm md:text-base">{stat.label}</div>
                  <div className="text-slate-500 text-xs mt-1">{stat.sublabel}</div>

                  {/* Bottom glow line */}
                  <div
                    className="absolute bottom-0 left-1/2 -translate-x-1/2 h-0.5 w-0 group-hover:w-3/4 transition-all duration-500 rounded-full"
                    style={{ background: 'linear-gradient(90deg, transparent, #00d4ff, transparent)' }}
                  />
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
