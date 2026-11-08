import { useEffect, useState } from 'react'
import ArrowDown from 'lucide-react/dist/esm/icons/arrow-down.mjs'
import ArrowUpRight from 'lucide-react/dist/esm/icons/arrow-up-right.mjs'
import BrainCircuit from 'lucide-react/dist/esm/icons/brain-circuit.mjs'
import BriefcaseBusiness from 'lucide-react/dist/esm/icons/briefcase-business.mjs'
import Code2 from 'lucide-react/dist/esm/icons/code-2.mjs'
import Database from 'lucide-react/dist/esm/icons/database.mjs'
import Download from 'lucide-react/dist/esm/icons/download.mjs'
import Contact from 'lucide-react/dist/esm/icons/contact.mjs'
import GitFork from 'lucide-react/dist/esm/icons/git-fork.mjs'
import GraduationCap from 'lucide-react/dist/esm/icons/graduation-cap.mjs'
import Mail from 'lucide-react/dist/esm/icons/mail.mjs'
import Network from 'lucide-react/dist/esm/icons/network.mjs'
import Sigma from 'lucide-react/dist/esm/icons/sigma.mjs'
import { motion, useReducedMotion, useScroll, useSpring } from 'motion/react'
import { Hero } from './components/Hero'
import { Navbar } from './components/Navbar'
import { SectionHeading } from './components/SectionHeading'
import { experience, projects, researchTopics, skillGroups, socialLinks } from './portfolioData'
import './App.css'

type Theme = 'light' | 'dark'

function getInitialTheme(): Theme {
  return document.documentElement.classList.contains('dark') ? 'dark' : 'light'
}

