import { useState } from 'react';
import { motion } from 'framer-motion';
import { Mail, Linkedin, Github, MapPin } from 'lucide-react';

export default function Contact() {
  const [formStatus, setFormStatus] = useState<string | null>(null);

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setFormStatus("✓ Message sent successfully!");
    (e.target as HTMLFormElement).reset();
    setTimeout(() => setFormStatus(null), 3000);
  };

  return (
    <section id="contact" className="py-24 relative z-10 bg-white/[0.005]">
      <div className="max-w-7xl mx-auto px-8">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
        >
          <span className="inline-block text-xs font-semibold tracking-[2.5px] uppercase text-primary bg-primary/10 px-4 py-1.5 rounded-full border border-primary/20 backdrop-blur-sm mb-4">
            Connect
          </span>
          <h2 className="font-display text-[clamp(2.2rem,5vw,4rem)] font-semibold tracking-tight leading-[1.1] mb-16">
            Let's build something <span className="text-gradient">extraordinary</span>
          </h2>
        </motion.div>
        
        <div className="grid lg:grid-cols-[1fr_1.2fr] gap-12">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-50px" }}
            transition={{ duration: 0.6 }}
          >
            <div className="space-y-6">
              {[
                { icon: Mail, label: "Email", text: "szd0238@gmail.com", href: "mailto:szd0238@gmail.com" },
                { icon: Linkedin, label: "LinkedIn", text: "linkedin.com/in/saphalya-das", href: "https://linkedin.com/in/saphalya-das-81a06b1b3" },
                { icon: Github, label: "GitHub", text: "github.com/Zis440", href: "https://github.com/Zis440" },
                { icon: MapPin, label: "Location", text: "Kolkata, India", href: null }
              ].map((item, idx) => (
                <div key={idx} className="flex items-center gap-5 pb-6 border-b border-white/5">
                  <div className="w-12 h-12 rounded-full bg-white/5 flex justify-center items-center shrink-0">
                    <item.icon className="text-text-secondary" size={24} />
                  </div>
                  <div>
                    <div className="font-medium mb-1">{item.label}</div>
                    {item.href ? (
                      <a href={item.href} target="_blank" rel="noreferrer" className="text-text-secondary hover:text-primary transition-colors">
                        {item.text}
                      </a>
                    ) : (
                      <span className="text-text-secondary">{item.text}</span>
                    )}
                  </div>
                </div>
              ))}
            </div>
          </motion.div>
          
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-50px" }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="glass p-8 md:p-10"
          >
            <h4 className="text-xl font-semibold mb-6">Send a message</h4>
            <form onSubmit={handleSubmit} className="flex flex-col gap-4">
              <input 
                type="text" 
                placeholder="Name" 
                required 
                className="w-full px-5 py-4 bg-white/[0.02] border border-white/5 rounded-2xl text-white outline-none focus:border-primary focus:shadow-[0_0_30px_rgba(0,240,192,0.05)] transition-all"
              />
              <input 
                type="email" 
                placeholder="Email" 
                required 
                className="w-full px-5 py-4 bg-white/[0.02] border border-white/5 rounded-2xl text-white outline-none focus:border-primary focus:shadow-[0_0_30px_rgba(0,240,192,0.05)] transition-all"
              />
              <textarea 
                placeholder="Message" 
                required 
                rows={4}
                className="w-full px-5 py-4 bg-white/[0.02] border border-white/5 rounded-2xl text-white outline-none focus:border-primary focus:shadow-[0_0_30px_rgba(0,240,192,0.05)] transition-all resize-y"
              />
              <button 
                type="submit" 
                className="magnetic mt-2 bg-gradient-to-br from-primary to-[#00c9a0] text-black px-8 py-4 rounded-2xl font-semibold flex justify-center items-center w-full transition-all hover:scale-[1.02] hover:shadow-[0_8px_32px_rgba(0,240,192,0.3)]"
              >
                Send Message
              </button>
              
              {formStatus && (
                <motion.div 
                  initial={{ opacity: 0, y: -10 }}
                  animate={{ opacity: 1, y: 0 }}
                  className="mt-3 text-primary text-center font-medium"
                >
                  {formStatus}
                </motion.div>
              )}
            </form>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
