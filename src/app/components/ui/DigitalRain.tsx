import React, { useEffect, useState, useMemo, useCallback } from 'react';
import { motion } from 'motion/react';

// Stable pseudo-random values derived from index (no Math.random() in render)
const DigitalColumn = React.memo(({ index }: { index: number }) => {
  const chars = "010101101001110010111000101010011010110101";

  const { duration, delay, leftOffset, opacities } = useMemo(() => {
    const seed = (n: number, mod: number) => ((n * 2654435761) >>> 0) % mod;
    return {
      duration: 15 + (seed(index, 100) / 100) * 20,
      delay: -(seed(index + 7, 200) / 10),
      leftOffset: seed(index + 13, 20),
      opacities: chars.split('').map((_, k) => (seed(index * 41 + k, 10) > 4 ? 1 : 0.25)),
    };
  }, [index]);

  return (
    <motion.div
      className="absolute top-0 text-white/30 flex flex-col items-center"
      style={{
        left: `${index * 40 + leftOffset}px`,
        textShadow: '0 0 5px rgba(6, 182, 212, 0.5)',
      }}
      animate={{ y: ['100%', '-100%'] }}
      transition={{ duration, repeat: Infinity, ease: 'linear', delay }}
    >
      {chars.split('').map((char, k) => (
        <span key={k} style={{ opacity: opacities[k], marginBottom: '4px' }}>
          {char}
        </span>
      ))}
    </motion.div>
  );
});
DigitalColumn.displayName = 'DigitalColumn';

interface DigitalRainProps {
  /** Opacity as a number 0-100 (default: 20) */
  opacity?: number;
  className?: string;
}

const DigitalRain = ({ opacity = 20, className = '' }: DigitalRainProps) => {
  const [columns, setColumns] = useState<number[]>([]);

  useEffect(() => {
    let rafId: number;
    const update = () => {
      if (rafId) cancelAnimationFrame(rafId);
      rafId = requestAnimationFrame(() => {
        const colCount = Math.floor(window.innerWidth / 40);
        setColumns(Array.from({ length: colCount }, (_, i) => i));
      });
    };
    update();
    window.addEventListener('resize', update);
    return () => {
      window.removeEventListener('resize', update);
      if (rafId) cancelAnimationFrame(rafId);
    };
  }, []);

  return (
    <div
      className={`absolute inset-0 overflow-hidden pointer-events-none select-none font-mono text-[10px] md:text-xs leading-none z-10 mix-blend-screen ${className}`}
      style={{ opacity: opacity / 100 }}
    >
      {columns.map((i) => (
        <DigitalColumn key={i} index={i} />
      ))}
    </div>
  );
};

export { DigitalRain };
export default DigitalRain;
