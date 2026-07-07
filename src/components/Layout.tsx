import { Outlet } from 'react-router-dom';
import Navbar from './Navbar';
import Footer from './Footer';
import CustomCursor from './CustomCursor';
import ParticleField from './ParticleField';
import { motion, useScroll, useSpring } from 'framer-motion';

export default function Layout() {
  const { scrollYProgress } = useScroll();
  const scaleX = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
    restDelta: 0.001
  });

  return (
    <div className="relative min-h-screen overflow-x-hidden">
      <CustomCursor />
      <ParticleField />
      
      {/* Ambient Gradient Orbs */}
      <div className="fixed inset-0 pointer-events-none z-0 overflow-hidden">
        <div 
          className="absolute w-[300px] h-[300px] sm:w-[500px] sm:h-[500px] rounded-full animate-glow-pulse"
          style={{
            top: '5%',
            left: '-8%',
            background: 'radial-gradient(circle, var(--color-primary-glow) 0%, transparent 70%)',
            opacity: 0.4,
          }}
        />
        <div 
          className="absolute w-[250px] h-[250px] sm:w-[400px] sm:h-[400px] rounded-full animate-glow-pulse"
          style={{
            top: '45%',
            right: '-5%',
            background: 'radial-gradient(circle, var(--color-accent-glow) 0%, transparent 70%)',
            animationDelay: '3s',
            opacity: 0.3,
          }}
        />
        <div 
          className="absolute w-[200px] h-[200px] sm:w-[350px] sm:h-[350px] rounded-full animate-glow-pulse"
          style={{
            bottom: '10%',
            left: '25%',
            background: 'radial-gradient(circle, var(--color-primary-glow) 0%, transparent 70%)',
            animationDelay: '6s',
            opacity: 0.25,
          }}
        />
      </div>

      {/* Subtle Animated Grid Background */}
      <div className="fixed inset-0 pointer-events-none z-0 overflow-hidden opacity-[0.015]">
        <svg width="100%" height="100%" xmlns="http://www.w3.org/2000/svg">
          <defs>
            <pattern id="grid" width="60" height="60" patternUnits="userSpaceOnUse">
              <path d="M 60 0 L 0 0 0 60" fill="none" stroke="var(--color-text)" strokeWidth="0.5"/>
            </pattern>
          </defs>
          <rect width="100%" height="100%" fill="url(#grid)" />
        </svg>
      </div>

      {/* Scroll Progress Bar */}
      <motion.div
        className="fixed top-0 left-0 right-0 h-[2px] sm:h-[3px] bg-accent origin-left z-50"
        style={{ scaleX }}
      />
      
      <Navbar />
      <main className="relative z-10">
        <Outlet />
      </main>
      <Footer />
    </div>
  );
}