function App() {
  const [theme, setTheme] = useState<Theme>(getInitialTheme)
  const reduceMotion = useReducedMotion()
  const { scrollYProgress } = useScroll()
  const scaleX = useSpring(scrollYProgress, { stiffness: 130, damping: 28, restDelta: 0.001 })

  useEffect(() => {
    const root = document.documentElement
    root.classList.toggle('dark', theme === 'dark')
    root.dataset.theme = theme
    root.style.colorScheme = theme
    const themeColor = document.querySelector('meta[name="theme-color"]')
    themeColor?.setAttribute('content', theme === 'dark' ? '#081426' : '#F5F8FC')
    requestAnimationFrame(() => root.classList.add('theme-ready'))
  }, [theme])

  const toggleTheme = () => {
    setTheme((current) => {
      const next = current === 'light' ? 'dark' : 'light'
      localStorage.setItem('theme', next)
      return next
    })
  }

  const reveal = {
    initial: reduceMotion ? { opacity: 1 } : { opacity: 0, y: 24 },
    whileInView: { opacity: 1, y: 0 },
    viewport: { once: true, margin: '-80px' },
    transition: { duration: 0.6, ease: [0.22, 1, 0.36, 1] as const },
  }

  return (
    <div className="site-shell">
      <motion.div className="scroll-progress" style={{ scaleX }} aria-hidden="true" />
      <Navbar theme={theme} onToggleTheme={toggleTheme} />

      <main id="top">
        <Hero />

        <motion.section id="about" className="section-shell content-section" {...reveal}>
          <SectionHeading
            index="01"
            eyebrow="About"
            title="Computer science and mathematics, applied to intelligent systems."
            description="I care about the full path from a difficult question to a useful system: understanding the data, choosing the right method, and engineering an experience people can rely on."
          />
          <div className="about-grid">
            <div className="about-statement">
              <p>I&apos;m a junior at <strong>Pennsylvania State University</strong> pursuing Computer Science and Mathematics. My interests sit where applied AI, machine learning, data science, and software engineering meet.</p>
              <p>Research gives me room to investigate retrieval and multimodal information. Engineering gives me the tools to turn those ideas into usable products.</p>
            </div>
            <div className="profile-facts" aria-label="Education summary">
              <div><span>Degree</span><strong>B.S. Computer Science &amp; Mathematics</strong></div>
              <div><span>Class</span><strong>2028</strong></div>
              <div><span>GPA</span><strong>3.72 / 4.00</strong></div>
              <div><span>Focus</span><strong>AI/ML · Data Science · Software</strong></div>
            </div>
          </div>
        </motion.section>

        <motion.section id="experience" className="section-shell content-section" {...reveal}>
          <SectionHeading index="02" eyebrow="Experience" title="Learning across research, industry, teaching, and mentorship." />
          <div className="timeline">
            {experience.map((item, index) => (
              <article className="timeline-item" key={`${item.role}-${item.organization}`}>
                <div className="timeline-item__index">{String(index + 1).padStart(2, '0')}</div>
                <div className="timeline-item__marker"><span /></div>
                <div className="timeline-item__content">
                  <div className="timeline-item__heading">
                    <div><p>{item.organization}</p><h3>{item.role}</h3></div>
                    <div className="timeline-item__meta"><span>{item.period}</span><span>{item.type}</span></div>
                  </div>
                  <p>{item.description}</p>
                </div>
              </article>
            ))}
          </div>
        </motion.section>

        <motion.section id="research" className="section-shell content-section research-section" {...reveal}>
          <SectionHeading
            index="03"
            eyebrow="Research"
            title="Making complex course knowledge easier to retrieve and use."
            description="My current research direction explores how multimodal retrieval systems can connect text, visual information, and structured course knowledge."
          />
          <div className="research-grid">
            <div className="research-story">
              <div className="research-story__icon"><BrainCircuit size={28} /></div>
              <p className="research-story__label">Current research focus</p>
              <h3>Multimodal retrieval-augmented generation</h3>
              <p>Exploring multimodal RAG using BGE-M3, ColQwen, and LightRAG, alongside retrieval fusion and a Course Knowledge API for information-rich AI experiences.</p>
              <div className="research-topics">
                {researchTopics.map((topic) => <span key={topic}>{topic}</span>)}
              </div>
            </div>
            <div className="pipeline-card" aria-label="Research pipeline diagram">
              <div className="pipeline-card__top"><span>Retrieval pipeline</span><span>03 stages</span></div>
              <div className="pipeline">
                <div><Database size={22} /><span>01</span><strong>Course data</strong><p>Text, visual, and structured knowledge</p></div>
                <i aria-hidden="true" />
                <div><Network size={22} /><span>02</span><strong>Retrieval</strong><p>Embedding, fusion, and ranking</p></div>
                <i aria-hidden="true" />
                <div><BrainCircuit size={22} /><span>03</span><strong>Generation</strong><p>Context-aware AI responses</p></div>
              </div>
            </div>
          </div>
        </motion.section>

        <motion.section id="projects" className="section-shell content-section" {...reveal}>
          <SectionHeading index="04" eyebrow="Selected projects" title="Building from research ideas to working interfaces." description="Three projects that reflect how I think about intelligent applications, system design, and useful software." />
          <div className="project-grid">
            {projects.map((project, index) => (
              <article className={`project-card project-card--${index + 1}`} key={project.title}>
                <div className="project-card__top"><span>{project.number}</span><p>{project.eyebrow}</p></div>
                <div className="project-card__icon">{index === 0 ? <BrainCircuit size={24} /> : index === 1 ? <Code2 size={24} /> : <Database size={24} />}</div>
                <h3>{project.title}</h3>
                <p>{project.description}</p>
                <ul aria-label={`${project.title} technologies`}>{project.tags.map((tag) => <li key={tag}>{tag}</li>)}</ul>
                {project.link && <a href={project.link} target="_blank" rel="noreferrer">View source <ArrowUpRight size={15} /></a>}
              </article>
            ))}
          </div>
        </motion.section>

        <motion.section id="skills" className="section-shell content-section" {...reveal}>
          <SectionHeading index="05" eyebrow="Skills" title="A toolkit for data, models, and production software." />
          <div className="skills-grid">
            {skillGroups.map((group, index) => (
              <article className="skill-card" key={group.label}>
                <div className="skill-card__heading">
                  <span>{index === 0 ? <Code2 size={20} /> : index === 1 ? <BrainCircuit size={20} /> : index === 2 ? <Database size={20} /> : index === 5 ? <Sigma size={20} /> : <BriefcaseBusiness size={20} />}</span>
                  <h3>{group.label}</h3>
                </div>
                <div className="skill-card__items">{group.values.map((skill) => <span key={skill}>{skill}</span>)}</div>
              </article>
            ))}
          </div>
        </motion.section>

        <motion.section id="education" className="section-shell education-section" {...reveal}>
          <div className="education-icon"><GraduationCap size={28} /></div>
          <div><p>Education</p><h2>Pennsylvania State University</h2><span>B.S. Computer Science and Mathematics · Expected May 2028</span></div>
          <div className="education-badge"><strong>3.72</strong><span>GPA / 4.00</span></div>
        </motion.section>

        <section id="contact" className="contact-section">
          <motion.div className="section-shell contact-inner" {...reveal}>
            <p className="contact-kicker"><span /> Let&apos;s build something useful</p>
            <h2>Interested in AI, data, or thoughtful software?</h2>
            <p>I&apos;m always open to conversations about research, engineering, and opportunities to build systems that turn complex information into useful experiences.</p>
            <a className="contact-email" href={socialLinks.email}>romeirranjan@gmail.com <ArrowUpRight size={24} /></a>
            <div className="contact-actions">
              <a href={socialLinks.github} target="_blank" rel="noreferrer"><GitFork size={18} /> GitHub</a>
              <a href={socialLinks.linkedin} target="_blank" rel="noreferrer"><Contact size={18} /> LinkedIn</a>
              <a href={socialLinks.email}><Mail size={18} /> Email</a>
              <button type="button" disabled title="Resume PDF will be added soon"><Download size={18} /> Resume <span>Coming soon</span></button>
            </div>
            <footer>
              <span>© {new Date().getFullYear()} Romeir Ranjan</span>
              <nav aria-label="Footer navigation"><a href="#about">About</a><a href="#research">Research</a><a href="#projects">Projects</a><a href="#top">Back to top <ArrowDown className="rotate-180" size={14} /></a></nav>
            </footer>
          </motion.div>
        </section>
      </main>
    </div>
  )
}

export default App
