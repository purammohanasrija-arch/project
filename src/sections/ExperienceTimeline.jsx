import { motion } from 'framer-motion';
import { GraduationCap, Briefcase, Trophy, ChevronRight } from 'lucide-react';
import { education, internships, extracurricular } from '../data/portfolioData';

const timelineItems = [
  // Education first
  ...education.map(e => ({ ...e, type: 'education', icon: GraduationCap })),
  // Internships
  ...internships.map(i => ({ ...i, type: 'internship', icon: Briefcase })),
  // Extracurricular
  ...extracurricular.map(e => ({ ...e, type: 'extra', icon: Trophy })),
];

const typeColors = {
  education: '#00d4ff',
  internship: '#7c3aed',
  extra: '#f59e0b',
};

export default function ExperienceTimeline() {
  return (
    <section
      id="experience"
      className="section-padding relative z-10"
      aria-labelledby="experience-heading"
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
          <h2 id="experience-heading" className="section-title">Experience Timeline</h2>
          <p className="section-subtitle mt-2">My professional &amp; academic journey</p>
        </motion.div>

        {/* Education */}
        <TimelineGroup title="Education" color="#00d4ff" items={education.map(e => ({ ...e, type: 'education', icon: GraduationCap }))} />

        {/* Internships */}
        <TimelineGroup title="Internship Experience" color="#7c3aed" items={internships.map(i => ({ ...i, type: 'internship', icon: Briefcase }))} />

        {/* Extra */}
        <TimelineGroup title="Leadership &amp; Extra-Curricular" color="#f59e0b" items={extracurricular.map(e => ({ ...e, type: 'extra', icon: Trophy }))} />
      </div>
    </section>
  );
}

function TimelineGroup({ title, color, items }) {
  return (
    <div className="mb-14">
      <motion.div
        className="flex items-center gap-3 mb-8"
        initial={{ opacity: 0, x: -20 }}
        whileInView={{ opacity: 1, x: 0 }}
        viewport={{ once: true }}
      >
        <div className="w-2 h-8 rounded-full" style={{ background: color }} />
        <h3 className="text-xl font-bold text-white">{title}</h3>
        <div className="flex-1 h-px ml-2" style={{ background: `linear-gradient(90deg, ${color}30, transparent)` }} />
      </motion.div>

      <div className="relative pl-6 md:pl-10 space-y-6">
        {/* Vertical line */}
        <div
          className="absolute left-3 md:left-5 top-2 bottom-2 w-px"
          style={{ background: `linear-gradient(180deg, ${color}50, transparent)` }}
          aria-hidden="true"
        />

        {items.map((item, i) => {
          const Icon = item.icon || Briefcase;
          const c = color;
          return (
            <motion.div
              key={i}
              className="relative flex gap-4 md:gap-6"
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
            >
              {/* Dot */}
              <div
                className="absolute -left-3 md:-left-5 top-5 w-3 h-3 rounded-full border-2"
                style={{
                  background: '#020818',
                  borderColor: c,
                  boxShadow: `0 0 8px ${c}60`,
                }}
                aria-hidden="true"
              />

              {/* Card */}
              <div
                className="flex-1 rounded-2xl p-5 md:p-6 group transition-all duration-300 card-hover"
                style={{
                  background: `linear-gradient(135deg, ${c}06, rgba(2,8,24,0.9))`,
                  border: `1px solid ${c}20`,
                }}
                onMouseEnter={e => {
                  e.currentTarget.style.borderColor = `${c}45`;
                  e.currentTarget.style.boxShadow = `0 0 30px ${c}15`;
                }}
                onMouseLeave={e => {
                  e.currentTarget.style.borderColor = `${c}20`;
                  e.currentTarget.style.boxShadow = 'none';
                }}
              >
                <EducationCard item={item} color={c} />
              </div>
            </motion.div>
          );
        })}
      </div>
    </div>
  );
}

function EducationCard({ item, color }) {
  // Education type
  if (item.type === 'education') {
    return (
      <>
        <div className="flex items-start justify-between flex-wrap gap-2 mb-1">
          <h4 className="text-base font-bold text-white">{item.degree}</h4>
          <span
            className="text-xs font-mono px-2 py-0.5 rounded-full"
            style={{ background: `${color}15`, color, border: `1px solid ${color}30` }}
          >
            {item.period}
          </span>
        </div>
        <p className="text-sm text-slate-400 mb-2">{item.institution}</p>
        <span
          className="inline-block text-xs font-semibold px-2.5 py-1 rounded-lg"
          style={{ background: `${color}12`, color, border: `1px solid ${color}25` }}
        >
          {item.score}
        </span>
      </>
    );
  }

  // Internship type
  if (item.type === 'internship') {
    return (
      <>
        <div className="flex items-start justify-between flex-wrap gap-2 mb-1">
          <h4 className="text-base font-bold text-white">{item.company}</h4>
          <span
            className="text-xs font-mono px-2 py-0.5 rounded-full"
            style={{ background: `${color}15`, color, border: `1px solid ${color}30` }}
          >
            {item.period}
          </span>
        </div>
        <p className="text-sm text-slate-400 mb-3">{item.role}</p>
        {item.tasks && item.tasks.length > 0 && (
          <div className="space-y-2">
            {item.tasks.map((task, ti) => (
              <div
                key={ti}
                className="flex items-start gap-2 rounded-lg p-3"
                style={{ background: 'rgba(255,255,255,0.03)', border: '1px solid rgba(255,255,255,0.06)' }}
              >
                <ChevronRight size={12} className="mt-0.5 shrink-0" style={{ color }} aria-hidden="true" />
                <div>
                  <span className="text-sm font-medium text-white">{task.title}</span>
                  <span className="text-xs text-slate-500 ml-2">({task.tech})</span>
                  {task.description && (
                    <p className="text-xs text-slate-400 mt-0.5">{task.description}</p>
                  )}
                </div>
              </div>
            ))}
          </div>
        )}
        {item.tasks && item.tasks.length === 0 && (
          <p className="text-sm text-slate-500 italic">Commencing {item.period}</p>
        )}
      </>
    );
  }

  // Extra type
  if (item.type === 'extra') {
    return (
      <>
        <div className="flex items-center gap-3">
          <span className="text-2xl">{item.icon}</span>
          <div>
            <h4 className="text-base font-bold text-white">{item.role}</h4>
            <p className="text-sm text-slate-400">{item.event}</p>
            <p className="text-xs text-slate-500">{item.organization}</p>
          </div>
        </div>
      </>
    );
  }

  return null;
}
