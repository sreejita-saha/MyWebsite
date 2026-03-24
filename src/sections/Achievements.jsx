import React from 'react';
import { motion } from 'framer-motion';
import BorderGlow from '../components/BorderGlow.jsx';
import styles from './Achievements.module.css';

const milestones = [
  {
    title: 'Transact Campus Scholarship',
    desc: 'Awarded for demonstrating strong academic performance and leadership potential.'
  },
  {
    title: '2024 Leaving Certificate',
    desc: 'Achieved 589/625 marks in the Leaving Certificate Examination. Full marks in Biology. Maths student of the year'
  },
  {
    title: 'Production Value',
    desc: 'Successfully shipped the Desktop Document Uploader into live production on schedule securely.'
  },
  {
    title: 'Hackathon Winner',
    desc: 'Won an NDRC hackathon in [ISE], where my team developed Croí Alert, a solution supporting people with pacemakers and ICDs, and received the Most Innovative Product award.'
  }
];

export default function Achievements() {
  return (
    <section className={styles.section} id="achievements">
      <div className={styles.flowerBg} />
      
      <div className={styles.inner}>
        <div className={styles.header}>
          <span className={styles.label}>Milestones</span>
          <h2 className={styles.heading}>Top Achievements</h2>
        </div>
        
        <ul className={styles.list}>
          {milestones.map((m, i) => (
            <motion.li
              key={i}
              className={styles.card}
              initial={{ opacity: 0, y: 15 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
            >
              <div className={styles.cardContent}>
                <strong>{m.title}</strong>
                <p>{m.desc}</p>
              </div>
            </motion.li>
          ))}
        </ul>
      </div>
    </section>
  );
}
