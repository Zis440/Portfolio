import { motion } from 'framer-motion';
import { ExternalLink } from 'lucide-react';

export default function Publications() {
  const publications = [
    { year: "2025", journal: "Web 6.0 & Industry 6.0", title: "Multi‑Modal AI for Mental Health Prediction and Intervention", desc: "A multimodal AI framework combining text, behavioral, and emotional data for early mental health assessment.", color: "from-primary to-accent", link: "https://www.researchgate.net/publication/399381162_Multi-modal_AI_for_Mental_Health_Prediction_and_Intervention" },
    { year: "2025", journal: "Prantik Gabeshana Patrika (ISSN 2583-6706)", title: "LID‑R: AI‑Based Object Reshaper", desc: "An AI‑driven system for adaptive reshaping and transformation of geometric and mathematical 3D structures.", color: "from-accent to-primary", link: "https://santiniketansahityapath.org.in/wp-content/uploads/2025/07/21_Saphalya-Das.pdf" },
    { year: "2026", journal: "IEEE ICAECT 2026", title: "GenX: AI‑Powered Genomic Hybridization Analysis and Prediction", desc: "A genomic hybridization simulation framework using DNA sequence merging algorithms and predictive biological modelling.", color: "from-primary via-accent to-primary", link: "https://ieeexplore.ieee.org/abstract/document/11425996" }
  ];

  return (
    <section id="publications" className="py-16 sm:py-24 relative z-10" style={{ background: 'var(--color-surface)' }}>
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true, margin: "-100px" }}>
          <span className="inline-block text-xs font-semibold tracking-[2.5px] uppercase text-primary bg-primary/10 px-4 py-1.5 rounded-full border border-primary/20 backdrop-blur-sm mb-4">Publications</span>
          <h2 className="font-display text-[clamp(1.8rem,4vw,3.2rem)] font-semibold tracking-tight leading-[1.1] mb-10 sm:mb-14">
            Research <span className="text-gradient">papers</span>
          </h2>
        </motion.div>
        
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-5">
          {publications.map((pub, idx) => (
            <motion.a 
              key={idx} 
              href={pub.link}
              target="_blank"
              rel="noreferrer"
              initial={{ opacity: 0, y: 30, scale: 0.95 }} 
              whileInView={{ opacity: 1, y: 0, scale: 1 }} 
              viewport={{ once: true, margin: "-50px" }} 
              transition={{ duration: 0.6, delay: idx * 0.12 }}
              whileHover={{ y: -8 }}
              className="group relative shimmer-on-hover block"
            >
              <div className="absolute inset-0 rounded-[28px] p-[1px] opacity-0 group-hover:opacity-100 transition-opacity duration-500">
                <div className={`w-full h-full rounded-[28px] bg-gradient-to-br ${pub.color} opacity-30`} />
              </div>
              
              <div className="glass p-5 sm:p-7 flex flex-col h-full relative transition-all duration-500">
                <div className="flex flex-wrap gap-3 items-center mb-3">
                  <span className="bg-primary text-white px-3 py-0.5 rounded-full text-[0.6rem] font-bold">{pub.year}</span>
                  <span className="text-text-secondary text-[0.65rem] sm:text-[0.7rem] font-medium">{pub.journal}</span>
                </div>
                <h3 className="text-base sm:text-lg font-semibold mb-2 group-hover:text-primary transition-colors">{pub.title}</h3>
                <p className="text-text-secondary text-xs sm:text-[0.85rem] leading-[1.6] flex-grow">{pub.desc}</p>
                <div className="mt-3 pt-3" style={{ borderTop: '1px solid var(--border-color)' }}>
                  <span className="text-primary text-xs font-medium flex items-center gap-1.5 opacity-60 group-hover:opacity-100 transition-opacity">
                    <ExternalLink size={12} /> View Publication
                  </span>
                </div>
              </div>
            </motion.a>
          ))}
        </div>
      </div>
    </section>
  );
}
