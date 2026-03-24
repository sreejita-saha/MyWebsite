import React, { useRef, useEffect } from 'react';
import styles from './VideoBackground.module.css';

const VideoBackground = ({ src, opacity = 0.2, className = "" }) => {
  const videoRef = useRef(null);

  // Auto-resolve base path for Vite (handles /MyWebsite/ or other subpaths)
  const videoSrc = src.startsWith('http') ? src : `${import.meta.env.BASE_URL}${src.replace(/^\//, '')}`;

  useEffect(() => {
    if (videoRef.current) {
      videoRef.current.playbackRate = 1;
    }
  }, []);

  return (
    <div className={`${styles.container} ${className}`} style={{ opacity }}>
      <video
        ref={videoRef}
        className={styles.video}
        src={videoSrc}
        autoPlay
        loop
        muted
        playsInline
        preload="auto"
      >
        Your browser does not support the video tag.
      </video>
    </div>
  );
};

export default VideoBackground;
