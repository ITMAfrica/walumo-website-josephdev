import React from 'react';
import { useNavigate } from 'react-router';
import { Helmet } from 'react-helmet-async';
import { motion } from 'motion/react';
import Code2 from 'lucide-react/dist/esm/icons/code-2';
import Trophy from 'lucide-react/dist/esm/icons/trophy';
import Rocket from 'lucide-react/dist/esm/icons/rocket';
import GraduationCap from 'lucide-react/dist/esm/icons/graduation-cap';
import ArrowRight from 'lucide-react/dist/esm/icons/arrow-right';
import Search from 'lucide-react/dist/esm/icons/search';
import Layers from 'lucide-react/dist/esm/icons/layers';
import Check from 'lucide-react/dist/esm/icons/check';
import { Button } from '@/components/ui/button';
import DigitalRain from '../ui/DigitalRain';

const fadeIn = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: 'easeOut' as const } },
};

const stagger = {
  visible: { transition: { staggerChildren: 0.1 } },
};

export const WhatWeDo: React.FC = () => {
  const navigate = useNavigate();
  const services = [
    {
      icon: Code2,
      title: 'Digital Product Development',
      description:
        'From concept to prototype — we design and build scalable digital solutions for businesses and institutions.',
      cta: "Let's Build Together",
      tags: ['Mobile & Web Apps', 'API Architecture', 'Cloud Infrastructure'],
    },
    {
      icon: Trophy,
      title: 'Innovation Challenges',
      description:
        "Hackathons and digital competitions that spotlight Africa's emerging tech talent. New editions launching soon — stay tuned.",
      cta: 'Stay Updated',
      tags: ['Hackathons', 'Code Competitions', 'Tech Showcases'],
    },
    {
      icon: Rocket,
      title: 'Startup Partnerships & Innovation Advisory',
      description:
        'We collaborate with startups and corporates to test and scale innovative digital ideas.',
      cta: 'Partner With Us',
      tags: ['Strategic Advisory', 'MVP Development', 'Go-to-Market Strategy'],
    },
    {
      icon: GraduationCap,
      title: 'Talent Development & Ecosystem Building',
      description:
        "We equip Africa's digital builders with tools, training, and opportunities to thrive.",
      cta: 'Join Our Network',
      tags: ['Training Programs', 'Mentorship', 'Community Access'],
    },
  ];

  const steps = [
    {
      num: '01',
      icon: Search,
      title: 'Discovery',
      desc: 'We immerse ourselves in your vision, challenges, and goals. A structured workshop to frame the mission precisely.',
    },
    {
      num: '02',
      icon: Layers,
      title: 'Architecture',
      desc: 'Technical design, UX mapping, and tech-stack selection. Every decision is documented, debated, and validated.',
    },
    {
      num: '03',
      icon: Code2,
      title: 'Build & Iterate',
      desc: 'Agile 2-week sprints with continuous demos. You see living progress at every stage of development.',
    },
    {
      num: '04',
      icon: Rocket,
      title: 'Deploy & Scale',
      desc: 'Production launch, full monitoring setup, and a growth roadmap. We remain your partner post-launch.',
    },
  ];

  return (
    <>
    <Helmet>
      <title>Walumo — What We Do | Digital Products & Innovation</title>
      <meta name="description" content="Walumo operates at the intersection of innovation, talent, and impact — driving Africa's digital transformation through practical, scalable solutions." />
      <meta property="og:title" content="Walumo — Everything we build, transforms Africa" />
      <meta property="og:description" content="From concept to prototype — we design and build scalable digital solutions for businesses and institutions across the continent." />
      <meta property="og:url" content="https://walumoafrica.com/what-we-do" />
      <link rel="canonical" href="https://walumoafrica.com/what-we-do" />
    </Helmet>
    <div className="bg-slate-950 min-h-screen font-sans selection:bg-cyan-500/30">

      {/* ── HERO ── */}
      <section className="relative min-h-[90vh] flex items-center justify-center overflow-hidden pt-20">
        <div className="absolute inset-0 z-0">
          <div className="absolute inset-0 bg-gradient-to-b from-blue-950/20 via-slate-950 to-slate-950 z-10" />
          <DigitalRain />
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-blue-600/10 rounded-full blur-[120px] pointer-events-none" />
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
              className="text-5xl md:text-7xl font-bold tracking-tight text-white mb-8 leading-none"
            >
              Everything we build,{' '}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-blue-500">
                transforms Africa.
              </span>
            </motion.h1>

            <motion.p
              variants={fadeIn}
              className="text-lg md:text-xl text-slate-300 mb-10 max-w-2xl mx-auto leading-relaxed"
            >
              Walumo operates at the intersection of innovation, talent, and
              impact — driving Africa's digital transformation through
              practical, scalable solutions.
            </motion.p>

            <motion.div
              variants={fadeIn}
              className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-16"
            >
              <Button
                size="lg"
                className="h-14 px-8 text-base bg-gradient-to-r from-blue-600 to-cyan-600 hover:from-blue-500 hover:to-cyan-500 text-white rounded-full shadow-[0_0_20px_rgba(6,182,212,0.3)] hover:shadow-[0_0_30px_rgba(6,182,212,0.5)] transition-all duration-300 border-0"
                onClick={() => navigate('/contact')}
              >
                Start a Project
                <ArrowRight className="ml-2 h-5 w-5" />
              </Button>
              <Button
                size="lg"
                variant="outline"
                className="h-14 px-8 text-base bg-white/5 border-white/10 text-white hover:bg-white/10 hover:text-white rounded-full backdrop-blur-sm transition-all duration-300"
              >
                Explore our divisions
              </Button>
            </motion.div>

            {/* Stats row */}
            
          </motion.div>
        </div>
      </section>

      {/* ── SEPARATOR ── */}
      <div className="h-px bg-gradient-to-r from-transparent via-blue-500/50 to-transparent" />

      {/* ── FOUR PILLARS ── */}
      <section className="py-24 md:py-32 relative">
        <div className="container px-4 md:px-16">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center max-w-2xl mx-auto mb-16"
          >
            <h2 className="text-3xl md:text-5xl font-semibold text-white tracking-tight leading-tight mb-4">
              Four Strategic{' '}
              <span className="text-blue-400">Pillars</span>
            </h2>
            <p className="text-lg text-slate-400 leading-relaxed">
              Each division is designed to create tangible impact — from
              ideation to execution, from talent to transformation.
            </p>
          </motion.div>

          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: '-100px' }}
            variants={stagger}
            className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-5xl mx-auto"
          >
            {services.map((service, i) => {
              const Icon = service.icon;
              return (
                <motion.div
                  key={i}
                  variants={fadeIn}
                  className="group relative p-8 rounded-2xl bg-slate-900/50 border border-white/5 hover:border-cyan-500/30 transition-all duration-300 hover:bg-slate-800/50 hover:shadow-[0_8px_30px_rgb(0,0,0,0.5)] backdrop-blur-sm overflow-hidden"
                >
                  <div className="absolute inset-0 bg-gradient-to-br from-cyan-500/5 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                  <div className="relative z-10">
                    <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-blue-500/20 to-cyan-500/20 flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300 ring-1 ring-white/10 group-hover:ring-cyan-500/50">
                      <Icon className="h-6 w-6 text-cyan-400" />
                    </div>
                    <h3 className="text-xl font-semibold text-white mb-3">{service.title}</h3>
                    <p className="text-slate-400 leading-relaxed mb-6 group-hover:text-slate-300 transition-colors">
                      {service.description}
                    </p>
                    <div className="flex flex-wrap gap-2 mb-6">
                      {service.tags.map((tag, t) => (
                        <span
                          key={t}
                          className="text-xs px-3 py-1 rounded-full bg-white/5 text-slate-400 border border-white/10"
                        >
                          {tag}
                        </span>
                      ))}
                    </div>
                    
                  </div>
                </motion.div>
              );
            })}
          </motion.div>
        </div>
      </section>

      {/* ── SEPARATOR ── */}
      <div className="h-px bg-gradient-to-r from-transparent via-blue-500/50 to-transparent" />

      {/* ── HOW WE WORK ── */}
      <section className="py-24 md:py-32 bg-slate-950 relative overflow-hidden">
        <div className="container px-4 md:px-16">
          <div className="flex flex-col lg:flex-row items-start gap-16 max-w-5xl mx-auto w-full">

            {/* Left: title + summary */}
            <div className="lg:w-1/3 space-y-6 lg:sticky lg:top-28">
              <h2 className="text-3xl md:text-5xl font-semibold text-white tracking-tight leading-tight">
                How We <br />
                <span className="text-blue-400">Work</span>
              </h2>
              <p className="text-lg text-slate-400 leading-relaxed">
                Precision engineering requires rigorous methodology. From
                brief to deployment, every step is intentional.
              </p>
              <div className="space-y-3 pt-2">
                {['Transparent process', 'Continuous delivery', 'Post-launch support'].map((item, i) => (
                  <div key={i} className="flex items-center gap-3 text-slate-300">
                    <div className="flex-shrink-0 w-6 h-6 rounded-full bg-cyan-500/10 flex items-center justify-center border border-cyan-500/20">
                      <Check className="h-3.5 w-3.5 text-cyan-400" />
                    </div>
                    <span>{item}</span>
                  </div>
                ))}
              </div>
              <div className="pt-2">
                <Button
                  variant="link"
                  className="text-cyan-400 hover:text-cyan-300 pl-0 text-base"
                  onClick={() => navigate('/contact')}
                >
                  Start the conversation <ArrowRight className="ml-2 h-4 w-4" />
                </Button>
              </div>
            </div>

            {/* Right: steps */}
            <div className="lg:w-2/3 space-y-4">
              {steps.map((step, i) => {
                const StepIcon = step.icon;
                return (
                  <motion.div
                    key={i}
                    initial={{ opacity: 0, x: 20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5, delay: i * 0.1 }}
                    className="group flex items-start gap-6 p-6 rounded-2xl bg-slate-900/50 border border-white/5 hover:border-cyan-500/30 transition-all duration-300 hover:bg-slate-800/50 backdrop-blur-sm overflow-hidden"
                  >
                    <div className="absolute inset-0 bg-gradient-to-br from-cyan-500/5 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none rounded-2xl" />
                    <div className="flex-shrink-0 w-12 h-12 rounded-xl bg-gradient-to-br from-blue-500/20 to-cyan-500/20 flex items-center justify-center ring-1 ring-white/10 group-hover:ring-cyan-500/50 group-hover:scale-110 transition-all duration-300">
                      <StepIcon className="h-5 w-5 text-cyan-400" />
                    </div>
                    <div className="flex-1">
                      <div className="flex items-center gap-3 mb-2">
                        
                        <h3 className="text-lg font-semibold text-white">{step.title}</h3>
                      </div>
                      <p className="text-slate-400 leading-relaxed group-hover:text-slate-300 transition-colors text-sm">
                        {step.desc}
                      </p>
                    </div>
                  </motion.div>
                );
              })}
            </div>
          </div>
        </div>
      </section>

      {/* ── CTA ── */}
      

    </div>
    </>
  );
};
