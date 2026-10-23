import { useEffect, useState } from 'react'
import ArrowDown from 'lucide-react/dist/esm/icons/arrow-down.mjs'
import ArrowUpRight from 'lucide-react/dist/esm/icons/arrow-up-right.mjs'
import BookOpen from 'lucide-react/dist/esm/icons/book-open.mjs'
import BriefcaseBusiness from 'lucide-react/dist/esm/icons/briefcase-business.mjs'
import Code2 from 'lucide-react/dist/esm/icons/code-2.mjs'
import Contact from 'lucide-react/dist/esm/icons/contact.mjs'
import Download from 'lucide-react/dist/esm/icons/download.mjs'
import GitFork from 'lucide-react/dist/esm/icons/git-fork.mjs'
import GraduationCap from 'lucide-react/dist/esm/icons/graduation-cap.mjs'
import Mail from 'lucide-react/dist/esm/icons/mail.mjs'
import Menu from 'lucide-react/dist/esm/icons/menu.mjs'
import Moon from 'lucide-react/dist/esm/icons/moon.mjs'
import Sparkles from 'lucide-react/dist/esm/icons/sparkles.mjs'
import Sun from 'lucide-react/dist/esm/icons/sun.mjs'
import X from 'lucide-react/dist/esm/icons/x.mjs'
import { motion, useReducedMotion, useScroll, useSpring } from 'motion/react'
import './App.css'

type Theme = 'light' | 'dark'

const navigation = [
  { label: 'About', href: '#about' },
  { label: 'Experience', href: '#experience' },
  { label: 'Work', href: '#projects' },
  { label: 'Research', href: '#research' },
  { label: 'Contact', href: '#contact' },
]

const experience = [
  { role: 'Undergraduate Research Assistant', organization: 'Penn State', type: 'Research' },
  { role: 'AI Engineering Intern', organization: 'Solytics Partners', type: 'Engineering' },
  { role: 'Mathematics Tutor', organization: 'Penn State', type: 'Teaching' },
  { role: 'LEAP Mentor', organization: 'Penn State', type: 'Mentorship' },
]

const projects = [
  {
    number: '01',
    title: 'AI-Powered Document Editor',
    description: 'An intelligent document workspace centered on bringing AI-assisted workflows directly into the editing experience.',
    tags: ['AI', 'Document tools', 'Software engineering'],
    icon: BookOpen,
  },
  {
    number: '02',
    title: 'MyCord Terminal Chat System',
    description: 'A terminal-first chat system exploring focused communication through a developer-friendly interface.',
    tags: ['Terminal UI', 'Chat systems', 'Developer tools'],
    icon: Code2,
  },
]

const skillGroups = [
  { label: 'Languages', values: ['Python', 'TypeScript', 'JavaScript'] },
  { label: 'Frameworks', values: ['React', 'Tailwind CSS', 'Vite'] },
  { label: 'AI / Research', values: ['Multimodal RAG', 'BGE-M3', 'ColQwen', 'LightRAG'] },
  { label: 'Developer tools', values: ['Git', 'GitHub', 'Terminal'] },
]

function getInitialTheme(): Theme {
  const storedTheme = localStorage.getItem('theme')
  if (storedTheme === 'light' || storedTheme === 'dark') return storedTheme
  return window.matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'light'
}

