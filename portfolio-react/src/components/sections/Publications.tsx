import { motion } from 'framer-motion';

export default function Publications() {
  const publications = [
    {
      year: "2025",
      journal: "Web 6.0 & Industry 6.0",
      title: "Multi‑Modal AI for Mental Health Prediction and Intervention",
      desc: "A multimodal AI framework combining text, behavioral, and emotional data for early mental health assessment and intervention."
    },
    {
      year: "2025",
      journal: "Prantik Gabeshana Patrika (ISSN 2583-6706)",
      title: "LID‑R: AI‑Based Object Reshaper",
      desc: "An AI‑driven system for adaptive reshaping and transformation of geometric and mathematical 3D structures using machine learning techniques."
    },
    {
      year: "2026",
      journal: "IEEE ICAECT 2026",
      title: "GenX: AI‑Powered Genomic Hybridization Analysis and Prediction",
      desc: "A genomic hybridization simulation framework using DNA sequence merging algorithms and predictive biological modelling techniques."
    }
  ];

  return (
    <section id="publications" className="py-24 relative z-10 bg-white/[0.005]">
      <div className="max-w-7xl mx-auto px-8">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
        >
          <span className="inline-block text-xs font-semibold tracking-[2.5px] uppercase text-primary bg-primary/10 px-4 py-1.5 rounded-full border border-primary/20 backdrop-blur-sm mb-4">
            Publications
          </span>
          <h2 className="font-display text-[clamp(2.2rem,5vw,4rem)] font-semibold tracking-tight leading-[1.1] mb-16">
            Research <span className="text-gradient">papers</span>
          </h2>
        </motion.div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {publications.map((pub, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.5, delay: idx * 0.1 }}
              whileHover={{ y: -8 }}
              className="glass p-8 flex flex-col h-full transition-all duration-500 hover:border-white/10 hover:shadow-[0_40px_80px_-16px_rgba(0,0,0,0.8)]"
            >
              <div className="flex flex-wrap gap-3 items-center mb-4">
                <span className="bg-primary text-black px-3.5 py-0.5 rounded-full text-[0.65rem] font-bold">
                  {pub.year}
                </span>
                <span className="text-text-secondary text-[0.75rem] font-medium">
                  {pub.journal}
                </span>
              </div>
              <h3 className="text-xl font-semibold mb-3">{pub.title}</h3>
              <p className="text-text-secondary text-[0.9rem] leading-[1.6] flex-grow">{pub.desc}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
