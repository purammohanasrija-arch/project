import { useState, useCallback } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

import ErrorBoundary from './components/ErrorBoundary';
import ParticleBackground from './components/ParticleBackground';
import LoadingScreen from './components/LoadingScreen';
import Navbar from './components/Navbar';
import RecruiterMode from './components/RecruiterMode';
import CursorGlow from './components/CursorGlow';
import ScrollProgress from './components/ScrollProgress';
import SectionReveal from './components/SectionReveal';

import Hero from './sections/Hero';
import QuickStats from './sections/QuickStats';
import JourneyExplorer from './sections/JourneyExplorer';
import Projects from './sections/Projects';
import Skills from './sections/Skills';
import ExperienceTimeline from './sections/ExperienceTimeline';
import Certifications from './sections/Certifications';
import ResumeSection from './sections/ResumeSection';
import Contact from './sections/Contact';
import Footer from './sections/Footer';

export default function App() {
  const [loaded, setLoaded] = useState(false);
  const [recruiterOpen, setRecruiterOpen] = useState(false);

  const handleLoadComplete = useCallback(() => setLoaded(true), []);

  return (
    <ErrorBoundary>
      <LoadingScreen onComplete={handleLoadComplete} />

      <AnimatePresence>
        {loaded && (
          <motion.div
            key="main"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.6 }}
            style={{ position: 'relative', minHeight: '100vh' }}
          >
            {/* Global effects */}
            <CursorGlow />
            <ScrollProgress />
            <ParticleBackground />

            {/* Background gradient overlays */}
            <div className="fixed inset-0 z-0 pointer-events-none" aria-hidden="true">
              <div
                className="absolute top-0 left-0 w-[600px] h-[600px] rounded-full"
                style={{
                  background: 'radial-gradient(circle, rgba(0,212,255,0.12), transparent 60%)',
                  filter: 'blur(100px)', opacity: 0.6,
                }}
              />
              <div
                className="absolute bottom-1/3 right-0 w-[500px] h-[500px] rounded-full"
                style={{
                  background: 'radial-gradient(circle, rgba(124,58,237,0.12), transparent 60%)',
                  filter: 'blur(100px)', opacity: 0.5,
                }}
              />
            </div>

            {/* Navigation */}
            <Navbar onRecruiterMode={() => setRecruiterOpen(true)} />

            {/* Main content — each section gets a blur-reveal entrance */}
            <main id="main-content" style={{ position: 'relative', zIndex: 1 }}>
              {/* Hero has its own entrance animations */}
              <Hero />

              <SectionReveal delay={0}>
                <QuickStats />
              </SectionReveal>

              <SectionReveal delay={0.05}>
                <JourneyExplorer />
              </SectionReveal>

              <SectionReveal delay={0.05}>
                <Projects />
              </SectionReveal>

              <SectionReveal delay={0.05}>
                <Skills />
              </SectionReveal>

              <SectionReveal delay={0.05}>
                <ExperienceTimeline />
              </SectionReveal>

              <SectionReveal delay={0.05}>
                <Certifications />
              </SectionReveal>

              <SectionReveal delay={0.05}>
                <ResumeSection />
              </SectionReveal>

              <SectionReveal delay={0.05}>
                <Contact />
              </SectionReveal>
            </main>

            <Footer />

            <RecruiterMode
              isOpen={recruiterOpen}
              onClose={() => setRecruiterOpen(false)}
            />

            <a
              href="#main-content"
              className="sr-only focus:not-sr-only focus:fixed focus:top-4 focus:left-4 focus:z-[9999] focus:bg-cyan-400 focus:text-black focus:px-4 focus:py-2 focus:rounded-lg focus:font-bold"
            >
              Skip to main content
            </a>
          </motion.div>
        )}
      </AnimatePresence>
    </ErrorBoundary>
  );
}
