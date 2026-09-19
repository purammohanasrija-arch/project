import { motion } from 'framer-motion';
import { Github, Linkedin, Mail, ChevronDown, Download, Sparkles } from 'lucide-react';
import { personal } from '../data/portfolioData';
import MagneticButton from '../components/MagneticButton';

const fadeUp = (delay = 0) => ({
  initial: { opacity: 0, y: 40 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 0.8, delay, ease: [0.25, 0.46, 0.45, 0.94] },
});

export default function Hero() {
  const scrollTo = (id) => document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' });

  return (
    <section
      id="home"
      className="relative min-h-screen flex items-center justify-center overflow-hidden"
      aria-label="Hero section"
    >
      <CinematicBackground />
      <FloatingCodeParticles />

      <div className="relative z-10 max-w-7xl mx-auto px-4 md:px-8 pt-24 pb-20 w-full">
        <div className="flex flex-col lg:flex-row gap-12 lg:gap-20 items-center justify-center">

          {/* ── PHOTO FIRST (left on desktop, top on mobile) ── */}
          <motion.div
            className="flex-shrink-0 order-1"
            initial={{ opacity: 0, scale: 0.88, y: 24 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            transition={{ duration: 0.85, delay: 0.1, ease: [0.22, 1, 0.36, 1] }}
          >
            <ProfilePhoto />
          </motion.div>

          {/* ── TEXT (right on desktop, below photo on mobile) ── */}
          <div className="space-y-5 order-2 max-w-xl text-center lg:text-left">

            {/* Hello badge */}
            <motion.div {...fadeUp(0.3)} className="flex justify-center lg:justify-start">
              <span
                className="inline-flex items-center gap-2 px-4 py-2 rounded-full text-xs font-semibold font-mono tracking-widest"
                style={{
                  background: 'rgba(0,212,255,0.08)',
                  border: '1px solid rgba(0,212,255,0.35)',
                  color: '#00d4ff',
                }}
              >
                <motion.span
                  className="w-2 h-2 rounded-full bg-green-400"
                  animate={{ scale: [1, 1.5, 1], opacity: [1, 0.4, 1] }}
                  transition={{ duration: 1.5, repeat: Infinity }}
                />
                Available for Internships
              </span>
            </motion.div>

            {/* Name */}
            <motion.div {...fadeUp(0.35)}>
              <h1 className="font-black leading-tight tracking-tight text-white" style={{ fontSize: 'clamp(2.5rem, 6vw, 4.2rem)' }}>
                Mohana{' '}
                <span
                  style={{
                    background: 'linear-gradient(135deg, #00d4ff 0%, #7c3aed 55%, #ec4899 100%)',
                    WebkitBackgroundClip: 'text',
                    WebkitTextFillColor: 'transparent',
                    backgroundClip: 'text',
                    filter: 'drop-shadow(0 0 25px rgba(0,212,255,0.45))',
                  }}
                >
                  P
                </span>
              </h1>
            </motion.div>

            {/* Titles */}
            <motion.div {...fadeUp(0.45)} className="space-y-1.5">
              <p className="text-base md:text-lg font-semibold text-slate-200">
                Computer Science &amp; Engineering Student
              </p>
              <p className="text-sm md:text-base font-semibold"
                style={{
                  background: 'linear-gradient(90deg, #00d4ff, #a78bfa, #ec4899)',
                  WebkitBackgroundClip: 'text',
                  WebkitTextFillColor: 'transparent',
                  backgroundClip: 'text',
                }}
              >
                AI &amp; Full-Stack Developer | Agentic AI Enthusiast
              </p>
            </motion.div>

            {/* Bio */}
            <motion.p
              className="text-sm md:text-base text-slate-300 leading-relaxed font-normal"
              {...fadeUp(0.55)}
            >
              Passionate Computer Science &amp; Engineering student focused on building scalable{' '}
              <span className="text-cyan-400 font-medium">full-stack web applications</span> and autonomous{' '}
              <span className="text-purple-400 font-medium">Agentic AI systems</span>.
              Committed to creating intelligent, high-impact solutions for modern industry challenges.
            </motion.p>

            {/* Tech chips */}
            <motion.div
              className="flex flex-wrap gap-2 justify-center lg:justify-start"
              {...fadeUp(0.65)}
            >
              {['React', 'Node.js', 'Python', 'Agentic AI', 'LLM', 'MongoDB', 'Flask'].map((t, i) => (
                <motion.span
                  key={t}
                  className="skill-badge"
                  initial={{ opacity: 0, scale: 0.7 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ delay: 0.65 + i * 0.06, type: 'spring', stiffness: 300 }}
                  whileHover={{ scale: 1.12, boxShadow: '0 0 14px rgba(0,212,255,0.4)' }}
                >
                  {t}
                </motion.span>
              ))}
            </motion.div>

            {/* CTA Buttons */}
            <motion.div
              className="flex flex-wrap gap-3 justify-center lg:justify-start"
              {...fadeUp(0.75)}
            >
              <MagneticButton>
                <motion.button
                  onClick={() => scrollTo('projects')}
                  className="btn-primary flex items-center gap-2 text-sm shadow-lg shadow-cyan-500/20"
                  whileHover={{ scale: 1.05, boxShadow: '0 0 30px rgba(0,212,255,0.45)' }}
                  whileTap={{ scale: 0.96 }}
                >
                  <span className="relative z-10 flex items-center gap-2">
                    <Sparkles size={14} /> View Projects
                  </span>
                </motion.button>
              </MagneticButton>

              <MagneticButton>
                <motion.a
                  href={personal.resume}
                  download="Mohana-P-Resume.pdf"
                  className="btn-outline flex items-center gap-2 text-sm"
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.96 }}
                >
                  <Download size={14} /> Download Resume
                </motion.a>
              </MagneticButton>

              <MagneticButton>
                <motion.button
                  onClick={() => scrollTo('contact')}
                  className="flex items-center gap-2 px-5 py-3 rounded-xl text-sm font-semibold"
                  style={{
                    background: 'rgba(124,58,237,0.15)',
                    border: '1px solid rgba(124,58,237,0.45)',
                    color: '#c4b5fd',
                  }}
                  whileHover={{ scale: 1.05, boxShadow: '0 0 20px rgba(124,58,237,0.35)' }}
                  whileTap={{ scale: 0.96 }}
                >
                  <Mail size={14} /> Contact Me
                </motion.button>
              </MagneticButton>
            </motion.div>

            {/* Social */}
            <motion.div
              className="flex items-center gap-4 justify-center lg:justify-start"
              {...fadeUp(0.85)}
            >
              <span className="text-xs text-slate-600 font-mono">connect →</span>
              {[
                { href: personal.github,   icon: Github,   label: 'GitHub',   color: '#a78bfa' },
                { href: personal.linkedin, icon: Linkedin, label: 'LinkedIn', color: '#38bdf8' },
                { href: `mailto:${personal.email}`, icon: Mail, label: 'Email', color: '#00d4ff' },
              ].map(({ href, icon: Icon, label, color }) => (
                <motion.a
                  key={label}
                  href={href}
                  target={href.startsWith('mailto') ? '_self' : '_blank'}
                  rel="noopener noreferrer"
                  className="w-11 h-11 rounded-2xl flex items-center justify-center text-slate-400 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-cyan-400"
                  style={{ background: 'rgba(255,255,255,0.04)', border: '1px solid rgba(255,255,255,0.1)' }}
                  whileHover={{ scale: 1.18, color, borderColor: color + '60', boxShadow: `0 0 18px ${color}35` }}
                  whileTap={{ scale: 0.9 }}
                  aria-label={label}
                >
                  <Icon size={18} />
                </motion.a>
              ))}
            </motion.div>
          </div>
        </div>
      </div>

      {/* Scroll cue */}
      <motion.div
        className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-1 text-slate-500 z-10"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 2.2 }}
      >
        <span className="text-xs font-mono tracking-widest">SCROLL</span>
        <motion.div animate={{ y: [0, 8, 0] }} transition={{ duration: 1.4, repeat: Infinity }}>
          <ChevronDown size={18} />
        </motion.div>
      </motion.div>
    </section>
  );
}

