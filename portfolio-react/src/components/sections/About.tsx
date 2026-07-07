import { motion } from 'framer-motion';

export default function About() {
  const skills = [
    "Multimodal AI", "Mental Health AI", "Neural Interfaces (BCI)", 
    "Generative AI", "Computer Vision", "NLP & LLMs", 
    "RAG & Knowledge Graphs", "System Design", "Backend Engineering"
  ];

  return (
    <section id="about" className="py-24 relative z-10">
      <div className="max-w-7xl mx-auto px-8">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
        >
          <span className="inline-block text-xs font-semibold tracking-[2.5px] uppercase text-primary bg-primary/10 px-4 py-1.5 rounded-full border border-primary/20 backdrop-blur-sm mb-4">
            About
          </span>
        </motion.div>
        
        <div className="grid lg:grid-cols-2 gap-12 items-start mt-4">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="font-display text-[clamp(2.2rem,5vw,4rem)] font-semibold tracking-tight leading-[1.1] mb-6">
              Passionate <span className="text-gradient">AI</span> researcher & systems engineer
            </h2>
            <p className="text-text-secondary text-lg leading-relaxed max-w-2xl">
              Creating transformative technologies that bridge human cognition and machine intelligence. 
              Currently pursuing M.Tech in CSE while contributing to cutting-edge research in multimodal mental health AI, 
              neural decoding, and genomic intelligence.
            </p>
            <div className="flex flex-wrap gap-8 mt-8">
              <div className="flex items-center gap-2">
                <span className="text-primary font-bold">📍</span> Kolkata, India
              </div>
              <div className="flex items-center gap-2">
                <span className="text-primary font-bold">🎯</span> Multimodal AI · BCI · RAG
              </div>
            </div>
          </motion.div>
          
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="glass p-8"
          >
            <h4 className="text-base font-semibold mb-6">Research interests</h4>
            <div className="flex flex-wrap gap-3">
              {skills.map((skill, idx) => (
                <motion.span 
                  key={idx}
                  whileHover={{ y: -3, scale: 1.03 }}
                  className="bg-white/5 border border-white/10 px-5 py-2 rounded-full text-sm font-medium text-text-secondary hover:bg-primary/10 hover:border-primary hover:text-white hover:shadow-[0_12px_32px_rgba(0,0,0,0.3)] transition-all cursor-default"
                >
                  {skill}
                </motion.span>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
