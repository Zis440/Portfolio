import { useEffect, useState, useRef } from 'react';
import { motion, AnimatePresence, useMotionValue, useSpring, useMotionValueEvent, useTransform } from 'framer-motion';

const SingleFootprint = ({ size = 24, className = "" }) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width={size}
    height={size}
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
    className={className}
  >
    <g transform="translate(5.5, 2)">
      <path d="M4 16v-2.38C4 11.5 2.97 10.5 3 8c.03-2.72 1.49-6 4.5-6C9.37 2 10 3.8 10 5.5c0 3.11-2 5.66-2 8.68V16a2 2 0 1 1-4 0Z" />
      <path d="M4 13h4" />
    </g>
  </svg>
);

interface Trail {
  id: number;
  x: number;
  y: number;
  angle: number;
  isLeft: boolean;
}

export default function CustomCursor() {
  const [isHovering, setIsHovering] = useState(false);
  const [isMoving, setIsMoving] = useState(false);
  const [facingRight, setFacingRight] = useState(false);
  
  const [trails, setTrails] = useState<Trail[]>([]);
  const trailId = useRef(0);
  const moveTimeout = useRef<ReturnType<typeof setTimeout> | null>(null);

  // Use Framer Motion values for perfect synchronization
  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);

  const springConfig = { stiffness: 500, damping: 28, mass: 0.5 };
  const cursorX = useSpring(mouseX, springConfig);
  const cursorY = useSpring(mouseY, springConfig);
  
  // Offset to center the cursor
  const cursorXOffset = useTransform(cursorX, (val) => val - 16);
  const cursorYOffset = useTransform(cursorY, (val) => val - 16);

  const lastTrailPos = useRef({ x: 0, y: 0 });

  // Spawn footprints based on the ACTUAL animated position of the person
  useMotionValueEvent(cursorX, "change", (latestX) => {
    const latestY = cursorY.get();
    
    const dx = latestX - lastTrailPos.current.x;
    const dy = latestY - lastTrailPos.current.y;
    const dist = Math.sqrt(dx * dx + dy * dy);

    if (dist > 30) {
      // Determine facing direction for the person
      if (dx > 0) setFacingRight(true);
      else if (dx < 0) setFacingRight(false);

      const dirRad = Math.atan2(dy, dx);
      const angle = dirRad * (180 / Math.PI) + 90;

      const isLeft = trailId.current % 2 === 0;
      
      const offsetDist = 6;
      const perpRad = isLeft ? dirRad - Math.PI / 2 : dirRad + Math.PI / 2;
      const offsetX = Math.cos(perpRad) * offsetDist;
      const offsetY = Math.sin(perpRad) * offsetDist;

      lastTrailPos.current = { x: latestX, y: latestY };
      const newTrail = { 
        id: trailId.current++, 
        x: latestX + offsetX, 
        y: latestY + offsetY, 
        angle,
        isLeft 
      };
      
      setTrails((prev) => {
         const newTrails = [...prev, newTrail];
         return newTrails.slice(-15);
      });

      setTimeout(() => {
        setTrails((prev) => prev.filter(t => t.id !== newTrail.id));
      }, 2000);
    }
  });

  useEffect(() => {
    const updateMousePosition = (e: MouseEvent) => {
      mouseX.set(e.clientX);
      mouseY.set(e.clientY);

      setIsMoving(true);
      if (moveTimeout.current) clearTimeout(moveTimeout.current);
      moveTimeout.current = setTimeout(() => setIsMoving(false), 100);
    };

    const handleMouseOver = (e: MouseEvent) => {
      const target = e.target as HTMLElement;
      if (
        target.tagName.toLowerCase() === 'a' ||
        target.tagName.toLowerCase() === 'button' ||
        target.closest('a') ||
        target.closest('button') ||
        target.classList.contains('magnetic')
      ) {
        setIsHovering(true);
      } else {
        setIsHovering(false);
      }
    };

    window.addEventListener('mousemove', updateMousePosition);
    window.addEventListener('mouseover', handleMouseOver);

    return () => {
      window.removeEventListener('mousemove', updateMousePosition);
      window.removeEventListener('mouseover', handleMouseOver);
      if (moveTimeout.current) clearTimeout(moveTimeout.current);
    };
  }, [mouseX, mouseY]);

  return (
    <>
      {/* Footprint Trails */}
      <div className="hidden md:block fixed inset-0 pointer-events-none z-[9998]">
        <AnimatePresence>
          {trails.map((trail) => (
            <motion.div
              key={trail.id}
              initial={{ opacity: 0.5, scale: 0.5, rotate: trail.angle }}
              animate={{ opacity: 0, scale: 1, rotate: trail.angle }}
              exit={{ opacity: 0 }}
              transition={{ duration: 1.5, ease: "easeOut" }}
              className="absolute flex items-center justify-center text-primary/70 dark:text-primary/90 filter drop-shadow-sm"
              style={{
                left: trail.x - 12,
                top: trail.y - 12,
              }}
            >
              <div style={{ transform: `scaleX(${trail.isLeft ? 1 : -1})` }}>
                <SingleFootprint size={18} />
              </div>
            </motion.div>
          ))}
        </AnimatePresence>
      </div>

      {/* Main Cursor Wrapper */}
      <motion.div
        className="fixed top-0 left-0 pointer-events-none z-[9999] hidden md:flex items-center justify-center"
        style={{
          x: cursorXOffset,
          y: cursorYOffset,
        }}
        animate={{
          scale: isHovering ? 1.3 : 1,
        }}
      >
        {/* The Animated Person */}
        <motion.div
          className="text-3xl filter drop-shadow-xl"
          animate={{
            rotate: isMoving ? [-15, 15] : 0,
            y: isMoving ? [-3, 3] : 0,
            scaleX: facingRight ? -1 : 1,
          }}
          transition={{
            rotate: { repeat: isMoving ? Infinity : 0, repeatType: "mirror", duration: 0.2, ease: "easeInOut" },
            y: { repeat: isMoving ? Infinity : 0, repeatType: "mirror", duration: 0.2, ease: "easeInOut" },
            scaleX: { duration: 0.1 }
          }}
        >
          🚶‍♂️
        </motion.div>
      </motion.div>
    </>
  );
}
