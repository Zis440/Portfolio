import { motion } from 'framer-motion';

export default function Projects() {
  const projects = [
    {
      icon: "🧬",
      title: "AI Genomic Hybridization Analysis",
      tech: "BioPython · NumPy · Pandas · ML",
      desc: "Developed a genomic hybridization simulation framework using DNA sequence merging algorithms and predictive biological modelling techniques.",
      tags: ["Computational Biology", "BioPython", "ML"]
    },
    {
      icon: "🔷",
      title: "LID‑R – AI‑Based Object Reshaper",
      tech: "AI · Machine Learning · Mathematical Modeling",
      desc: "Designed an AI‑driven system for adaptive reshaping and transformation of geometric and mathematical 3D structures using machine learning techniques.",
      tags: ["3D", "Mathematical Modeling"]
    },
    {
      icon: "📷",
      title: "REGICAM – ML Attendance System",
      tech: "Python · CNN · Computer Vision · NumPy · Pandas",
      desc: "Developed a CCTV‑based attendance system using CNN‑powered facial recognition for real‑time identity detection and automated attendance tracking.",
      tags: ["Computer Vision", "CNN"]
    },
    {
      icon: "🛡️",
      title: "AI Campus Security System",
      tech: "AI · Computer Vision · Machine Learning",
      desc: "Built an intelligent surveillance platform for anomaly, intrusion, and suspicious activity detection from CCTV feeds using machine learning techniques.",
      tags: ["Security", "Anomaly Detection"]
    },
    {
      icon: "🧠",
      title: "NeurAI (till software prototype)",
      tech: "Python · PyTorch · React · TypeScript · MQTT · ML",
      desc: "Engineered an end‑to‑end brain‑computer interface (BCI) platform using Raspberry Pi and BioAmp sensors to capture real‑time EEG/EMG signals, leveraging PyTorch‑based deep learning models for neural signal decoding and real‑time text generation through React and MQTT‑based communication systems.",
      tags: ["BCI", "EEG", "PyTorch"]
    }
  ];

  return (
    <section id="projects" className="py-24 relative z-10">
      <div className="max-w-7xl mx-auto px-8">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
        >
          <span className="inline-block text-xs font-semibold tracking-[2.5px] uppercase text-primary bg-primary/10 px-4 py-1.5 rounded-full border border-primary/20 backdrop-blur-sm mb-4">
            Projects
          </span>
          <h2 className="font-display text-[clamp(2.2rem,5vw,4rem)] font-semibold tracking-tight leading-[1.1] mb-16">
            Research & <span className="text-gradient">engineering</span>
          </h2>
        </motion.div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.5, delay: idx * 0.1 }}
              whileHover={{ y: -8 }}
              className="glass p-8 flex flex-col h-full group transition-all duration-500 hover:border-white/10 hover:shadow-[0_40px_80px_-16px_rgba(0,0,0,0.8)]"
            >
              <div className="text-4xl mb-4 group-hover:scale-110 transition-transform origin-left">{project.icon}</div>
              <h3 className="text-xl font-semibold mb-2">{project.title}</h3>
              <div className="text-primary text-xs font-medium mb-4 opacity-80">{project.tech}</div>
              <p className="text-text-secondary text-[0.92rem] leading-[1.7] flex-grow">{project.desc}</p>
              
              <div className="flex flex-wrap gap-2 mt-6 pt-4 border-t border-white/5">
                {project.tags.map((tag, i) => (
                  <span key={i} className="bg-white/5 border border-white/5 px-3 py-1 rounded-full text-[0.65rem] text-text-secondary">
                    {tag}
                  </span>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
