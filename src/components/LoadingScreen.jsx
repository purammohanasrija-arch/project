import { useEffect, useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

export default function LoadingScreen({ onComplete }) {
  const [progress, setProgress] = useState(0);
  const [phase, setPhase] = useState(0); // 0=orb grow, 1=text reveal, 2=fade out

  useEffect(() => {
    // Progress bar
    const interval = setInterval(() => {
      setProgress(p => {
        if (p >= 100) {
          clearInterval(interval);
          return 100;
        }
        return p + 2;
      });
    }, 28);

    const t1 = setTimeout(() => setPhase(1), 400);
    const t2 = setTimeout(() => setPhase(2), 2200);
    const t3 = setTimeout(() => onComplete(), 2800);

    return () => {
      clearInterval(interval);
      clearTimeout(t1);
      clearTimeout(t2);
      clearTimeout(t3);
    };
  }, [onComplete]);

  return (
    <AnimatePresence>
      {phase < 2 && (
        <motion.div
          key="loader"
          className="fixed inset-0 z-[9999] flex flex-col items-center justify-center"
          style={{ background: '#020818' }}
          exit={{ opacity: 0, scale: 1.05 }}
          transition={{ duration: 0.6, ease: 'easeInOut' }}
          role="status"
          aria-label="Loading portfolio"
        >
          {/* Ambient glow orbs */}
          <div className="absolute inset-0 overflow-hidden pointer-events-none">
            <motion.div
              className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 rounded-full"
              style={{ width: 600, height: 600, background: 'radial-gradient(circle, rgba(0,212,255,0.08) 0%, transparent 70%)' }}
              animate={{ scale: [1, 1.2, 1], opacity: [0.5, 1, 0.5] }}
              transition={{ duration: 3, repeat: Infinity }}
            />
            <motion.div
              className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 rounded-full"
              style={{ width: 400, height: 400, background: 'radial-gradient(circle, rgba(124,58,237,0.1) 0%, transparent 70%)' }}
              animate={{ scale: [1.2, 1, 1.2], opacity: [0.5, 1, 0.5] }}
              transition={{ duration: 3, repeat: Infinity, delay: 0.5 }}
            />
          </div>

          {/* Central orb with MSP */}
          <motion.div
            className="relative mb-10"
            initial={{ scale: 0, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ duration: 0.6, ease: 'backOut' }}
          >
            {/* Rotating ring */}
            <motion.div
              className="absolute inset-0 rounded-full"
              style={{
                width: 160, height: 160,
                background: 'transparent',
                border: '2px solid transparent',
                backgroundImage: 'linear-gradient(#020818, #020818), linear-gradient(135deg, #00d4ff, #7c3aed)',
                backgroundOrigin: 'border-box',
                backgroundClip: 'padding-box, border-box',
              }}
              animate={{ rotate: 360 }}
              transition={{ duration: 3, repeat: Infinity, ease: 'linear' }}
            />
            {/* Inner orb */}
            <div
              className="w-36 h-36 rounded-full flex items-center justify-center m-[12px]"
              style={{
                background: 'linear-gradient(135deg, rgba(0,212,255,0.15), rgba(124,58,237,0.15))',
                border: '1px solid rgba(0,212,255,0.3)',
                boxShadow: '0 0 40px rgba(0,212,255,0.3), inset 0 0 40px rgba(124,58,237,0.1)',
              }}
            >
              <span
                className="text-4xl font-black tracking-wider"
                style={{
                  background: 'linear-gradient(135deg, #00d4ff, #a78bfa)',
                  WebkitBackgroundClip: 'text',
                  WebkitTextFillColor: 'transparent',
                  backgroundClip: 'text',
                  fontFamily: 'Inter, sans-serif',
                }}
              >
                MP
              </span>
            </div>
          </motion.div>

          {/* Name + tagline */}
          <motion.div
            className="text-center z-10 mb-12"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: phase >= 1 ? 1 : 0, y: phase >= 1 ? 0 : 20 }}
            transition={{ duration: 0.6 }}
          >
            <h1 className="text-2xl md:text-3xl font-bold text-white mb-2 tracking-wide">
              Mohana P
            </h1>
            <p className="text-sm md:text-base text-slate-400 font-mono tracking-widest">
              Turning Ideas into Real‑World Solutions
            </p>
          </motion.div>

          {/* Progress bar */}
          <motion.div
            className="w-64 md:w-80"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.3 }}
          >
            <div className="flex justify-between text-xs text-slate-500 mb-2 font-mono">
              <span>Initializing</span>
              <span>{progress}%</span>
            </div>
            <div className="h-0.5 bg-white/10 rounded-full overflow-hidden">
              <motion.div
                className="h-full rounded-full"
                style={{
                  background: 'linear-gradient(90deg, #00d4ff, #7c3aed)',
                  boxShadow: '0 0 10px rgba(0,212,255,0.8)',
                }}
                initial={{ width: '0%' }}
                animate={{ width: `${progress}%` }}
                transition={{ duration: 0.1 }}
              />
            </div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
