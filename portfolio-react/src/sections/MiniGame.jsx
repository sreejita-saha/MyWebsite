import { useState, useEffect, useCallback, useRef } from 'react';
import styles from './MiniGame.module.css';

const GAME_SPEED = 50; // Milliseconds per tick rendering speed

export default function MiniGame() {
  const [isPlaying, setIsPlaying] = useState(false);
  const [isGameOver, setIsGameOver] = useState(false);
  const [score, setScore] = useState(0);
  const [carLane, setCarLane] = useState(1); // 0 (left), 1 (mid), 2 (right)
  const [obstacles, setObstacles] = useState([]); 

  const gameRef = useRef(null);

  // Keyboard navigation logic
  const handleKeyDown = useCallback((e) => {
    if (!isPlaying) return;
    if (e.key === 'ArrowLeft' || e.key === 'a') {
      setCarLane(prev => Math.max(0, prev - 1));
    } else if (e.key === 'ArrowRight' || e.key === 'd') {
      setCarLane(prev => Math.min(2, prev + 1));
    }
  }, [isPlaying]);

  // Bind key inputs natively to Window so the user doesn't have to precisely click the game box
  useEffect(() => {
    const handleWindowKeyDown = (e) => {
      // Swallow the arrow keys only if playing, preventing the whole website from scrolling down!
      if (isPlaying && ['ArrowLeft', 'ArrowRight', 'ArrowUp', 'ArrowDown'].includes(e.key)) {
        e.preventDefault();
      }
      handleKeyDown(e);
    };
    
    window.addEventListener('keydown', handleWindowKeyDown, { passive: false });
    return () => window.removeEventListener('keydown', handleWindowKeyDown);
  }, [handleKeyDown, isPlaying]);

  // Main 60FPS Game Loop Engine
  useEffect(() => {
    if (!isPlaying || isGameOver) return;

    const interval = setInterval(() => {
      setScore(s => s + 1);

      setObstacles(prev => {
        // Drop all obstacles physically down the screen by 3 percent
        let nextRows = prev.map(ob => ({ ...ob, y: ob.y + 3 }));
        
        // Cull objects that fell off the map so memory doesn't explode
        nextRows = nextRows.filter(ob => ob.y < 120);

        // Spawn mechanics logic
        const spawnChance = Math.random();
        if (spawnChance < 0.08) {
          // Identify unoccupied lanes so we don't cheat the player with impossible overlapping blockades
          const activeLanes = nextRows.filter(ob => ob.y < 20).map(ob => ob.lane);
          const freeLanes = [0, 1, 2].filter(l => !activeLanes.includes(l));
          
          if (freeLanes.length > 1) { // Guarantee at least exactly 1 lane is always open
            const randomLane = freeLanes[Math.floor(Math.random() * freeLanes.length)];
            nextRows.push({ lane: randomLane, y: -10 });
          }
        }

        // Collision logic! The car's physical hit box occupies roughly from 75% down to 95% on the Y axis
        const carIsHit = nextRows.some(ob => ob.lane === carLane && ob.y > 75 && ob.y < 95);
        
        if (carIsHit) {
          setIsGameOver(true);
          setIsPlaying(false);
        }

        return nextRows;
      });
    }, GAME_SPEED);

    return () => clearInterval(interval);
  }, [isPlaying, isGameOver, carLane]);

  const startGame = () => {
    setCarLane(1);
    setObstacles([]);
    setScore(0);
    setIsGameOver(false);
    setIsPlaying(true);
    // Explicitly focus the container into DOM active view
    if (gameRef.current) gameRef.current.focus();
  };

  return (
    <section className={styles.section} id="minigame">
      <div className={styles.header}>
        <span className={styles.label}>Take a break</span>
        <h2 className={styles.heading}>Lambo Joyride 🏎️💨</h2>
        <p className={styles.subtitle}>Use <strong>Left/Right Arrows</strong> or <strong>A/D</strong> to dodge traffic.</p>
      </div>

      <div className={styles.gameContainer} ref={gameRef} tabIndex="0">
        
        <div className={`${styles.road} ${isPlaying ? styles.roadMoving : ''}`}>
          {/* Aesthetic 3-lane road partitioning markers */}
          <div className={styles.laneMarker} style={{left: '33.33%'}} />
          <div className={styles.laneMarker} style={{left: '66.66%'}} />

          {/* Render the barricades */}
          {obstacles.map((ob, i) => (
             <div 
               key={i} 
               className={styles.obstacle}
               style={{ 
                 left: `${(ob.lane * 33.33) + 16.66}%`,
                 top: `${ob.y}%`
               }}
             >
               🚧
             </div>
          ))}

          {/* Render the user's Lamborghini */}
          <div 
            className={styles.playerCar} 
            style={{ left: `${(carLane * 33.33) + 16.66}%` }}
          >
            🏎️
          </div>
        </div>

        {/* UI Overlay Management */}
        {(!isPlaying && !isGameOver) && (
          <div className={styles.overlay}>
            <button onClick={startGame} className={styles.playBtn}>START ENGINE</button>
          </div>
        )}
        
        {isGameOver && (
          <div className={styles.overlay}>
            <h3 className={styles.crashText}>CRASH!</h3>
            <p className={styles.finalScore}>Final Score: <strong>{score}</strong></p>
            <button onClick={startGame} className={styles.playBtn}>TRY AGAIN</button>
          </div>
        )}

        <div className={styles.scoreDisplay}>Score: {score}</div>
      </div>
    </section>
  );
}
