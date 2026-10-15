import { useState, useEffect, useRef } from 'react';
import { soundEngine } from '../utils/audioFx';

interface ScrambleTextProps {
  text: string;
  className?: string;
  scrambleOnHover?: boolean;
  triggerOnView?: boolean;
  speed?: number;
}

const GLYPHS = '01#%$!@&*?XYZ_/<>';

export function ScrambleText({
  text,
  className = '',
  scrambleOnHover = true,
  triggerOnView = true,
  speed = 30
}: ScrambleTextProps) {
  const [displayText, setDisplayText] = useState(text);
  const [isScrambling, setIsScrambling] = useState(false);
  const frameRef = useRef<number | null>(null);
  const elRef = useRef<HTMLSpanElement>(null);
  const hasTriggeredInitial = useRef(false);

  const startScramble = () => {
    if (isScrambling) return;
    setIsScrambling(true);

    let iteration = 0;
    const maxIterations = text.length;

    if (frameRef.current) clearInterval(frameRef.current);

    frameRef.current = window.setInterval(() => {
      setDisplayText(() => {
        return text
          .split('')
          .map((char, index) => {
            if (char === ' ') return ' ';
            if (index < iteration) {
              return text[index];
            }
            return GLYPHS[Math.floor(Math.random() * GLYPHS.length)];
          })
          .join('');
      });

      if (iteration >= maxIterations) {
        if (frameRef.current) clearInterval(frameRef.current);
        setIsScrambling(false);
        setDisplayText(text);
      }

      iteration += 1 / 2.5;
    }, speed);
  };

  useEffect(() => {
    setDisplayText(text);
  }, [text]);

  useEffect(() => {
    if (!triggerOnView || hasTriggeredInitial.current) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting && !hasTriggeredInitial.current) {
          hasTriggeredInitial.current = true;
          startScramble();
        }
      },
      { threshold: 0.2 }
    );

    if (elRef.current) {
      observer.observe(elRef.current);
    }

    return () => observer.disconnect();
  }, [triggerOnView]);

  return (
    <span
      ref={elRef}
      onMouseEnter={() => {
        if (scrambleOnHover) {
          soundEngine.hoverTick();
          startScramble();
        }
      }}
      className={`inline-block font-mono cursor-default transition-colors ${className}`}
    >
      {displayText}
    </span>
  );
}
