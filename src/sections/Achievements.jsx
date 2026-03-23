import React from 'react';
import styles from './Achievements.module.css';

export default function Achievements() {
  return (
    <section className={styles.section} id="achievements">
      <div className={styles.inner}>
        <div className={styles.header}>
          <span className={styles.label}>Milestones</span>
          <h2 className={styles.heading}>Top Achievements</h2>
        </div>
        
        <ul className={styles.list}>
          <li>
             <div>
               <strong>Transact Campus Scholarship</strong>
               <p>Awarded for demonstrating strong academic performance and leadership potential.</p>
             </div>
          </li>

          <li>
             <div>
               <strong>2024 Leaving Certificate</strong>
               <p>Achieved 589/625 marks in the Leaving Certificate Examination. Full marks in Biology. Maths student of the year</p>
             </div>
          </li>

          <li>
             <div>
               <strong>Production Value</strong>
               <p>Successfully shipped the Desktop Document Uploader into live production on schedule securely.</p>
             </div>
          </li>
          <li>
             <div>
               <strong>Hackathon Winner</strong>
               <p>Won an NDRC hackathon in [ISE], where my team developed Croí Alert, a solution supporting people with pacemakers and ICDs, and received the Most Innovative Product award.</p>
             </div>
          </li>
        </ul>
      </div>
    </section>
  );
}
