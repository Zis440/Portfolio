import { motion, useInView } from 'framer-motion';
import { useRef } from 'react';

export default function Skills() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  const skillCategories = [
    { icon: "💻", title: "Programming", skills: [{ name: "Python", level: 95 }, { name: "C", level: 75 }, { name: "OOP", level: 85 }, { name: "DSA", level: 80 }] },
    { icon: "📊", title: "Data & Libraries", skills: [{ name: "NumPy / Pandas", level: 90 }, { name: "Scikit-learn", level: 85 }, { name: "Transformers", level: 80 }, { name: "FAISS / Embeddings", level: 85 }] },
    { icon: "🧠", title: "AI / ML", skills: [{ name: "Deep Learning", level: 90 }, { name: "NLP & LLMs", level: 88 }, { name: "Computer Vision", level: 82 }, { name: "RAG & Gen AI", level: 85 }] },
    { icon: "🏗️", title: "Development", skills: [{ name: "FastAPI / Backend", level: 92 }, { name: "React / TypeScript", level: 78 }, { name: "PostgreSQL", level: 85 }, { name: "System Design", level: 80 }] },
    { icon: "⚙️", title: "AI Frameworks", skills: [{ name: "Knowledge Graphs", level: 82 }, { name: "Vector Databases", level: 85 }, { name: "Prompt Engineering", level: 88 }, { name: "REST APIs / JWT", level: 90 }] },
    { icon: "🎨", title: "Design", skills: [{ name: "UI/UX Design", level: 75 }, { name: "Figma / Adobe XD", level: 72 }, { name: "Prototyping", level: 78 }, { name: "Product Planning", level: 80 }] }
  ];

  return (
    <section id="skills" className="py-16 sm:py-24 relative z-10" style={{ background: 'var(--color-surface)' }}>
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true, margin: "-100px" }}>
          <span className="inline-block text-xs font-semibold tracking-[2.5px] uppercase text-primary bg-primary/10 px-4 py-1.5 rounded-full border border-primary/20 backdrop-blur-sm mb-4">Skills</span>
          <h2 className="font-display text-[clamp(1.8rem,4vw,3.2rem)] font-semibold tracking-tight leading-[1.1] mb-10 sm:mb-12">
            Technology <span className="text-gradient">stack</span>
          </h2>
        </motion.div>
        
        <div ref={ref} className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-5">
          {skillCategories.map((category, idx) => (
            <motion.div key={idx} initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true, margin: "-50px" }} transition={{ duration: 0.5, delay: idx * 0.1 }}
              className="glass p-5 sm:p-6 shimmer-on-hover group hover:border-primary/10 transition-all duration-500"
            >
              <div className="flex items-center gap-3 mb-4">
                <span className="text-xl sm:text-2xl group-hover:scale-110 transition-transform">{category.icon}</span>
                <h4 className="text-xs font-bold text-text-secondary uppercase tracking-[1.5px]">{category.title}</h4>
              </div>
              <div className="space-y-3">
                {category.skills.map((skill, i) => (
                  <div key={i}>
                    <div className="flex justify-between items-center mb-1">
                      <span className="text-xs sm:text-sm text-text-secondary font-medium">{skill.name}</span>
                      <span className="text-[0.65rem] text-primary font-semibold">{skill.level}%</span>
                    </div>
                    <div className="h-1.5 rounded-full overflow-hidden" style={{ background: 'var(--color-surface)' }}>
                      <motion.div
                        initial={{ width: 0 }}
                        animate={isInView ? { width: `${skill.level}%` } : { width: 0 }}
                        transition={{ duration: 1.2, delay: idx * 0.1 + i * 0.08, ease: [0.16, 1, 0.3, 1] }}
                        className="h-full rounded-full relative"
                        style={{ background: 'linear-gradient(90deg, var(--color-primary), var(--color-accent))' }}
                      >
                        <div className="absolute right-0 top-1/2 -translate-y-1/2 w-2 h-2 rounded-full bg-background shadow-[0_0_8px_var(--color-primary-glow)]"
                          style={{ opacity: isInView ? 1 : 0, transition: 'opacity 0.3s', border: '2px solid var(--color-primary)' }}
                        />
                      </motion.div>
                    </div>
                  </div>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
