import { motion } from 'framer-motion';

export default function Certifications() {
  const certifications = [
    { name: "NPTEL – Artificial Intelligence in Industrial Fields", org: "NPTEL" },
    { name: "NPTEL – Developing Soft Skills", org: "NPTEL" },
    { name: "Goldman Sachs – Operations Job Simulation", org: "Goldman Sachs" },
    { name: "Programming Foundations", org: "Coursera" },
    { name: "Introduction to Generative AI", org: "Coursera" },
    { name: "Machine Learning with Python", org: "Coursera" },
    { name: "Cyber Security Fundamentals", org: "University of London" },
    { name: "Gen AI Agents: Transform Your Organization", org: "Google Cloud" },
    { name: "Gen AI: Navigate the Landscape", org: "Google Cloud" },
    { name: "Transformer Models and BERT Model", org: "Google Cloud" }
  ];

  return (
    <section id="certifications" className="py-16 sm:py-24 relative z-10" style={{ background: 'var(--color-surface)' }}>
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true, margin: "-100px" }}>
          <span className="inline-block text-xs font-semibold tracking-[2.5px] uppercase text-primary bg-primary/10 px-4 py-1.5 rounded-full border border-primary/20 backdrop-blur-sm mb-4">Certifications</span>
          <h2 className="font-display text-[clamp(1.8rem,4vw,3.2rem)] font-semibold tracking-tight leading-[1.1] mb-10 sm:mb-12">
            Continuous <span className="text-gradient">learning</span>
          </h2>
        </motion.div>
        
        <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true, margin: "-50px" }} transition={{ duration: 0.6 }}
          className="glass p-5 sm:p-7 md:p-8"
        >
          <div className="grid sm:grid-cols-2 gap-2.5 sm:gap-3">
            {certifications.map((cert, idx) => (
              <motion.div key={idx} initial={{ opacity: 0, x: -20 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} transition={{ duration: 0.4, delay: idx * 0.05 }}
                whileHover={{ x: 5 }}
                className="flex items-start gap-2.5 p-3 rounded-2xl group cursor-default transition-all duration-300 hover:bg-primary/5"
                style={{ background: 'var(--color-bg-card)', border: '1px solid var(--border-color)' }}
              >
                <span className="text-primary text-base mt-0.5 shrink-0 group-hover:scale-110 transition-transform">✦</span>
                <div>
                  <div className="text-xs sm:text-sm font-medium group-hover:text-primary transition-colors">{cert.name}</div>
                  <div className="text-[0.65rem] text-text-secondary mt-0.5">{cert.org}</div>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
