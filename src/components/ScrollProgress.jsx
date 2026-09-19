import { useEffect, useState } from 'react';
import { motion, useSpring } from 'framer-motion';

/** Thin neon line at the very top showing scroll progress */
export default function ScrollProgress() {
  const [progress, setProgress] = useState(0);
  const spring = useSpring(0, { stiffness: 200, damping: 40 });

  useEffect(() => {
    const update = () => {
      const el  = document.documentElement;
      const pct = el.scrollTop / (el.scrollHeight - el.clientHeight);
      spring.set(pct);
      setProgress(pct);
    };
    window.addEventListener('scroll', update, { passive: true });
    return () => window.removeEventListener('scroll', update);
  }, [spring]);

  return (
    <div
      aria-hidden="true"
      style={{
        position: 'fixed',
        top: 0, left: 0, right: 0,
        height: 3,
        zIndex: 10000,
        background: 'rgba(0,0,0,0.2)',
      }}
    >
      <motion.div
        style={{
          height: '100%',
          scaleX: spring,
          transformOrigin: 'left',
          background: 'linear-gradient(90deg, #00d4ff, #7c3aed, #ec4899)',
          boxShadow: '0 0 10px rgba(0,212,255,0.8)',
        }}
      />
    </div>
  );
}
