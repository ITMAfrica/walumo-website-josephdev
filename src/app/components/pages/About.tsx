import React from 'react';
import { motion, useScroll, useTransform } from 'motion/react';
import { ShieldCheck, Users, Globe, Award, Lightbulb, History, Target, Sparkles, ArrowRight, Cpu, Network } from 'lucide-react';
import { Button } from '@/components/ui/button';
import DigitalRain from '../ui/DigitalRain';
import { SectionBadge } from '../ui/SectionBadge';

const TechSeparator = () => (
    <div className="w-full h-px bg-gradient-to-r from-transparent via-cyan-500/50 to-transparent my-0"></div>
);

const timelineData = [
  { 
    year: "2018", 
    title: "The Initialization", 
    desc: "Creation of the tech division within ITM Holding in Lubumbashi. A commando team of 5 developers.",
    img: "https://images.unsplash.com/photo-1560651921-19590b2b7ad7?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=600"
  },
  { 
    year: "2020", 
    title: "Regional Expansion", 
    desc: "Opening of the technology hub in Nairobi. Kenya becomes our central innovation laboratory.",
    img: "https://images.unsplash.com/photo-1611144727915-ef30a08aaeb3?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=600"
  },
  { 
    year: "2023", 
    title: "Walumo Rebrand", 
    desc: "Official launch of the Walumo brand. A new identity to affirm our continental ambitions.",
    img: "https://images.unsplash.com/photo-1636215096587-21982fbf5843?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=600"
  },
  { 
    year: "2025", 
    title: "The Ecosystem", 
    desc: "Launch of the HackLab and incubation programs. We no longer just code, we build giants.",
    img: "https://images.unsplash.com/photo-1639472628910-ef02c5404b9c?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=600"
  }
];

