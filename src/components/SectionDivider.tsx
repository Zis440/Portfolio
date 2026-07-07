import { motion } from 'framer-motion';

export default function SectionDivider() {
  return (
    <div className="relative py-4 overflow-hidden">
      {/* Animated gradient line */}
      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8 }}
        className="relative h-[1px] max-w-6xl mx-auto px-4 sm:px-6 lg:px-8"
      >
        <div className="absolute inset-0" style={{
          background: 'linear-gradient(90deg, transparent, var(--color-primary-glow), var(--color-accent-glow), transparent)',
        }} />
        
        {/* Animated glow sweep */}
        <motion.div
          initial={{ x: '-100%' }}
          whileInView={{ x: '200%' }}
          viewport={{ once: true }}
          transition={{ duration: 2, ease: 'easeInOut', delay: 0.3 }}
          className="absolute top-1/2 -translate-y-1/2 w-20 h-[3px] rounded-full"
          style={{
            background: 'linear-gradient(90deg, transparent, var(--color-accent), transparent)',
            filter: 'blur(1px)',
          }}
        />
      </motion.div>
      
      {/* Center diamond accent */}
      <motion.div
        initial={{ scale: 0, rotate: 0 }}
        whileInView={{ scale: 1, rotate: 45 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5, delay: 0.4 }}
        className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-2 h-2"
        style={{
          background: 'var(--color-accent)',
          boxShadow: '0 0 12px var(--color-accent-glow)',
        }}
      />
    </div>
  );
}