/* ══════════════════════════════════════════════════
   PROFILE PHOTO — prominent, glowing, animated
   ══════════════════════════════════════════════════ */
function ProfilePhoto() {
  return (
    <div className="relative w-60 h-60 sm:w-72 sm:h-72 md:w-80 md:h-80 lg:w-[330px] lg:h-[330px] select-none mx-auto flex items-center justify-center">

      {/* Outermost pulsing ambient glow */}
      <motion.div
        className="absolute -inset-4 sm:-inset-6 rounded-full pointer-events-none"
        style={{
          background: 'radial-gradient(circle, rgba(0,212,255,0.3) 0%, rgba(124,58,237,0.2) 50%, transparent 70%)',
          filter: 'blur(25px)',
          zIndex: 0,
        }}
        animate={{
          opacity: [0.45, 0.75, 0.45],
          scale: [0.97, 1.03, 0.97],
        }}
        transition={{ duration: 4.5, repeat: Infinity, ease: 'easeInOut' }}
      />

      {/* Animated spinning conic gradient border */}
      <motion.div
        className="absolute -inset-1 sm:-inset-1.5 rounded-full pointer-events-none"
        style={{
          background: 'conic-gradient(from 0deg, #00d4ff, #7c3aed, #ec4899, #06b6d4, #00d4ff)',
          borderRadius: '50%',
          zIndex: 1,
        }}
        animate={{ rotate: 360 }}
        transition={{ duration: 12, repeat: Infinity, ease: 'linear' }}
      />

      {/* Subtle dashed accent orbit ring */}
      <motion.div
        className="absolute -inset-3 sm:-inset-4 rounded-full pointer-events-none"
        style={{
          border: '1px dashed rgba(0,212,255,0.25)',
          zIndex: 1,
        }}
        animate={{ rotate: -360 }}
        transition={{ duration: 25, repeat: Infinity, ease: 'linear' }}
      />

      {/* Frame wrapper with dark bezel & shadow */}
      <div
        className="relative w-full h-full rounded-full p-[3px] z-[2]"
        style={{
          background: '#020818',
          boxShadow: '0 20px 50px rgba(0,0,0,0.7), inset 0 0 15px rgba(0,212,255,0.2)',
        }}
      >
        <motion.div
          className="w-full h-full rounded-full overflow-hidden relative group cursor-pointer shadow-inner"
          whileHover={{ scale: 1.025 }}
          transition={{ duration: 0.35, ease: 'easeOut' }}
        >
          <img
            src="/assets/images/my-photo.jpeg"
            alt="Mohana P — Computer Science & Engineering Student"
            className="w-full h-full object-cover object-[center_15%] transition-transform duration-700 ease-out group-hover:scale-105"
            loading="eager"
            fetchPriority="high"
            decoding="async"
            onError={(e) => {
              e.currentTarget.style.display = 'none';
              const parent = e.currentTarget.parentElement;
              parent.style.background = 'linear-gradient(135deg, rgba(0,212,255,0.15), rgba(124,58,237,0.25))';
              const div = document.createElement('div');
              div.style.cssText =
                'position:absolute;inset:0;display:flex;flex-direction:column;align-items:center;justify-content:center;gap:4px;';
              div.innerHTML = `
                <span style="font-size:3.5rem;font-weight:900;background:linear-gradient(135deg,#00d4ff,#a78bfa);-webkit-background-clip:text;-webkit-text-fill-color:transparent;">MP</span>
                <span style="font-size:0.75rem;color:#94a3b8;font-family:monospace;letter-spacing:0.15em;">MOHANA P</span>
              `;
              parent.appendChild(div);
            }}
          />
        </motion.div>
      </div>

      {/* Floating badge: CGPA */}
      <motion.div
        className="absolute rounded-xl px-3 py-1.5 text-xs font-bold"
        style={{
          top: '2%',
          right: '-5%',
          background: 'rgba(34,197,94,0.15)',
          border: '1px solid rgba(34,197,94,0.5)',
          color: '#4ade80',
          boxShadow: '0 0 16px rgba(34,197,94,0.3)',
          backdropFilter: 'blur(8px)',
          zIndex: 5,
          whiteSpace: 'nowrap',
        }}
        animate={{ y: [0, -6, 0] }}
        transition={{ duration: 3, repeat: Infinity, delay: 0 }}
      >
        🎓 CGPA 8.15
      </motion.div>

      {/* Floating badge: Agentic AI */}
      <motion.div
        className="absolute rounded-xl px-3 py-1.5 text-xs font-bold"
        style={{
          bottom: '6%',
          right: '-7%',
          background: 'rgba(236,72,153,0.15)',
          border: '1px solid rgba(236,72,153,0.5)',
          color: '#f472b6',
          boxShadow: '0 0 16px rgba(236,72,153,0.3)',
          backdropFilter: 'blur(8px)',
          zIndex: 5,
          whiteSpace: 'nowrap',
        }}
        animate={{ y: [0, -7, 0] }}
        transition={{ duration: 3.5, repeat: Infinity, delay: 0.6 }}
      >
        🤖 Agentic AI
      </motion.div>

      {/* Floating badge: Full-Stack */}
      <motion.div
        className="absolute rounded-xl px-3 py-1.5 text-xs font-bold"
        style={{
          bottom: '12%',
          left: '-7%',
          background: 'rgba(0,212,255,0.15)',
          border: '1px solid rgba(0,212,255,0.5)',
          color: '#00d4ff',
          boxShadow: '0 0 16px rgba(0,212,255,0.3)',
          backdropFilter: 'blur(8px)',
          zIndex: 5,
          whiteSpace: 'nowrap',
        }}
        animate={{ y: [0, -5, 0] }}
        transition={{ duration: 4, repeat: Infinity, delay: 1.2 }}
      >
        ⚡ Full-Stack
      </motion.div>
    </div>
  );
}

