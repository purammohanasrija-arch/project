import { useEffect, useRef, useState } from 'react';

const GLITCH_CHARS = '!<>-_\\/[]{}—=+*^?#@$%';

/**
 * Scrambles text with random characters then resolves to the real text.
 * Triggers on mount + every `interval` ms thereafter.
 */
export default function GlitchText({
  text,
  className = '',
  style = {},
  interval = 4000,
  speed = 40,
}) {
  const [display, setDisplay] = useState(text);
  const raf = useRef(null);

  const scramble = () => {
    let iteration = 0;
    clearInterval(raf.current);
    raf.current = setInterval(() => {
      setDisplay(
        text
          .split('')
          .map((char, idx) => {
            if (idx < iteration) return text[idx];
            if (char === ' ') return ' ';
            return GLITCH_CHARS[Math.floor(Math.random() * GLITCH_CHARS.length)];
          })
          .join('')
      );
      if (iteration >= text.length) clearInterval(raf.current);
      iteration += 0.6;
    }, speed);
  };

  useEffect(() => {
    scramble();
    const id = setInterval(scramble, interval);
    return () => { clearInterval(raf.current); clearInterval(id); };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [text]);

  return (
    <span
      className={className}
      style={{ fontFamily: 'monospace', ...style }}
      aria-label={text}
    >
      {display}
    </span>
  );
}
