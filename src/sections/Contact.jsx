import { useState } from 'react';
import { motion } from 'framer-motion';
import { Mail, Linkedin, Github, Send, CheckCircle, AlertCircle } from 'lucide-react';
import { personal } from '../data/portfolioData';

const contactCards = [
  {
    icon: Mail,
    label: 'Email',
    value: personal.email,
    href: `mailto:${personal.email}`,
    color: '#00d4ff',
    desc: 'Best for detailed inquiries',
  },
  {
    icon: Linkedin,
    label: 'LinkedIn',
    value: 'mohana-srija-puram-47b628336',
    href: personal.linkedin,
    color: '#0ea5e9',
    desc: 'Professional networking',
  },
  {
    icon: Github,
    label: 'GitHub',
    value: 'purammohanasrija-arch',
    href: personal.github,
    color: '#a78bfa',
    desc: 'Explore my code',
  },
];

function validate(form) {
  const errors = {};
  if (!form.name.trim()) errors.name = 'Name is required';
  if (!form.email.trim()) {
    errors.email = 'Email is required';
  } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(form.email)) {
    errors.email = 'Enter a valid email address';
  }
  if (!form.message.trim()) errors.message = 'Message is required';
  else if (form.message.trim().length < 10) errors.message = 'Message must be at least 10 characters';
  return errors;
}

