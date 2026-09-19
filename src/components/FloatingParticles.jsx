import { motion } from 'framer-motion';

/**
 * Decorative floating orbs for section backgrounds.
 * Drop inside any section with position: relative.
 */
export default function FloatingParticles({ count = 6, colors = ['#00d4ff', '#7c3aed', '#ec4899'] }) {
  return (
    <div className="absolute inset-0 overflow-hidden pointer-events-none" aria-hidden="true">
      {Array.from({ length: count }).map((_, i) => {
        const color = colors[i % colors.length];
        const size  = 4 + (i % 4) * 3;
        return (
          <motion.div
            key={i}
            className="absolute rounded-full"
            style={{
              width: size,
              height: size,
              left: `${8 + i * (88 / count)}%`,
              top: `${20 + (i % 3) * 25}%`,
              background: color,
              opacity: 0.35,
              boxShadow: `0 0 ${size * 3}px ${color}80`,
            }}
            animate={{
              y: [0, -(20 + i * 8), 0],
              x: [0, (i % 2 === 0 ? 10 : -10), 0],
              opacity: [0.2, 0.6, 0.2],
              scale: [1, 1.4, 1],
            }}
            transition={{
              duration: 4 + i * 0.7,
              repeat: Infinity,
              delay: i * 0.4,
              ease: 'easeInOut',
            }}
          />
        );
      })}
    </div>
  );
}
