import { motion } from 'framer-motion';
import { Github, Linkedin, Mail, Heart } from 'lucide-react';
import { personal } from '../data/portfolioData';

export default function Footer() {
  return (
    <footer
      id="footer"
      className="relative z-10 overflow-hidden"
      aria-label="Footer"
    >
      {/* Background cosmic glow */}
      <div className="absolute inset-0 pointer-events-none" aria-hidden="true">
        <div
          className="absolute bottom-0 left-1/2 -translate-x-1/2 w-[800px] h-[300px] rounded-full opacity-20"
          style={{
            background: 'radial-gradient(ellipse, rgba(0,212,255,0.4) 0%, rgba(124,58,237,0.3) 50%, transparent 70%)',
            filter: 'blur(60px)',
          }}
        />
        {/* Animated particles */}
        {[...Array(8)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute rounded-full"
            style={{
              width: 3 + (i % 3),
              height: 3 + (i % 3),
              left: `${10 + i * 11}%`,
              background: i % 2 === 0 ? '#00d4ff' : '#7c3aed',
              opacity: 0.5,
            }}
            animate={{
              y: [0, -40, 0],
              opacity: [0.2, 0.8, 0.2],
            }}
            transition={{
              duration: 3 + i,
              repeat: Infinity,
              delay: i * 0.4,
            }}
          />
        ))}
      </div>

      <div className="relative max-w-5xl mx-auto px-4 md:px-8 pt-20 pb-12">
        {/* Closing phrase */}
        <motion.div
          className="text-center mb-12"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          <div
            className="text-5xl md:text-7xl font-black leading-tight mb-6"
            style={{
              background: 'linear-gradient(135deg, #ffffff 0%, #00d4ff 40%, #7c3aed 70%, #ec4899 100%)',
              WebkitBackgroundClip: 'text',
              WebkitTextFillColor: 'transparent',
              backgroundClip: 'text',
            }}
          >
            Dream.
            <br />
            Build.
            <br />
            Grow.
          </div>
        </motion.div>

        {/* Thank you */}
        <motion.div
          className="text-center mb-12"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7, delay: 0.2 }}
        >
          <div
            className="inline-block px-8 py-4 rounded-2xl mb-6"
            style={{
              background: 'linear-gradient(135deg, rgba(0,212,255,0.08), rgba(124,58,237,0.08))',
              border: '1px solid rgba(0,212,255,0.2)',
            }}
          >
            <h2 className="text-3xl md:text-4xl font-black text-white mb-1">Thank You!</h2>
            <p className="text-sm text-slate-400">For visiting my portfolio</p>
          </div>

          <div>
            <div
              className="text-xl md:text-2xl font-bold mb-1"
              style={{
                background: 'linear-gradient(135deg, #00d4ff, #a78bfa)',
                WebkitBackgroundClip: 'text',
                WebkitTextFillColor: 'transparent',
                backgroundClip: 'text',
              }}
            >
              Mohana Srija Puram
            </div>
            <p className="text-sm text-slate-400">{personal.title}</p>
          </div>
        </motion.div>

        {/* Social links */}
        <motion.div
          className="flex items-center justify-center gap-4 mb-10"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.4 }}
        >
          {[
            { href: personal.linkedin, icon: Linkedin, label: 'LinkedIn', color: '#0ea5e9' },
            { href: personal.github, icon: Github, label: 'GitHub', color: '#a78bfa' },
            { href: `mailto:${personal.email}`, icon: Mail, label: 'Email', color: '#00d4ff' },
          ].map(({ href, icon: Icon, label, color }) => (
            <a
              key={label}
              href={href}
              target={href.startsWith('mailto') ? '_self' : '_blank'}
              rel="noopener noreferrer"
              className="group w-12 h-12 rounded-2xl flex items-center justify-center text-slate-400 transition-all duration-300 hover:scale-110 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-cyan-400"
              style={{
                background: 'rgba(255,255,255,0.04)',
                border: '1px solid rgba(255,255,255,0.08)',
              }}
              onMouseEnter={e => {
                e.currentTarget.style.color = color;
                e.currentTarget.style.border = `1px solid ${color}50`;
                e.currentTarget.style.boxShadow = `0 0 20px ${color}30`;
              }}
              onMouseLeave={e => {
                e.currentTarget.style.color = '';
                e.currentTarget.style.border = '1px solid rgba(255,255,255,0.08)';
                e.currentTarget.style.boxShadow = 'none';
              }}
              aria-label={label}
            >
              <Icon size={20} aria-hidden="true" />
            </a>
          ))}
        </motion.div>

        {/* Divider */}
        <div
          className="h-px mb-6"
          style={{ background: 'linear-gradient(90deg, transparent, rgba(0,212,255,0.2), rgba(124,58,237,0.2), transparent)' }}
          aria-hidden="true"
        />

        {/* Bottom */}
        <div className="flex flex-col sm:flex-row items-center justify-between gap-3 text-xs text-slate-600">
          <span>
            © {new Date().getFullYear()} Mohana Srija Puram · All rights reserved
          </span>
          <span className="flex items-center gap-1.5">
            Built with <Heart size={11} className="text-red-500" aria-hidden="true" fill="currentColor" /> using React &amp; Framer Motion
          </span>
        </div>
      </div>
    </footer>
  );
}
