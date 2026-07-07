import { useRef, useState } from 'react';
import { motion } from 'framer-motion';

function ProjectCard({ project, idx }: { project: { icon: string; title: string; tech: string; desc: string; tags: string[] }; idx: number }) {
  const cardRef = useRef<HTMLDivElement>(null);
  const [rotateX, setRotateX] = useState(0);
  const [rotateY, setRotateY] = useState(0);
  const [glowX, setGlowX] = useState(50);
  const [glowY, setGlowY] = useState(50);

  const handleMouseMove = (e: React.MouseEvent) => {
    if (!cardRef.current) return;
    const rect = cardRef.current.getBoundingClientRect();
    const x = (e.clientX - rect.left) / rect.width;
    const y = (e.clientY - rect.top) / rect.height;
    setRotateX((y - 0.5) * -8);
    setRotateY((x - 0.5) * 8);
    setGlowX(x * 100);
    setGlowY(y * 100);
  };

  const handleMouseLeave = () => {
    setRotateX(0);
    setRotateY(0);
    setGlowX(50);
    setGlowY(50);
  };

  return (
    <motion.div
      ref={cardRef}
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-50px" }}
      transition={{ duration: 0.6, delay: idx * 0.12 }}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      style={{
        transform: `perspective(800px) rotateX(${rotateX}deg) rotateY(${rotateY}deg)`,
        transition: 'transform 0.15s ease-out',
      }}
      className="glass p-5 sm:p-7 flex flex-col h-full group transition-all duration-500 shimmer-on-hover relative overflow-hidden"
    >
      <div
        className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none"
        style={{ background: `radial-gradient(circle at ${glowX}% ${glowY}%, var(--color-primary-glow), transparent 60%)`, opacity: 0.15 }}
      />
      
      <div className="relative z-10 flex flex-col h-full">
        <div className="text-2xl sm:text-3xl mb-3 group-hover:scale-110 transition-transform origin-left duration-300">{project.icon}</div>
        <h3 className="text-base sm:text-lg font-semibold mb-2 group-hover:text-primary transition-colors">{project.title}</h3>
        <div className="text-primary text-[0.65rem] font-medium mb-3 opacity-80">{project.tech}</div>
        <p className="text-text-secondary text-xs sm:text-[0.85rem] leading-[1.7] flex-grow">{project.desc}</p>
        
        <div className="flex flex-wrap gap-2 mt-4 pt-3" style={{ borderTop: '1px solid var(--border-color)' }}>
          {project.tags.map((tag, i) => (
            <span key={i} className="px-2.5 py-0.5 rounded-full text-[0.6rem] text-text-secondary group-hover:border-primary/20 transition-colors"
              style={{ background: 'var(--color-surface)', border: '1px solid var(--border-color)' }}
            >{tag}</span>
          ))}
        </div>
      </div>
    </motion.div>
  );
}

export default function Projects() {
  const projects = [
    { icon: "🧬", title: "AI Genomic Hybridization Analysis", tech: "BioPython · NumPy · Pandas · ML", desc: "Developed a genomic hybridization simulation framework using DNA sequence merging algorithms and predictive biological modelling techniques.", tags: ["Computational Biology", "BioPython", "ML"] },
    { icon: "🔷", title: "LID‑R – AI‑Based Object Reshaper", tech: "AI · Machine Learning · Mathematical Modeling", desc: "Designed an AI‑driven system for adaptive reshaping and transformation of geometric and mathematical 3D structures using machine learning.", tags: ["3D", "Mathematical Modeling"] },
    { icon: "📷", title: "REGICAM – ML Attendance System", tech: "Python · CNN · Computer Vision · NumPy · Pandas", desc: "Developed a CCTV‑based attendance system using CNN‑powered facial recognition for real‑time identity detection and automated tracking.", tags: ["Computer Vision", "CNN"] },
    { icon: "🛡️", title: "AI Campus Security System", tech: "AI · Computer Vision · Machine Learning", desc: "Built an intelligent surveillance platform for anomaly, intrusion, and suspicious activity detection from CCTV feeds.", tags: ["Security", "Anomaly Detection"] },
    { icon: "🧠", title: "NeurAI (till software prototype)", tech: "Python · PyTorch · React · TypeScript · MQTT · ML", desc: "Engineered an end‑to‑end brain‑computer interface (BCI) platform using Raspberry Pi and BioAmp sensors for neural signal decoding and real‑time text generation.", tags: ["BCI", "EEG", "PyTorch"] }
  ];

  return (
    <section id="projects" className="py-16 sm:py-24 relative z-10">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true, margin: "-100px" }}>
          <span className="inline-block text-xs font-semibold tracking-[2.5px] uppercase text-primary bg-primary/10 px-4 py-1.5 rounded-full border border-primary/20 backdrop-blur-sm mb-4">Projects</span>
          <h2 className="font-display text-[clamp(1.8rem,4vw,3.2rem)] font-semibold tracking-tight leading-[1.1] mb-10 sm:mb-14">
            Research & <span className="text-gradient">engineering</span>
          </h2>
        </motion.div>
        
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-5">
          {projects.map((project, idx) => (
            <ProjectCard key={idx} project={project} idx={idx} />
          ))}
        </div>
      </div>
    </section>
  );
}
