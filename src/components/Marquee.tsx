import { motion } from 'framer-motion';

export default function Marquee() {
  const items = [
    "Python", "PyTorch", "FastAPI", "React", "TypeScript", "PostgreSQL", 
    "NLP", "Computer Vision", "LLMs", "RAG", "Neural Interfaces", 
    "Knowledge Graphs", "FAISS", "Transformers", "Deep Learning",
    "System Design", "BCI", "Generative AI"
  ];

  const doubled = [...items, ...items];

  return (
    <motion.div 
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      viewport={{ once: true }}
      transition={{ duration: 0.8 }}
      className="py-6 sm:py-10 overflow-hidden relative z-10 w-full"
    >
      {/* Fade edges */}
      <div className="absolute left-0 top-0 bottom-0 w-16 sm:w-28 z-10" style={{ background: 'linear-gradient(to right, var(--color-bg), transparent)' }} />
      <div className="absolute right-0 top-0 bottom-0 w-16 sm:w-28 z-10" style={{ background: 'linear-gradient(to left, var(--color-bg), transparent)' }} />
      
      {/* Row 1 - normal */}
      <div className="animate-marquee flex gap-4 sm:gap-6 whitespace-nowrap w-max mb-3">
        {doubled.map((item, idx) => (
          <span 
            key={`a-${idx}`}
            className="text-text-secondary/30 font-display text-base sm:text-xl font-semibold tracking-tight select-none flex items-center gap-4 sm:gap-6"
          >
            {item}
            <span className="text-accent/20 text-[0.5rem]">◆</span>
          </span>
        ))}
      </div>
      
      {/* Row 2 - reverse, slightly different speed */}
      <div className="flex gap-4 sm:gap-6 whitespace-nowrap w-max" style={{ animation: 'marquee 45s linear infinite reverse' }}>
        {[...doubled].reverse().map((item, idx) => (
          <span 
            key={`b-${idx}`}
            className="text-text-secondary/20 font-display text-sm sm:text-lg font-medium tracking-tight select-none flex items-center gap-4 sm:gap-6"
          >
            {item}
            <span className="text-primary/15 text-[0.5rem]">◆</span>
          </span>
        ))}
      </div>
    </motion.div>
  );
}
