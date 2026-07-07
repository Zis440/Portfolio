import { useEffect, useState, useRef } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Footprints } from 'lucide-react';

interface Trail {
  id: number;
  x: number;
  y: number;
  angle: number;
}

export default function CustomCursor() {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const [isHovering, setIsHovering] = useState(false);
  const [isMoving, setIsMoving] = useState(false);
  
  const [trails, setTrails] = useState<Trail[]>([]);
  const lastTrailPos = useRef({ x: 0, y: 0 });
  const trailId = useRef(0);
  const moveTimeout = useRef<ReturnType<typeof setTimeout> | null>(null);

  useEffect(() => {
    const updateMousePosition = (e: MouseEvent) => {
      setMousePosition({ x: e.clientX, y: e.clientY });

      // Handle "moving" state for animation
      setIsMoving(true);
      if (moveTimeout.current) clearTimeout(moveTimeout.current);
      moveTimeout.current = setTimeout(() => setIsMoving(false), 100);

      // Calculate distance from last trail
      const dx = e.clientX - lastTrailPos.current.x;
      const dy = e.clientY - lastTrailPos.current.y;
      const dist = Math.sqrt(dx * dx + dy * dy);

      // Add a footprint every 35 pixels
      if (dist > 35) {
        // Calculate angle so footprints face the direction of movement
        const angle = Math.atan2(dy, dx) * (180 / Math.PI) + 90;

        lastTrailPos.current = { x: e.clientX, y: e.clientY };
        const newTrail = { id: trailId.current++, x: e.clientX, y: e.clientY, angle };
        
        setTrails((prev) => {
           const newTrails = [...prev, newTrail];
           return newTrails.slice(-15); // Keep max 15 footprints to prevent DOM bloat
        });

        // Remove the footprint after 2 seconds
        setTimeout(() => {
          setTrails((prev) => prev.filter(t => t.id !== newTrail.id));
        }, 2000);
      }
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
  }, []);

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
              <Footprints size={18} />
            </motion.div>
          ))}
        </AnimatePresence>
      </div>

      {/* Main Cursor Wrapper */}
      <motion.div
        className="fixed top-0 left-0 pointer-events-none z-[9999] hidden md:flex items-center justify-center"
        animate={{
          x: mousePosition.x - 16,
          y: mousePosition.y - 16,
          scale: isHovering ? 1.3 : 1,
        }}
        transition={{
          type: 'spring',
          stiffness: 500,
          damping: 28,
          mass: 0.5
        }}
      >
        {/* The Animated Person */}
        <motion.div
          className="text-3xl filter drop-shadow-xl"
          animate={{
            rotate: isMoving ? [-15, 15] : 0,
            y: isMoving ? [-3, 3] : 0,
          }}
          transition={{
            repeat: isMoving ? Infinity : 0,
            repeatType: "mirror",
            duration: 0.2,
            ease: "easeInOut"
          }}
        >
          🚶‍♂️
        </motion.div>
      </motion.div>
    </>
  );
}
