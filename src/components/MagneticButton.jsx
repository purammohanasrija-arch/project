import { useRef } from 'react';
import { motion } from 'framer-motion';

/**
 * Wraps any child in a magnetic container.
 * On hover the element follows the cursor within its bounds.
 */
export default function MagneticButton({ children, strength = 0.35, className = '', style = {} }) {
  const ref  = useRef(null);
  const pos  = useRef({ x: 0, y: 0 });

  const handleMouseMove = (e) => {
    const rect = ref.current.getBoundingClientRect();
    const cx   = rect.left + rect.width  / 2;
    const cy   = rect.top  + rect.height / 2;
    pos.current = {
      x: (e.clientX - cx) * strength,
      y: (e.clientY - cy) * strength,
    };
    ref.current.style.transform =
      `translate(${pos.current.x}px, ${pos.current.y}px)`;
  };

  const handleMouseLeave = () => {
    if (ref.current)
      ref.current.style.transform = 'translate(0px, 0px)';
  };

  return (
    <div
      ref={ref}
      className={className}
      style={{ display: 'inline-block', transition: 'transform 0.3s ease', ...style }}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
    >
      {children}
    </div>
  );
}
