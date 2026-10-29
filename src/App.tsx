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
import Phone from 'lucide-react/dist/esm/icons/phone.mjs'
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
  { label: 'Beyond', href: '#beyond' },
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
    link: null,
  },
  {
    number: '02',
    title: 'MyCord',
    description: 'A deployable C client-server chat system with real-time messaging, a custom TCP protocol, multithreaded server handling, and an interactive terminal UI.',
    tags: ['C', 'POSIX sockets', 'pthreads', 'Docker'],
    icon: Code2,
    link: 'https://github.com/romeirranjan/MyCord-TUI-Command-Line-Agent',
  },
  {
    number: '03',
    title: 'Neon Study Planner',
    description: 'A full-stack productivity application for calendar-based task management, goal tracking, authentication, and personal productivity analytics.',
    tags: ['React', 'TypeScript', 'FastAPI', 'PostgreSQL'],
    icon: BookOpen,
    link: 'https://github.com/romeirranjan/neon_study_planner',
  },
  {
    number: '04',
    title: 'ZenLock',
    description: 'A context-aware macOS focus tool that combines Gemini-assisted activity analysis with POSIX process control, Pomodoro sessions, and configurable app blocking.',
    tags: ['C', 'Gemini API', 'POSIX signals', 'macOS'],
    icon: Code2,
    link: 'https://github.com/romeirranjan/zenlock',
  },
  {
    number: '05',
    title: 'Social Network Interface',
    description: 'A Python and Streamlit social-network simulator with authentication, friend management, country insights, and breadth-first search for connection levels.',
    tags: ['Python', 'Streamlit', 'BFS', 'Data structures'],
    icon: BookOpen,
    link: 'https://github.com/romeirranjan/SOCIAL_NETWORK_INTERFACE',
  },
]

const skillGroups = [
  { label: 'Languages', values: ['Python', 'TypeScript', 'JavaScript'] },
  { label: 'Frameworks', values: ['React', 'Tailwind CSS', 'Vite'] },
  { label: 'AI / Research', values: ['Multimodal RAG', 'BGE-M3', 'ColQwen', 'LightRAG'] },
  { label: 'Developer tools', values: ['Git', 'GitHub', 'Terminal'] },
]

const campusHighlights = [
  {
    label: 'Campus involvement',
    title: 'Learning beyond the classroom',
    description: 'Involved with HackPSU, the Public Speaking Club, the Second Floor Stand-Up Comedy Club, and the Association for India\'s Development.',
  },
  {
    label: 'Recognition',
    title: 'Dean’s List',
    description: 'Recognized across Fall 2024, Spring 2025, Fall 2025, and Spring 2026.',
  },
  {
    label: 'Community',
    title: 'Volunteer service',
    description: 'Contributed as a volunteer at Taste of India 2025 through the Association for India’s Development.',
  },
]

function getInitialTheme(): Theme {
  const storedTheme = localStorage.getItem('theme')
  if (storedTheme === 'light' || storedTheme === 'dark') return storedTheme
  return 'light'
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

      <div className="service-strip">
        <div><span className="status-dot" aria-hidden="true" />Computer Science + Mathematics at Penn State</div>
        <span>Software engineering · AI · Research</span>
      </div>

      <header className="site-header">
        <a className="wordmark" href="#top" aria-label="Romeir Ranjan, home">
          <span>Romeir <strong>Ranjan</strong></span>
          <i className="brand-dots" aria-hidden="true" />
        </a>
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
              <p className="eyebrow"><span /> Penn State · Computer Science &amp; Mathematics</p>
              <h1 id="hero-title">Romeir<br />Ranjan</h1>
              <p className="hero-role">Software engineering and AI, grounded in computer science and mathematics.</p>
              <p className="hero-intro">I&apos;m a Penn State student building useful software and exploring intelligent systems that make complex information easier to work with.</p>
              <div className="hero-actions">
                <a className="button button-primary" href="#projects">Explore my work <ArrowDown size={17} /></a>
                <a className="text-link" href="mailto:romeirranjan@gmail.com">Let&apos;s connect <ArrowUpRight size={16} /></a>
              </div>
            </motion.div>
            <motion.aside className="hero-note" aria-label="Current focus" initial={shouldReduceMotion ? false : { opacity: 0, scale: 0.96 }} animate={{ opacity: 1, scale: 1 }} transition={{ duration: 0.7, delay: 0.25 }}>
              <div className="note-topline"><span>Profile</span><span>01 / 03</span></div>
              <dl className="profile-list">
                <div><dt>University</dt><dd>Penn State</dd></div>
                <div><dt>Study</dt><dd>Computer Science &amp; Mathematics</dd></div>
                <div><dt>Graduation</dt><dd>May 2028</dd></div>
              </dl>
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
              <p>My interests center on software engineering, artificial intelligence, and machine learning—especially systems that help people work with information more effectively. Outside technical work, I stay involved in public speaking, campus organizations, and community service.</p>
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
                  <div className="project-card-footer">
                    <ul className="tag-list" aria-label={`${project.title} topics`}>{project.tags.map((tag) => <li key={tag}>{tag}</li>)}</ul>
                    {project.link && <a className="project-link" href={project.link} target="_blank" rel="noreferrer" aria-label={`View ${project.title} source on GitHub`}>View source <ArrowUpRight size={15} /></a>}
                  </div>
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

        <motion.section id="beyond" className="section-wrap content-section" {...reveal}>
          <SectionHeading number="06" label="Beyond the classroom" />
          <div className="section-title-row"><h2>Technical depth, strengthened by communication and community.</h2><Contact size={30} aria-hidden="true" /></div>
          <div className="campus-grid">
            {campusHighlights.map((item, index) => (
              <article className="campus-card" key={item.title}>
                <div className="campus-card-top"><span>0{index + 1}</span><p>{item.label}</p></div>
                <div><h3>{item.title}</h3><p>{item.description}</p></div>
              </article>
            ))}
          </div>
        </motion.section>

        <motion.section id="education" className="section-wrap content-section" {...reveal}>
          <SectionHeading number="07" label="Education" />
          <div className="education-card">
            <div className="education-icon"><GraduationCap size={30} /></div>
            <div className="education-main"><p>Pennsylvania State University</p><h2>B.S. Computer Science and Mathematics</h2></div>
            <div className="education-meta"><strong>Expected May 2028</strong><span>GPA 3.70 / 4.00</span></div>
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
              <a href="tel:+18148265265" aria-label="Call Romeir Ranjan at +1 814 826 5265"><Phone size={19} /> +1 814 826 5265</a>
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
