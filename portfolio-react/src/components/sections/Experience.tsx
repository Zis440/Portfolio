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
        "Led end‑to‑end backend architecture and development of PsyPredict, a multimodal AI prescreening platform for early mental health assessment using text, behavioral, and emotional data.",
        "Designed and optimized AI/ML pipelines, fine‑tuning Transformer‑based models (BERT) for natural language understanding, symptom analysis, and predictive insights.",
        "Developed scalable Python APIs, real‑time inference systems, and data processing workflows for production‑ready deployment.",
        "Collaborated with researchers and psychologists to translate clinical requirements into robust digital solutions while ensuring system reliability and usability."
      ]
    }
  ];

  return (
    <section id="experience" className="py-24 relative z-10 bg-white/[0.005]">
      <div className="max-w-7xl mx-auto px-8">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
        >
          <span className="inline-block text-xs font-semibold tracking-[2.5px] uppercase text-primary bg-primary/10 px-4 py-1.5 rounded-full border border-primary/20 backdrop-blur-sm mb-4">
            Experience
          </span>
          <h2 className="font-display text-[clamp(2.2rem,5vw,4rem)] font-semibold tracking-tight leading-[1.1] mb-16">
            Professional <span className="text-gradient">journey</span>
          </h2>
        </motion.div>
        
        <div className="relative pl-8 md:pl-10">
          {/* Vertical Line */}
          <div className="absolute left-2.5 top-0 bottom-0 w-[2px] bg-gradient-to-b from-primary via-accent to-transparent rounded-full" />
          
          {experiences.map((exp, idx) => (
            <motion.div 
              key={idx}
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.6, delay: idx * 0.1 }}
              className="relative mb-12"
            >
              {/* Timeline dot */}
              <div className="absolute -left-[30px] md:-left-[38px] top-5 w-3.5 h-3.5 rounded-full bg-background border-[3px] border-primary shadow-[0_0_30px_rgba(0,240,192,0.45),inset_0_0_20px_rgba(0,240,192,0.1)]" />
              
              <div className="glass p-6 md:p-8">
                <div className="flex flex-wrap justify-between items-baseline gap-2 mb-2">
                  <h3 className="text-xl font-semibold">{exp.role}</h3>
                  <span className="text-primary font-medium text-sm bg-primary/10 px-3 py-1 rounded-full border border-primary/20">
                    {exp.date}
                  </span>
                </div>
                
                <div className="text-text-secondary font-medium mb-4">{exp.company}</div>
                
                <div className="flex flex-wrap gap-2 mb-6">
                  {exp.tech.map((t, i) => (
                    <span key={i} className="bg-primary/5 border border-primary/10 px-3 py-1 rounded-full text-xs text-text-secondary font-medium">
                      {t}
                    </span>
                  ))}
                </div>
                
                <ul className="space-y-3">
                  {exp.bullets.map((bullet, i) => (
                    <li key={i} className="text-text-secondary text-[0.92rem] leading-[1.7] relative pl-5">
                      <span className="absolute left-0 top-0 text-primary">▹</span>
                      {bullet}
                    </li>
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
