import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { twMerge } from 'tailwind-merge';
import ThemeToggle from './ThemeToggle';

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const [activeSection, setActiveSection] = useState('hero');

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
      const sections = ['hero', 'about', 'experience', 'projects', 'publications', 'contact'];
      for (const id of [...sections].reverse()) {
        const el = document.getElementById(id);
        if (el && window.scrollY >= el.offsetTop - 200) {
          setActiveSection(id);
          break;
        }
      }
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    document.body.style.overflow = mobileOpen ? 'hidden' : '';
    return () => { document.body.style.overflow = ''; };
  }, [mobileOpen]);

  const links = [
    { name: 'Home', href: '#hero' },
    { name: 'About', href: '#about' },
    { name: 'Experience', href: '#experience' },
    { name: 'Projects', href: '#projects' },
    { name: 'Pubs', href: '#publications' }
  ];

  return (
    <>
      <motion.nav
        initial={{ y: -100, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
        className="fixed left-1/2 -translate-x-1/2 z-50 w-[calc(100%-16px)] sm:w-[calc(100%-28px)] max-w-[880px] flex items-center justify-between rounded-full shadow-2xl backdrop-blur-[24px] transition-all duration-300"
        style={{
          border: '1px solid var(--border-color)',
          background: 'var(--color-bg-glass)',
          top: scrolled ? '6px' : '10px',
          padding: scrolled ? '7px 12px' : '9px 16px',
        }}
      >
        <a href="#hero" className="font-display font-bold text-xs sm:text-sm tracking-tight text-gradient animate-grad-shift shrink-0">
          SAPHALYA
        </a>

        {/* Desktop Links — includes toggle at end */}
        <div className="hidden md:flex items-center gap-1.5 lg:gap-3">
          {links.map((link) => (
            <a 
              key={link.name}
              href={link.href}
              className={twMerge(
                "text-[0.65rem] lg:text-xs font-medium transition-all duration-300 relative group whitespace-nowrap px-1",
                activeSection === link.href.slice(1) 
                  ? "text-text" 
                  : "text-text-secondary hover:text-text"
              )}
            >
              {link.name}
              <span className={twMerge(
                "absolute -bottom-0.5 left-0 h-[1.5px] bg-accent transition-all duration-300 rounded-full",
                activeSection === link.href.slice(1) ? "w-full" : "w-0 group-hover:w-full"
              )} />
            </a>
          ))}
          <a href="#contact"
            className="bg-accent text-white px-3 py-1 rounded-full font-semibold text-[0.6rem] lg:text-[0.65rem] transition-all duration-300 hover:brightness-110 whitespace-nowrap ml-1"
          >
            Contact
          </a>
          <div className="ml-1">
            <ThemeToggle />
          </div>
        </div>
        
        {/* Mobile: Theme Toggle + Hamburger */}
        <div className="flex md:hidden items-center gap-2">
          <ThemeToggle />
          <button
            className="text-text relative w-7 h-7 flex items-center justify-center z-[60]"
            onClick={() => setMobileOpen(!mobileOpen)}
            aria-label="Toggle menu"
          >
            <motion.span animate={mobileOpen ? { rotate: 45, y: 0 } : { rotate: 0, y: -5 }} transition={{ duration: 0.3 }}
              className="absolute w-5 h-[2px] bg-current rounded-full" />
            <motion.span animate={mobileOpen ? { opacity: 0, scaleX: 0 } : { opacity: 1, scaleX: 1 }} transition={{ duration: 0.2 }}
              className="absolute w-5 h-[2px] bg-current rounded-full" />
            <motion.span animate={mobileOpen ? { rotate: -45, y: 0 } : { rotate: 0, y: 5 }} transition={{ duration: 0.3 }}
              className="absolute w-5 h-[2px] bg-current rounded-full" />
          </button>
        </div>
      </motion.nav>

      {/* Mobile Full-Screen Overlay */}
      <AnimatePresence>
        {mobileOpen && (
          <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }} transition={{ duration: 0.3 }}
            className="fixed inset-0 z-40 md:hidden"
          >
            <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }}
              className="absolute inset-0 bg-background/95 backdrop-blur-2xl"
              onClick={() => setMobileOpen(false)}
            />
            
            <div className="relative z-10 flex flex-col items-center justify-center h-full px-8">
              <nav className="flex flex-col items-center gap-5">
                {[...links.map(l => ({ ...l, name: l.name === 'Pubs' ? 'Publications' : l.name })), { name: 'Contact', href: '#contact' }].map((link, idx) => (
                  <motion.a key={link.name} href={link.href}
                    onClick={() => setMobileOpen(false)}
                    initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0, y: 20 }}
                    transition={{ duration: 0.4, delay: idx * 0.08 }}
                    className={twMerge(
                      "text-2xl sm:text-3xl font-display font-semibold tracking-tight transition-colors",
                      activeSection === link.href.slice(1) ? "text-gradient animate-grad-shift" : "text-text-secondary hover:text-text"
                    )}
                  >
                    {link.name}
                  </motion.a>
                ))}
              </nav>

              <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.4, delay: 0.5 }}
                className="flex gap-4 mt-10"
              >
                {[
                  { href: "https://linkedin.com/in/saphalya-das-81a06b1b3", label: "LinkedIn", icon: "in" },
                  { href: "https://github.com/Zis440", label: "GitHub", icon: "gh" },
                  { href: "mailto:szd0238@gmail.com", label: "Email", icon: "✉" }
                ].map((s) => (
                  <a key={s.label} href={s.href} target="_blank" rel="noreferrer"
                    className="w-11 h-11 rounded-full flex items-center justify-center text-text-secondary hover:text-primary hover:border-primary transition-all text-sm font-bold"
                    style={{ border: '1px solid var(--border-color)', background: 'var(--color-surface)' }}
                  >
                    {s.icon}
                  </a>
                ))}
              </motion.div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
