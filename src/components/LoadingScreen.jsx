import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import styles from './LoadingScreen.module.css';

const dumbPhrases = [
  "Downloading more RAM...",
  "Waking up the server...",
  "Looking for Javascript in 3 mins tutorials...",
  "Locating the Lambo keys...",
  "Reticulating splines...",
  "Ignoring stack overflows...",
  "Ctrl+C and Ctrl+V'ing code...",
  "Bribing the compilation gods...",
  "Spilling coffee on the keyboard...",
  "Blaming the internet...",
  "Centering the div...",
  "Googling how to code..."
];

export default function LoadingScreen({ onComplete }) {
  const [progress, setProgress] = useState(0);
  const [phrase, setPhrase] = useState(dumbPhrases[0]);

  useEffect(() => {
    let current = 0;
    const interval = setInterval(() => {
      current += Math.floor(Math.random() * 12) + 4; 
      if (current >= 100) {
        setProgress(100);
        clearInterval(interval);
        setPhrase("Done! Ready to be goofy! 🤪");
        setTimeout(onComplete, 600); 
      } else {
        setProgress(current);
      }
    }, 150);

    const phraseInterval = setInterval(() => {
      setPhrase(dumbPhrases[Math.floor(Math.random() * dumbPhrases.length)]);
    }, 500);

    return () => {
      clearInterval(interval);
      clearInterval(phraseInterval);
    };
  }, [onComplete]);

  return (
    <motion.div
      className={styles.loaderContainer}
      initial={{ opacity: 1 }}
      exit={{ opacity: 0, scale: 1.1 }} // Goofy pop-out scale fade
      transition={{ duration: 0.5, ease: "backIn" }}
    >
      <div className={styles.loaderContent}>
        <motion.div 
          className={styles.emoji}
          animate={{ rotate: 360, y: [0, -20, 0] }}
          transition={{ repeat: Infinity, duration: 1.5, ease: "easeInOut" }}
        >
          <img src="/noob.png" alt="noob" />
        </motion.div>
        
        <div className={styles.progressText}>
          {progress}<span className={styles.percentSymbol}>%</span>
        </div>
        
        <div className={styles.progressBar}>
          <motion.div 
            className={styles.progressFill}
            initial={{ width: "0%" }}
            animate={{ width: `${progress}%` }}
            transition={{ ease: "easeOut", duration: 0.2 }}
          />
        </div>
        
        <motion.div 
          className={styles.status}
          key={phrase}
          initial={{ opacity: 0, y: 5 }}
          animate={{ opacity: 1, y: 0 }}
        >
          {phrase}
        </motion.div>
      </div>
    </motion.div>
  );
}
