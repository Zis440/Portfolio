import { useEffect, useRef } from 'react';

export default function ParticleField() {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    let animationId: number;
    let particles: Particle[] = [];

    const getColors = () => {
      const isDark = document.documentElement.classList.contains('dark');
      return {
        primary: isDark ? '158, 206, 142' : '46, 107, 58',
        accent: isDark ? '232, 64, 87' : '153, 27, 46',
        lineOpacity: isDark ? 0.05 : 0.025,
      };
    };

    const resize = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
    };

    class Particle {
      x: number;
      y: number;
      size: number;
      speedX: number;
      speedY: number;
      opacity: number;
      colorIdx: number;
      pulseSpeed: number;
      pulseOffset: number;

      constructor(w: number, h: number) {
        this.x = Math.random() * w;
        this.y = Math.random() * h;
        this.size = Math.random() * 2 + 0.5;
        this.speedX = (Math.random() - 0.5) * 0.3;
        this.speedY = (Math.random() - 0.5) * 0.3;
        this.opacity = Math.random() * 0.5 + 0.1;
        this.colorIdx = Math.random() > 0.5 ? 0 : 1;
        this.pulseSpeed = Math.random() * 0.02 + 0.005;
        this.pulseOffset = Math.random() * Math.PI * 2;
      }

      update(w: number, h: number, time: number) {
        this.x += this.speedX;
        this.y += this.speedY;
        if (this.x < 0) this.x = w;
        if (this.x > w) this.x = 0;
        if (this.y < 0) this.y = h;
        if (this.y > h) this.y = 0;
        this.opacity = (Math.sin(time * this.pulseSpeed + this.pulseOffset) + 1) / 2 * 0.4 + 0.05;
      }

      draw(ctx: CanvasRenderingContext2D, colors: ReturnType<typeof getColors>) {
        const color = this.colorIdx === 0 ? colors.primary : colors.accent;
        ctx.beginPath();
        ctx.arc(this.x, this.y, this.size, 0, Math.PI * 2);
        ctx.fillStyle = `rgba(${color}, ${this.opacity})`;
        ctx.fill();

        ctx.beginPath();
        ctx.arc(this.x, this.y, this.size * 3, 0, Math.PI * 2);
        ctx.fillStyle = `rgba(${color}, ${this.opacity * 0.15})`;
        ctx.fill();
      }
    }

    const init = () => {
      resize();
      const count = Math.min(Math.floor((canvas.width * canvas.height) / 18000), 60);
      particles = Array.from({ length: count }, () => new Particle(canvas.width, canvas.height));
    };

    let time = 0;
    const animate = () => {
      time++;
      ctx.clearRect(0, 0, canvas.width, canvas.height);
      const colors = getColors();

      particles.forEach((p) => {
        p.update(canvas.width, canvas.height, time);
        p.draw(ctx, colors);
      });

      for (let i = 0; i < particles.length; i++) {
        for (let j = i + 1; j < particles.length; j++) {
          const dx = particles[i].x - particles[j].x;
          const dy = particles[i].y - particles[j].y;
          const dist = Math.sqrt(dx * dx + dy * dy);
          if (dist < 150) {
            const opacity = (1 - dist / 150) * colors.lineOpacity;
            ctx.beginPath();
            ctx.strokeStyle = `rgba(${colors.primary}, ${opacity})`;
            ctx.lineWidth = 0.5;
            ctx.moveTo(particles[i].x, particles[i].y);
            ctx.lineTo(particles[j].x, particles[j].y);
            ctx.stroke();
          }
        }
      }

      animationId = requestAnimationFrame(animate);
    };

    init();
    animate();
    window.addEventListener('resize', init);

    // Listen for theme changes
    const observer = new MutationObserver(() => {
      // Colors will update on next frame via getColors()
    });
    observer.observe(document.documentElement, { attributes: true, attributeFilter: ['class'] });

    return () => {
      cancelAnimationFrame(animationId);
      window.removeEventListener('resize', init);
      observer.disconnect();
    };
  }, []);

  return (
    <canvas
      ref={canvasRef}
      className="fixed inset-0 pointer-events-none z-0 no-transition"
      style={{ opacity: 'var(--particle-opacity)' }}
    />
  );
}
