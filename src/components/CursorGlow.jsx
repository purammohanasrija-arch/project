import { useEffect, useRef } from 'react';

/**
 * Smooth neon cursor glow that follows the mouse.
 * Two layers: a fast small dot + a slow large aura.
 * Pure CSS/requestAnimationFrame — zero dependencies.
 */
export default function CursorGlow() {
  const dotRef  = useRef(null);
  const auraRef = useRef(null);
  const pos     = useRef({ x: window.innerWidth / 2, y: window.innerHeight / 2 });
  const aura    = useRef({ x: window.innerWidth / 2, y: window.innerHeight / 2 });
  const raf     = useRef(null);

  useEffect(() => {
    const onMove = (e) => {
      pos.current = { x: e.clientX, y: e.clientY };
    };
    window.addEventListener('mousemove', onMove, { passive: true });

    const animate = () => {
      // Dot follows instantly
      if (dotRef.current) {
        dotRef.current.style.transform =
          `translate(${pos.current.x - 6}px, ${pos.current.y - 6}px)`;
      }
      // Aura lags behind with lerp
      aura.current.x += (pos.current.x - aura.current.x) * 0.08;
      aura.current.y += (pos.current.y - aura.current.y) * 0.08;
      if (auraRef.current) {
        auraRef.current.style.transform =
          `translate(${aura.current.x - 200}px, ${aura.current.y - 200}px)`;
      }
      raf.current = requestAnimationFrame(animate);
    };
    raf.current = requestAnimationFrame(animate);

    return () => {
      window.removeEventListener('mousemove', onMove);
      cancelAnimationFrame(raf.current);
    };
  }, []);

  return (
    <>
      {/* Large soft aura */}
      <div
        ref={auraRef}
        aria-hidden="true"
        style={{
          position: 'fixed',
          top: 0, left: 0,
          width: 400, height: 400,
          borderRadius: '50%',
          background:
            'radial-gradient(circle, rgba(0,212,255,0.07) 0%, rgba(124,58,237,0.04) 40%, transparent 70%)',
          pointerEvents: 'none',
          zIndex: 9998,
          willChange: 'transform',
          mixBlendMode: 'screen',
        }}
      />
      {/* Sharp neon dot */}
      <div
        ref={dotRef}
        aria-hidden="true"
        style={{
          position: 'fixed',
          top: 0, left: 0,
          width: 12, height: 12,
          borderRadius: '50%',
          background: 'rgba(0,212,255,0.9)',
          boxShadow: '0 0 8px rgba(0,212,255,1), 0 0 20px rgba(0,212,255,0.5)',
          pointerEvents: 'none',
          zIndex: 9999,
          willChange: 'transform',
          mixBlendMode: 'screen',
        }}
      />
    </>
  );
}
