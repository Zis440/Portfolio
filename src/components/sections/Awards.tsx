import { motion } from 'framer-motion';

export default function Awards() {
  const awards = [
    { icon: "🏆", title: "1st Runner‑Up – HACK‑A‑BIT Pan‑India Hackathon", desc: "BIT Mesra", highlight: "Top 2 out of 500+ teams nationally" },
    { icon: "👑", title: "Chancellor's Award for Technical Contribution to the University", desc: "CSE (AI & ML), 2025", highlight: "Recognized for exceptional innovation" }
  ];

  return (
    <section id="awards" className="py-16 sm:py-24 relative z-10">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true, margin: "-100px" }}>
          <span className="inline-block text-xs font-semibold tracking-[2.5px] uppercase text-primary bg-primary/10 px-4 py-1.5 rounded-full border border-primary/20 backdrop-blur-sm mb-4">Awards</span>
          <h2 className="font-display text-[clamp(1.8rem,4vw,3.2rem)] font-semibold tracking-tight leading-[1.1] mb-10 sm:mb-12">Recognition</h2>
        </motion.div>
        
        <div className="grid sm:grid-cols-2 gap-4 sm:gap-5">
          {awards.map((award, idx) => (
            <motion.div key={idx} initial={{ opacity: 0, y: 30, scale: 0.95 }} whileInView={{ opacity: 1, y: 0, scale: 1 }} viewport={{ once: true, margin: "-50px" }} transition={{ duration: 0.6, delay: idx * 0.15 }}
              whileHover={{ y: -6, scale: 1.02 }}
              className="glass p-5 sm:p-7 flex items-start gap-4 sm:gap-5 shimmer-on-hover group hover:border-primary/10 transition-all duration-500"
            >
              <div className="text-3xl sm:text-4xl shrink-0 group-hover:scale-110 transition-transform duration-300">{award.icon}</div>
              <div>
                <h4 className="text-sm sm:text-base font-semibold mb-1 group-hover:text-primary transition-colors">{award.title}</h4>
                <p className="text-xs sm:text-sm text-text-secondary mb-2">{award.desc}</p>
                <span className="inline-block text-[0.65rem] sm:text-xs font-medium text-primary bg-primary/10 px-3 py-1 rounded-full border border-primary/20">{award.highlight}</span>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
