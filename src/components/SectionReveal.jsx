import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';

/**
 * Wraps children in a blur+fade+slide-up entrance animation.
 * Use this around any section content for a cinematic reveal.
 */
export default function SectionReveal({ children, delay = 0, className = '' }) {
  const { ref, inView } = useInView({ threshold: 0.1, triggerOnce: true });

  return (
    <motion.div
      ref={ref}
      className={className}
      initial={{ opacity: 0, y: 40, filter: 'blur(12px)' }}
      animate={inView
        ? { opacity: 1, y: 0, filter: 'blur(0px)' }
        : { opacity: 0, y: 40, filter: 'blur(12px)' }
      }
      transition={{ duration: 0.75, delay, ease: [0.25, 0.46, 0.45, 0.94] }}
    >
      {children}
    </motion.div>
  );
}
