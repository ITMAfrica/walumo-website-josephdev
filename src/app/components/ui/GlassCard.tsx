import React from 'react';

interface GlassCardProps {
  children: React.ReactNode;
  className?: string;
  /** If true, adds cyan border glow on hover */
  hoverGlow?: boolean;
  /** Gradient accent color direction */
  accent?: 'cyan' | 'blue' | 'purple' | 'none';
}

/**
 * Dark-glass morphism card. Used on dark-background sections.
 */
export const GlassCard: React.FC<GlassCardProps> = ({
  children,
  className = '',
  hoverGlow = true,
  accent = 'cyan',
}) => {
  const accentStyles: Record<string, string> = {
    cyan: 'from-cyan-500/10 via-transparent to-blue-600/10',
    blue: 'from-blue-500/10 via-transparent to-indigo-600/10',
    purple: 'from-purple-500/10 via-transparent to-pink-600/10',
    none: 'from-transparent to-transparent',
  };

  return (
    <div
      className={`relative overflow-hidden rounded-3xl border border-white/10 bg-gradient-to-br from-white/5 to-white/[0.02] backdrop-blur-xl shadow-2xl ${
        hoverGlow ? 'hover:border-cyan-500/30 transition-colors duration-300' : ''
      } ${className}`}
    >
      <div
        className={`absolute inset-0 bg-gradient-to-br ${accentStyles[accent]} opacity-50 pointer-events-none`}
      />
      <div className="relative z-10 h-full">{children}</div>
    </div>
  );
};
