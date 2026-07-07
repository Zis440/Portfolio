import { useState } from 'react';
import { motion } from 'framer-motion';
import { Mail, Linkedin, Github, MapPin, Send } from 'lucide-react';

export default function Contact() {
  const [formStatus, setFormStatus] = useState<string | null>(null);
  const [focused, setFocused] = useState<string | null>(null);

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setFormStatus("✓ Message sent successfully!");
    (e.target as HTMLFormElement).reset();
    setTimeout(() => setFormStatus(null), 3000);
  };

  const inputStyle = (field: string) => ({
    background: focused === field ? 'var(--color-bg-card)' : 'var(--color-surface)',
    borderColor: focused === field ? 'var(--color-primary)' : 'var(--border-color)',
    boxShadow: focused === field ? '0 0 30px var(--color-primary-glow), inset 0 0 30px rgba(0,0,0,0.02)' : 'none',
  });

  return (
    <section id="contact" className="py-16 sm:py-24 relative z-10" style={{ background: 'var(--color-surface)' }}>
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true, margin: "-100px" }}>
          <span className="inline-block text-xs font-semibold tracking-[2.5px] uppercase text-primary bg-primary/10 px-4 py-1.5 rounded-full border border-primary/20 backdrop-blur-sm mb-4">Connect</span>
          <h2 className="font-display text-[clamp(1.8rem,4vw,3.2rem)] font-semibold tracking-tight leading-[1.1] mb-10 sm:mb-14">
            Let's build something <span className="text-gradient">extraordinary</span>
          </h2>
        </motion.div>
        
        <div className="grid lg:grid-cols-[1fr_1.2fr] gap-6 sm:gap-10">
          <motion.div initial={{ opacity: 0, x: -30 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true, margin: "-50px" }} transition={{ duration: 0.6 }}>
            <div className="space-y-3 sm:space-y-4">
              {[
                { icon: Mail, label: "Email", text: "szd0238@gmail.com", href: "mailto:szd0238@gmail.com" },
                { icon: Linkedin, label: "LinkedIn", text: "linkedin.com/in/saphalya-das", href: "https://linkedin.com/in/saphalya-das-81a06b1b3" },
                { icon: Github, label: "GitHub", text: "github.com/Zis440", href: "https://github.com/Zis440" },
                { icon: MapPin, label: "Location", text: "Kolkata, India", href: null }
              ].map((item, idx) => (
                <motion.div key={idx} initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.4, delay: idx * 0.1 }}
                  whileHover={{ x: 5 }}
                  className="flex items-center gap-3 sm:gap-4 pb-3 sm:pb-4 group"
                  style={{ borderBottom: '1px solid var(--border-color)' }}
                >
                  <div className="w-9 h-9 sm:w-10 sm:h-10 rounded-full flex justify-center items-center shrink-0 group-hover:bg-primary/10 group-hover:border-primary/20 transition-all duration-300"
                    style={{ background: 'var(--color-surface)', border: '1px solid var(--border-color)' }}
                  >
                    <item.icon className="text-text-secondary group-hover:text-primary transition-colors" size={16} />
                  </div>
                  <div>
                    <div className="font-medium mb-0.5 text-xs sm:text-sm">{item.label}</div>
                    {item.href ? (
                      <a href={item.href} target="_blank" rel="noreferrer" className="text-text-secondary hover:text-primary transition-colors text-xs sm:text-sm">{item.text}</a>
                    ) : (
                      <span className="text-text-secondary text-xs sm:text-sm">{item.text}</span>
                    )}
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>
          
          <motion.div initial={{ opacity: 0, x: 30 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true, margin: "-50px" }} transition={{ duration: 0.6, delay: 0.2 }}
            className="glass p-5 sm:p-7 md:p-8"
          >
            <h4 className="text-base sm:text-lg font-semibold mb-5">Send a message</h4>
            <form onSubmit={handleSubmit} className="flex flex-col gap-3">
              <input type="text" placeholder="Your name" required
                className="w-full px-4 py-3 rounded-2xl text-text outline-none transition-all duration-300 placeholder:text-text-secondary/40 text-sm"
                style={inputStyle('name')}
                onFocus={() => setFocused('name')} onBlur={() => setFocused(null)}
              />
              <input type="email" placeholder="Your email" required
                className="w-full px-4 py-3 rounded-2xl text-text outline-none transition-all duration-300 placeholder:text-text-secondary/40 text-sm"
                style={inputStyle('email')}
                onFocus={() => setFocused('email')} onBlur={() => setFocused(null)}
              />
              <textarea placeholder="Your message" required rows={4}
                className="w-full px-4 py-3 rounded-2xl text-text outline-none transition-all duration-300 placeholder:text-text-secondary/40 resize-y text-sm"
                style={inputStyle('message')}
                onFocus={() => setFocused('message')} onBlur={() => setFocused(null)}
              />
              <motion.button type="submit" whileHover={{ scale: 1.02 }} whileTap={{ scale: 0.98 }}
                className="mt-1 bg-accent text-white px-6 py-3.5 rounded-2xl font-semibold flex justify-center items-center gap-2 w-full transition-all hover:shadow-[0_8px_32px_var(--color-accent-glow)] hover:brightness-110 text-sm"
              >
                Send Message <Send size={16} />
              </motion.button>
              
              {formStatus && (
                <motion.div initial={{ opacity: 0, y: -10 }} animate={{ opacity: 1, y: 0 }} className="mt-2 text-primary text-center font-medium text-sm">{formStatus}</motion.div>
              )}
            </form>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