export default function Contact() {
  const [form, setForm] = useState({ name: '', email: '', message: '' });
  const [errors, setErrors] = useState({});
  const [status, setStatus] = useState(null); // null | 'success' | 'error'
  const [submitting, setSubmitting] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setForm(f => ({ ...f, [name]: value }));
    if (errors[name]) setErrors(er => ({ ...er, [name]: '' }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const errs = validate(form);
    if (Object.keys(errs).length > 0) { setErrors(errs); return; }

    setSubmitting(true);

    // Simulated submission — replace with Formspree/EmailJS endpoint
    await new Promise(r => setTimeout(r, 1200));
    setSubmitting(false);
    setStatus('success');
    setForm({ name: '', email: '', message: '' });

    setTimeout(() => setStatus(null), 6000);
  };

  return (
    <section
      id="contact"
      className="section-padding relative z-10 scanline"
      aria-labelledby="contact-heading"
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
          <h2 id="contact-heading" className="section-title">Let's Connect</h2>
          <p className="section-subtitle mt-2">Have a project in mind or just want to say hi? I'd love to hear from you!</p>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-10">
          {/* Contact cards */}
          <motion.div
            className="space-y-4"
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            {contactCards.map((card, i) => {
              const Icon = card.icon;
              return (
                <motion.a
                  key={card.label}
                  href={card.href}
                  target={card.href.startsWith('mailto') ? '_self' : '_blank'}
                  rel="noopener noreferrer"
                  className="flex items-center gap-4 p-5 rounded-2xl group transition-all duration-300 card-hover block focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-cyan-400"
                  style={{
                    background: `linear-gradient(135deg, ${card.color}08, rgba(2,8,24,0.9))`,
                    border: `1px solid ${card.color}20`,
                    textDecoration: 'none',
                  }}
                  onMouseEnter={e => {
                    e.currentTarget.style.borderColor = `${card.color}45`;
                    e.currentTarget.style.boxShadow = `0 0 25px ${card.color}15`;
                  }}
                  onMouseLeave={e => {
                    e.currentTarget.style.borderColor = `${card.color}20`;
                    e.currentTarget.style.boxShadow = 'none';
                  }}
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.1 }}
                  aria-label={`Contact via ${card.label}: ${card.value}`}
                >
                  <div
                    className="w-12 h-12 rounded-xl flex items-center justify-center flex-shrink-0 transition-transform duration-300 group-hover:scale-110"
                    style={{ background: `${card.color}15`, border: `1px solid ${card.color}30` }}
                  >
                    <Icon size={22} style={{ color: card.color }} aria-hidden="true" />
                  </div>
                  <div className="flex-1 min-w-0">
                    <div className="text-sm font-semibold text-white">{card.label}</div>
                    <div className="text-xs text-slate-400 truncate">{card.value}</div>
                    <div className="text-xs text-slate-600 mt-0.5">{card.desc}</div>
                  </div>
                  <div className="text-slate-600 group-hover:text-slate-300 transition-colors" aria-hidden="true">›</div>
                </motion.a>
              );
            })}

            {/* Location tag */}
            <div
              className="flex items-center gap-3 px-5 py-3 rounded-xl"
              style={{ background: 'rgba(255,255,255,0.02)', border: '1px solid rgba(255,255,255,0.06)' }}
            >
              <span className="text-xl" aria-hidden="true">📍</span>
              <div>
                <div className="text-xs text-slate-500">Location</div>
                <div className="text-sm text-slate-300">{personal.location}</div>
              </div>
            </div>
          </motion.div>

          {/* Contact form */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <form
              onSubmit={handleSubmit}
              className="rounded-2xl p-6 md:p-7 space-y-5"
              style={{
                background: 'rgba(255,255,255,0.02)',
                border: '1px solid rgba(0,212,255,0.12)',
              }}
              noValidate
              aria-label="Contact form"
            >
              <h3 className="text-base font-semibold text-white mb-2">Send a Message</h3>

              {/* Name */}
              <div>
                <label htmlFor="name" className="block text-xs font-medium text-slate-400 mb-1.5">
                  Your Name <span className="text-red-400" aria-hidden="true">*</span>
                </label>
                <input
                  id="name"
                  name="name"
                  type="text"
                  value={form.name}
                  onChange={handleChange}
                  placeholder="e.g. Priya Sharma"
                  className="w-full px-4 py-3 rounded-xl text-sm text-white placeholder-slate-600 outline-none transition-all duration-200"
                  style={{
                    background: 'rgba(255,255,255,0.04)',
                    border: errors.name ? '1px solid #ef4444' : '1px solid rgba(255,255,255,0.1)',
                  }}
                  onFocus={e => { if (!errors.name) e.target.style.border = '1px solid rgba(0,212,255,0.4)'; }}
                  onBlur={e => { if (!errors.name) e.target.style.border = '1px solid rgba(255,255,255,0.1)'; }}
                  aria-describedby={errors.name ? 'name-error' : undefined}
                  aria-invalid={!!errors.name}
                  autoComplete="name"
                />
                {errors.name && (
                  <p id="name-error" className="text-xs text-red-400 mt-1 flex items-center gap-1">
                    <AlertCircle size={11} aria-hidden="true" />{errors.name}
                  </p>
                )}
              </div>

              {/* Email */}
              <div>
                <label htmlFor="email" className="block text-xs font-medium text-slate-400 mb-1.5">
                  Email Address <span className="text-red-400" aria-hidden="true">*</span>
                </label>
                <input
                  id="email"
                  name="email"
                  type="email"
                  value={form.email}
                  onChange={handleChange}
                  placeholder="you@example.com"
                  className="w-full px-4 py-3 rounded-xl text-sm text-white placeholder-slate-600 outline-none transition-all duration-200"
                  style={{
                    background: 'rgba(255,255,255,0.04)',
                    border: errors.email ? '1px solid #ef4444' : '1px solid rgba(255,255,255,0.1)',
                  }}
                  onFocus={e => { if (!errors.email) e.target.style.border = '1px solid rgba(0,212,255,0.4)'; }}
                  onBlur={e => { if (!errors.email) e.target.style.border = '1px solid rgba(255,255,255,0.1)'; }}
                  aria-describedby={errors.email ? 'email-error' : undefined}
                  aria-invalid={!!errors.email}
                  autoComplete="email"
                />
                {errors.email && (
                  <p id="email-error" className="text-xs text-red-400 mt-1 flex items-center gap-1">
                    <AlertCircle size={11} aria-hidden="true" />{errors.email}
                  </p>
                )}
              </div>

              {/* Message */}
              <div>
                <label htmlFor="message" className="block text-xs font-medium text-slate-400 mb-1.5">
                  Message <span className="text-red-400" aria-hidden="true">*</span>
                </label>
                <textarea
                  id="message"
                  name="message"
                  rows={4}
                  value={form.message}
                  onChange={handleChange}
                  placeholder="Tell me about your project, internship opportunity, or just say hi..."
                  className="w-full px-4 py-3 rounded-xl text-sm text-white placeholder-slate-600 outline-none transition-all duration-200 resize-none"
                  style={{
                    background: 'rgba(255,255,255,0.04)',
                    border: errors.message ? '1px solid #ef4444' : '1px solid rgba(255,255,255,0.1)',
                  }}
                  onFocus={e => { if (!errors.message) e.target.style.border = '1px solid rgba(0,212,255,0.4)'; }}
                  onBlur={e => { if (!errors.message) e.target.style.border = '1px solid rgba(255,255,255,0.1)'; }}
                  aria-describedby={errors.message ? 'message-error' : undefined}
                  aria-invalid={!!errors.message}
                />
                {errors.message && (
                  <p id="message-error" className="text-xs text-red-400 mt-1 flex items-center gap-1">
                    <AlertCircle size={11} aria-hidden="true" />{errors.message}
                  </p>
                )}
              </div>

              {/* Submit */}
              <button
                type="submit"
                disabled={submitting}
                className="w-full btn-primary flex items-center justify-center gap-2 text-sm disabled:opacity-60 disabled:cursor-not-allowed"
                aria-label="Send message"
              >
                {submitting ? (
                  <>
                    <span className="w-4 h-4 border-2 border-white/30 border-t-white rounded-full animate-spin" aria-hidden="true" />
                    <span className="relative z-10">Sending…</span>
                  </>
                ) : (
                  <>
                    <Send size={14} aria-hidden="true" />
                    <span className="relative z-10">Send Message</span>
                  </>
                )}
              </button>

              {/* Success message */}
              {status === 'success' && (
                <motion.div
                  className="flex items-center gap-2 p-3 rounded-xl text-sm text-green-400"
                  style={{ background: 'rgba(34,197,94,0.1)', border: '1px solid rgba(34,197,94,0.25)' }}
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  role="alert"
                >
                  <CheckCircle size={15} aria-hidden="true" />
                  <span>Message submitted! I'll get back to you soon.</span>
                  <span className="block text-xs text-green-500 mt-0.5">(Note: Connect a service like Formspree/EmailJS to enable real delivery.)</span>
                </motion.div>
              )}

              <p className="text-xs text-slate-600">
                To enable real email delivery, connect Formspree or EmailJS and update the form action.
              </p>
            </form>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