export const About: React.FC = () => {
  const { scrollYProgress } = useScroll();
  const yParallax = useTransform(scrollYProgress, [0, 1], [0, -100]);

  return (
    <div className="bg-[#020617] min-h-screen font-sans text-slate-200 selection:bg-cyan-500/30">
      
      {/* 1. HERO SECTION */}
      <section className="relative h-screen min-h-[800px] w-full overflow-hidden bg-[#0F172A]">
         <div className="absolute inset-0 z-0">
            <img 
              src="https://images.unsplash.com/photo-1684217875364-35ed8311d463?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=1920" 
              alt="Walumo Team Vision" 
              className="w-full h-full object-cover object-center opacity-60"
            />
            <div className="absolute inset-0 bg-gradient-to-b from-[#020617]/80 via-[#0F172A]/80 to-[#020617]"></div>
            <div className="absolute inset-0 bg-[url('https://grainy-gradients.vercel.app/noise.svg')] opacity-20 mix-blend-soft-light"></div>
         </div>

         <DigitalRain />

         <div className="absolute inset-0 z-20 flex flex-col justify-center container mx-auto px-6 pt-20">
            <motion.div 
                initial={{ opacity: 0, y: 50 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 1 }}
                className="max-w-4xl"
            >
                
                
                <h1 className="text-6xl md:text-8xl lg:text-9xl font-bold text-white tracking-tighter leading-[0.9] mb-8">
                    Architects of <br/>
                    <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 via-blue-500 to-purple-600">
                        African Tech.
                    </span>
                </h1>
                
                <p className="text-xl text-slate-400 font-light max-w-2xl leading-relaxed border-l-2 border-cyan-500/50 pl-6">
                    Walumo is the technological backbone of ITM Holding. We transform complexity into opportunity, connecting local ingenuity to global standards.
                </p>
            </motion.div>
         </div>

         <motion.div 
            animate={{ y: [0, 10, 0], opacity: [0.5, 1, 0.5] }}
            transition={{ duration: 2, repeat: Infinity }}
            className="absolute bottom-10 left-1/2 -translate-x-1/2 text-cyan-500/50 flex flex-col items-center gap-2"
         >
            <span className="text-[10px] uppercase tracking-widest">Scroll to Explore</span>
            <div className="w-px h-12 bg-gradient-to-b from-cyan-500 to-transparent"></div>
         </motion.div>
      </section>

      <TechSeparator />

      {/* 2. THE GENESIS */}
      <section className="py-32 relative overflow-hidden">
        <div className="absolute top-0 right-0 w-[800px] h-[800px] bg-blue-900/10 rounded-full blur-[120px] translate-x-1/2 -translate-y-1/2"></div>
        
        <div className="container mx-auto px-6 relative z-10">
            <div className="flex flex-col lg:flex-row gap-20 items-center">
                
                <div className="lg:w-1/2 relative group">
                    <div className="absolute -inset-4 bg-gradient-to-r from-cyan-500 to-blue-600 rounded-[2rem] opacity-20 group-hover:opacity-30 blur-lg transition-opacity duration-700"></div>
                    <div className="relative rounded-[2rem] overflow-hidden border border-white/10 shadow-2xl">
                        <img 
                            src="https://images.unsplash.com/photo-1616038242814-a6eac7845d88?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=1080" 
                            alt="Nairobi Future City" 
                            className="w-full h-auto object-cover grayscale group-hover:grayscale-0 transition-all duration-700 scale-105 group-hover:scale-100"
                        />
                        <div className="absolute inset-0 bg-gradient-to-t from-[#020617] via-transparent to-transparent opacity-80"></div>
                        
                        <div className="absolute bottom-8 left-8">
                            <div className="text-4xl font-bold text-white mb-1">Nairobi, HQ</div>
                            
                        </div>
                    </div>
                </div>

                <div className="lg:w-1/2">
                    <motion.div
                        initial={{ opacity: 0, x: 50 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.8 }}
                    >
                        <h2 className="text-4xl md:text-5xl font-bold text-white mb-8">
                            Born of ambition, <br/>
                            <span className="text-cyan-500">forged by tech.</span>
                        </h2>
                        <div className="space-y-6 text-slate-400 text-lg leading-relaxed">
                            <p>
                                Walumo was not born in a quiet boardroom, but in the heart of African technological effervescence. Founded as the tech division of ITM Holding, our initial mission was simple: digitalize our own operations.
                            </p>
                            <p>
                                Very quickly, we understood that the solutions we were building—robust, adapted to local constraints, and scalable—had invaluable worth for the entire ecosystem.
                            </p>
                            <p className="text-white border-l-4 border-blue-500 pl-4 py-2 bg-blue-500/5 rounded-r-lg">
                                Today, we are no longer just an IT department, but a pan-African innovation powerhouse operating across 3 countries.
                            </p>
                        </div>
                    </motion.div>
                </div>
            </div>
        </div>
      </section>

      {/* 3. TIMELINE */}
      <section className="py-24 bg-[#0B1120] relative overflow-hidden border-y border-white/5">
        <div className="absolute inset-0 bg-[url('https://grainy-gradients.vercel.app/noise.svg')] opacity-5"></div>
        <div className="container mx-auto px-6 relative z-10">
            <div className="text-center mb-24">
                <h2 className="text-4xl font-bold text-white">Our Evolution</h2>
                <div className="w-24 h-1 bg-cyan-500 mx-auto mt-6 rounded-full shadow-[0_0_15px_rgba(6,182,212,0.6)]"></div>
            </div>

            <div className="relative">
                <div className="absolute left-1/2 transform -translate-x-1/2 h-full w-0.5 bg-gradient-to-b from-cyan-500/0 via-cyan-500/40 to-cyan-500/0 hidden md:block"></div>

                <div className="space-y-24 md:space-y-0 relative">
                    {timelineData.map((item, index) => (
                        <div key={index} className="md:flex items-center justify-between w-full mb-12 md:mb-24 last:mb-0 relative">
                            
                            <div className="md:w-[45%] mb-8 md:mb-0 flex justify-center md:justify-end">
                                {index % 2 === 0 ? (
                                    <motion.div 
                                        initial={{ opacity: 0, x: -30 }}
                                        whileInView={{ opacity: 1, x: 0 }}
                                        viewport={{ once: true }}
                                        className="bg-slate-800/40 border border-white/5 p-8 rounded-2xl w-full max-w-lg backdrop-blur-sm hover:border-cyan-500/30 transition-colors text-right md:pr-10 relative group"
                                    >
                                        <div className="text-4xl font-bold text-white mb-2">{item.year}</div>
                                        <h3 className="text-xl font-bold text-cyan-400 mb-4">{item.title}</h3>
                                        <p className="text-slate-400 leading-relaxed">{item.desc}</p>
                                        <div className="absolute top-1/2 -right-14 w-14 h-px bg-cyan-500/40 hidden md:block"></div>
                                        <div className="absolute top-1/2 right-0 w-1 h-8 bg-cyan-500/40 -translate-y-1/2 hidden md:block"></div>
                                    </motion.div>
                                ) : (
                                    <motion.div 
                                        initial={{ opacity: 0, x: -30 }}
                                        whileInView={{ opacity: 1, x: 0 }}
                                        viewport={{ once: true }}
                                        className="w-full max-w-lg relative group overflow-hidden rounded-2xl border border-white/10 shadow-2xl aspect-video"
                                    >
                                        <img src={item.img} alt={item.title} className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110 grayscale group-hover:grayscale-0" />
                                        <div className="absolute inset-0 bg-blue-900/20 mix-blend-multiply group-hover:bg-transparent transition-colors"></div>
                                        <div className="absolute top-1/2 -right-14 w-14 h-px bg-cyan-500/40 hidden md:block"></div>
                                    </motion.div>
                                )}
                            </div>

                            <div className="absolute left-1/2 -translate-x-1/2 w-10 h-10 hidden md:flex items-center justify-center z-20">
                                <div className="w-4 h-4 rounded-full bg-[#020617] border-2 border-cyan-400 shadow-[0_0_15px_rgba(6,182,212,0.8)] relative z-10"></div>
                                <div className="absolute w-full h-full rounded-full bg-cyan-500/20 animate-ping"></div>
                            </div>

                            <div className="md:w-[45%] flex justify-center md:justify-start">
                                {index % 2 === 0 ? (
                                    <motion.div 
                                        initial={{ opacity: 0, x: 30 }}
                                        whileInView={{ opacity: 1, x: 0 }}
                                        viewport={{ once: true }}
                                        className="w-full max-w-lg relative group overflow-hidden rounded-2xl border border-white/10 shadow-2xl aspect-video"
                                    >
                                        <img src={item.img} alt={item.title} className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110 grayscale group-hover:grayscale-0" />
                                        <div className="absolute inset-0 bg-blue-900/20 mix-blend-multiply group-hover:bg-transparent transition-colors"></div>
                                        <div className="absolute top-1/2 -left-14 w-14 h-px bg-cyan-500/40 hidden md:block"></div>
                                    </motion.div>
                                ) : (
                                    <motion.div 
                                        initial={{ opacity: 0, x: 30 }}
                                        whileInView={{ opacity: 1, x: 0 }}
                                        viewport={{ once: true }}
                                        className="bg-slate-800/40 border border-white/5 p-8 rounded-2xl w-full max-w-lg backdrop-blur-sm hover:border-cyan-500/30 transition-colors text-left md:pl-10 relative group"
                                    >
                                        <div className="text-4xl font-bold text-white mb-2">{item.year}</div>
                                        <h3 className="text-xl font-bold text-cyan-400 mb-4">{item.title}</h3>
                                        <p className="text-slate-400 leading-relaxed">{item.desc}</p>
                                        <div className="absolute top-1/2 -left-14 w-14 h-px bg-cyan-500/40 hidden md:block"></div>
                                        <div className="absolute top-1/2 left-0 w-1 h-8 bg-cyan-500/40 -translate-y-1/2 hidden md:block"></div>
                                    </motion.div>
                                )}
                            </div>

                        </div>
                    ))}
                </div>
            </div>
        </div>
      </section>

      {/* 4. VALUES */}
      <section className="py-32 relative">
          <div className="container mx-auto px-6 relative z-10">
              <motion.div 
                initial={{ opacity: 0 }} 
                whileInView={{ opacity: 1 }}
                className="text-center mb-20"
              >
                  
                  <h2 className="text-4xl md:text-5xl font-bold text-white">Code of Conduct</h2>
              </motion.div>

              <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                  {[
                      { icon: ShieldCheck, color: "text-amber-400", bg: "from-amber-400/20", title: "Radical Integrity", text: "Transparency is not an option. We code trust into every interaction." },
                      { icon: Target, color: "text-cyan-400", bg: "from-cyan-400/20", title: "Technical Excellence", text: "We refuse mediocrity. Every line of code must be a functional work of art." },
                      { icon: Network, color: "text-purple-400", bg: "from-purple-400/20", title: "Collective Intelligence", text: "The solitary genius is a myth. We build networks, sharing knowledge without restraint." }
                  ].map((val, i) => (
                      <motion.div 
                          key={i}
                          initial={{ opacity: 0, y: 30 }}
                          whileInView={{ opacity: 1, y: 0 }}
                          viewport={{ once: true }}
                          transition={{ delay: i * 0.1 }}
                          className="relative group p-1 rounded-2xl bg-gradient-to-b from-white/10 to-transparent hover:from-cyan-500/50 transition-all duration-500"
                      >
                          <div className="bg-[#0F172A] p-8 rounded-xl h-full relative overflow-hidden">
                              <div className={`absolute top-0 left-0 w-32 h-32 bg-gradient-to-br ${val.bg} to-transparent rounded-full blur-3xl -translate-x-1/2 -translate-y-1/2 opacity-0 group-hover:opacity-100 transition-opacity duration-500`}></div>
                              
                              <div className="w-16 h-16 rounded-xl bg-white/5 border border-white/10 flex items-center justify-center mb-6 relative z-10 group-hover:scale-110 transition-transform">
                                  <val.icon className={`w-8 h-8 ${val.color}`} />
                              </div>
                              <h3 className="text-2xl font-bold text-white mb-4 relative z-10">{val.title}</h3>
                              <p className="text-slate-400 relative z-10 leading-relaxed">
                                  {val.text}
                              </p>
                          </div>
                      </motion.div>
                  ))}
              </div>
          </div>
      </section>

      {/* 5. TEAM / CULTURE */}
      <section className="py-24 bg-[#0F172A] border-t border-white/5 overflow-hidden">
          <div className="container mx-auto px-6">
              <div className="flex flex-col md:flex-row gap-16">
                  <div className="md:w-1/3">
                      <h2 className="text-4xl font-bold text-white mb-6">The Walumo Spirit</h2>
                      <p className="text-slate-400 mb-8 leading-relaxed">
                          We are a mosaic of developers, designers, strategists, and dreamers united by one obsession: solving complex problems.
                      </p>
                      
                      <div className="space-y-4">
                          <div className="flex items-center gap-4 text-white">
                              
                              <div>
                                  <div className="font-bold">Pan-African</div>
                                  <div className="text-xs text-slate-500">Local roots, global vision</div>
                              </div>
                          </div>
                          <div className="flex items-center gap-4 text-white">
                              
                              <div>
                                  <div className="font-bold">Infinite Curiosity</div>
                                  <div className="text-xs text-slate-500">Continuous learning</div>
                              </div>
                          </div>
                      </div>

                      <div className="mt-10">
                          <Button className="bg-white text-[#0F172A] hover:bg-cyan-50 px-8 h-14 rounded-full font-bold">
                              Join the team
                          </Button>
                      </div>
                  </div>

                  <div className="md:w-2/3 grid grid-cols-2 gap-4">
                      <div className="space-y-4 mt-8">
                          <div className="bg-slate-800 rounded-2xl h-64 overflow-hidden relative group">
                              <img src="https://images.unsplash.com/photo-1543269865-cbf427effbad?auto=format&fit=crop&q=80&w=600" alt="Team meeting" className="w-full h-full object-cover grayscale group-hover:grayscale-0 transition-all duration-700" />
                              <div className="absolute inset-0 bg-blue-900/40 mix-blend-multiply"></div>
                          </div>
                          <div className="bg-slate-800 rounded-2xl h-48 overflow-hidden relative group">
                              <img src="https://images.unsplash.com/photo-1522071820081-009f0129c71c?auto=format&fit=crop&q=80&w=600" alt="Collaboration" className="w-full h-full object-cover grayscale group-hover:grayscale-0 transition-all duration-700" />
                          </div>
                      </div>
                      <div className="space-y-4">
                          <div className="bg-slate-800 rounded-2xl h-48 overflow-hidden relative group">
                              <img src="https://images.unsplash.com/photo-1531482615713-2afd69097998?auto=format&fit=crop&q=80&w=600" alt="Coding" className="w-full h-full object-cover grayscale group-hover:grayscale-0 transition-all duration-700" />
                          </div>
                          <div className="bg-slate-800 rounded-2xl h-64 overflow-hidden relative group">
                              <img src="https://images.unsplash.com/photo-1556761175-5973dc0f32e7?auto=format&fit=crop&q=80&w=600" alt="Office Life" className="w-full h-full object-cover grayscale group-hover:grayscale-0 transition-all duration-700" />
                              <div className="absolute inset-0 bg-cyan-900/40 mix-blend-multiply"></div>
                          </div>
                      </div>
                  </div>
              </div>
          </div>
      </section>

    </div>
  );
};