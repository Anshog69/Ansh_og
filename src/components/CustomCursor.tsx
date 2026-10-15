import { useState, useEffect, useRef } from 'react';
import { motion, useSpring, useMotionValue } from 'motion/react';

interface Particle {
  id: number;
  x: number;
  y: number;
  size: number;
  color: string;
}

export function CustomCursor() {
  const [isTouchDevice, setIsTouchDevice] = useState(false);
  const [isVisible, setIsVisible] = useState(false);
  const [cursorType, setCursorType] = useState<string | null>(null);
  const [isClicking, setIsClicking] = useState(false);
  const [particles, setParticles] = useState<Particle[]>([]);
  
  const mouseX = useMotionValue(-100);
  const mouseY = useMotionValue(-100);

  // Smooth spring physics for follower ring
  const springConfig = { damping: 28, stiffness: 380, mass: 0.4 };
  const smoothX = useSpring(mouseX, springConfig);
  const smoothY = useSpring(mouseY, springConfig);

  const prevPos = useRef({ x: 0, y: 0, time: Date.now() });

  useEffect(() => {
    if (window.matchMedia('(pointer: coarse)').matches) {
      setIsTouchDevice(true);
      return;
    }

    const handleMouseMove = (e: MouseEvent) => {
      if (!isVisible) setIsVisible(true);
      mouseX.set(e.clientX);
      mouseY.set(e.clientY);

      const now = Date.now();
      const dt = Math.max(now - prevPos.current.time, 1);
      const dist = Math.hypot(e.clientX - prevPos.current.x, e.clientY - prevPos.current.y);
      const speed = dist / dt;

      // Fine silver shimmer dust on fast movement
      if (speed > 1.4 && Math.random() > 0.4) {
        const silverPalette = ['#ffffff', '#e4e4e7', '#a1a1aa', '#71717a'];
        const newParticle: Particle = {
          id: Math.random(),
          x: e.clientX + (Math.random() - 0.5) * 8,
          y: e.clientY + (Math.random() - 0.5) * 8,
          size: Math.random() * 2.5 + 1,
          color: silverPalette[Math.floor(Math.random() * silverPalette.length)]
        };
        setParticles(prev => [...prev.slice(-12), newParticle]);
      }

      prevPos.current = { x: e.clientX, y: e.clientY, time: now };

      const target = e.target as HTMLElement | null;
      if (target) {
        const cursorEl = target.closest('[data-cursor]') as HTMLElement | null;
        if (cursorEl) {
          const label = cursorEl.getAttribute('data-cursor');
          setCursorType(label);
        } else if (target.closest('button') || target.closest('a') || target.closest('input')) {
          setCursorType('SELECT');
        } else {
          setCursorType(null);
        }
      }
    };

    const handleMouseDown = () => setIsClicking(true);
    const handleMouseUp = () => setIsClicking(false);
    const handleMouseLeave = () => setIsVisible(false);

    window.addEventListener('mousemove', handleMouseMove, { passive: true });
    window.addEventListener('mousedown', handleMouseDown);
    window.addEventListener('mouseup', handleMouseUp);
    document.addEventListener('mouseleave', handleMouseLeave);

    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
      window.removeEventListener('mousedown', handleMouseDown);
      window.removeEventListener('mouseup', handleMouseUp);
      document.removeEventListener('mouseleave', handleMouseLeave);
    };
  }, [isVisible, mouseX, mouseY]);

  // Clean up particles
  useEffect(() => {
    if (particles.length === 0) return;
    const interval = setInterval(() => {
      setParticles(prev => prev.slice(1));
    }, 45);
    return () => clearInterval(interval);
  }, [particles.length]);

  if (isTouchDevice || !isVisible) return null;

  return (
    <div className="pointer-events-none fixed inset-0 z-50 overflow-hidden select-none">
      {/* Subtle Silver Particles */}
      {particles.map(p => (
        <motion.div
          key={p.id}
          initial={{ opacity: 0.8, scale: 1 }}
          animate={{ opacity: 0, scale: 0.2, y: 8 }}
          transition={{ duration: 0.35, ease: 'easeOut' }}
          className="absolute rounded-full"
          style={{
            left: p.x,
            top: p.y,
            width: p.size,
            height: p.size,
            backgroundColor: p.color,
            boxShadow: `0 0 6px ${p.color}`
          }}
        />
      ))}

      {/* Outer Spring Follower Ring */}
      <motion.div
        className="fixed top-0 left-0 rounded-full border border-zinc-400/60 transition-[width,height,background-color] duration-200"
        style={{
          x: smoothX,
          y: smoothY,
          translateX: '-50%',
          translateY: '-50%',
          width: cursorType ? 46 : isClicking ? 20 : 32,
          height: cursorType ? 46 : isClicking ? 20 : 32,
          backgroundColor: isClicking ? 'rgba(255, 255, 255, 0.15)' : 'transparent',
          boxShadow: '0 0 16px rgba(255, 255, 255, 0.08)'
        }}
      />

      {/* Center Precise White Dot */}
      <motion.div
        className="fixed top-0 left-0 w-1.5 h-1.5 rounded-full bg-white shadow-[0_0_8px_#ffffff]"
        style={{
          x: mouseX,
          y: mouseY,
          translateX: '-50%',
          translateY: '-50%'
        }}
      />

      {/* Minimal Stark Label Tag */}
      {cursorType && (
        <motion.div
          initial={{ opacity: 0, y: 5 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0 }}
          className="fixed top-0 left-0 px-2 py-0.5 rounded bg-zinc-900 border border-zinc-700 text-[10px] font-mono font-semibold tracking-wider text-zinc-100 shadow-xl whitespace-nowrap"
          style={{
            x: smoothX,
            y: smoothY,
            translateX: '24px',
            translateY: '-22px'
          }}
        >
          {cursorType}
        </motion.div>
      )}
    </div>
  );
}
