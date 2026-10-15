import { useState, useRef, type MouseEvent, type ReactNode } from 'react';
import { motion, useMotionValue, useSpring, useTransform } from 'motion/react';

interface TiltCardProps {
  children: ReactNode;
  className?: string;
  maxTilt?: number;
  scale?: number;
  glareOpacity?: number;
  id?: string;
  dataCursor?: string;
}

export function TiltCard({
  children,
  className = '',
  maxTilt = 12,
  scale = 1.02,
  glareOpacity = 0.25,
  id,
  dataCursor
}: TiltCardProps) {
  const cardRef = useRef<HTMLDivElement>(null);
  const [isHovered, setIsHovered] = useState(false);

  const x = useMotionValue(0.5);
  const y = useMotionValue(0.5);

  const springConfig = { damping: 20, stiffness: 260 };
  const smoothX = useSpring(x, springConfig);
  const smoothY = useSpring(y, springConfig);

  const rotateX = useTransform(smoothY, [0, 1], [maxTilt, -maxTilt]);
  const rotateY = useTransform(smoothX, [0, 1], [-maxTilt, maxTilt]);

  const glareX = useTransform(smoothX, [0, 1], ['0%', '100%']);
  const glareY = useTransform(smoothY, [0, 1], ['0%', '100%']);

  const handleMouseMove = (e: MouseEvent<HTMLDivElement>) => {
    if (!cardRef.current) return;
    const rect = cardRef.current.getBoundingClientRect();
    const clientX = e.clientX - rect.left;
    const clientY = e.clientY - rect.top;

    x.set(clientX / rect.width);
    y.set(clientY / rect.height);
  };

  const handleMouseEnter = () => {
    setIsHovered(true);
  };

  const handleMouseLeave = () => {
    setIsHovered(false);
    x.set(0.5);
    y.set(0.5);
  };

  return (
    <div style={{ perspective: 1200 }}>
      <motion.div
        ref={cardRef}
        id={id}
        data-cursor={dataCursor}
        onMouseMove={handleMouseMove}
        onMouseEnter={handleMouseEnter}
        onMouseLeave={handleMouseLeave}
        style={{
          rotateX,
          rotateY,
          transformStyle: 'preserve-3d',
        }}
        animate={{
          scale: isHovered ? scale : 1,
        }}
        transition={{ duration: 0.2 }}
        className={`relative ${className}`}
      >
        {children}

        {/* Dynamic Specular Light Glare */}
        <motion.div
          style={{
            background: `radial-gradient(circle 250px at ${glareX} ${glareY}, rgba(255, 255, 255, ${glareOpacity}), transparent 70%)`,
          }}
          className={`absolute inset-0 rounded-[inherit] pointer-events-none transition-opacity duration-300 z-30 ${
            isHovered ? 'opacity-100' : 'opacity-0'
          }`}
        />
      </motion.div>
    </div>
  );
}
