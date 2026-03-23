import { motion } from 'framer-motion'
import GlassSurface from '../components/GlassSurface.jsx'
import styles from './About.module.css'

const skills = {
  Languages: ['Java', 'Python', 'Kotlin', 'C', 'C#', 'JavaScript', 'SQL', 'HTML/CSS'],
  'Tools & Platforms': ['Git', 'Linux', '.NET', 'Android', 'Azure DevOps', 'REST APIs'],
  Practices: ['AI-assisted dev', 'Software testing', 'CI/CD', 'Technical writing'],
}

export default function About() {
  return (
    <section className={styles.about} id="about">
      <div className={styles.inner}>
        <motion.div
          className={styles.header}
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          <span className={styles.label}>About</span>
          <h2 className={styles.heading}>A bit about <strong style={{ color: '#637be4ff' }}>me</strong></h2>
        </motion.div>

        <div className={styles.grid}>
          <motion.div
            className={styles.textCol}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.1 }}
          >
            <p>
              I'm a second-year software engineering student at UL, based in Ireland.
              I got into programming through games and I always enjoyed logical thinking and problem solving.
            </p>
            <p>
              My internship at Cloudcards taught me what it means to own something in
              production. Making real technical decisions, shipping code real people use,
              and dealing with the chaos that comes with it.
            </p>
            <p>
              Outside code I'm into UI design, game dev (Roblox Studio, Lua scripting),
              and competed in the Chemistry Olympiad which trained me to not give up
              on hard problems.
            </p>
          </motion.div>

          <motion.div
            className={styles.skillsCol}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            <div className={styles.skillsCard}>
              {Object.entries(skills).map(([group, items]) => (
                <div key={group} className={styles.skillGroup}>
                  <span className={styles.groupName}>{group}</span>
                  <div className={styles.tags}>
                    {items.map(s => (
                      <span key={s} className={styles.tag}>{s}</span>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
