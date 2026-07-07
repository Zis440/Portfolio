import { motion } from 'framer-motion';

export default function About() {
  const skills = [
    "Multimodal AI", "Mental Health AI", "Neural Interfaces (BCI)", 
    "Generative AI", "Computer Vision", "NLP & LLMs", 
    "RAG & Knowledge Graphs", "System Design", "Backend Engineering"
  ];

  const highlights = [
    { icon: "🧠", title: "AI-First Approach", desc: "Building intelligent systems from the ground up with cutting-edge ML architectures." },
    { icon: "🔬", title: "Research-Driven", desc: "3 publications across IEEE, ISSN journals, and international conferences." },
    { icon: "⚡", title: "Full-Stack Capable", desc: "End-to-end development from neural networks to production APIs and React UIs." },
  ];

  return (
    <section id="about" className="py-16 sm:py-24 relative z-10">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
        >
          <span className="inline-block text-xs font-semibold tracking-[2.5px] uppercase text-primary bg-primary/10 px-4 py-1.5 rounded-full border border-primary/20 backdrop-blur-sm mb-4">
            About
          </span>
        </motion.div>
        
        <div className="grid lg:grid-cols-2 gap-8 sm:gap-12 items-start mt-4">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="font-display text-[clamp(1.8rem,4vw,3.2rem)] font-semibold tracking-tight leading-[1.1] mb-5">
              Passionate <span className="text-gradient">AI</span> researcher & systems engineer
            </h2>
            <p className="text-text-secondary text-sm sm:text-base leading-relaxed max-w-2xl">
              Creating transformative technologies that bridge human cognition and machine intelligence. 
              Currently pursuing M.Tech in CSE while contributing to cutting-edge research in multimodal mental health AI, 
              neural decoding, and genomic intelligence.
            </p>
            <div className="flex flex-wrap gap-4 sm:gap-8 mt-5 sm:mt-6">
              <div className="flex items-center gap-2 text-sm">
                <span className="text-primary font-bold">📍</span> <span className="text-text-secondary">Kolkata, India</span>
              </div>
              <div className="flex items-center gap-2 text-sm">
                <span className="text-primary font-bold">🎯</span> <span className="text-text-secondary">Multimodal AI · BCI · RAG</span>
              </div>
            </div>
          </motion.div>
          
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="glass p-6 sm:p-8"
          >
            <h4 className="text-base font-semibold mb-5">Research interests</h4>
            <div className="flex flex-wrap gap-2 sm:gap-3">
              {skills.map((skill, idx) => (
                <motion.span 
                  key={idx}
                  whileHover={{ y: -3, scale: 1.03 }}
                  className="px-4 sm:px-5 py-2 rounded-full text-xs sm:text-sm font-medium text-text-secondary hover:bg-primary/10 hover:border-primary hover:text-primary transition-all cursor-default"
                  style={{ background: 'var(--color-surface)', border: '1px solid var(--border-color)' }}
                >
                  {skill}
                </motion.span>
              ))}
            </div>
          </motion.div>
        </div>

        {/* Highlight Cards */}
        <div className="grid sm:grid-cols-3 gap-4 sm:gap-5 mt-10 sm:mt-14">
          {highlights.map((item, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.5, delay: idx * 0.15 }}
              whileHover={{ y: -5 }}
              className="glass p-5 sm:p-6 shimmer-on-hover group transition-all duration-500 hover:border-primary/20"
            >
              <div className="text-2xl sm:text-3xl mb-3 group-hover:scale-110 transition-transform">{item.icon}</div>
              <h4 className="text-base sm:text-lg font-semibold mb-2">{item.title}</h4>
              <p className="text-text-secondary text-xs sm:text-sm leading-relaxed">{item.desc}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
