import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Menu, X, Zap } from 'lucide-react';

const navLinks = [
  { label: 'Home', href: '#home' },
  { label: 'About', href: '#about' },
  { label: 'Projects', href: '#projects' },
  { label: 'Experience', href: '#experience' },
  { label: 'Skills', href: '#skills' },
  { label: 'Certificates', href: '#certifications' },
  { label: 'Contact', href: '#contact' },
];

export default function Navbar({ onRecruiterMode }) {
  const [scrolled, setScrolled] = useState(false);
  const [active, setActive] = useState('home');
  const [mobileOpen, setMobileOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);

      // Determine active section
      const sections = navLinks.map(l => l.href.replace('#', ''));
      for (let i = sections.length - 1; i >= 0; i--) {
        const el = document.getElementById(sections[i]);
        if (el) {
          const rect = el.getBoundingClientRect();
          if (rect.top <= 120) {
            setActive(sections[i]);
            break;
          }
        }
      }
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleNav = (href) => {
    setMobileOpen(false);
    const id = href.replace('#', '');
    const el = document.getElementById(id);
    if (el) el.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <>
      <motion.nav
        className="fixed top-0 left-0 right-0 z-50 transition-all duration-300"
        initial={{ y: -80, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.6, delay: 0.2 }}
        style={{
          background: scrolled ? 'rgba(2, 8, 24, 0.92)' : 'transparent',
          backdropFilter: scrolled ? 'blur(20px)' : 'none',
          borderBottom: scrolled ? '1px solid rgba(0, 212, 255, 0.1)' : 'none',
          boxShadow: scrolled ? '0 4px 30px rgba(0, 0, 0, 0.5)' : 'none',
        }}
        role="navigation"
        aria-label="Main navigation"
      >
        <div className="max-w-7xl mx-auto px-4 md:px-8">
          <div className={`flex items-center justify-between transition-all duration-300 ${scrolled ? 'h-14' : 'h-20'}`}>
            {/* Logo */}
            <button
              onClick={() => handleNav('#home')}
              className="flex items-center gap-2 group focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-cyan-400 rounded-lg"
              aria-label="Go to top"
            >
              <div
                className="w-9 h-9 rounded-xl flex items-center justify-center font-black text-sm tracking-wider transition-all duration-300 group-hover:scale-110"
                style={{
                  background: 'linear-gradient(135deg, rgba(0,212,255,0.2), rgba(124,58,237,0.2))',
                  border: '1px solid rgba(0,212,255,0.4)',
                  boxShadow: '0 0 15px rgba(0,212,255,0.2)',
                  color: '#00d4ff',
                }}
              >
                MSP
              </div>
              <span className="hidden sm:block text-sm font-semibold text-white/80 group-hover:text-white transition-colors">
                Mohana Srija
              </span>
            </button>

            {/* Desktop Links */}
            <div className="hidden md:flex items-center gap-1">
              {navLinks.map(link => {
                const id = link.href.replace('#', '');
                const isActive = active === id;
                return (
                  <button
                    key={link.label}
                    onClick={() => handleNav(link.href)}
                    className={`relative px-3 py-2 text-sm font-medium rounded-lg transition-all duration-200 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-cyan-400 ${
                      isActive ? 'text-cyan-400' : 'text-slate-400 hover:text-white'
                    }`}
                  >
                    {isActive && (
                      <motion.span
                        layoutId="nav-active"
                        className="absolute inset-0 rounded-lg"
                        style={{ background: 'rgba(0,212,255,0.08)', border: '1px solid rgba(0,212,255,0.2)' }}
                        transition={{ type: 'spring', stiffness: 400, damping: 30 }}
                      />
                    )}
                    <span className="relative z-10">{link.label}</span>
                  </button>
                );
              })}
            </div>

            {/* Right side */}
            <div className="flex items-center gap-3">
              {/* Recruiter Mode */}
              <button
                onClick={onRecruiterMode}
                className="hidden sm:flex items-center gap-2 px-3 py-2 rounded-xl text-xs font-semibold transition-all duration-200 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-purple-400"
                style={{
                  background: 'linear-gradient(135deg, rgba(124,58,237,0.2), rgba(0,212,255,0.1))',
                  border: '1px solid rgba(124,58,237,0.4)',
                  color: '#a78bfa',
                }}
                onMouseEnter={e => {
                  e.currentTarget.style.boxShadow = '0 0 20px rgba(124,58,237,0.3)';
                }}
                onMouseLeave={e => {
                  e.currentTarget.style.boxShadow = 'none';
                }}
                aria-label="Open Recruiter Mode"
              >
                <Zap size={13} />
                <span>Recruiter Mode</span>
              </button>

              {/* Mobile hamburger */}
              <button
                onClick={() => setMobileOpen(!mobileOpen)}
                className="md:hidden p-2 rounded-lg text-slate-400 hover:text-white focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-cyan-400"
                aria-label={mobileOpen ? 'Close menu' : 'Open menu'}
                aria-expanded={mobileOpen}
              >
                {mobileOpen ? <X size={22} /> : <Menu size={22} />}
              </button>
            </div>
          </div>
        </div>
      </motion.nav>

      {/* Mobile Menu */}
      <AnimatePresence>
        {mobileOpen && (
          <motion.div
            className="fixed inset-0 z-40 md:hidden"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.2 }}
          >
            <div
              className="absolute inset-0 bg-black/60 backdrop-blur-sm"
              onClick={() => setMobileOpen(false)}
            />
            <motion.div
              className="absolute top-0 right-0 w-72 h-full glass-strong pt-20 px-6 pb-8 flex flex-col gap-2"
              initial={{ x: '100%' }}
              animate={{ x: 0 }}
              exit={{ x: '100%' }}
              transition={{ type: 'spring', stiffness: 300, damping: 30 }}
            >
              {navLinks.map((link, i) => {
                const id = link.href.replace('#', '');
                const isActive = active === id;
                return (
                  <motion.button
                    key={link.label}
                    onClick={() => handleNav(link.href)}
                    className={`w-full text-left px-4 py-3 rounded-xl text-sm font-medium transition-all focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-cyan-400 ${
                      isActive
                        ? 'text-cyan-400 bg-cyan-400/10 border border-cyan-400/20'
                        : 'text-slate-300 hover:text-white hover:bg-white/5'
                    }`}
                    initial={{ x: 30, opacity: 0 }}
                    animate={{ x: 0, opacity: 1 }}
                    transition={{ delay: i * 0.05 }}
                  >
                    {link.label}
                  </motion.button>
                );
              })}
              <div className="mt-4 pt-4 border-t border-white/10">
                <button
                  onClick={() => { setMobileOpen(false); onRecruiterMode(); }}
                  className="w-full flex items-center justify-center gap-2 px-4 py-3 rounded-xl text-sm font-semibold"
                  style={{
                    background: 'linear-gradient(135deg, rgba(124,58,237,0.25), rgba(0,212,255,0.15))',
                    border: '1px solid rgba(124,58,237,0.4)',
                    color: '#a78bfa',
                  }}
                >
                  <Zap size={14} />
                  Recruiter Mode
                </button>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
