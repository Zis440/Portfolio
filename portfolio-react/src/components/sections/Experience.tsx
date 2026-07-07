import { motion } from 'framer-motion';

export default function Experience() {
  const experiences = [
    {
      role: "AI/ML Developer (Contract)",
      company: "TECHGEN CYBER SOLUTION PVT.LTD.",
      date: "Mar 2026 – Jun 2026",
      tech: ["Python", "FastAPI", "PostgreSQL", "React", "NLP", "RAG", "FAISS", "Knowledge Graphs", "LLMs"],
      bullets: [
        "Developed backend services for psychological assessments, automated report generation, patient management, psychologist verification, and role‑based access control.",
        "Built Retrieval‑Augmented Generation (RAG) pipelines using FAISS, semantic embeddings, and knowledge retrieval frameworks for assessment interpretation and report enrichment.",
        "Implemented NLP and LLM‑powered modules for narrative analysis, theme extraction, psychological profiling, and automated report generation.",
        "Designed scalable APIs, database schemas, audit logging mechanisms, transaction workflows, and remote assessment systems.",
        "Integrated knowledge graph and semantic processing frameworks to enable contextual psychological analysis and decision support.",
        "Collaborated with psychologists and researchers to convert assessment methodologies into production‑ready digital solutions."
      ]
    },
    {
      role: "Research Intern – Backend & AI Systems",
      company: "IEM Research Foundation, Kolkata (On‑site)",
      date: "Nov 2025 – Feb 2026",
      tech: ["Python", "FastAPI", "PostgreSQL", "ML", "NLP", "Transformers (BERT)", "REST APIs"],
      bullets: [
        "Led end‑to‑end backend architecture and development of PsyPredict, a multimodal AI prescreening platform for early mental health assessment.",
        "Designed and optimized AI/ML pipelines, fine‑tuning Transformer‑based models (BERT) for natural language understanding and predictive insights.",
        "Developed scalable Python APIs, real‑time inference systems, and data processing workflows for production‑ready deployment.",
        "Collaborated with researchers and psychologists to translate clinical requirements into robust digital solutions."
      ]
    }
  ];

  return (
    <section id="experience" className="py-16 sm:py-24 relative z-10" style={{ background: 'var(--color-surface)' }}>
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true, margin: "-100px" }}>
          <span className="inline-block text-xs font-semibold tracking-[2.5px] uppercase text-primary bg-primary/10 px-4 py-1.5 rounded-full border border-primary/20 backdrop-blur-sm mb-4">Experience</span>
          <h2 className="font-display text-[clamp(1.8rem,4vw,3.2rem)] font-semibold tracking-tight leading-[1.1] mb-10 sm:mb-14">
            Professional <span className="text-gradient">journey</span>
          </h2>
        </motion.div>
        
        <div className="relative pl-6 sm:pl-8 md:pl-10">
          <motion.div initial={{ height: 0 }} whileInView={{ height: '100%' }} viewport={{ once: true, margin: "-100px" }} transition={{ duration: 1.5, ease: [0.16, 1, 0.3, 1] }}
            className="absolute left-[7px] sm:left-2.5 top-0 w-[2px] rounded-full"
            style={{ background: 'linear-gradient(to bottom, var(--color-primary), var(--color-accent), transparent)' }}
          />
          
          {experiences.map((exp, idx) => (
            <motion.div key={idx} initial={{ opacity: 0, x: -30 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true, margin: "-100px" }} transition={{ duration: 0.6, delay: idx * 0.15 }}
              className="relative mb-8 sm:mb-10"
            >
              <div className="absolute -left-[22px] sm:-left-[30px] md:-left-[38px] top-5 w-3 sm:w-3.5 h-3 sm:h-3.5 rounded-full bg-background border-[3px] border-primary animate-pulse-ring" />
              
              <div className="glass p-4 sm:p-6 md:p-7 hover:border-primary/10 transition-all duration-500">
                <div className="flex flex-col sm:flex-row sm:flex-wrap justify-between items-start sm:items-baseline gap-2 mb-2">
                  <h3 className="text-base sm:text-lg font-semibold">{exp.role}</h3>
                  <span className="text-primary font-medium text-xs bg-primary/10 px-3 py-1 rounded-full border border-primary/20 shrink-0">{exp.date}</span>
                </div>
                <div className="text-text-secondary font-medium mb-3 text-sm">{exp.company}</div>
                <div className="flex flex-wrap gap-1.5 mb-4">
                  {exp.tech.map((t, i) => (
                    <span key={i} className="bg-primary/5 border border-primary/10 px-2 sm:px-2.5 py-0.5 rounded-full text-[0.6rem] sm:text-[0.65rem] text-text-secondary font-medium">{t}</span>
                  ))}
                </div>
                <ul className="space-y-2">
                  {exp.bullets.map((bullet, i) => (
                    <motion.li key={i} initial={{ opacity: 0, x: -10 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} transition={{ duration: 0.4, delay: 0.3 + i * 0.05 }}
                      className="text-text-secondary text-xs sm:text-[0.85rem] leading-[1.7] relative pl-4"
                    >
                      <span className="absolute left-0 top-0 text-primary">▹</span>
                      {bullet}
                    </motion.li>
                  ))}
                </ul>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
