import { Github, Linkedin, Mail } from 'lucide-react';
import { motion } from 'framer-motion';

export default function Footer() {
  return (
    <footer className="relative z-10 border-t border-white/5 py-12 mt-10">
      <div className="max-w-7xl mx-auto px-8">
        <div className="flex flex-col md:flex-row justify-between items-center gap-5">
          <div className="flex items-center gap-3">
            <span className="font-display font-bold text-xl text-gradient animate-grad-shift">
              SAPHALYA
            </span>
            <span className="text-text-secondary text-sm hidden md:inline">
              AI Researcher & ML Engineer
            </span>
          </div>
          
          <div className="flex gap-5">
            {[
              { icon: Linkedin, href: "https://linkedin.com/in/saphalya-das-81a06b1b3", label: "LinkedIn" },
              { icon: Github, href: "https://github.com/Zis440", label: "GitHub" },
              { icon: Mail, href: "mailto:szd0238@gmail.com", label: "Email" }
            ].map((social, i) => (
              <motion.a
                key={i}
                href={social.href}
                target="_blank"
                rel="noreferrer"
                aria-label={social.label}
                className="text-text-secondary hover:text-primary transition-colors"
                whileHover={{ scale: 1.1, y: -2 }}
                whileTap={{ scale: 0.95 }}
              >
                <social.icon size={24} />
              </motion.a>
            ))}
          </div>
        </div>
        
        <div className="border-t border-white/5 mt-8 pt-6 text-center text-text-secondary text-sm tracking-wide">
          © {new Date().getFullYear()} Saphalya Das. All rights reserved.
        </div>
      </div>
    </footer>
  );
}
