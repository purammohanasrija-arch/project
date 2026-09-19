import { motion, AnimatePresence } from 'framer-motion';
import { X, Download, Github, Linkedin, Mail, Zap, GraduationCap, Code2, Briefcase, Award } from 'lucide-react';
import { personal, stats, projects, certifications, internships, skills } from '../data/portfolioData';

export default function RecruiterMode({ isOpen, onClose }) {
  const topSkills = ['Python', 'React', 'Node.js', 'MongoDB', 'JavaScript', 'Flask', 'SQL', 'ML/AI'];
  const topProjects = projects.slice(0, 3);
  const topCerts = certifications.slice(0, 6);

  return (
    <AnimatePresence>
      {isOpen && (
        <motion.div
          className="fixed inset-0 z-50 flex items-center justify-center p-4"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          role="dialog"
          aria-modal="true"
          aria-labelledby="recruiter-title"
        >
          {/* Backdrop */}
          <div
            className="absolute inset-0 bg-black/75 backdrop-blur-md"
            onClick={onClose}
            aria-hidden="true"
          />

          {/* Panel */}
          <motion.div
            className="relative w-full max-w-4xl max-h-[92vh] overflow-y-auto rounded-2xl"
            style={{
              background: 'rgba(3, 10, 25, 0.97)',
              border: '1px solid rgba(124,58,237,0.3)',
              boxShadow: '0 0 80px rgba(124,58,237,0.2), 0 0 40px rgba(0,212,255,0.1)',
            }}
            initial={{ scale: 0.92, opacity: 0, y: 30 }}
            animate={{ scale: 1, opacity: 1, y: 0 }}
            exit={{ scale: 0.92, opacity: 0, y: 30 }}
            transition={{ type: 'spring', stiffness: 280, damping: 28 }}
          >
            {/* Top bar */}
            <div
              className="h-1 w-full rounded-t-2xl"
              style={{ background: 'linear-gradient(90deg, #7c3aed, #00d4ff, #ec4899)' }}
            />

            <div className="p-6 md:p-8">
              {/* Header */}
              <div className="flex items-start justify-between mb-8">
                <div className="flex items-center gap-3">
                  <div
                    className="w-10 h-10 rounded-xl flex items-center justify-center"
                    style={{
                      background: 'linear-gradient(135deg, rgba(124,58,237,0.3), rgba(0,212,255,0.2))',
                      border: '1px solid rgba(124,58,237,0.4)',
                    }}
                  >
                    <Zap size={18} className="text-purple-400" aria-hidden="true" />
                  </div>
                  <div>
                    <h2 id="recruiter-title" className="text-xl font-bold text-white">Recruiter Mode</h2>
                    <p className="text-xs text-slate-400">Quick overview for recruiters — all in one place</p>
                  </div>
                </div>
                <button
                  onClick={onClose}
                  className="p-2 rounded-xl text-slate-400 hover:text-white transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-purple-400"
                  style={{ background: 'rgba(255,255,255,0.05)' }}
                  aria-label="Close Recruiter Mode"
                >
                  <X size={18} />
                </button>
              </div>

              {/* Main grid */}
              <div className="grid md:grid-cols-2 gap-6">
                {/* Left column */}
                <div className="space-y-5">
                  {/* Profile */}
                  <RecruiterCard title="Profile" icon={GraduationCap} color="#00d4ff">
                    <div className="space-y-2">
                      <div className="flex items-center gap-3 mb-3">
                        <div className="w-14 h-14 rounded-full overflow-hidden flex-shrink-0"
                          style={{ border: '2px solid rgba(0,212,255,0.4)', boxShadow: '0 0 15px rgba(0,212,255,0.2)' }}>
                          <img src="/assets/images/my-photo.jpeg" alt={personal.name}
                            className="w-full h-full object-cover object-[center_15%]"
                            onError={e => {
                              e.target.style.display = 'none';
                              e.target.parentElement.style.cssText += ';background:linear-gradient(135deg,rgba(0,212,255,0.2),rgba(124,58,237,0.2));display:flex;align-items:center;justify-content:center;';
                              const s = document.createElement('span');
                              s.textContent = 'MP';
                              s.style.cssText = 'font-size:14px;font-weight:900;color:#00d4ff;';
                              e.target.parentElement.appendChild(s);
                            }}
                          />
                        </div>
                        <div>
                          <div className="text-base font-bold text-white">{personal.name}</div>
                          <div className="text-sm text-slate-400">{personal.title}</div>
                        </div>
                      </div>
                      <div className="text-sm text-slate-400">📍 {personal.location}</div>
                      <div className="text-sm text-slate-400">🎓 Vignan's University · CGPA 8.15/10</div>
                      <div className="text-sm text-slate-400">📅 2024–2028 (Expected)</div>
                    </div>
                  </RecruiterCard>

                  {/* Top Skills */}
                  <RecruiterCard title="Top Skills" icon={Code2} color="#7c3aed">
                    <div className="flex flex-wrap gap-2">
                      {topSkills.map(s => (
                        <span
                          key={s}
                          className="px-2.5 py-1 rounded-lg text-xs font-medium"
                          style={{
                            background: 'rgba(124,58,237,0.15)',
                            border: '1px solid rgba(124,58,237,0.3)',
                            color: '#a78bfa',
                          }}
                        >
                          {s}
                        </span>
                      ))}
                    </div>
                    <div className="mt-3 text-xs text-slate-500">
                      Also: HTML, CSS, Firebase, Git, Linux, Figma, OpenAI API, Gemini API
                    </div>
                  </RecruiterCard>

                  {/* Internships */}
                  <RecruiterCard title="Internship Experience" icon={Briefcase} color="#22c55e">
                    <div className="space-y-3">
                      {internships.map(intern => (
                        <div key={intern.id} className="flex items-start gap-2">
                          <div
                            className="w-1.5 h-1.5 rounded-full mt-2 flex-shrink-0"
                            style={{ background: intern.color }}
                          />
                          <div>
                            <div className="text-sm font-semibold text-white">{intern.company}</div>
                            <div className="text-xs text-slate-400">{intern.role} · {intern.period}</div>
                          </div>
                        </div>
                      ))}
                    </div>
                  </RecruiterCard>
                </div>

                {/* Right column */}
                <div className="space-y-5">
                  {/* Top Projects */}
                  <RecruiterCard title="Top Projects" icon={Code2} color="#06b6d4">
                    <div className="space-y-3">
                      {topProjects.map(p => (
                        <div
                          key={p.id}
                          className="rounded-xl p-3"
                          style={{ background: `${p.color}08`, border: `1px solid ${p.color}20` }}
                        >
                          <div className="flex items-center gap-2 mb-1">
                            <span aria-hidden="true">{p.icon}</span>
                            <span className="text-sm font-semibold text-white">{p.shortTitle}</span>
                          </div>
                          <div className="flex flex-wrap gap-1.5">
                            {p.tech.slice(0, 4).map(t => (
                              <span
                                key={t}
                                className="text-xs px-1.5 py-0.5 rounded-md"
                                style={{ background: 'rgba(255,255,255,0.05)', color: '#94a3b8' }}
                              >
                                {t}
                              </span>
                            ))}
                          </div>
                          <div className="flex gap-3 mt-2">
                            <a
                              href={p.github}
                              target="_blank"
                              rel="noopener noreferrer"
                              className="text-xs text-slate-400 hover:text-white flex items-center gap-1 transition-colors"
                              aria-label={`GitHub for ${p.shortTitle}`}
                            >
                              <Github size={11} aria-hidden="true" />GitHub
                            </a>
                            {p.demo && (
                              <a
                                href={p.demo}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="text-xs text-cyan-400 hover:text-cyan-300 flex items-center gap-1 transition-colors"
                                aria-label={`Live demo for ${p.shortTitle}`}
                              >
                                ↗ Live
                              </a>
                            )}
                          </div>
                        </div>
                      ))}
                    </div>
                  </RecruiterCard>

                  {/* Certifications */}
                  <RecruiterCard title="Certifications" icon={Award} color="#ec4899">
                    <div className="flex flex-wrap gap-1.5">
                      {topCerts.map(c => (
                        <span
                          key={c.id}
                          className="px-2 py-1 rounded-lg text-xs"
                          style={{ background: `${c.color}10`, color: c.color, border: `1px solid ${c.color}25` }}
                        >
                          {c.title}
                        </span>
                      ))}
                    </div>
                    <div className="text-xs text-slate-500 mt-2">
                      +{certifications.length - topCerts.length} more certifications
                    </div>
                  </RecruiterCard>
                </div>
              </div>

              {/* Bottom action bar */}
              <div
                className="mt-8 pt-6 flex flex-wrap items-center justify-between gap-4 border-t"
                style={{ borderColor: 'rgba(255,255,255,0.06)' }}
              >
                <div className="flex flex-wrap gap-3">
                  <a
                    href={personal.resume}
                    download="Mohana-Srija-Puram-Resume.pdf"
                    className="flex items-center gap-2 px-5 py-2.5 rounded-xl text-sm font-semibold text-white transition-all duration-200 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-purple-400"
                    style={{
                      background: 'linear-gradient(135deg, #7c3aed, #00d4ff)',
                    }}
                    onMouseEnter={e => e.currentTarget.style.opacity = '0.9'}
                    onMouseLeave={e => e.currentTarget.style.opacity = '1'}
                    aria-label="Download resume"
                  >
                    <Download size={14} aria-hidden="true" />
                    Download Resume
                  </a>
                  <a
                    href={personal.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-2 px-4 py-2.5 rounded-xl text-sm font-medium text-slate-300 hover:text-white transition-all duration-200 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-cyan-400"
                    style={{
                      background: 'rgba(255,255,255,0.05)',
                      border: '1px solid rgba(255,255,255,0.1)',
                    }}
                    aria-label="View GitHub profile"
                  >
                    <Github size={14} aria-hidden="true" />
                    GitHub
                  </a>
                  <a
                    href={personal.linkedin}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-2 px-4 py-2.5 rounded-xl text-sm font-medium transition-all duration-200 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-blue-400"
                    style={{
                      background: 'rgba(14,165,233,0.08)',
                      border: '1px solid rgba(14,165,233,0.25)',
                      color: '#38bdf8',
                    }}
                    aria-label="View LinkedIn profile"
                  >
                    <Linkedin size={14} aria-hidden="true" />
                    LinkedIn
                  </a>
                </div>
                <a
                  href={`mailto:${personal.email}`}
                  className="flex items-center gap-2 text-sm text-slate-400 hover:text-cyan-400 transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-cyan-400 rounded-lg px-2 py-1"
                  aria-label={`Email ${personal.email}`}
                >
                  <Mail size={14} aria-hidden="true" />
                  {personal.email}
                </a>
              </div>
            </div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}

function RecruiterCard({ title, icon: Icon, color, children }) {
  return (
    <div
      className="rounded-xl p-4"
      style={{
        background: `${color}05`,
        border: `1px solid ${color}18`,
      }}
    >
      <div className="flex items-center gap-2 mb-3">
        <Icon size={14} style={{ color }} aria-hidden="true" />
        <h3 className="text-xs font-semibold uppercase tracking-wider" style={{ color }}>
          {title}
        </h3>
      </div>
      {children}
    </div>
  );
}