function App() {
  const [theme, setTheme] = useState<Theme>(getInitialTheme)
  const [menuOpen, setMenuOpen] = useState(false)
  const shouldReduceMotion = useReducedMotion()
  const { scrollYProgress } = useScroll()
  const scaleX = useSpring(scrollYProgress, { stiffness: 120, damping: 24, restDelta: 0.001 })

  useEffect(() => {
    document.documentElement.dataset.theme = theme
    document.documentElement.style.colorScheme = theme
    localStorage.setItem('theme', theme)
  }, [theme])

  useEffect(() => {
    document.body.style.overflow = menuOpen ? 'hidden' : ''
    return () => { document.body.style.overflow = '' }
  }, [menuOpen])

  const reveal = {
    initial: shouldReduceMotion ? { opacity: 1 } : { opacity: 0, y: 24 },
    whileInView: { opacity: 1, y: 0 },
    viewport: { once: true, margin: '-80px' },
    transition: { duration: 0.65, ease: [0.22, 1, 0.36, 1] as const },
  }

  return (
    <div className="site-shell">
      <motion.div className="scroll-progress" style={{ scaleX }} aria-hidden="true" />

      <header className="site-header">
        <a className="wordmark" href="#top" aria-label="Romeir Ranjan, home">RR<span className="accent-dot">.</span></a>
        <nav className="desktop-nav" aria-label="Primary navigation">
          {navigation.map((item) => <a key={item.href} href={item.href}>{item.label}</a>)}
        </nav>
        <div className="header-actions">
          <button className="icon-button" type="button" onClick={() => setTheme(theme === 'light' ? 'dark' : 'light')} aria-label={`Switch to ${theme === 'light' ? 'dark' : 'light'} mode`}>
            {theme === 'light' ? <Moon size={18} /> : <Sun size={18} />}
          </button>
          <button className="icon-button menu-button" type="button" onClick={() => setMenuOpen(!menuOpen)} aria-expanded={menuOpen} aria-controls="mobile-navigation" aria-label={menuOpen ? 'Close navigation' : 'Open navigation'}>
            {menuOpen ? <X size={20} /> : <Menu size={20} />}
          </button>
        </div>
        {menuOpen && (
          <motion.nav id="mobile-navigation" className="mobile-nav" aria-label="Mobile navigation" initial={{ opacity: 0 }} animate={{ opacity: 1 }}>
            {navigation.map((item, index) => (
              <motion.a key={item.href} href={item.href} onClick={() => setMenuOpen(false)} initial={{ opacity: 0, x: -16 }} animate={{ opacity: 1, x: 0 }} transition={{ delay: index * 0.05 }}>
                <span>0{index + 1}</span>{item.label}
              </motion.a>
            ))}
          </motion.nav>
        )}
      </header>

      <main id="top">
        <section className="hero section-wrap" aria-labelledby="hero-title">
          <div className="hero-grid">
            <motion.div className="hero-copy" initial={shouldReduceMotion ? false : { opacity: 0, y: 28 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}>
              <p className="eyebrow"><span /> Hello, I&apos;m Romeir Ranjan</p>
              <h1 id="hero-title">I explore the space between <em>software</em> and intelligence.</h1>
              <p className="hero-intro">Computer Science and Mathematics student at Penn State, interested in software engineering and AI/ML.</p>
              <div className="hero-actions">
                <a className="button button-primary" href="#projects">Explore my work <ArrowDown size={17} /></a>
                <a className="text-link" href="mailto:romeirranjan@gmail.com">Let&apos;s connect <ArrowUpRight size={16} /></a>
              </div>
            </motion.div>
            <motion.aside className="hero-note" aria-label="Current focus" initial={shouldReduceMotion ? false : { opacity: 0, scale: 0.96 }} animate={{ opacity: 1, scale: 1 }} transition={{ duration: 0.7, delay: 0.25 }}>
              <div className="note-topline"><Sparkles size={18} /><span>Current focus</span></div>
              <p>Building and researching systems that make complex information more useful.</p>
              <div className="note-footer"><span>Software engineering</span><span>AI / machine learning</span></div>
            </motion.aside>
          </div>
          <a className="scroll-cue" href="#about" aria-label="Scroll to about section"><span>Scroll to explore</span><ArrowDown size={15} /></a>
        </section>

        <motion.section id="about" className="section-wrap content-section" {...reveal}>
          <SectionHeading number="01" label="About" />
          <div className="about-layout">
            <h2>A curious builder with a foundation in computation and mathematics.</h2>
            <div className="about-copy">
              <p>I&apos;m Romeir, a student at Pennsylvania State University studying Computer Science and Mathematics. I&apos;m drawn to problems that call for both precise thinking and thoughtful engineering.</p>
              <p>My interests center on software engineering, artificial intelligence, and machine learning—especially systems that help people work with information more effectively.</p>
            </div>
          </div>
        </motion.section>

        <motion.section id="experience" className="section-wrap content-section" {...reveal}>
          <SectionHeading number="02" label="Experience" />
          <div className="section-title-row"><h2>Places I&apos;ve learned and contributed.</h2><BriefcaseBusiness size={28} aria-hidden="true" /></div>
          <div className="experience-list">
            {experience.map((item, index) => (
              <article className="experience-row" key={`${item.role}-${item.organization}`}>
                <span className="row-number">0{index + 1}</span><div><h3>{item.role}</h3><p>{item.organization}</p></div><span className="type-pill">{item.type}</span>
              </article>
            ))}
          </div>
        </motion.section>

        <motion.section id="projects" className="section-wrap content-section" {...reveal}>
          <SectionHeading number="03" label="Selected work" />
          <div className="section-title-row"><h2>Projects built around real interfaces and useful ideas.</h2><Code2 size={30} aria-hidden="true" /></div>
          <div className="project-grid">
            {projects.map((project) => {
              const Icon = project.icon
              return (
                <article className="project-card" key={project.title}>
                  <div className="project-card-top"><span>{project.number}</span><Icon size={24} aria-hidden="true" /></div>
                  <div><h3>{project.title}</h3><p>{project.description}</p></div>
                  <ul className="tag-list" aria-label={`${project.title} topics`}>{project.tags.map((tag) => <li key={tag}>{tag}</li>)}</ul>
                </article>
              )
            })}
          </div>
        </motion.section>

        <motion.section id="research" className="section-wrap content-section" {...reveal}>
          <SectionHeading number="04" label="Research" />
          <div className="research-panel">
            <div className="research-kicker"><span>Research focus</span><span className="research-mark">RAG / MM</span></div>
            <div className="research-content">
              <h2>Multimodal retrieval-augmented generation.</h2>
              <p>Exploring multimodal RAG systems using BGE-M3, ColQwen, and LightRAG to investigate how different retrieval approaches can support information-rich AI experiences.</p>
              <div className="research-stack" aria-label="Research technologies"><span>BGE-M3</span><span>ColQwen</span><span>LightRAG</span></div>
            </div>
          </div>
        </motion.section>

        <motion.section id="skills" className="section-wrap content-section" {...reveal}>
          <SectionHeading number="05" label="Toolkit" />
          <div className="skills-layout">
            <div><h2>Tools I use to think, build, and experiment.</h2><p className="skills-note">A focused toolkit for software and AI/ML work.</p></div>
            <div className="skill-groups">
              {skillGroups.map((group) => <div className="skill-group" key={group.label}><h3>{group.label}</h3><div>{group.values.map((skill) => <span key={skill}>{skill}</span>)}</div></div>)}
            </div>
          </div>
        </motion.section>

        <motion.section id="education" className="section-wrap content-section" {...reveal}>
          <SectionHeading number="06" label="Education" />
          <div className="education-card">
            <div className="education-icon"><GraduationCap size={30} /></div>
            <div className="education-main"><p>Pennsylvania State University</p><h2>B.S. Computer Science and Mathematics</h2></div>
            <div className="education-meta"><strong>Expected May 2028</strong></div>
          </div>
        </motion.section>

        <section id="contact" className="contact-section">
          <motion.div className="section-wrap contact-inner" {...reveal}>
            <p className="eyebrow light"><span /> Get in touch</p>
            <h2>Have an idea worth exploring?</h2>
            <p className="contact-copy">I&apos;m always interested in thoughtful conversations about software, research, and new opportunities.</p>
            <a className="contact-email" href="mailto:romeirranjan@gmail.com">romeirranjan@gmail.com <ArrowUpRight aria-hidden="true" /></a>
            <div className="contact-links">
              <a href="https://github.com/romeirranjan" target="_blank" rel="noreferrer"><GitFork size={19} /> GitHub <ArrowUpRight size={15} /></a>
              <a href="https://www.linkedin.com/in/romeir-ranjan/" target="_blank" rel="noreferrer"><Contact size={19} /> LinkedIn <ArrowUpRight size={15} /></a>
              <a href="mailto:romeirranjan@gmail.com"><Mail size={19} /> Email <ArrowUpRight size={15} /></a>
              <button type="button" disabled title="Resume PDF coming soon"><Download size={19} /> Resume <span>Coming soon</span></button>
            </div>
            <footer><span>© {new Date().getFullYear()} Romeir Ranjan</span><a href="#top">Back to top <ArrowDown className="rotate-180" size={15} /></a></footer>
          </motion.div>
        </section>
      </main>
    </div>
  )
}

function SectionHeading({ number, label }: { number: string; label: string }) {
  return <div className="section-label" aria-label={`Section ${number}: ${label}`}><span>{number}</span><p>{label}</p><i /></div>
}

export default App
