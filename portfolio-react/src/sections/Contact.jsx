import { motion } from 'framer-motion'
import StarBorder from '../components/StarBorder.jsx'
import styles from './Contact.module.css'

const links = [
  { icon: '@', label: 'sreejita_saha@outlook.com', href: 'mailto:sreejita_saha@outlook.com' },
  { icon: 'gh', label: 'github.com/sreejita-saha', href: 'https://github.com/sreejita-saha' },
  { icon: 'in', label: 'linkedin.com/in/sahasreejita', href: 'https://www.linkedin.com/in/sahasreejita/' },
]

export default function Contact() {
  return (
    <section className={styles.section} id="contact">
      <div className={styles.inner}>
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <span className={styles.label}>Contact</span>
          <h2 className={styles.heading}>
            Let's work<br /><em>together.</em>
          </h2>
        </motion.div>

        <motion.div
          className={styles.links}
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.2 }}
        >
          {links.map((link, i) => (
            <motion.a
              key={link.label}
              href={link.href}
              className={styles.link}
              target={link.href.startsWith('http') ? '_blank' : undefined}
              rel="noreferrer"
              initial={{ opacity: 0, x: -10 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.3 + i * 0.1 }}
            >
              <span className={styles.linkIcon}>{link.icon}</span>
              {link.label}
            </motion.a>
          ))}
        </motion.div>

        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.5 }}
        >
          <StarBorder color="var(--accent)">
            <a href="mailto:sreejita_saha@outlook.com" className={styles.ctaBtn}>
              Say hello ↗
            </a>
          </StarBorder>
        </motion.div>
      </div>

      <footer className={styles.footer}>
        <span className={styles.footerName}>Sreejita Saha</span>
        <span className={styles.footerCopy}>© 2026 · Built with React</span>
      </footer>
    </section>
  )
}