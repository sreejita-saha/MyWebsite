import { motion } from 'framer-motion'
import GradualBlur from '../components/GradualBlur.jsx'
import StarBorder from '../components/StarBorder.jsx'
import ModelViewer from '../components/ModelViewer.jsx'
import styles from './Hero.module.css'

export default function Hero() {
  return (
    <section className={styles.hero} id="home">
      <div className={styles.inner}>

        <motion.div
          className={styles.badge}
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ delay: 0.2 }}
        >
          <span className={styles.dot} />
          Studying
        </motion.div>

        <motion.h1
          className={styles.heading}
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3, duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
        >
          <span className={styles.name}>Sreejita</span>
          <span className={styles.sub}><em>Software</em> Engineering Student</span>
        </motion.h1>

        <motion.p
          className={styles.desc}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.5, duration: 0.6 }}
        >
          Second-year <strong style={{ color: '#fadcf3' }}>[Immersive Software Engineering]</strong> student at University of Limerick.
          I have built systems ranging from low-level Linux work to production-ready desktop applications.
        </motion.p>

        <motion.div
          className={styles.actions}
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.65 }}
        >
          <StarBorder
            color="magenta"
            speed="5s"
            thickness="2">
            <a href="#projects" className={styles.btnPrimary}>
              View my work
            </a>
          </StarBorder>

          {/* <a href="mailto:sreejita_saha@outlook.com" className={styles.btnGhost}>
            Get in touch ↗
          </a> */}
        </motion.div>

        {/* <motion.div
          className={styles.scroll}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.2 }}
        >
          <motion.div
            className={styles.scrollDot}
            animate={{ y: [0, 8, 0] }}
            transition={{ duration: 1.6, repeat: Infinity, ease: 'easeInOut' }}
          />
        </motion.div> */}
      </div>

      {/* 3D Lamborghini Model floating on the right */}
      <div className={styles.modelContainer}>
        <ModelViewer
          url="./lambo.glb"
          width="100%"
          height="100%"
          defaultRotationX={180} /* X controls seeing left vs right vs front of car natively */
          defaultRotationY={-10} /* Y controls the vertical tilt, 0 means perfectly flat (looking straight at doors, not from above or below) */
          modelYOffset={0.1}
          autoRotate={true}
          autoRotateSpeed={0.2}
          enableZoom={false}
          enablePan={false}
          enableRotate={false}
          enableManualZoom={false}
          environmentPreset="city"
          enableHoverRotation={false}
          showScreenshotButton={false}
          fadeIn={true}
          autoFrame={true}
        />
      </div>
    </section>
  )
}