import { motion } from 'framer-motion';
import { Download, ExternalLink, FileText, GraduationCap, Code2, Briefcase } from 'lucide-react';
import { personal } from '../data/portfolioData';

const highlights = [
  { icon: GraduationCap, label: 'B.Tech CSE', value: 'CGPA 8.15/10', color: '#00d4ff' },
  { icon: Code2, label: 'Full-Stack', value: 'MERN + Python', color: '#7c3aed' },
  { icon: Briefcase, label: 'Internships', value: '3 Companies', color: '#22c55e' },
];

export default function ResumeSection() {
  return (
    <section
      id="resume"
      className="section-padding relative z-10"
      aria-labelledby="resume-heading"
    >
      <div className="max-w-5xl mx-auto">
        {/* Header */}
        <motion.div
          className="text-center mb-14"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <h2 id="resume-heading" className="section-title">Resume</h2>
          <p className="section-subtitle mt-2">Download my resume or view it online</p>
        </motion.div>

        <div className="flex flex-col lg:flex-row gap-10 items-center justify-center">
          {/* 3D tilted resume card */}
          <motion.div
            className="relative"
            style={{ perspective: 1200 }}
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <motion.div
              className="w-64 md:w-72 rounded-2xl overflow-hidden"
              style={{
                background: 'linear-gradient(135deg, rgba(0,212,255,0.1), rgba(124,58,237,0.1))',
                border: '1px solid rgba(0,212,255,0.3)',
                boxShadow: '0 30px 80px rgba(0,0,0,0.6), 0 0 40px rgba(0,212,255,0.1)',
                transform: 'rotateY(-12deg) rotateX(5deg)',
                transformStyle: 'preserve-3d',
              }}
              whileHover={{ rotateY: -6, rotateX: 2 }}
              transition={{ duration: 0.4 }}
            >
              {/* Resume preview mock */}
              <div className="p-6">
                {/* Header bar */}
                <div
                  className="h-14 rounded-xl mb-4 flex items-center justify-center"
                  style={{ background: 'linear-gradient(135deg, rgba(0,212,255,0.2), rgba(124,58,237,0.2))' }}
                >
                  <div>
                    <div className="text-xs font-bold text-white text-center">MOHANA SRIJA PURAM</div>
                    <div className="text-xs text-slate-400 text-center">CSE Student | AI/ML Enthusiast</div>
                  </div>
                </div>

                {/* Mock content lines */}
                <div className="space-y-2">
                  {[100, 80, 90, 70, 85, 75, 60, 80, 70, 65, 88, 72].map((w, i) => (
                    <div
                      key={i}
                      className="h-1.5 rounded-full"
                      style={{
                        width: `${w}%`,
                        background: i % 3 === 0
                          ? 'linear-gradient(90deg, rgba(0,212,255,0.4), rgba(0,212,255,0.1))'
                          : 'rgba(255,255,255,0.08)',
                      }}
                    />
                  ))}
                </div>

                {/* Bottom stamp */}
                <div className="mt-4 flex items-center justify-center">
                  <div
                    className="flex items-center gap-2 px-3 py-1.5 rounded-full text-xs"
                    style={{
                      background: 'rgba(0,212,255,0.1)',
                      border: '1px solid rgba(0,212,255,0.3)',
                      color: '#00d4ff',
                    }}
                  >
                    <FileText size={11} aria-hidden="true" />
                    Resume
                  </div>
                </div>
              </div>
            </motion.div>

            {/* Glow behind card */}
            <div
              className="absolute inset-0 -z-10 blur-2xl opacity-30 rounded-2xl"
              style={{
                background: 'linear-gradient(135deg, #00d4ff, #7c3aed)',
                transform: 'rotateY(-12deg) rotateX(5deg) scale(0.9) translateZ(-20px)',
              }}
              aria-hidden="true"
            />
          </motion.div>

          {/* Info + buttons */}
          <motion.div
            className="flex flex-col gap-6 max-w-sm w-full"
            initial={{ opacity: 0, x: 40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            <div>
              <h3 className="text-xl font-bold text-white mb-2">Mohana Srija Puram</h3>
              <p className="text-sm text-slate-400 leading-relaxed">
                Computer Science Engineering Student with expertise in full-stack development, AI/ML, and modern web technologies.
              </p>
            </div>

            {/* Quick highlights */}
            <div className="space-y-3">
              {highlights.map(({ icon: Icon, label, value, color }) => (
                <div key={label} className="flex items-center gap-3">
                  <div
                    className="w-9 h-9 rounded-xl flex items-center justify-center flex-shrink-0"
                    style={{ background: `${color}12`, border: `1px solid ${color}30` }}
                    aria-hidden="true"
                  >
                    <Icon size={16} style={{ color }} />
                  </div>
                  <div>
                    <div className="text-xs text-slate-500">{label}</div>
                    <div className="text-sm font-semibold text-white">{value}</div>
                  </div>
                </div>
              ))}
            </div>

            {/* Buttons */}
            <div className="flex flex-col sm:flex-row gap-3">
              <a
                href={personal.resume}
                download="Mohana-Srija-Puram-Resume.pdf"
                className="btn-primary flex items-center justify-center gap-2 text-sm"
                aria-label="Download resume as PDF"
              >
                <Download size={15} aria-hidden="true" />
                <span className="relative z-10">Download PDF</span>
              </a>
              <a
                href={personal.resume}
                target="_blank"
                rel="noopener noreferrer"
                className="btn-outline flex items-center justify-center gap-2 text-sm"
                aria-label="View resume in new tab"
              >
                <ExternalLink size={15} aria-hidden="true" />
                View Online
              </a>
            </div>

            <p className="text-xs text-slate-600 italic">
              📌 Add your resume PDF to <code className="text-slate-500 font-mono">public/resume/Mohana-Srija-Puram-Resume.pdf</code> to enable download.
            </p>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
