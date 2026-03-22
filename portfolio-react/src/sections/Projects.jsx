import { useState } from 'react'
import styles from './Projects.module.css'

const projects = [
  {
    id: '01',
    tag: 'Cloudcards · Production · 2025',
    title: 'Desktop Uploader',
    desc: 'Owned end-to-end: spec, design, testing, and live deployment. Handles massive nested folder structures with resumable chunked uploads and multi-threading.',
    langs: ['C#', '.NET', 'Multi-threading', 'Azure DevOps'],
    featured: true,
    badge: 'Production',
  },
  {
    id: '02',
    tag: 'University · Systems',
    title: 'Linux IPC Kernel Driver',
    desc: 'C kernel module with encrypted inter-process communication using mutex and semaphore synchronisation.',
    langs: ['C', 'Linux kernel'],
  },
  {
    id: '03',
    tag: 'University · Mobile',
    title: 'Gym Workout Tracker',
    desc: 'Native Android app with custom UI and local data persistence.',
    langs: ['Kotlin', 'Android'],
  },
  {
    id: '04',
    tag: 'University · Backend',
    title: 'ISE Jobs Board',
    desc: 'Python app replicating the course jobs board with automated student allocation logic.',
    langs: ['Python'],
  },
  {
    id: '05',
    tag: 'University · Systems',
    title: 'System Hardware Monitor',
    desc: 'Java tool using native libraries to surface real-time hardware diagnostics.',
    langs: ['Java', 'JNI'],
  },
]

function ProjectCard({ id, tag, title, desc, langs, badge, featured }) {
  return (
    <div className={styles.glowWrapper}>
      <div className={`${styles.card} ${featured ? styles.featured : ''}`}>
        <div className={styles.cardTop}>
          <span className={styles.cardId}>{id}</span>
          {badge && <span className={styles.badge}>{badge}</span>}
        </div>
        <div className={styles.cardTag}>{tag}</div>
        <h3 className={styles.cardTitle}>{title}</h3>
        
        {/* Expanded description area for future immense details */}
        <div className={styles.detailsArea}>
          <p className={styles.cardDesc}>{desc}</p>
          <p className={styles.cardDesc}>
            [Placeholder: Additional colorful expansive details, screenshots, metrics, and bulletpoints about the architecture of <strong>{title}</strong> will be natively inserted here seamlessly.]
          </p>
        </div>
        
        <div className={styles.langs}>
          {langs.map(l => <span key={l} className={styles.lang}>{l}</span>)}
        </div>
      </div>
    </div>
  )
}

export default function Projects() {
  const [index, setIndex] = useState(0)

  const handleNext = () => setIndex(prev => (prev + 1) % projects.length)
  const handlePrev = () => setIndex(prev => (prev - 1 + projects.length) % projects.length)

  return (
    <section className={styles.section} id="projects">
      <div className={styles.inner}>
        <div className={styles.header}>
          <div className={styles.headerLeft}>
            <span className={styles.label}>Selected work</span>
            <h2 className={styles.heading}>Things I've built</h2>
          </div>
        </div>

        <div className={styles.projectShowcase}>
          {/* Left Arrow */}
          <button onClick={handlePrev} className={styles.sideArrow}>
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <path d="M15 18l-6-6 6-6"/>
            </svg>
          </button>
          
          <div className={styles.cardContainer}>
            <div className={styles.cardAnimationWrapper} key={projects[index].id}>
              <ProjectCard {...projects[index]} />
            </div>
            
            <div className={styles.counterTracker}>
              <span className={styles.counterText}>Project {index + 1} of {projects.length}</span>
            </div>
          </div>
          
          {/* Right Arrow */}
          <button onClick={handleNext} className={styles.sideArrow}>
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <path d="M9 18l6-6-6-6"/>
            </svg>
          </button>
        </div>
      </div>
    </section>
  )
}