import { Github, Linkedin, Mail, Heart } from 'lucide-react';
import { motion } from 'framer-motion';

export default function Footer() {
  return (
    <footer className="relative z-10 py-8 sm:py-10 mt-6" style={{ borderTop: '1px solid var(--border-color)' }}>
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row justify-between items-center gap-4">
          <div className="flex items-center gap-3">
            <span className="font-display font-bold text-base sm:text-lg text-gradient animate-grad-shift">SAPHALYA</span>
            <span className="text-text-secondary text-xs hidden md:inline">AI Researcher & ML Engineer</span>
          </div>
          
          <div className="flex gap-3">
            {[
              { icon: Linkedin, href: "https://linkedin.com/in/saphalya-das-81a06b1b3", label: "LinkedIn" },
              { icon: Github, href: "https://github.com/Zis440", label: "GitHub" },
              { icon: Mail, href: "mailto:szd0238@gmail.com", label: "Email" }
            ].map((social, i) => (
              <motion.a key={i} href={social.href} target="_blank" rel="noreferrer" aria-label={social.label}
                className="w-9 h-9 rounded-full flex items-center justify-center text-text-secondary hover:text-primary hover:border-primary hover:bg-primary/10 transition-all duration-300"
                style={{ border: '1px solid var(--border-color)', background: 'var(--color-surface)' }}
                whileHover={{ scale: 1.1, y: -2 }} whileTap={{ scale: 0.95 }}
              >
                <social.icon size={16} />
              </motion.a>
            ))}
          </div>
        </div>
        
        <div className="section-divider mt-5 sm:mt-6" />
        
        <div className="mt-4 sm:mt-5 text-center text-text-secondary text-xs tracking-wide flex items-center justify-center gap-1.5 flex-wrap">
          © {new Date().getFullYear()} Saphalya Das. Built with <Heart size={12} className="text-accent inline" /> All rights reserved.
        </div>
      </div>
    </footer>
  );
}
