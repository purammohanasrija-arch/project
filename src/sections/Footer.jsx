import { motion } from 'framer-motion';
import { Github, Linkedin, Mail, Heart } from 'lucide-react';
import { personal } from '../data/portfolioData';

export default function Footer() {
  return (
    <footer id="footer" className="relative z-10 overflow-hidden" aria-label="Footer">

      {/* Cosmic background */}
      <div className="absolute inset-0 pointer-events-none" aria-hidden="true">
        {/* Big glow at bottom */}
        <motion.div
          className="absolute bottom-0 left-1/2 -translate-x-1/2 rounded-full"
          style={{
            width: 900,
            height: 400,
            background: 'radial-gradient(ellipse, rgba(0,212,255,0.12) 0%, rgba(124,58,237,0.08) 40%, transparent 70%)',
            filter: 'blur(60px)',
          }}
          animate={{ scale: [1, 1.1, 1], opacity: [0.6, 1, 0.6] }}
          transition={{ duration: 8, repeat: Infinity }}
        />

        {/* Grid */}
        <div
          className="absolute inset-0 opacity-[0.03]"
          style={{
            backgroundImage: 'linear-gradient(rgba(0,212,255,1) 1px, transparent 1px), linear-gradient(90deg, rgba(0,212,255,1) 1px, transparent 1px)',
            backgroundSize: '60px 60px',
          }}
        />

        {/* Floating particles */}
        {[...Array(10)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute rounded-full"
            style={{
              width: 3 + (i % 3),
              height: 3 + (i % 3),
              left: `${8 + i * 9}%`,
              bottom: `${10 + (i % 5) * 12}%`,
              background: i % 2 === 0 ? '#00d4ff' : '#7c3aed',
            }}
            animate={{ y: [0, -50, 0], opacity: [0.2, 0.8, 0.2] }}
            transition={{ duration: 3 + i * 0.6, repeat: Infinity, delay: i * 0.35 }}
          />
        ))}

        {/* Shooting lines */}
        {[...Array(3)].map((_, i) => (
          <motion.div
            key={`line-${i}`}
            className="absolute h-px"
            style={{
              top: `${20 + i * 25}%`,
              left: '-5%',
              width: `${80 + i * 40}px`,
              background: 'linear-gradient(90deg, transparent, rgba(0,212,255,0.6), transparent)',
            }}
            animate={{ x: ['0vw', '110vw'], opacity: [0, 1, 0] }}
            transition={{ duration: 4 + i, repeat: Infinity, delay: i * 2.5, ease: 'linear' }}
          />
        ))}
      </div>

      <div className="relative max-w-5xl mx-auto px-4 md:px-8 pt-24 pb-12">

        {/* DREAM BUILD GROW */}
        <div className="text-center mb-12">
          {['Dream.', 'Build.', 'Grow.'].map((word, i) => (
            <motion.div
              key={word}
              className="overflow-hidden"
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.15 }}
            >
              <motion.h2
                className="font-black leading-none"
                style={{
                  fontSize: 'clamp(3rem, 10vw, 6rem)',
                  background: [
                    'linear-gradient(135deg, #ffffff 0%, #00d4ff 100%)',
                    'linear-gradient(135deg, #00d4ff 0%, #7c3aed 100%)',
                    'linear-gradient(135deg, #7c3aed 0%, #ec4899 100%)',
                  ][i],
                  WebkitBackgroundClip: 'text',
                  WebkitTextFillColor: 'transparent',
                  backgroundClip: 'text',
                  filter: 'drop-shadow(0 0 20px rgba(0,212,255,0.3))',
                }}
                initial={{ y: 80 }}
                whileInView={{ y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.1 + i * 0.15, duration: 0.7, ease: [0.25, 0.46, 0.45, 0.94] }}
                whileHover={{ scale: 1.03 }}
              >
                {word}
              </motion.h2>
            </motion.div>
          ))}
        </div>

        {/* Thank You block */}
        <motion.div
          className="text-center mb-12"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.5, duration: 0.7 }}
        >
          <motion.div
            className="inline-block px-10 py-6 rounded-3xl mb-8"
            style={{
              background: 'linear-gradient(135deg, rgba(0,212,255,0.06), rgba(124,58,237,0.06))',
              border: '1px solid rgba(0,212,255,0.15)',
            }}
            whileHover={{
              boxShadow: '0 0 60px rgba(0,212,255,0.15)',
              borderColor: 'rgba(0,212,255,0.3)',
            }}
          >
            <motion.h3
              className="text-4xl md:text-5xl font-black text-white mb-2"
              animate={{ scale: [1, 1.02, 1] }}
              transition={{ duration: 4, repeat: Infinity }}
            >
              Thank You!
            </motion.h3>
            <p className="text-slate-400 text-sm">For visiting my portfolio</p>
          </motion.div>

          {/* MSP watermark */}
          <motion.div
            className="text-7xl font-black opacity-5 select-none mb-6"
            style={{
              background: 'linear-gradient(135deg, #00d4ff, #7c3aed)',
              WebkitBackgroundClip: 'text',
              WebkitTextFillColor: 'transparent',
              backgroundClip: 'text',
            }}
            animate={{ opacity: [0.04, 0.08, 0.04] }}
            transition={{ duration: 5, repeat: Infinity }}
            aria-hidden="true"
          >
            MSP
          </motion.div>

          <motion.div
            className="text-2xl md:text-3xl font-bold mb-2"
            style={{
              background: 'linear-gradient(135deg, #00d4ff, #a78bfa)',
              WebkitBackgroundClip: 'text',
              WebkitTextFillColor: 'transparent',
              backgroundClip: 'text',
            }}
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.7 }}
          >
            Mohana P
          </motion.div>
          <p className="text-sm text-slate-400">{personal.title}</p>
        </motion.div>

        {/* Social icons */}
        <motion.div
          className="flex items-center justify-center gap-5 mb-10"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.8 }}
        >
          {[
            { href: personal.linkedin, icon: Linkedin, label: 'LinkedIn', color: '#0ea5e9' },
            { href: personal.github, icon: Github, label: 'GitHub', color: '#a78bfa' },
            { href: `mailto:${personal.email}`, icon: Mail, label: 'Email', color: '#00d4ff' },
          ].map(({ href, icon: Icon, label, color }) => (
            <motion.a
              key={label}
              href={href}
              target={href.startsWith('mailto') ? '_self' : '_blank'}
              rel="noopener noreferrer"
              className="w-13 h-13 rounded-2xl flex items-center justify-center text-slate-400 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-cyan-400"
              style={{
                width: 52, height: 52,
                background: 'rgba(255,255,255,0.04)',
                border: '1px solid rgba(255,255,255,0.08)',
              }}
              whileHover={{
                scale: 1.2,
                color,
                borderColor: color + '60',
                boxShadow: `0 0 25px ${color}35`,
                background: `${color}10`,
              }}
              whileTap={{ scale: 0.9 }}
              aria-label={label}
            >
              <Icon size={20} aria-hidden="true" />
            </motion.a>
          ))}
        </motion.div>

        {/* Divider */}
        <motion.div
          className="h-px mb-6"
          style={{ background: 'linear-gradient(90deg, transparent, rgba(0,212,255,0.3), rgba(124,58,237,0.3), transparent)' }}
          initial={{ scaleX: 0 }}
          whileInView={{ scaleX: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 1 }}
          aria-hidden="true"
        />

        {/* Bottom row */}
        <div className="flex flex-col sm:flex-row items-center justify-between gap-3 text-xs text-slate-600">
          <span>© {new Date().getFullYear()} Mohana Srija Puram · All rights reserved</span>
          <motion.span
            className="flex items-center gap-1.5"
            whileHover={{ color: '#e2e8f0' }}
          >
            Built with <Heart size={11} className="text-red-500" fill="currentColor" aria-hidden="true" /> using React &amp; Framer Motion
          </motion.span>
        </div>
      </div>
    </footer>
  );
}
