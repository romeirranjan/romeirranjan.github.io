import ArrowDown from 'lucide-react/dist/esm/icons/arrow-down.mjs'
import Contact from 'lucide-react/dist/esm/icons/contact.mjs'
import Download from 'lucide-react/dist/esm/icons/download.mjs'
import GitFork from 'lucide-react/dist/esm/icons/git-fork.mjs'
import { motion, useReducedMotion } from 'motion/react'
import profilePhoto from '../assets/profile-photo.jpg'
import { socialLinks } from '../portfolioData'
import { NetworkVisual } from './NetworkVisual'

export function Hero() {
  const reduceMotion = useReducedMotion()

  return (
    <section className="hero section-shell" aria-labelledby="hero-title">
      <div className="hero__ambient" aria-hidden="true" />
      <motion.div className="hero__copy" initial={reduceMotion ? false : { opacity: 0, y: 24 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.7 }}>
        <p className="eyebrow"><span>AI / ML</span><i />Data Science<i />Software Engineering</p>
        <h1 id="hero-title">Romeir Ranjan</h1>
        <p className="hero__headline">CMPSC + MATH @ Penn State | Software Engineering &amp; AI/ML | Ex-AI Engineering Intern @ Solytics Partners | Undergraduate Research Assistant</p>
        <p className="hero__intro">I&apos;m a junior at Penn State studying Computer Science and Mathematics, with a strong interest in the intersection of AI, machine learning, and data science. Through undergraduate research and industry experience, I&apos;ve worked on intelligent retrieval systems, LLM-powered applications, and software engineering projects.</p>
        <div className="hero__actions">
          <a className="button button--primary" href="#projects">Explore My Work <ArrowDown size={17} /></a>
          <button className="button button--secondary" type="button" disabled title="Resume PDF will be added soon"><Download size={17} /> Download Resume</button>
          <a className="button button--icon" href={socialLinks.github} target="_blank" rel="noreferrer" aria-label="Visit Romeir Ranjan on GitHub"><GitFork size={18} /> GitHub</a>
          <a className="button button--icon" href={socialLinks.linkedin} target="_blank" rel="noreferrer" aria-label="Visit Romeir Ranjan on LinkedIn"><Contact size={18} /> LinkedIn</a>
        </div>
        <div className="hero__availability"><span /> Open to conversations about AI/ML, data, and software</div>
      </motion.div>

      <motion.div className="hero__visual" initial={reduceMotion ? false : { opacity: 0, scale: 0.97 }} animate={{ opacity: 1, scale: 1 }} transition={{ duration: 0.75, delay: 0.15 }}>
        <div className="profile-card">
          <img className="profile-card__image" src={profilePhoto} alt="Romeir Ranjan" />
          <div className="profile-card__details">
            <span className="profile-card__label">Penn State · Class of 2028</span>
            <strong>Romeir Ranjan</strong>
            <span>Computer Science + Mathematics</span>
          </div>
        </div>
        <NetworkVisual />
      </motion.div>
    </section>
  )
}
