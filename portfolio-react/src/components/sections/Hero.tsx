import { motion } from 'framer-motion';
import { ArrowRight, Github, Linkedin, Mail } from 'lucide-react';

export default function Hero() {
  const stats = [
    { number: '5', label: 'Projects' },
    { number: '3', label: 'Publications' },
    { number: '2', label: 'Awards' },
    { number: '2', label: 'Experience' }
  ];

  const textVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: (i: number) => ({
      opacity: 1,
      y: 0,
      transition: {
        delay: i * 0.1,
        duration: 0.8,
        ease: [0.16, 1, 0.3, 1]
      }
    })
  };

  return (
    <section id="hero" className="min-h-screen flex items-center pt-20 relative z-10">
      <div className="max-w-7xl mx-auto px-8 w-full grid lg:grid-cols-2 gap-16 items-center">
        <div>
          <motion.div 
            custom={0} initial="hidden" animate="visible" variants={textVariants}
            className="inline-block bg-primary/10 border border-primary/20 px-5 py-1.5 rounded-full text-xs font-medium text-primary tracking-wide mb-4 backdrop-blur-md shadow-[0_0_30px_rgba(0,240,192,0.05)]"
          >
            ✦ AI RESEARCHER & ML ENGINEER
          </motion.div>
          
          <motion.h1 
            custom={1} initial="hidden" animate="visible" variants={textVariants}
            className="font-display text-[clamp(3rem,9vw,6.5rem)] font-bold leading-[1.02] tracking-tighter mb-2"
          >
            Saphalya <span className="text-gradient animate-grad-shift">Das</span>
          </motion.h1>
          
          <motion.div 
            custom={2} initial="hidden" animate="visible" variants={textVariants}
            className="text-2xl text-text-secondary font-normal mb-2"
          >
            Building next‑gen intelligent systems
          </motion.div>
          
          <motion.p 
            custom={3} initial="hidden" animate="visible" variants={textVariants}
            className="text-lg text-text-secondary max-w-lg my-6 leading-relaxed"
          >
            Multimodal AI · Neural Interfaces · Generative Systems · Mental Health Intelligence
          </motion.p>
          
          <motion.div 
            custom={4} initial="hidden" animate="visible" variants={textVariants}
            className="flex flex-wrap gap-4"
          >
            <a href="#projects" className="magnetic flex items-center gap-2 bg-gradient-to-br from-primary to-[#00c9a0] text-black px-8 py-3.5 rounded-full font-semibold shadow-[0_8px_32px_rgba(0,240,192,0.3)] hover:-translate-y-1 hover:shadow-[0_16px_56px_rgba(0,240,192,0.45)] transition-all">
              Explore Work <ArrowRight size={18} />
            </a>
            <a href="https://linkedin.com/in/saphalya-das-81a06b1b3" target="_blank" rel="noreferrer" className="magnetic flex items-center gap-2 border-2 border-white/10 bg-white/5 backdrop-blur-md px-6 py-3.5 rounded-full hover:border-primary hover:bg-primary/10 hover:-translate-y-1 transition-all">
              <Linkedin size={18} /> LinkedIn
            </a>
            <a href="https://github.com/Zis440" target="_blank" rel="noreferrer" className="magnetic flex items-center gap-2 border-2 border-white/10 bg-white/5 backdrop-blur-md px-6 py-3.5 rounded-full hover:border-primary hover:bg-primary/10 hover:-translate-y-1 transition-all">
              <Github size={18} /> GitHub
            </a>
            <a href="#contact" className="magnetic flex items-center gap-2 text-text-secondary px-6 py-3.5 hover:text-white hover:-translate-y-1 transition-all">
              <Mail size={18} /> Contact
            </a>
          </motion.div>
          
          <motion.div 
            custom={5} initial="hidden" animate="visible" variants={textVariants}
            className="flex flex-wrap gap-12 mt-12 pt-8 border-t border-white/5"
          >
            {stats.map((stat, idx) => (
              <div key={idx} className="flex flex-col">
                <span className="font-display text-4xl font-bold bg-gradient-to-br from-white to-primary bg-clip-text text-transparent">
                  {stat.number}
                </span>
                <span className="text-sm text-text-secondary font-medium tracking-wide mt-1">
                  {stat.label}
                </span>
              </div>
            ))}
          </motion.div>
        </div>
        
        <motion.div 
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1, delay: 0.4, ease: [0.16, 1, 0.3, 1] }}
          className="flex justify-center items-center relative lg:mt-0 mt-10"
        >
          <div className="w-[340px] h-[340px] rounded-full p-2 bg-[conic-gradient(from_0deg,var(--tw-colors-primary-DEFAULT),var(--tw-colors-accent-DEFAULT),var(--tw-colors-primary-DEFAULT))] animate-[spin_12s_linear_infinite] shadow-[0_0_120px_rgba(0,240,192,0.15),0_0_60px_rgba(217,70,239,0.1)]">
            <div className="w-full h-full rounded-full overflow-hidden bg-background border-[6px] border-background flex items-center justify-center relative animate-[spin_12s_linear_infinite_reverse]">
              <img src="/img.png" alt="Saphalya Das" className="w-full h-full object-cover" onError={(e) => {
                const target = e.target as HTMLImageElement;
                target.style.display = 'none';
                target.parentElement!.innerHTML = '<div class="w-full h-full flex items-center justify-center bg-gradient-to-br from-primary to-accent font-display text-6xl font-bold text-black">SD</div>';
              }} />
            </div>
          </div>
          
          <motion.div 
            animate={{ y: [0, -14, 0] }} 
            transition={{ duration: 5, repeat: Infinity, ease: "easeInOut", delay: 1.2 }}
            className="absolute top-[5%] -right-[8%] bg-background-glass backdrop-blur-xl border border-primary/20 rounded-full px-5 py-2 text-sm font-medium text-text-secondary flex items-center gap-2 shadow-2xl"
          >
            🧠 Neural AI
          </motion.div>
          
          <motion.div 
            animate={{ y: [0, -14, 0] }} 
            transition={{ duration: 5, repeat: Infinity, ease: "easeInOut", delay: 2.6 }}
            className="absolute bottom-[12%] -left-[10%] bg-background-glass backdrop-blur-xl border border-accent/20 rounded-full px-5 py-2 text-sm font-medium text-text-secondary flex items-center gap-2 shadow-2xl"
          >
            ⚡ Multimodal
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
