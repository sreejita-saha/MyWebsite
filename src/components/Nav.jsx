import { motion } from 'framer-motion'
import styles from './Nav.module.css'

const links = [
  { label: 'About', link: '#about' },
  { label: 'Work', link: '#projects' },
  { label: 'Experience', link: '#experience' },
  { label: 'Achievements', link: '#achievements' },
  { label: 'Hello', link: '#contact' },
]

export default function Nav() {
  return (
    <motion.nav
      className={styles.nav}
      initial={{ y: -20, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.7, delay: 0.2, ease: [0.22, 1, 0.36, 1] }}
    >
      <a href="#home" className={styles.logo}>
        <span className={styles.logoMark}>😈</span>
        <span className={styles.logoName}>Sreejita Saha</span>
      </a>

      <ul className={styles.links}>
        {links.map((item, i) => (
          <motion.li 
            key={i}
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4 + i * 0.1, duration: 0.5, ease: "easeOut" }}
          >
            <a href={item.link}>{item.label}</a>
          </motion.li>
        ))}
      </ul>
    </motion.nav>
  )
}
