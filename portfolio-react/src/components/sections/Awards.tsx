import { motion } from 'framer-motion';

export default function Awards() {
  const awards = [
    {
      icon: "🏆",
      title: "1st Runner‑Up – HACK‑A‑BIT Pan‑India Hackathon",
      desc: "BIT Mesra"
    },
    {
      icon: "👑",
      title: "Chancellor's Award for Technical Contribution to the University",
      desc: "CSE (AI & ML), 2025"
    }
  ];

  return (
    <section id="awards" className="py-24 relative z-10">
      <div className="max-w-7xl mx-auto px-8">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
        >
          <span className="inline-block text-xs font-semibold tracking-[2.5px] uppercase text-primary bg-primary/10 px-4 py-1.5 rounded-full border border-primary/20 backdrop-blur-sm mb-4">
            Awards
          </span>
          <h2 className="font-display text-[clamp(2.2rem,5vw,4rem)] font-semibold tracking-tight leading-[1.1] mb-12">
            Recognition
          </h2>
        </motion.div>
        
        <div className="grid md:grid-cols-2 gap-8">
          {awards.map((award, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.5, delay: idx * 0.1 }}
              whileHover={{ y: -6, scale: 1.02 }}
              className="glass p-8 flex items-center gap-6"
            >
              <div className="text-4xl shrink-0">{award.icon}</div>
              <div>
                <h4 className="text-lg font-semibold mb-1">{award.title}</h4>
                <p className="text-sm text-text-secondary">{award.desc}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
