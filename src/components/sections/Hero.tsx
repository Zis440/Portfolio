import { useState, useEffect, useRef } from 'react';
import { motion, useMotionValue, useSpring } from 'framer-motion';
import { ArrowRight, Github, Linkedin, Mail } from 'lucide-react';

// Typing animation hook
function useTypingEffect(words: string[], typingSpeed = 80, deletingSpeed = 50, pauseTime = 2000) {
  const [text, setText] = useState('');
  const [wordIndex, setWordIndex] = useState(0);
  const [isDeleting, setIsDeleting] = useState(false);

  useEffect(() => {
    const currentWord = words[wordIndex];
    let timeout: ReturnType<typeof setTimeout>;

    if (!isDeleting && text === currentWord) {
      timeout = setTimeout(() => setIsDeleting(true), pauseTime);
    } else if (isDeleting && text === '') {
      setIsDeleting(false);
      setWordIndex((prev) => (prev + 1) % words.length);
    } else {
      timeout = setTimeout(() => {
        setText(currentWord.substring(0, isDeleting ? text.length - 1 : text.length + 1));
      }, isDeleting ? deletingSpeed : typingSpeed);
    }

    return () => clearTimeout(timeout);
  }, [text, isDeleting, wordIndex, words, typingSpeed, deletingSpeed, pauseTime]);

  return text;
}

// Count-up animation component
function CountUp({ target, duration = 2 }: { target: number; duration?: number }) {
  const [count, setCount] = useState(0);
  const ref = useRef<HTMLSpanElement>(null);
  const counted = useRef(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting && !counted.current) {
          counted.current = true;
          let start = 0;
          const step = target / (duration * 60);
          const animate = () => {
            start += step;
            if (start >= target) {
              setCount(target);
              return;
            }
            setCount(Math.floor(start));
            requestAnimationFrame(animate);
          };
          animate();
        }
      },
      { threshold: 0.5 }
    );

    if (ref.current) observer.observe(ref.current);
    return () => observer.disconnect();
  }, [target, duration]);

  return <span ref={ref}>{count}</span>;
}

