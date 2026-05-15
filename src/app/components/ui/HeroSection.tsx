import React from 'react';
import DigitalRain from './DigitalRain';

interface HeroSectionProps {
  children: React.ReactNode;
  /** URL de l'image de fond */
  image: string;
  /** Texte alt pour l'image de fond */
  imageAlt?: string;
  /** Variante de hauteur (défaut: 'screen') */
  height?: 'screen' | '70vh' | '90vh' | 'auto';
  /** Hauteur minimum en pixels (défaut: 700) */
  minHeight?: number;
  /** Opacité du DigitalRain (0-100, défaut: 20) */
  rainOpacity?: number;
  /** Classes additionnelles pour la section */
  className?: string;
}

/**
 * Composant Hero réutilisable — encapsule le système de background 5 couches
 * et l'effet DigitalRain. Le contenu est injecté via children pour un contrôle
 * total du layout et des animations par chaque page.
 *
 * @example
 * // Style Contact (centré, simple)
 * <HeroSection image={contactBg} height="70vh">
 *   <div className="container mx-auto px-16 relative z-20 grid grid-cols-1 lg:grid-cols-2 gap-12 items-center h-full py-20">
 *     <motion.div ...>
 *       <h1>Contact our team</h1>
 *     </motion.div>
 *   </div>
 * </HeroSection>
 *
 * @example
 * // Style Home (full-screen, bottom-aligned, multi-colonnes)
 * <HeroSection image={heroBg} height="screen" minHeight={700}>
 *   <div className="absolute inset-0 z-20 flex flex-col justify-end pb-20 md:pb-32 container mx-auto px-16">
 *     <div className="flex flex-col lg:flex-row ...">
 *       <motion.div ...>...</motion.div>
 *       <motion.div ...>...</motion.div>
 *     </div>
 *   </div>
 * </HeroSection>
 */
const HeroSection: React.FC<HeroSectionProps> = ({
  children,
  image,
  imageAlt = '',
  height = 'screen',
  minHeight = 700,
  rainOpacity = 20,
  className = '',
}) => {
  const heightClasses: Record<string, string> = {
    screen: 'h-screen',
    '70vh': 'min-h-[70vh]',
    '90vh': 'min-h-[90vh]',
    auto: '',
  };

  const minHeightStyle = minHeight > 0 ? { minHeight: `${minHeight}px` } : undefined;

  return (
    <section
      className={`relative w-full overflow-hidden bg-[#0F172A] ${heightClasses[height]} ${className}`}
      style={minHeightStyle}
    >
      {/* ---- Background 5 couches ---- */}
      <div className="absolute inset-0 z-0">
        {/* 1. Image de fond */}
        <img
          src={image}
          alt={imageAlt}
          className="w-full h-full object-cover object-center"
          fetchPriority="high"
        />
        {/* 2. Gradient multiply (assombrissement progressif) */}
        <div className="absolute inset-0 bg-gradient-to-t from-[#0F172A] via-[#0F172A]/60 to-[#0F172A]/30 mix-blend-multiply" />
        {/* 3. Teinte bleue overlay */}
        <div className="absolute inset-0 bg-blue-900/10 mix-blend-overlay" />
        {/* 4. Vignette radiale (bords foncés, centre lumineux) */}
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_transparent_30%,_#0F172A_100%)] opacity-80" />
        {/* 5. Texture grain/noise cinématographique */}
        <div className="absolute inset-0 bg-[url('https://grainy-gradients.vercel.app/noise.svg')] opacity-10 mix-blend-soft-light" />
      </div>

      {/* ---- Digital Rain (z-10) ---- */}
      <DigitalRain opacity={rainOpacity} />

      {/* ---- Contenu (injecté par la page) ---- */}
      {children}
    </section>
  );
};

HeroSection.displayName = 'HeroSection';

export { HeroSection };
export default HeroSection;
