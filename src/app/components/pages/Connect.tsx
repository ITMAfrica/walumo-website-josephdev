import React from 'react';
import { motion } from 'motion/react';
import { Wifi, Globe, Shield, Zap, Check, ArrowRight, Server, Activity } from 'lucide-react';
import { Button } from '../ui/button';
import DigitalRain from '../ui/DigitalRain';

const fadeIn = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" } }
};

const stagger = {
  visible: { transition: { staggerChildren: 0.1 } }
};

export const Connect = ({ onNavigate }: { onNavigate: (page: string) => void }) => {
  return (
    <div className="bg-slate-950 min-h-screen font-sans selection:bg-cyan-500/30">
      
      {/* HERO SECTION */}
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
            <motion.div variants={fadeIn} className="flex justify-center mb-8">
              
            </motion.div>

            <motion.h1 
              variants={fadeIn}
              className="text-5xl md:text-7xl font-semibold tracking-tight text-white mb-8 leading-[1.1]"
            >
              The internet <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-blue-500">without limits</span>, <br/> 
              wherever you are.
            </motion.h1>

            <motion.p 
              variants={fadeIn}
              className="text-lg md:text-xl text-slate-300 mb-10 max-w-2xl mx-auto leading-relaxed"
            >
              Connect your business with next-generation Deep Tech infrastructure. 
              Reliable performance, military-grade security, and instant deployment.
            </motion.p>

            <motion.div variants={fadeIn} className="flex flex-col sm:flex-row gap-4 justify-center items-center">
              <Button 
                size="lg" 
                className="h-14 px-8 text-base bg-gradient-to-r from-blue-600 to-cyan-600 hover:from-blue-500 hover:to-cyan-500 text-white rounded-full shadow-[0_0_20px_rgba(6,182,212,0.3)] hover:shadow-[0_0_30px_rgba(6,182,212,0.5)] transition-all duration-300 border-0"
                onClick={() => onNavigate('contact')}
              >
                Get Started Now
                <ArrowRight className="ml-2 h-5 w-5" />
              </Button>
              <Button 
                size="lg" 
                variant="outline"
                className="h-14 px-8 text-base bg-white/5 border-white/10 text-white hover:bg-white/10 hover:text-white rounded-full backdrop-blur-sm transition-all duration-300"
              >
                Discover the technology
              </Button>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* AUDIT / FEATURES SECTION */}
      <section className="py-24 md:py-32 relative">
        <div className="container px-4 md:px-6">
          <motion.div 
            initial="hidden" 
            whileInView="visible" 
            viewport={{ once: true, margin: "-100px" }}
            variants={stagger}
            className="grid grid-cols-1 md:grid-cols-3 gap-8"
          >
            {[
              { 
                icon: Wifi, 
                title: "Ultra-Fast Connection", 
                desc: "Symmetrical bandwidth guaranteed by fiber optics and satellite backup links." 
              },
              { 
                icon: Shield, 
                title: "Deep Tech Security", 
                desc: "End-to-end encryption and natively integrated DDoS protection within the network." 
              },
              { 
                icon: Server, 
                title: "Hybrid Infrastructure", 
                desc: "Redundant architecture combining edge cloud and dedicated physical servers." 
              }
            ].map((feature, i) => (
              <motion.div 
                key={i} 
                variants={fadeIn}
                className="group relative p-8 rounded-2xl bg-slate-900/50 border border-white/5 hover:border-cyan-500/30 transition-all duration-300 hover:bg-slate-800/50 hover:shadow-[0_8px_30px_rgb(0,0,0,0.5)] backdrop-blur-sm overflow-hidden"
              >
                <div className="absolute inset-0 bg-gradient-to-br from-cyan-500/5 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                <div className="relative z-10">
                  <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-blue-500/20 to-cyan-500/20 flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300 ring-1 ring-white/10 group-hover:ring-cyan-500/50">
                    <feature.icon className="h-6 w-6 text-cyan-400" />
                  </div>
                  <h3 className="text-xl font-semibold text-white mb-3">{feature.title}</h3>
                  <p className="text-slate-400 leading-relaxed group-hover:text-slate-300 transition-colors">
                    {feature.desc}
                  </p>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* DASHBOARD PREVIEW SECTION */}
      <section className="py-24 bg-slate-950 relative overflow-hidden">
        <div className="absolute top-0 inset-x-0 h-px bg-gradient-to-r from-transparent via-blue-500/50 to-transparent" />
        
        <div className="container px-4 md:px-6">
          <div className="flex flex-col lg:flex-row items-center gap-16">
            <div className="lg:w-1/2 space-y-8">
              <h2 className="text-3xl md:text-5xl font-semibold text-white tracking-tight leading-tight">
                Total control over your <br/>
                <span className="text-blue-400">digital ecosystem</span>
              </h2>
              <p className="text-lg text-slate-400 leading-relaxed">
                Our SaaS dashboard provides real-time visibility into the consumption, latency, and security of your access points.
              </p>
              
              <div className="space-y-4">
                {[
                  "Real-time monitoring",
                  "User access management",
                  "Usage-based or flat-rate billing",
                  "24/7 priority technical support"
                ].map((item, i) => (
                  <div key={i} className="flex items-center gap-3 text-slate-300">
                    <div className="flex-shrink-0 w-6 h-6 rounded-full bg-cyan-500/10 flex items-center justify-center border border-cyan-500/20">
                      <Check className="h-3.5 w-3.5 text-cyan-400" />
                    </div>
                    <span>{item}</span>
                  </div>
                ))}
              </div>

              <div className="pt-4">
                <Button variant="link" className="text-cyan-400 hover:text-cyan-300 pl-0 text-base">
                  Explore features <ArrowRight className="ml-2 h-4 w-4" />
                </Button>
              </div>
            </div>

            <div className="lg:w-1/2 relative">
              <div className="relative rounded-2xl bg-slate-900 border border-white/10 shadow-2xl p-2 aspect-[4/3] overflow-hidden group">
                <div className="absolute inset-0 bg-gradient-to-br from-blue-500/10 to-purple-500/10 opacity-50" />
                
                <div className="h-full w-full bg-slate-950 rounded-xl relative overflow-hidden flex flex-col p-6">
                  <div className="flex justify-between items-center mb-8">
                    <div className="h-8 w-32 bg-slate-800 rounded-lg animate-pulse" />
                    <div className="flex gap-2">
                       <div className="h-8 w-8 bg-slate-800 rounded-full" />
                       <div className="h-8 w-8 bg-slate-800 rounded-full" />
                    </div>
                  </div>
                  
                  <div className="grid grid-cols-2 gap-4 mb-6">
                    <div className="h-32 bg-slate-900/50 border border-white/5 rounded-xl p-4">
                       <div className="h-4 w-20 bg-slate-800 rounded mb-4" />
                       <div className="flex items-end gap-1 h-16">
                          {[40, 70, 45, 90, 60, 80].map((h, i) => (
                            <div key={i} style={{ height: `${h}%` }} className="flex-1 bg-blue-600/50 rounded-sm" />
                          ))}
                       </div>
                    </div>
                    <div className="h-32 bg-slate-900/50 border border-white/5 rounded-xl p-4">
                        <div className="h-4 w-20 bg-slate-800 rounded mb-4" />
                        <div className="w-full h-16 rounded-full border-[6px] border-slate-800 border-t-cyan-500 relative">
                             <div className="absolute inset-0 flex items-center justify-center text-xs text-white font-mono">98%</div>
                        </div>
                    </div>
                  </div>

                  <div className="flex-1 bg-slate-900/50 border border-white/5 rounded-xl p-4 space-y-3">
                     {[1, 2, 3].map((r) => (
                        <div key={r} className="flex justify-between items-center p-2 bg-slate-800/30 rounded-lg">
                           <div className="h-3 w-24 bg-slate-700/50 rounded" />
                           <div className="h-3 w-12 bg-cyan-900/30 rounded" />
                        </div>
                     ))}
                  </div>
                </div>
              </div>
              
              <div className="absolute -right-8 -bottom-8 w-64 h-64 bg-cyan-500/20 blur-[80px] rounded-full pointer-events-none" />
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      

    </div>
  );
};