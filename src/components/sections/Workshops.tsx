import { motion } from 'framer-motion';

export default function Workshops() {
  const workshops = [
    { name: "IoT Security FDP", venue: "IIT Guwahati & IEM Kolkata", icon: "🔐" },
    { name: "Next‑Generation Cyber Defense Bootcamp", venue: "IEM Kolkata", icon: "🛡️" },
    { name: "ROBO‑RACE & ROBO‑SOCCER Workshop", venue: "Robotics Club", icon: "🤖" },
    { name: "Cloud Computing Workshop", venue: "CSI UEM", icon: "☁️" },
    { name: "International Conference on Web 6.0 and Industry 6.0", venue: "Conference Paper", icon: "🌐" },
    { name: "IEEE ICAECT 2026", venue: "IEEE Conference", icon: "📡" },
    { name: "Research Promotion Workshop", venue: "ACMU, ISI Kolkata", icon: "🔬" },
    { name: "Self‑Developed Psychological Pre‑screening Tool Demo", venue: "IIT KGP Research Park (Team Leader)", icon: "🧠" }
  ];

  return (
    <section id="workshops" className="py-16 sm:py-24 relative z-10">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true, margin: "-100px" }}>
          <span className="inline-block text-xs font-semibold tracking-[2.5px] uppercase text-primary bg-primary/10 px-4 py-1.5 rounded-full border border-primary/20 backdrop-blur-sm mb-4">Workshops & Seminars</span>
          <h2 className="font-display text-[clamp(1.8rem,4vw,3.2rem)] font-semibold tracking-tight leading-[1.1] mb-10 sm:mb-12">
            Professional <span className="text-gradient">development</span>
          </h2>
        </motion.div>
        
        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-3 sm:gap-4">
          {workshops.map((workshop, idx) => (
            <motion.div key={idx} initial={{ opacity: 0, y: 30, scale: 0.9 }} whileInView={{ opacity: 1, y: 0, scale: 1 }} viewport={{ once: true }} transition={{ duration: 0.5, delay: idx * 0.07 }}
              whileHover={{ y: -6, scale: 1.03 }}
              className="glass p-4 sm:p-5 text-center shimmer-on-hover group hover:border-primary/15 transition-all duration-500"
            >
              <div className="text-2xl sm:text-3xl mb-2 group-hover:scale-110 transition-transform duration-300">{workshop.icon}</div>
              <h4 className="text-[0.7rem] sm:text-xs font-semibold mb-1 group-hover:text-primary transition-colors leading-snug">{workshop.name}</h4>
              <p className="text-[0.6rem] sm:text-[0.65rem] text-text-secondary leading-relaxed">{workshop.venue}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
