import { motion } from 'framer-motion';

export default function Certifications() {
  const certifications = [
    "NPTEL – Artificial Intelligence in Industrial Fields",
    "NPTEL – Developing Soft Skills",
    "Goldman Sachs – Operations Job Simulation",
    "Programming Foundations – Coursera",
    "Introduction to Generative AI – Coursera",
    "Machine Learning with Python – Coursera",
    "Cyber Security Fundamentals – University of London",
    "Gen AI Agents: Transform Your Organization – Google Cloud (Coursera) 2026",
    "Gen AI: Navigate the Landscape – Google Cloud (Coursera) 2026",
    "Transformer Models and BERT Model – Google Cloud (Coursera) 2026"
  ];

  return (
    <section id="certifications" className="py-24 relative z-10 bg-white/[0.005]">
      <div className="max-w-7xl mx-auto px-8">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
        >
          <span className="inline-block text-xs font-semibold tracking-[2.5px] uppercase text-primary bg-primary/10 px-4 py-1.5 rounded-full border border-primary/20 backdrop-blur-sm mb-4">
            Certifications
          </span>
          <h2 className="font-display text-[clamp(2.2rem,5vw,4rem)] font-semibold tracking-tight leading-[1.1] mb-12">
            Continuous <span className="text-gradient">learning</span>
          </h2>
        </motion.div>
        
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-50px" }}
          transition={{ duration: 0.6 }}
          className="glass p-10"
        >
          <div className="flex flex-wrap justify-center gap-4">
            {certifications.map((cert, idx) => (
              <motion.span 
                key={idx}
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: idx * 0.05 }}
                whileHover={{ scale: 1.04, y: -2 }}
                className="bg-white/5 border border-white/5 px-6 py-2.5 rounded-full text-sm text-text-secondary transition-all hover:border-primary hover:bg-primary/5 hover:text-white hover:shadow-[0_8px_24px_rgba(0,0,0,0.2)] cursor-default"
              >
                {cert}
              </motion.span>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
