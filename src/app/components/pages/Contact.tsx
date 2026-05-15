import React from 'react';
import { Helmet } from 'react-helmet-async';
import { motion } from 'motion/react';
import Mail from 'lucide-react/dist/esm/icons/mail';
import MapPin from 'lucide-react/dist/esm/icons/map-pin';
import ArrowRight from 'lucide-react/dist/esm/icons/arrow-right';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Label } from '@/components/ui/label';
import { HeroSection } from '../ui/HeroSection';

export const Contact: React.FC = () => {
  return (
    <>
    <Helmet>
      <title>Walumo — Contact Us | Start Your Digital Journey</title>
      <meta name="description" content="Turn your entrepreneurial ambitions into reality with the Walumo innovation ecosystem. Contact our team in Nairobi today." />
      <meta property="og:title" content="Walumo — Contact Our Team" />
      <meta property="og:description" content="Turn your entrepreneurial ambitions into reality. Reach out to the Walumo team in Nairobi and start your digital transformation." />
      <meta property="og:url" content="https://walumoafrica.com/contact" />
      <link rel="canonical" href="https://walumoafrica.com/contact" />
    </Helmet>
    <div className="bg-white min-h-screen">
      
      {/* Hero / Banner Section */}
      <HeroSection
        image="https://images.unsplash.com/photo-1761795111868-4851b056cf63?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHx0ZWNobm9sb2d5JTIwY29tbXVuaWNhdGlvbiUyMG5ldHdvcmt8ZW58MXx8fHwxNzY2OTk4ODQwfDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral"
        imageAlt="Technology Communication"
        height="70vh"
        className="flex items-center"
      >
        <div className="container mx-auto px-4 md:px-16 relative z-20 grid grid-cols-1 lg:grid-cols-2 gap-12 items-center h-full py-20">
          
          <div className="text-white max-w-2xl">
             <motion.div 
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8 }}
             >
                
                
                <h1 className="text-5xl md:text-7xl font-bold text-white tracking-tight mb-8 leading-none">
                   Contact <br/>
                   <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-blue-500">our team</span>
                </h1>
                
                <p className="text-xl text-slate-300 max-w-xl leading-relaxed font-light border-l-2 border-cyan-500 pl-6">
                   Turn your entrepreneurial ambitions into reality with the Walumo innovation ecosystem.
                </p>
             </motion.div>
          </div>

          <div className="hidden lg:block relative h-full min-h-[400px]">
          </div>

        </div>
      </HeroSection>

      {/* Main Contact Section */}
      <div className="container mx-auto px-4 md:px-16 py-24 relative z-20">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 lg:gap-12 max-w-6xl mx-auto">
          
          <motion.div 
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="bg-[#1E3A8A] text-white p-10 rounded-2xl shadow-xl shadow-blue-900/20 h-full flex flex-col justify-between relative overflow-hidden group/card"
          >
             <div className="absolute inset-0 z-0">
                <div className="absolute inset-0 w-full h-full overflow-hidden">
                    <img 
                        src="https://images.unsplash.com/photo-1763926444233-003d397fe0f1?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxhYnN0cmFjdCUyMGdlb21ldHJpYyUyMHRlY2hub2xvZ3klMjBwYXR0ZXJuJTIwYmx1ZSUyMGRhcmt8ZW58MXx8fHwxNzY1MjA5NjYzfDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral" 
                        alt="Technology Pattern" 
                        className="w-full h-full object-cover opacity-10 mix-blend-overlay group-hover/card:scale-105 transition-transform duration-1000"
                        loading="lazy"
                    />
                    
                    <div 
                        className="absolute inset-0 pointer-events-none opacity-30"
                        style={{
                            backgroundImage: 'linear-gradient(to right, rgba(6, 182, 212, 0.3) 1px, transparent 1px), linear-gradient(to bottom, rgba(6, 182, 212, 0.3) 1px, transparent 1px)',
                            backgroundSize: '40px 40px',
                            maskImage: 'linear-gradient(135deg, black 20%, transparent 90%)',
                            WebkitMaskImage: 'linear-gradient(135deg, black 20%, transparent 90%)'
                        }}
                    ></div>

                    <motion.div 
                        className="absolute top-[20%] right-[30%] w-10 h-10 bg-[#06B6D4]/10 border border-[#06B6D4]/20"
                        animate={{ opacity: [0, 1, 0] }}
                        transition={{ duration: 2, repeat: Infinity, repeatDelay: 1 }}
                    />
                    <motion.div 
                        className="absolute bottom-[40%] left-[20%] w-10 h-10 bg-[#06B6D4]/10 border border-[#06B6D4]/20"
                        animate={{ opacity: [0, 1, 0] }}
                        transition={{ duration: 3, repeat: Infinity, repeatDelay: 0.5 }}
                    />
                </div>
             </div>

             <div className="absolute top-0 right-0 w-64 h-64 bg-[#3B82F6] rounded-full blur-3xl opacity-20 translate-x-1/2 -translate-y-1/2 z-0"></div>
             <div className="absolute bottom-0 left-0 w-64 h-64 bg-[#06B6D4] rounded-full blur-3xl opacity-20 -translate-x-1/2 translate-y-1/2 z-0"></div>

             <div className="relative z-10 space-y-10">
                <div>
                    <h3 className="text-xl font-bold mb-8 border-b border-white/10 pb-4 flex items-center gap-2">
                      <span className="w-1.5 h-6 bg-[#06B6D4] rounded-full"></span>
                      Our Details
                    </h3>
                    <div className="space-y-8">
                        <div className="flex items-start gap-4 group">
                            <div className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center shrink-0 group-hover:bg-[#06B6D4] transition-colors duration-300">
                                <MapPin className="w-5 h-5 text-white" />
                            </div>
                            <div>
                                <p className="font-bold text-lg mb-1">Nairobi HQ</p>
                                <p className="text-blue-200 leading-relaxed text-sm">
                                    7th Floor Highway Heights,<br/>
                                    Marcus Garvey Road, Kilimani,<br/>
                                    Nairobi, Kenya
                                </p>
                            </div>
                        </div>

                        <div className="flex items-start gap-4 group">
                            <div className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center shrink-0 group-hover:bg-[#06B6D4] transition-colors duration-300">
                                <Mail className="w-5 h-5 text-white" />
                            </div>
                            <div>
                                <p className="font-bold text-lg mb-1">Email</p>
                                <a href="mailto:info@walumoafrica.com" className="text-blue-200 hover:text-white hover:underline text-sm transition-colors">
                                    info@walumoafrica.com
                                </a>
                            </div>
                        </div>
                    </div>
                </div>

                <div>
                    <h3 className="font-bold mb-4 text-sm uppercase tracking-wider text-blue-300">Follow Us</h3>
                    <div className="flex gap-4">
                         {['LinkedIn', 'X', 'Instagram'].map((social) => (
                            <a key={social} href="#" className="w-10 h-10 rounded-full bg-white/5 border border-white/10 flex items-center justify-center hover:bg-[#06B6D4] hover:border-[#06B6D4] hover:scale-110 transition-all duration-300">
                                <span className="text-xs font-bold">{social[0]}</span>
                            </a>
                         ))}
                    </div>
                </div>
             </div>
          </motion.div>

          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="lg:col-span-2 bg-white p-8 md:p-12 rounded-2xl border border-gray-100 shadow-2xl shadow-slate-200/50"
          >
             <div className="mb-8">
                <h2 className="text-2xl font-bold text-[#1E3A8A] mb-2">Send us a message</h2>
                <p className="text-slate-500">Fill out the form below and our team will get back to you within 24 hours.</p>
             </div>

             <form className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div className="space-y-2">
                        <Label htmlFor="firstname" className="text-slate-700 font-medium">First Name</Label>
                        <Input id="firstname" placeholder="Your first name" className="bg-slate-50 border-slate-200 h-12 rounded-lg focus:border-[#3B82F6] focus:ring-[#3B82F6] focus:bg-white transition-all" />
                    </div>
                    <div className="space-y-2">
                        <Label htmlFor="lastname" className="text-slate-700 font-medium">Last Name</Label>
                        <Input id="lastname" placeholder="Your last name" className="bg-slate-50 border-slate-200 h-12 rounded-lg focus:border-[#3B82F6] focus:ring-[#3B82F6] focus:bg-white transition-all" />
                    </div>
                </div>
                
                <div className="space-y-2">
                    <Label htmlFor="email" className="text-slate-700 font-medium">Email Address</Label>
                    <Input id="email" type="email" placeholder="you@company.com" className="bg-slate-50 border-slate-200 h-12 rounded-lg focus:border-[#3B82F6] focus:ring-[#3B82F6] focus:bg-white transition-all" />
                </div>

                <div className="space-y-2">
                    <Label htmlFor="message" className="text-slate-700 font-medium">Message</Label>
                    <Textarea id="message" placeholder="Tell us more about your project..." className="bg-slate-50 border-slate-200 min-h-[150px] rounded-lg focus:border-[#3B82F6] focus:ring-[#3B82F6] focus:bg-white transition-all p-4 resize-none" />
                </div>

                <div className="pt-4 flex justify-end">
                    <Button size="lg" className="w-full md:w-auto bg-[#1E3A8A] hover:bg-[#1E3A8A]/90 text-white h-14 px-8 rounded-full text-base font-bold transition-all shadow-lg hover:shadow-blue-900/20 group">
                        Send Message 
                        <ArrowRight className="ml-2 w-4 h-4 group-hover:translate-x-1 transition-transform" />
                    </Button>
                </div>
             </form>
          </motion.div>

        </div>
      </div>
    </div>
    </>
  );
};
