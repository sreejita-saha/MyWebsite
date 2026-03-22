import { motion } from 'framer-motion'
import styles from './Experience.module.css'

const experience = [
  {
    company: 'Cloudcards',
    role: 'Software Engineering Intern',
    date: 'Jun – Dec 2025',
    bullets: [
      'Owned the full project lifecycle — spec, design, testing, and live deployment with minimal direction.',
      'Built a production-ready desktop uploader with resumable chunked transfers and multi-threading.',
      'Worked AI-first, using AI-assisted tools daily to ship faster in a high-frequency deployment team.',
    ],
  },
  {
    company: "McDonald's",
    role: 'Crew Member',
    date: 'Aug 2024 – Sep 2025',
    bullets: [
      'Fast-paced customer service and team collaboration in a high-volume environment.',
    ],
  },
]

const education = [
  {
    company: 'University of Limerick',
    role: 'BSc/MSc Immersive Software Engineering',
    date: '2024 – present',
    bullets: [
      '589/625 Leaving Certificate — Physics, Chemistry, Biology (H1); Maths, Applied Maths, English (H2).',
      'Transact Campus Scholarship recipient.',
      'Chemistry Olympiad competitor.',
    ],
  },
]

function Item({ company, role, date, bullets, index }) {
  return (
    <motion.div
      className={styles.item}
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-40px' }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
    >
      <div className={styles.meta}>
        <span className={styles.company}>{company}</span>
        <span className={styles.date}>{date}</span>
      </div>
      <div className={styles.body}>
        <div className={styles.role}>{role}</div>
        <ul className={styles.bullets}>
          {bullets.map((b, i) => <li key={i}>{b}</li>)}
        </ul>
      </div>
    </motion.div>
  )
}

export default function Experience() {
  return (
    <section className={styles.section} id="experience">
      <div className={styles.inner}>
        <motion.div
          className={styles.header}
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          <span className={styles.label}>Experience</span>
          <h2 className={styles.heading}>Where I've been</h2>
        </motion.div>

        <div className={styles.block}>
          <span className={styles.blockLabel}>Work</span>
          {experience.map((e, i) => <Item key={i} {...e} index={i} />)}
        </div>

        <div className={styles.block}>
          <span className={styles.blockLabel}>Education</span>
          {education.map((e, i) => <Item key={i} {...e} index={i} />)}
        </div>
      </div>
    </section>
  )
}
