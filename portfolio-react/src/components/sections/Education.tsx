import { motion } from 'framer-motion';

export default function Education() {
  const education = [
    { degree: "M.Tech – Computer Science & Engineering", school: "Institute of Engineering and Management, Kolkata", date: "2025 – 2027", grade: "CGPA: 7.5 (ongoing)" },
    { degree: "B.Tech – Computer Science & Engineering", school: "Institute of Engineering and Management, Kolkata", date: "2021 – 2025", grade: "Grade: A" },
    { degree: "Higher Secondary (11th & 12th)", school: "Nava Nalanda Santiniketan, India", date: "2019 – 2021", grade: "Grade: A" },
    { degree: "Secondary (10th)", school: "Nava Nalanda Santiniketan, India", date: "2011 – 2019", grade: "Grade: A" }
  ];

  return (
    <section id="education" className="py-24 relative z-10">
      <div className="max-w-7xl mx-auto px-8">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
        >
          <span className="inline-block text-xs font-semibold tracking-[2.5px] uppercase text-primary bg-primary/10 px-4 py-1.5 rounded-full border border-primary/20 backdrop-blur-sm mb-4">
            Education
          </span>
          <h2 className="font-display text-[clamp(2.2rem,5vw,4rem)] font-semibold tracking-tight leading-[1.1] mb-16">
            Academic <span className="text-gradient">background</span>
          </h2>
        </motion.div>
        
        <div className="relative pl-8 md:pl-10">
          <div className="absolute left-2.5 top-0 bottom-0 w-[2px] bg-gradient-to-b from-primary via-accent to-transparent rounded-full" />
          
          {education.map((edu, idx) => (
            <motion.div 
              key={idx}
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.6, delay: idx * 0.1 }}
              className="relative mb-10"
            >
              <div className="absolute -left-[30px] md:-left-[38px] top-5 w-3.5 h-3.5 rounded-full bg-background border-[3px] border-primary shadow-[0_0_30px_rgba(0,240,192,0.45),inset_0_0_20px_rgba(0,240,192,0.1)]" />
              
              <div className="glass p-6 md:p-8">
                <div className="flex flex-wrap justify-between items-baseline gap-2 mb-2">
                  <h3 className="text-xl font-semibold">{edu.degree}</h3>
                  <span className="text-primary font-medium text-sm bg-primary/10 px-3 py-1 rounded-full border border-primary/20">
                    {edu.date}
                  </span>
                </div>
                <div className="text-text-secondary">{edu.school}</div>
                <div className="text-primary font-medium mt-1">{edu.grade}</div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
