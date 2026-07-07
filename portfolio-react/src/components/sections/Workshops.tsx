import { motion } from 'framer-motion';

export default function Workshops() {
  const workshops = [
    "IoT Security FDP – IIT Guwahati & IEM Kolkata",
    "Next‑Generation Cyber Defense Bootcamp – IEM Kolkata",
    "ROBO‑RACE & ROBO‑SOCCER Workshop",
    "Cloud Computing Workshop – CSI UEM",
    "International Conference on Web 6.0 and Industry 6.0",
    "IEEE ICAECT 2026",
    "Research Promotion Workshop – ACMU, ISI Kolkata",
    "IIT KGP Research Park – Demonstration of Self‑Developed Psychological pre‑screening tool (Team Leader, IEM Research Lab)"
  ];

  return (
    <section id="workshops" className="py-24 relative z-10">
      <div className="max-w-7xl mx-auto px-8">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
        >
          <span className="inline-block text-xs font-semibold tracking-[2.5px] uppercase text-primary bg-primary/10 px-4 py-1.5 rounded-full border border-primary/20 backdrop-blur-sm mb-4">
            Workshops & Seminars
          </span>
          <h2 className="font-display text-[clamp(2.2rem,5vw,4rem)] font-semibold tracking-tight leading-[1.1] mb-12">
            Professional <span className="text-gradient">development</span>
          </h2>
        </motion.div>
        
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-50px" }}
          transition={{ duration: 0.6 }}
          className="glass p-10"
        >
          <div className="flex flex-wrap justify-center gap-4">
            {workshops.map((workshop, idx) => (
              <motion.span 
                key={idx}
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: idx * 0.05 }}
                whileHover={{ scale: 1.04, y: -2 }}
                className="bg-white/5 border border-primary/20 px-6 py-2.5 rounded-full text-sm text-text-secondary transition-all hover:border-primary hover:bg-primary/10 hover:text-white hover:shadow-[0_8px_24px_rgba(0,240,192,0.15)] cursor-default"
              >
                {workshop}
              </motion.span>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