export default function Hero() {
  const roles = [
    'AI Researcher',
    'ML Engineer',
    'Neural Interface Designer',
    'Full-Stack Developer',
    'System Architect'
  ];
  const typedText = useTypingEffect(roles);

  const stats = [
    { number: 5, label: 'Projects', suffix: '+' },
    { number: 3, label: 'Publications', suffix: '' },
    { number: 2, label: 'Awards', suffix: '' },
    { number: 2, label: 'Experience', suffix: 'yr' }
  ];

  // Mouse parallax for PFP
  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);
  const springX = useSpring(mouseX, { stiffness: 50, damping: 20 });
  const springY = useSpring(mouseY, { stiffness: 50, damping: 20 });

  const handleMouseMove = (e: React.MouseEvent) => {
    const rect = e.currentTarget.getBoundingClientRect();
    const x = (e.clientX - rect.left - rect.width / 2) / 20;
    const y = (e.clientY - rect.top - rect.height / 2) / 20;
    mouseX.set(x);
    mouseY.set(y);
  };

  const textVariants = {
    hidden: { opacity: 0, y: 30, filter: 'blur(10px)' },
    visible: (i: number) => ({
      opacity: 1,
      y: 0,
      filter: 'blur(0px)',
      transition: {
        delay: i * 0.12,
        duration: 0.8,
        ease: [0.16, 1, 0.3, 1]
      }
    })
  };

  return (
    <section id="hero" className="min-h-[100dvh] flex items-center pt-16 sm:pt-20 pb-8 relative z-10 overflow-hidden">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 w-full grid lg:grid-cols-[1.3fr_1fr] gap-8 lg:gap-12 items-center">
        
        {/* Text Column */}
        <div className="order-2 lg:order-1">
          <motion.div 
            custom={0} initial="hidden" animate="visible" variants={textVariants}
            className="inline-flex items-center gap-2 bg-primary/10 border border-primary/20 px-3 sm:px-4 py-1 sm:py-1.5 rounded-full text-[0.65rem] sm:text-xs font-medium text-primary tracking-wide mb-3 sm:mb-4 backdrop-blur-md"
          >
            <span className="w-2 h-2 rounded-full bg-primary animate-pulse" />
            AI ML ENGINEER & R&D
          </motion.div>
          
          <motion.h1 
            custom={1} initial="hidden" animate="visible" variants={textVariants}
            className="font-display text-[clamp(2rem,6vw,4.5rem)] font-bold leading-[1.05] tracking-tighter mb-1"
          >
            Saphalya{' '}
            <span className="text-gradient animate-grad-shift inline-block">Das</span>
          </motion.h1>
          
          {/* Typing Animation */}
          <motion.div 
            custom={2} initial="hidden" animate="visible" variants={textVariants}
            className="text-sm sm:text-lg text-text-secondary font-normal mb-1 h-7 sm:h-9"
          >
            <span className="text-text/90">{typedText}</span>
            <span className="text-primary animate-blink ml-0.5 font-light">|</span>
          </motion.div>
          
          <motion.p 
            custom={3} initial="hidden" animate="visible" variants={textVariants}
            className="text-sm sm:text-base text-text-secondary max-w-md my-3 sm:my-4 leading-relaxed"
          >
            Multimodal AI · Neural Interfaces · Generative Systems · Mental Health Intelligence
          </motion.p>
          
          {/* Action Buttons */}
          <motion.div 
            custom={4} initial="hidden" animate="visible" variants={textVariants}
            className="flex flex-wrap gap-3 sm:gap-4"
          >
            <a 
              href="#projects" 
              className="flex items-center gap-2 bg-accent text-white px-5 sm:px-6 py-2.5 sm:py-3 rounded-full font-semibold shadow-[0_8px_32px_var(--color-accent-glow)] hover:-translate-y-1 hover:shadow-[0_16px_56px_var(--color-accent-glow)] hover:brightness-110 transition-all duration-300 text-xs sm:text-sm"
            >
              Explore Work <ArrowRight size={18} />
            </a>
            <a 
              href="https://mail.google.com/mail/?view=cm&fs=1&to=szd0238@gmail.com"
              target="_blank"
              rel="noreferrer"
              className="flex items-center gap-2 border-2 border-primary/30 bg-primary/5 backdrop-blur-md px-4 sm:px-5 py-2.5 sm:py-3 rounded-full text-primary hover:bg-primary/15 hover:-translate-y-1 transition-all duration-300 font-medium text-xs sm:text-sm"
            >
              <Mail size={16} /> Email Me
            </a>
          </motion.div>

          {/* Social Links */}
          <motion.div 
            custom={4.5} initial="hidden" animate="visible" variants={textVariants}
            className="flex items-center gap-2 sm:gap-3 mt-4"
          >
            {[
              { icon: Linkedin, href: "https://linkedin.com/in/saphalya-das-81a06b1b3", label: "LinkedIn" },
              { icon: Github, href: "https://github.com/Zis440", label: "GitHub" },
              { icon: Mail, href: "https://mail.google.com/mail/?view=cm&fs=1&to=szd0238@gmail.com", label: "Email" }
            ].map((social) => (
              <a
                key={social.label}
                href={social.href}
                target="_blank"
                rel="noreferrer"
                aria-label={social.label}
                className="w-9 h-9 sm:w-10 sm:h-10 rounded-full border flex items-center justify-center text-text-secondary hover:text-primary hover:border-primary hover:bg-primary/10 hover:-translate-y-1 transition-all duration-300"
                style={{ borderColor: 'var(--border-color)', background: 'var(--color-surface)' }}
              >
                <social.icon size={18} />
              </a>
            ))}
          </motion.div>
          
          {/* Stats */}
          <motion.div 
            custom={5} initial="hidden" animate="visible" variants={textVariants}
            className="flex flex-wrap gap-5 sm:gap-8 lg:gap-10 mt-6 sm:mt-8 pt-5 sm:pt-6 border-t" style={{ borderColor: 'var(--border-color)' }}
          >
            {stats.map((stat, idx) => (
              <div key={idx} className="flex flex-col">
                <span className="font-display text-2xl sm:text-3xl font-bold bg-gradient-to-br from-text to-primary bg-clip-text text-transparent">
                  <CountUp target={stat.number} />
                  <span className="text-primary">{stat.suffix}</span>
                </span>
                <span className="text-xs sm:text-sm text-text-secondary font-medium tracking-wide mt-1">
                  {stat.label}
                </span>
              </div>
            ))}
          </motion.div>
        </div>
        
        {/* Profile Picture Column */}
        <motion.div 
          initial={{ opacity: 0, scale: 0.8, filter: 'blur(20px)' }}
          animate={{ opacity: 1, scale: 1, filter: 'blur(0px)' }}
          transition={{ duration: 1, delay: 0.4, ease: [0.16, 1, 0.3, 1] }}
          className="flex justify-center items-center relative order-1 lg:order-2"
          onMouseMove={handleMouseMove}
        >
          {/* Glowing background ring */}
          <div className="absolute w-[180px] h-[180px] sm:w-[230px] sm:h-[230px] lg:w-[310px] lg:h-[310px] rounded-full animate-rotate-slow"
            style={{
              background: 'conic-gradient(from 0deg, var(--color-primary), var(--color-accent), var(--color-primary))',
              filter: 'blur(30px)',
              opacity: 0.4,
            }}
          />
          
          {/* PFP Container */}
          <motion.div 
            style={{ x: springX, y: springY }}
            className="relative w-[160px] h-[160px] sm:w-[200px] sm:h-[200px] lg:w-[280px] lg:h-[280px]"
          >
            {/* Rotating border ring */}
            <div className="absolute inset-0 rounded-full animate-rotate-slow p-[3px]"
              style={{
                background: 'conic-gradient(from 0deg, var(--color-primary), var(--color-accent), var(--color-primary), var(--color-accent), var(--color-primary))',
              }}
            >
              <div className="w-full h-full rounded-full bg-background" />
            </div>
            
            {/* Actual Image */}
            <div className="absolute inset-[4px] rounded-full overflow-hidden bg-background">
              <img 
                src="/img.png" 
                alt="Saphalya Das"
                className="w-full h-full object-cover object-top"
                onError={(e) => {
                  const target = e.target as HTMLImageElement;
                  target.style.display = 'none';
                  target.parentElement!.innerHTML = '<div class="w-full h-full flex items-center justify-center text-5xl font-bold font-display" style="background: linear-gradient(135deg, var(--color-primary), var(--color-accent)); color: #0a0a0c;">SD</div>';
                }}
              />
            </div>
          </motion.div>
          
          {/* Floating Tags */}
          <motion.div 
            animate={{ y: [0, -14, 0] }} 
            transition={{ duration: 5, repeat: Infinity, ease: "easeInOut", delay: 1.2 }}
            className="absolute top-[5%] -right-[2%] sm:-right-[8%] bg-background-glass backdrop-blur-xl border border-primary/20 rounded-2xl px-4 py-2 text-xs sm:text-sm font-medium text-text-secondary flex items-center gap-2 shadow-2xl"
          >
            <span className="text-lg">🧠</span> Neural AI
          </motion.div>
          
          <motion.div 
            animate={{ y: [0, -14, 0] }} 
            transition={{ duration: 5, repeat: Infinity, ease: "easeInOut", delay: 2.6 }}
            className="absolute bottom-[12%] -left-[2%] sm:-left-[10%] bg-background-glass backdrop-blur-xl border border-accent/20 rounded-2xl px-4 py-2 text-xs sm:text-sm font-medium text-text-secondary flex items-center gap-2 shadow-2xl"
          >
            <span className="text-lg">⚡</span> Multimodal
          </motion.div>

          <motion.div 
            animate={{ y: [0, 10, 0] }} 
            transition={{ duration: 4.5, repeat: Infinity, ease: "easeInOut", delay: 0.5 }}
            className="absolute top-[55%] -right-[5%] sm:-right-[12%] bg-background-glass backdrop-blur-xl border border-white/10 rounded-2xl px-4 py-2 text-xs sm:text-sm font-medium text-text-secondary flex items-center gap-2 shadow-2xl hidden sm:flex"
          >
            <span className="text-lg">🔬</span> Research
          </motion.div>
        </motion.div>
      </div>

      {/* Subtle Animated Accents */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden z-0">
        {/* Soft glow dots */}
        {[
          { top: '15%', left: '8%', size: 4, color: 'var(--color-primary)', delay: 0 },
          { top: '25%', right: '12%', size: 3, color: 'var(--color-accent)', delay: 2 },
          { top: '60%', left: '5%', size: 3, color: 'var(--color-accent)', delay: 4 },
          { top: '45%', right: '6%', size: 4, color: 'var(--color-primary)', delay: 1 },
          { top: '75%', left: '20%', size: 2, color: 'var(--color-primary)', delay: 3 },
          { top: '35%', left: '35%', size: 2, color: 'var(--color-accent)', delay: 5 },
        ].map((dot, i) => (
          <div
            key={i}
            className="absolute rounded-full animate-float"
            style={{
              top: dot.top,
              left: dot.left,
              right: (dot as any).right,
              width: dot.size,
              height: dot.size,
              background: dot.color,
              boxShadow: `0 0 ${dot.size * 6}px ${dot.color}`,
              opacity: 0.4,
              animationDelay: `${dot.delay}s`,
            }}
          />
        ))}
      </div>
    </section>
  );
}
