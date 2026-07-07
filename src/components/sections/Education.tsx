import { motion } from 'framer-motion';

export default function Education() {
  const education = [
    { degree: "M.Tech – Computer Science & Engineering", school: "Institute of Engineering and Management, Kolkata", date: "2025 – 2027", grade: "CGPA: 7.5 (ongoing)", icon: "🎓" },
    { degree: "B.Tech – Computer Science & Engineering", school: "Institute of Engineering and Management, Kolkata", date: "2021 – 2025", grade: "Grade: A", icon: "🎓" },
    { degree: "Higher Secondary (11th & 12th)", school: "Nava Nalanda Santiniketan, India", date: "2019 – 2021", grade: "Grade: A", icon: "📚" },
    { degree: "Secondary (10th)", school: "Nava Nalanda Santiniketan, India", date: "2011 – 2019", grade: "Grade: A", icon: "📖" }
  ];

  return (
    <section id="education" className="py-16 sm:py-24 relative z-10">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true, margin: "-100px" }}>
          <span className="inline-block text-xs font-semibold tracking-[2.5px] uppercase text-primary bg-primary/10 px-4 py-1.5 rounded-full border border-primary/20 backdrop-blur-sm mb-4">Education</span>
          <h2 className="font-display text-[clamp(1.8rem,4vw,3.2rem)] font-semibold tracking-tight leading-[1.1] mb-10 sm:mb-14">
            Academic <span className="text-gradient">background</span>
          </h2>
        </motion.div>
        
        <div className="relative pl-6 sm:pl-8 md:pl-10">
          <motion.div initial={{ height: 0 }} whileInView={{ height: '100%' }} viewport={{ once: true, margin: "-100px" }} transition={{ duration: 1.5, ease: [0.16, 1, 0.3, 1] }}
            className="absolute left-[7px] sm:left-2.5 top-0 w-[2px] rounded-full"
            style={{ background: 'linear-gradient(to bottom, var(--color-primary), var(--color-accent), transparent)' }}
          />
          
          {education.map((edu, idx) => (
            <motion.div key={idx} initial={{ opacity: 0, x: -30 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true, margin: "-100px" }} transition={{ duration: 0.6, delay: idx * 0.12 }}
              className="relative mb-6 sm:mb-8"
            >
              <div className="absolute -left-[22px] sm:-left-[30px] md:-left-[38px] top-5 w-3 sm:w-3.5 h-3 sm:h-3.5 rounded-full bg-background border-[3px] border-primary animate-pulse-ring" />
              
              <motion.div whileHover={{ y: -4 }} className="glass p-4 sm:p-6 hover:border-primary/10 transition-all duration-500 shimmer-on-hover">
                <div className="flex flex-col sm:flex-row sm:flex-wrap justify-between items-start sm:items-baseline gap-2 mb-2">
                  <div className="flex items-center gap-2 sm:gap-3">
                    <span className="text-lg sm:text-xl">{edu.icon}</span>
                    <h3 className="text-base sm:text-lg font-semibold">{edu.degree}</h3>
                  </div>
                  <span className="text-primary font-medium text-xs bg-primary/10 px-3 py-1 rounded-full border border-primary/20 shrink-0">{edu.date}</span>
                </div>
                <div className="text-text-secondary text-sm">{edu.school}</div>
                <div className="text-primary font-medium mt-1 text-sm">{edu.grade}</div>
              </motion.div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
