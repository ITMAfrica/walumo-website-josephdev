import React from 'react';

interface SectionBadgeProps {
  children: React.ReactNode;
  icon?: React.ReactNode;
  variant?: 'dark' | 'light' | 'blue';
  pulse?: boolean;
}

/**
 * Reusable pill badge for section labels.
 * variant="dark"  → cyan-on-dark   (dark page heroes)
 * variant="light" → cyan-on-white  (light page sections)
 * variant="blue"  → blue-on-white  (light alt sections)
 */
export const SectionBadge: React.FC<SectionBadgeProps> = ({
  children,
  icon,
  variant = 'dark',
  pulse = false,
}) => {
  const styles: Record<string, string> = {
    dark: 'bg-cyan-950/30 border-cyan-500/30 text-cyan-400 backdrop-blur-md shadow-[0_0_15px_rgba(6,182,212,0.15)]',
    light: 'bg-cyan-50 border-cyan-200 text-cyan-600',
    blue: 'bg-blue-100 border-blue-200 text-blue-700',
  };

  return (
    null
  );
};
