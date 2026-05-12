import React from 'react';
import { motion } from 'motion/react';
import { Button } from '@/components/ui/button';
import {
  ArrowRight, Globe, Shield, Server, Database,
  ChevronRight, Check, Users, Zap
} from 'lucide-react';
import DigitalRain from '../ui/DigitalRain';
import { GlassCard } from '../ui/GlassCard';

interface PartnersProps {
  onNavigate: (page: string) => void;
}

const fadeIn = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: 'easeOut' } },
};

const stagger = {
  visible: { transition: { staggerChildren: 0.1 } },
};

const partnerLogos = [
  'NexusCore', 'AlphaWave', 'Stratos', 'OmniTech',
  'BlueHorizon', 'Vertex', 'CipherLabs', 'Novasphere',
  'Quantuma', 'Synapse', 'Aether', 'Zenith',
];

export const Partners: React.FC<PartnersProps> = ({ onNavigate }) => {
  return (
    <div className="bg-slate-950 min-h-screen font-sans selection:bg-cyan-500/30">

      {/* ── HERO ── */}
      <section className="relative min-h-[90vh] flex items-center justify-center overflow-hidden pt-20">
        <div className="absolute inset-0 z-0">
          <div className="absolute inset-0 bg-gradient-to-b from-blue-950/20 via-slate-950 to-slate-950 z-10" />
          <DigitalRain />
          {/* Glow orbs */}
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[900px] h-[900px] bg-blue-600/10 rounded-full blur-[140px] pointer-events-none" />
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-cyan-500/10 rounded-full blur-[100px] pointer-events-none" />
        </div>

        <div className="container relative z-20 px-4 md:px-6">
          <motion.div
            initial="hidden"
            animate="visible"
            variants={stagger}
            className="max-w-4xl mx-auto text-center"
          >
            <motion.h1
              variants={fadeIn}
              className="text-5xl md:text-7xl font-semibold tracking-tight text-white mb-8 leading-[1.1]"
            >
              The architecture of{' '}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-blue-500">
                your expansion.
              </span>
            </motion.h1>

            <motion.p
              variants={fadeIn}
              className="text-lg md:text-xl text-slate-300 mb-10 max-w-2xl mx-auto leading-relaxed"
            >
              We're not just looking for service providers. We are building an
              innovation energy grid connecting Africa to the rest of the world.
            </motion.p>

            <motion.div
              variants={fadeIn}
              className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-16"
            >
              <Button
                size="lg"
                className="h-14 px-8 text-base bg-gradient-to-r from-blue-600 to-cyan-600 hover:from-blue-500 hover:to-cyan-500 text-white rounded-full shadow-[0_0_20px_rgba(6,182,212,0.3)] hover:shadow-[0_0_30px_rgba(6,182,212,0.5)] transition-all duration-300 border-0"
                onClick={() => onNavigate('contact')}
              >
                Initiate a connection
                <ArrowRight className="ml-2 h-5 w-5" />
              </Button>
              <Button
                size="lg"
                variant="outline"
                className="h-14 px-8 text-base bg-white/5 border-white/10 text-white hover:bg-white/10 hover:text-white rounded-full backdrop-blur-sm transition-all duration-300"
              >
                Discover the network
              </Button>
            </motion.div>

            {/* Partner count pill */}
            <motion.div variants={fadeIn} className="flex justify-center">
              
            </motion.div>
          </motion.div>
        </div>

        {/* Scroll cue */}
        <div className="absolute bottom-10 left-1/2 -translate-x-1/2 flex flex-col items-center gap-3 opacity-40">
          <div className="w-px h-16 bg-gradient-to-b from-transparent via-cyan-500 to-transparent" />
        </div>
      </section>

      {/* ── STATS BAR ── */}
      

      {/* ── VALUE PROPOSITION ── */}
      <section className="py-24 md:py-32 relative">
        <div className="container px-4 md:px-6">
          <div className="mb-16 flex flex-col md:flex-row justify-between items-end gap-6">
            <div>
              <h2 className="text-3xl md:text-5xl font-semibold text-white tracking-tight leading-tight mb-4">
                The Power of <span className="text-blue-400">the Network</span>
              </h2>
              <p className="text-lg text-slate-400 max-w-lg">
                Our ecosystem is designed as a particle accelerator for your business.
              </p>
            </div>
            <Button variant="ghost" className="text-cyan-400 hover:text-cyan-300 hover:bg-cyan-950/30 flex-shrink-0">
              See all benefits <ChevronRight className="ml-2 w-4 h-4" />
            </Button>
          </div>

          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: '-100px' }}
            variants={stagger}
            className="grid grid-cols-1 md:grid-cols-3 gap-6"
          >
            {[
              {
                title: 'Elastic Infrastructure',
                desc: 'Scale instantly without technical friction.',
                icon: Server,
                color: 'text-blue-400',
                accent: 'blue' as const,
              },
              {
                title: 'Data Intelligence',
                desc: 'Data sharing and market insights in real-time.',
                icon: Database,
                color: 'text-purple-400',
                accent: 'purple' as const,
              },
              {
                title: 'Unified Security',
                desc: 'Shared cyber defense protocols.',
                icon: Shield,
                color: 'text-cyan-400',
                accent: 'cyan' as const,
              },
            ].map((card, i) => (
              <motion.div key={i} variants={fadeIn} whileHover={{ y: -5 }}>
                <GlassCard accent={card.accent} className="h-full p-10 group">
                  <div className="mb-8 relative">
                    <div
                      className={`w-14 h-14 rounded-2xl bg-slate-900 border border-white/10 flex items-center justify-center ${card.color} shadow-lg group-hover:scale-110 transition-transform duration-300 ring-1 ring-white/5 group-hover:ring-cyan-500/30`}
                    >
                      <card.icon size={26} />
                    </div>
                  </div>
                  <h3 className="text-2xl font-bold text-white mb-4">{card.title}</h3>
                  <p className="text-slate-400 leading-relaxed border-l border-white/10 pl-4 group-hover:text-slate-300 transition-colors">
                    {card.desc}
                  </p>
                </GlassCard>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* ── SEPARATOR ── */}
      <div className="h-px bg-gradient-to-r from-transparent via-blue-500/50 to-transparent" />

      {/* ── SECTORS ── */}
      <section className="py-24 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-b from-transparent via-blue-950/10 to-transparent" />

        <div className="container mx-auto px-6 relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center max-w-2xl mx-auto mb-16"
          >
            <h2 className="text-3xl md:text-5xl font-semibold text-white tracking-tight leading-tight mb-4">
              Who We <span className="text-blue-400">Partner With</span>
            </h2>
            <p className="text-lg text-slate-400 leading-relaxed">
              From established corporations to early-stage ventures — our network welcomes builders at every stage.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 h-auto lg:h-[560px]">
            <motion.div
              whileHover={{ scale: 0.98 }}
              className="relative rounded-3xl overflow-hidden group cursor-pointer border border-white/5"
            >
              <div className="absolute inset-0 bg-blue-900/40 mix-blend-multiply z-10 transition-opacity group-hover:opacity-70" />
              <img
                src="https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=1080"
                alt="Corporate"
                className="w-full h-full object-cover transition-transform duration-1000 group-hover:scale-110 grayscale group-hover:grayscale-0"
              />
              <div className="absolute inset-0 z-20 p-10 md:p-14 flex flex-col justify-end bg-gradient-to-t from-slate-950 via-transparent to-transparent">
                <div className="transform translate-y-6 group-hover:translate-y-0 transition-transform duration-500">
                  <div className="text-cyan-400 font-bold tracking-widest uppercase mb-3 text-sm">
                    Enterprise Solutions
                  </div>
                  <h3 className="text-4xl md:text-5xl font-bold text-white mb-4">
                    Corporate<br />Innovation
                  </h3>
                  <p className="text-slate-300 opacity-0 group-hover:opacity-100 transition-opacity duration-500 delay-100 max-w-md">
                    Inject startup agility into your established structures. Digital transformation, automation, and product culture.
                  </p>
                  <div className="mt-6 opacity-0 group-hover:opacity-100 transition-opacity duration-500 delay-200">
                    <Button className="bg-white/10 hover:bg-white text-white hover:text-slate-950 backdrop-blur-md border border-white/20 rounded-full">
                      Explore offering
                    </Button>
                  </div>
                </div>
              </div>
            </motion.div>

            <motion.div
              whileHover={{ scale: 0.98 }}
              className="relative rounded-3xl overflow-hidden group cursor-pointer border border-white/5"
            >
              <div className="absolute inset-0 bg-purple-900/40 mix-blend-multiply z-10 transition-opacity group-hover:opacity-70" />
              <img
                src="https://images.unsplash.com/photo-1519389950473-47ba0277781c?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=1080"
                alt="Startup"
                className="w-full h-full object-cover transition-transform duration-1000 group-hover:scale-110 grayscale group-hover:grayscale-0"
              />
              <div className="absolute inset-0 z-20 p-10 md:p-14 flex flex-col justify-end bg-gradient-to-t from-slate-950 via-transparent to-transparent">
                <div className="transform translate-y-6 group-hover:translate-y-0 transition-transform duration-500">
                  <div className="text-purple-400 font-bold tracking-widest uppercase mb-3 text-sm">
                    Venture Builder
                  </div>
                  <h3 className="text-4xl md:text-5xl font-bold text-white mb-4">
                    Startup<br />Acceleration
                  </h3>
                  <p className="text-slate-300 opacity-0 group-hover:opacity-100 transition-opacity duration-500 delay-100 max-w-md">
                    From 0 to 1, then from 1 to 100. We bring the tech, the strategy, and the network to scale your vision.
                  </p>
                  <div className="mt-6 opacity-0 group-hover:opacity-100 transition-opacity duration-500 delay-200">
                    <Button className="bg-white/10 hover:bg-white text-white hover:text-slate-950 backdrop-blur-md border border-white/20 rounded-full">
                      Apply now
                    </Button>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* ── SEPARATOR ── */}
      <div className="h-px bg-gradient-to-r from-transparent via-blue-500/50 to-transparent" />

      {/* ── TRUST GRID / PARTNER LOGOS ── */}
      

      {/* ── FINAL CTA ── */}
      <section className="py-24 relative overflow-hidden">
        
        
      </section>

    </div>
  );
};
