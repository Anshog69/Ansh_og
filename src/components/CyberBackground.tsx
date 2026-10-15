import { useEffect, useRef } from 'react';

export function CyberBackground() {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    let animationFrameId: number;
    let width = (canvas.width = window.innerWidth);
    let height = (canvas.height = window.innerHeight);

    let mouseX = width / 2;
    let mouseY = height / 2;
    let time = 0;

    const handleResize = () => {
      if (!canvas) return;
      width = canvas.width = window.innerWidth;
      height = canvas.height = window.innerHeight;
    };

    const handleMouseMove = (e: MouseEvent) => {
      mouseX = e.clientX;
      mouseY = e.clientY;
    };

    window.addEventListener('resize', handleResize);
    window.addEventListener('mousemove', handleMouseMove);

    // Aurora curtain waves config
    interface AuroraRibbon {
      baseY: number;
      speed: number;
      amplitude: number;
      wavelength: number;
      colorStart: string;
      colorMid: string;
      colorEnd: string;
      widthOffset: number;
    }

    const ribbons: AuroraRibbon[] = [
      {
        baseY: 0.12,
        speed: 0.0006,
        amplitude: 70,
        wavelength: 0.0018,
        colorStart: 'rgba(6, 182, 212, 0.16)', // Cyan
        colorMid: 'rgba(168, 85, 247, 0.14)',  // Purple
        colorEnd: 'rgba(6, 182, 212, 0.0)',
        widthOffset: 0
      },
      {
        baseY: 0.22,
        speed: 0.0009,
        amplitude: 95,
        wavelength: 0.0014,
        colorStart: 'rgba(168, 85, 247, 0.18)', // Purple
        colorMid: 'rgba(56, 189, 248, 0.13)',  // Sky cyan
        colorEnd: 'rgba(168, 85, 247, 0.0)',
        widthOffset: Math.PI / 3
      },
      {
        baseY: 0.35,
        speed: 0.0005,
        amplitude: 80,
        wavelength: 0.002,
        colorStart: 'rgba(6, 182, 212, 0.13)',
        colorMid: 'rgba(147, 51, 234, 0.12)',
        colorEnd: 'rgba(6, 182, 212, 0.0)',
        widthOffset: Math.PI / 1.5
      },
      {
        baseY: 0.05,
        speed: 0.0007,
        amplitude: 60,
        wavelength: 0.0025,
        colorStart: 'rgba(139, 92, 246, 0.14)',
        colorMid: 'rgba(34, 211, 238, 0.12)',
        colorEnd: 'rgba(139, 92, 246, 0.0)',
        widthOffset: Math.PI
      }
    ];

    // Falling starlight / dust particles
    interface Particle {
      x: number;
      y: number;
      vy: number;
      vx: number;
      size: number;
      color: string;
      alpha: number;
      baseAlpha: number;
    }

    const particleCount = Math.min(Math.floor((width * height) / 20000), 45);
    const particles: Particle[] = Array.from({ length: particleCount }, () => {
      const isCyan = Math.random() > 0.45;
      return {
        x: Math.random() * width,
        y: Math.random() * height,
        vy: Math.random() * 0.4 + 0.25, // Falling downwards
        vx: (Math.random() - 0.5) * 0.2,
        size: Math.random() * 1.8 + 0.6,
        color: isCyan ? '6, 182, 212' : '168, 85, 247',
        alpha: Math.random() * 0.5 + 0.2,
        baseAlpha: Math.random() * 0.5 + 0.2
      };
    });

    const render = () => {
      time += 1;

      // Base Obsidian Black
      ctx.fillStyle = '#050505';
      ctx.fillRect(0, 0, width, height);

      // Fine architectural grid lines
      ctx.strokeStyle = 'rgba(255, 255, 255, 0.02)';
      ctx.lineWidth = 1;
      const gridSize = 64;

      for (let x = 0; x < width; x += gridSize) {
        ctx.beginPath();
        ctx.moveTo(x, 0);
        ctx.lineTo(x, height);
        ctx.stroke();
      }

      for (let y = 0; y < height; y += gridSize) {
        ctx.beginPath();
        ctx.moveTo(0, y);
        ctx.lineTo(width, y);
        ctx.stroke();
      }

      // Draw Falling Aurora Ribbons
      ctx.save();
      ctx.globalCompositeOperation = 'screen';

      ribbons.forEach((ribbon, rIdx) => {
        const curtainHeight = Math.min(height * 0.55, 480);
        const mouseShiftX = (mouseX / width - 0.5) * 40;
        const mouseShiftY = (mouseY / height - 0.5) * 30;

        const currentBaseY = height * ribbon.baseY + mouseShiftY * (rIdx * 0.2 + 0.5);

        // Create vertical gradient for curtain
        const gradient = ctx.createLinearGradient(0, currentBaseY - 60, 0, currentBaseY + curtainHeight);
        gradient.addColorStop(0, 'rgba(0, 0, 0, 0)');
        gradient.addColorStop(0.2, ribbon.colorStart);
        gradient.addColorStop(0.55, ribbon.colorMid);
        gradient.addColorStop(1, ribbon.colorEnd);

        ctx.fillStyle = gradient;
        ctx.beginPath();

        // Top undulating wave
        const step = 20;
        ctx.moveTo(0, 0);

        for (let x = 0; x <= width + step; x += step) {
          const t = time * ribbon.speed;
          const wave1 = Math.sin(x * ribbon.wavelength + t + ribbon.widthOffset) * ribbon.amplitude;
          const wave2 = Math.cos(x * ribbon.wavelength * 0.6 - t * 0.8) * (ribbon.amplitude * 0.4);
          const y = currentBaseY + wave1 + wave2;

          if (x === 0) {
            ctx.lineTo(0, y);
          } else {
            ctx.lineTo(x, y);
          }
        }

        // Drop down to form the curtain
        ctx.lineTo(width, currentBaseY + curtainHeight);
        ctx.lineTo(0, currentBaseY + curtainHeight);
        ctx.closePath();
        ctx.fill();
      });

      ctx.restore();

      // Render Falling Starlight Particles
      for (let i = 0; i < particles.length; i++) {
        const p = particles[i];

        p.y += p.vy;
        p.x += p.vx;

        // Wrap bottom to top
        if (p.y > height) {
          p.y = 0;
          p.x = Math.random() * width;
        }
        if (p.x < 0) p.x = width;
        if (p.x > width) p.x = 0;

        // Pulsing glow
        const pulse = Math.sin(time * 0.02 + i) * 0.15;
        const currentAlpha = Math.max(0.1, Math.min(0.8, p.baseAlpha + pulse));

        ctx.fillStyle = `rgba(${p.color}, ${currentAlpha})`;
        ctx.beginPath();
        ctx.arc(p.x, p.y, p.size, 0, Math.PI * 2);
        ctx.fill();
      }

      animationFrameId = requestAnimationFrame(render);
    };

    render();

    return () => {
      cancelAnimationFrame(animationFrameId);
      window.removeEventListener('resize', handleResize);
      window.removeEventListener('mousemove', handleMouseMove);
    };
  }, []);

  return (
    <div className="fixed inset-0 pointer-events-none z-0 overflow-hidden">
      <canvas ref={canvasRef} className="w-full h-full block" />
      {/* Top subtle vignette to keep header crystal-clear */}
      <div className="absolute top-0 left-0 right-0 h-36 bg-gradient-to-b from-[#050505] via-[#050505]/75 to-transparent pointer-events-none" />
      {/* Bottom vignette */}
      <div className="absolute bottom-0 left-0 right-0 h-36 bg-gradient-to-t from-[#050505] via-[#050505]/75 to-transparent pointer-events-none" />
    </div>
  );
}
