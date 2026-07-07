import { motion } from 'framer-motion';

export default function Skills() {
  const skillCategories = [
    { title: "Programming", skills: ["Python", "C", "OOP", "DSA"] },
    { title: "Data & Libraries", skills: ["NumPy", "Pandas", "Scikit‑learn", "Matplotlib", "spaCy", "Transformers", "Sentence Transformers", "FAISS"] },
    { title: "AI / ML", skills: ["Machine Learning", "Deep Learning", "NLP", "Computer Vision", "Generative AI", "LLMs", "RAG", "Semantic Search"] },
    { title: "Development & Architecture", skills: ["Backend Engineering", "Full‑Stack", "API Development", "Database Design", "System Design", "Pipeline Development", "Workflow Automation", "Assessment Engines", "Report Generation"] },
    { title: "AI Systems & Frameworks", skills: ["Knowledge Graphs", "Vector Databases", "Embeddings", "Prompt Engineering", "Feature Engineering", "FastAPI", "React", "PostgreSQL", "SQLAlchemy", "REST APIs", "JWT", "RBAC"] },
    { title: "Design", skills: ["UI/UX Design", "Figma", "Adobe XD", "Product Planning", "Prototyping"] }
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.5 } }
  };

  return (
    <section id="skills" className="py-24 relative z-10 bg-white/[0.005]">
      <div className="max-w-7xl mx-auto px-8">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
        >
          <span className="inline-block text-xs font-semibold tracking-[2.5px] uppercase text-primary bg-primary/10 px-4 py-1.5 rounded-full border border-primary/20 backdrop-blur-sm mb-4">
            Skills
          </span>
          <h2 className="font-display text-[clamp(2.2rem,5vw,4rem)] font-semibold tracking-tight leading-[1.1] mb-12">
            Technology <span className="text-gradient">stack</span>
          </h2>
        </motion.div>
        
        <div className="glass p-8 md:p-12">
          <motion.div 
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-50px" }}
            className="grid md:grid-cols-2 gap-10"
          >
            {skillCategories.map((category, idx) => (
              <motion.div key={idx} variants={itemVariants}>
                <h4 className="text-sm font-bold text-text-secondary uppercase tracking-[1.5px] mb-4">
                  {category.title}
                </h4>
                <div className="flex flex-wrap gap-2.5">
                  {category.skills.map((skill, i) => (
                    <motion.span 
                      key={i} 
                      whileHover={{ y: -3, scale: 1.05 }}
                      className="bg-white/5 border border-white/5 px-4 py-1.5 rounded-full text-sm text-text-secondary font-medium transition-colors hover:bg-primary/10 hover:border-primary hover:text-white cursor-default shadow-sm hover:shadow-[0_12px_32px_rgba(0,0,0,0.3)]"
                    >
                      {skill}
                    </motion.span>
                  ))}
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
}
