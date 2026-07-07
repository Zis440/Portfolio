import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { clsx } from 'clsx';
import { twMerge } from 'tailwind-merge';

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const links = [
    { name: 'Home', href: '#hero' },
    { name: 'About', href: '#about' },
    { name: 'Experience', href: '#experience' },
    { name: 'Projects', href: '#projects' },
    { name: 'Publications', href: '#publications' }
  ];

  return (
    <motion.nav
      initial={{ y: -100, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
      className={twMerge(
        clsx(
          "fixed left-1/2 -translate-x-1/2 z-50 w-[calc(100%-40px)] max-w-7xl flex items-center justify-between transition-all duration-300",
          "border border-white/5 rounded-full shadow-2xl backdrop-blur-[24px]",
          scrolled 
            ? "top-2 py-3 px-6 bg-background/90" 
            : "top-5 py-4 px-8 bg-background/75"
        )
      )}
    >
      <a href="#hero" className="font-display font-bold text-xl tracking-tight text-gradient animate-grad-shift shrink-0">
        SAPHALYA
      </a>

      <ul className="hidden md:flex items-center gap-8 list-none m-0 p-0">
        {links.map((link) => (
          <li key={link.name}>
            <a 
              href={link.href}
              className="text-text-secondary text-sm font-medium transition-colors hover:text-white relative group"
            >
              {link.name}
              <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-gradient-to-r from-primary to-accent transition-all duration-300 group-hover:w-full rounded-full" />
            </a>
          </li>
        ))}
        <li>
          <a 
            href="#contact"
            className="bg-gradient-to-br from-primary to-accent text-black px-6 py-2 rounded-full font-semibold text-sm transition-all duration-300 shadow-[0_4px_24px_rgba(0,240,192,0.25)] hover:scale-105 hover:shadow-[0_8px_40px_rgba(0,240,192,0.4)]"
          >
            Contact
          </a>
        </li>
      </ul>
      
      {/* Mobile Menu Button (Placeholder for now) */}
      <button className="md:hidden text-white">
        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><line x1="3" y1="12" x2="21" y2="12"></line><line x1="3" y1="6" x2="21" y2="6"></line><line x1="3" y1="18" x2="21" y2="18"></line></svg>
      </button>
    </motion.nav>
  );
}