/* ── Cinematic Background ── */
function CinematicBackground() {
  return (
    <div className="absolute inset-0 overflow-hidden pointer-events-none" aria-hidden="true">
      <div className="absolute inset-0" style={{
        background: 'radial-gradient(ellipse at 25% 50%, rgba(0,20,60,0.9) 0%, rgba(2,8,24,0.97) 60%)',
      }} />
      <motion.div className="absolute -top-32 -left-32 rounded-full"
        style={{ width:700, height:700,
          background:'radial-gradient(circle at 40% 40%, rgba(0,212,255,0.15) 0%, rgba(124,58,237,0.07) 40%, transparent 70%)',
          filter:'blur(40px)' }}
        animate={{ scale:[1,1.08,1], opacity:[0.7,1,0.7] }}
        transition={{ duration:8, repeat:Infinity }}
      />
      <motion.div className="absolute -bottom-40 -right-40 rounded-full"
        style={{ width:600, height:600,
          background:'radial-gradient(circle at 60% 60%, rgba(124,58,237,0.18) 0%, rgba(236,72,153,0.07) 40%, transparent 70%)',
          filter:'blur(50px)' }}
        animate={{ scale:[1.08,1,1.08], opacity:[0.6,1,0.6] }}
        transition={{ duration:9, repeat:Infinity }}
      />
      {/* Scanlines */}
      <div className="absolute inset-0" style={{
        backgroundImage:'repeating-linear-gradient(0deg, transparent, transparent 2px, rgba(0,212,255,0.012) 2px, rgba(0,212,255,0.012) 4px)',
      }} />
      {/* Shooting stars */}
      {[...Array(5)].map((_,i) => (
        <motion.div key={i} className="absolute h-px"
          style={{ top:`${8+i*16}%`, left:'-5%', width:`${60+i*25}px`,
            background:'linear-gradient(90deg, transparent, rgba(0,212,255,0.7), transparent)' }}
          animate={{ x:['0vw','115vw'], opacity:[0,1,0] }}
          transition={{ duration:2.5+i*0.5, repeat:Infinity, delay:i*2, ease:'linear' }}
        />
      ))}
    </div>
  );
}

/* ── Floating code particles ── */
function FloatingCodeParticles() {
  const items = ['<AI/>', '{ML}', 'async()', 'React', '.then()', 'const', 'import', 'API', '∑', 'λ'];
  return (
    <div className="absolute inset-0 overflow-hidden pointer-events-none" aria-hidden="true">
      {items.map((s,i) => (
        <motion.div key={i} className="absolute font-mono text-xs"
          style={{ left:`${5+i*9}%`, top:`${15+(i%4)*18}%`,
            color: i%2===0 ? 'rgba(0,212,255,0.2)' : 'rgba(124,58,237,0.2)' }}
          animate={{ y:[0,-28,0], opacity:[0.15,0.5,0.15] }}
          transition={{ duration:4+i*0.5, repeat:Infinity, delay:i*0.4 }}
        >{s}</motion.div>
      ))}
    </div>
  );
}
