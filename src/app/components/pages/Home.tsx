import React from 'react';
import { useNavigate } from 'react-router';
import { Helmet } from 'react-helmet-async';
import { motion } from 'motion/react';
import ArrowRight from 'lucide-react/dist/esm/icons/arrow-right';
import Users from 'lucide-react/dist/esm/icons/users';
import PlayCircle from 'lucide-react/dist/esm/icons/play-circle';
import Code2 from 'lucide-react/dist/esm/icons/code-2';
import Terminal from 'lucide-react/dist/esm/icons/terminal';
import { Button } from '@/components/ui/button';
import { HeroSection } from '../ui/HeroSection';
import heroBg from 'figma:asset/3528385c2e2e9a2d61d5e0a64051d7038f1259f1.webp';
import communityBg from 'figma:asset/f263ea4a0a3d5094f42bac7146cfde5bc52408ae.webp';

// Images
const hackathonImage = 'https://images.unsplash.com/photo-1583225358814-4094d1a8aef2?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxoYWNrYXRob24lMjBjb2RpbmclMjBldmVudCUyMGFmcmljYXxlbnwxfHx8fDE3NjQyNDA5NTd8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral';
const communityImage = communityBg;

export const Home: React.FC = () => {
  const navigate = useNavigate();
  return (
    <>
    <Helmet>
      <title>Walumo — Code. Craft. Culture. | Pan-African Technology</title>
      <meta name="description" content="Walumo propels your digital ambitions by merging technical expertise and strategic creativity. The tech division of ITM Holding, operating across Africa." />
      <meta property="og:title" content="Walumo — Code. Craft. Culture." />
      <meta property="og:description" content="Precision engineering at the service of human imagination. Pan-African technology company." />
      <meta property="og:url" content="https://walumoafrica.com/" />
      <link rel="canonical" href="https://walumoafrica.com/" />
      <script type="application/ld+json">
        {`{
          "@context": "https://schema.org",
          "@type": "Organization",
          "name": "Walumo",
          "url": "https://walumoafrica.com",
          "logo": "https://walumoafrica.com/favicon.png",
          "description": "Pan-African technology company — the tech division of ITM Holding, connecting Africa's untapped potential to global innovation standards.",
          "email": "info@walumoafrica.com",
          "telephone": "+254-700-000000",
          "address": {
            "@type": "PostalAddress",
            "streetAddress": "7th Floor Highway Heights, Marcus Garvey Road, Kilimani",
            "addressLocality": "Nairobi",
            "addressCountry": "KE"
          },
          "parentOrganization": {
            "@type": "Organization",
            "name": "ITM Holding"
          },
          "sameAs": [
            "https://linkedin.com/company/walumo",
            "https://twitter.com/walumo",
            "https://instagram.com/walumo"
          ]
        }`}
      </script>
    </Helmet>
    <div className="w-full overflow-hidden bg-[#FFFFFF]">
      
      {/* HERO SECTION */}
      <HeroSection
        image={heroBg}
        imageAlt="Walumo Team"
        height="screen"
        minHeight={700}
      >
        <div className="absolute inset-0 z-20 flex flex-col justify-center container mx-auto px-4 md:px-16 py-12 md:py-20">
            
            <div className="flex flex-col lg:flex-row items-start lg:items-center justify-between gap-16 w-full relative z-10">
                
                <div className="lg:w-7/12 relative">
                    <motion.div
                        initial={{ opacity: 0, y: 30 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8, ease: "easeOut" }}
                        className="space-y-6"
                    >
                        

                        <h1 className="text-5xl md:text-7xl font-bold text-white tracking-tight mb-8 leading-none">
                            Code<span className="text-slate-600">.</span><br/>
                            <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 via-blue-500 to-purple-600">
                                Craft
                            </span><span className="text-slate-600">.</span><br/>
                            Culture<span className="text-blue-500">.</span>
                        </h1>

                        <div className="flex items-center gap-6 pt-6">
                            <div className="h-px w-20 bg-gradient-to-r from-cyan-500 to-transparent"></div>
                            <p className="text-lg md:text-xl text-slate-300 font-light max-w-lg">
                                Precision engineering at the service of human imagination.
                            </p>
                        </div>
                    </motion.div>
                </div>

                <div className="lg:w-4/12 mb-6">
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8, delay: 0.3 }}
                        className="relative group"
                    >
                        <div className="absolute -inset-1 bg-gradient-to-br from-cyan-500 to-blue-600 rounded-2xl blur opacity-20 group-hover:opacity-40 transition duration-1000"></div>
                        
                        <div className="relative bg-[#0B1120]/80 backdrop-blur-xl border border-white/10 p-8 rounded-2xl">
                            <p className="text-lg text-slate-300 mb-8 font-light leading-relaxed">
                                <span className="text-white font-medium">Walumo</span> propels your digital ambitions by merging technical expertise and strategic creativity.
                            </p>
                            
                            <div className="flex flex-col gap-3">
                                <Button 
                                    className="w-full bg-white text-[#0F172A] hover:bg-cyan-50 h-14 rounded-xl text-base font-bold transition-all flex items-center justify-between px-10 group/btn"
                                    onClick={() => navigate('/contact')}
                                >
                                    <span>Start a Project</span>
                                    <ArrowRight className="w-4 h-4 text-cyan-600 group-hover/btn:translate-x-1 transition-transform" />
                                </Button>
                                <Button 
                                    variant="ghost"
                                    className="w-full text-slate-400 hover:text-white hover:bg-white/5 h-12 rounded-lg text-sm font-medium transition-all justify-start px-6"
                                    onClick={() => navigate('/about')}
                                >
                                    <PlayCircle className="w-4 h-4 mr-2" />
                                    Discover Walumo
                                </Button>
                            </div>
                        </div>
                    </motion.div>
                </div>

            </div>
        </div>
      </HeroSection>

      <section className="py-32 relative bg-slate-50 overflow-hidden">
        <div className="absolute inset-0 pointer-events-none">
            <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-blue-200 to-transparent opacity-50"></div>
            <div className="absolute top-20 right-0 w-[500px] h-[500px] bg-blue-100/50 rounded-full blur-3xl -translate-y-1/2 translate-x-1/2"></div>
            <div className="absolute bottom-0 left-0 w-[500px] h-[500px] bg-cyan-100/50 rounded-full blur-3xl translate-y-1/2 -translate-x-1/2"></div>
        </div>

        <div className="container mx-auto px-4 md:px-16 relative z-10">
            <div className="text-center max-w-3xl mx-auto mb-20">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6 }}
                >
                    
                    <h2 className="text-4xl md:text-5xl font-bold text-[#1E3A8A] mb-6">What drives us</h2>
                    <p className="text-xl text-[#64748B] leading-relaxed font-light">
                        Walumo connects raw innovation to the reality on the ground, creating an ecosystem where technology serves humanity.
                    </p>
                </motion.div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-7xl mx-auto">
                <motion.div 
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6, delay: 0.1 }}
                    whileHover={{ y: -5 }}
                    className="md:col-span-2 bg-white rounded-[2rem] p-10 shadow-xl shadow-slate-200/50 border border-slate-100 hover:border-blue-200 transition-all duration-500 group relative overflow-hidden"
                >
                    <div className="relative z-10 flex flex-col md:flex-row h-full gap-8">
                        <div className="flex-1">
                            <div className="w-14 h-14 bg-blue-50 rounded-2xl flex items-center justify-center mb-6 text-blue-600 group-hover:bg-blue-600 group-hover:text-white transition-colors duration-500 shadow-sm">
                                <Code2 className="w-7 h-7" />
                            </div>
                            <h3 className="text-2xl font-bold text-[#1E3A8A] mb-4">Technical Excellence</h3>
                            <p className="text-slate-600 leading-relaxed mb-6">
                                We don't follow trends, we build lasting architectures. Our code is clean, documented, and designed for continental scale.
                            </p>
                            <div className="flex items-center gap-2 text-sm text-blue-600 font-semibold group-hover:gap-3 transition-all cursor-pointer">
                                <span>Explore our stack</span> <ArrowRight className="w-4 h-4" />
                            </div>
                        </div>
                        
                        <div className="flex-1 relative">
                            <div className="absolute inset-0 bg-gradient-to-r from-white via-transparent to-transparent z-10 md:hidden"></div>
                            <div className="bg-[#0F172A] rounded-xl p-5 font-mono text-xs text-blue-100 shadow-2xl border border-slate-800 transform group-hover:scale-[1.02] group-hover:-rotate-1 transition-all duration-500 h-full flex flex-col justify-center">
                                <div className="flex gap-2 mb-4 border-b border-slate-700/50 pb-3">
                                    <div className="w-2.5 h-2.5 rounded-full bg-red-500"></div>
                                    <div className="w-2.5 h-2.5 rounded-full bg-yellow-500"></div>
                                    <div className="w-2.5 h-2.5 rounded-full bg-green-500"></div>
                                    <span className="ml-auto text-[10px] text-slate-500">core_module.ts</span>
                                </div>
                                <div className="space-y-2 opacity-90 leading-relaxed">
                                    <p><span className="text-purple-400">export class</span> <span className="text-yellow-300">Future</span> <span className="text-purple-400">extends</span> <span className="text-blue-300">Vision</span> {'{'}</p>
                                    <p className="pl-4"><span className="text-purple-400">async</span> <span className="text-blue-400">build</span>(<span className="text-sky-300">region</span>: <span className="text-green-300">Africa</span>) {'{'}</p>
                                    <p className="pl-8 text-slate-500">// Deploying scalable solutions</p>
                                    <p className="pl-8"><span className="text-purple-400">const</span> impact = <span className="text-yellow-300">await</span> <span className="text-blue-300">tech</span>.<span className="text-blue-300">empower</span>();</p>
                                    <p className="pl-8"><span className="text-purple-400">return</span> impact.<span className="text-blue-300">maximize</span>();</p>
                                    <p className="pl-4">{'}'}</p>
                                    <p>{'}'}</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </motion.div>

                <motion.div 
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6, delay: 0.2 }}
                    whileHover={{ y: -5 }}
                    className="bg-white rounded-[2rem] p-8 shadow-xl shadow-slate-200/50 border border-slate-100 hover:border-cyan-200 transition-all duration-500 group relative overflow-hidden flex flex-col"
                >
                    <div className="absolute -right-20 -top-20 w-60 h-60 bg-cyan-50 rounded-full blur-3xl group-hover:bg-cyan-100 transition-colors duration-700"></div>
                    
                    <div className="relative z-10 flex-1">
                        <div className="w-14 h-14 bg-cyan-50 rounded-2xl flex items-center justify-center mb-6 text-cyan-600 group-hover:bg-cyan-600 group-hover:text-white transition-colors duration-500 shadow-sm">
                            <Users className="w-7 h-7" />
                        </div>
                        <h3 className="text-2xl font-bold text-[#1E3A8A] mb-4">Collective Intelligence</h3>
                        <p className="text-slate-600 leading-relaxed mb-6">
                            Innovation is not an individual sport. We bring brilliant minds together.
                        </p>
                        
                        <div className="relative h-48 w-full mt-auto flex items-center justify-center">
                            <div className="relative w-full h-full">
                                <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-4 h-4 bg-[#1E3A8A] rounded-full z-20 shadow-[0_0_20px_rgba(30,58,138,0.3)]"></div>
                                <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-full h-full border border-cyan-100 rounded-full animate-[ping_3s_linear_infinite] opacity-20"></div>
                                <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-2/3 h-2/3 border border-cyan-200 rounded-full animate-[ping_3s_linear_infinite_1s] opacity-20"></div>

                                {[0, 72, 144, 216, 288].map((deg, i) => (
                                    <motion.div 
                                        key={i}
                                        className="absolute top-1/2 left-1/2 w-[45%] h-0.5 bg-gradient-to-r from-blue-200 to-transparent origin-left"
                                        style={{ rotate: `${deg}deg` }}
                                    >
                                        <motion.div 
                                            className="absolute right-0 -top-1.5 w-3 h-3 rounded-full bg-white border-2 border-cyan-500"
                                            animate={{ scale: [1, 1.2, 1] }}
                                            transition={{ duration: 2, delay: i * 0.4, repeat: Infinity }}
                                        />
                                    </motion.div>
                                ))}
                            </div>
                        </div>
                    </div>
                </motion.div>

                <motion.div 
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6, delay: 0.3 }}
                    whileHover={{ y: -5 }}
                    className="md:col-span-3 bg-[#1E3A8A] text-white rounded-[2rem] p-10 md:p-12 relative overflow-hidden group shadow-2xl shadow-blue-900/20"
                >
                    <div className="absolute inset-0 bg-gradient-to-br from-[#1E3A8A] to-[#172554] z-0"></div>
                    <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-blue-500/20 rounded-full blur-3xl -translate-y-1/2 translate-x-1/3 group-hover:bg-blue-400/20 transition-colors duration-700"></div>
                    
                    <div className="relative z-10 flex flex-col md:flex-row items-center justify-between gap-12">
                        <div className="md:w-1/2">
                            
                            <h3 className="text-3xl md:text-4xl font-bold mb-6 leading-tight">
                                Real impact is measured in <span className="text-cyan-300">changed lives</span>.
                            </h3>
                            <p className="text-blue-100 text-lg max-w-xl leading-relaxed font-light opacity-90">
                                Beyond code, we measure our success by the jobs created, the skills passed on, and the economic value generated locally.
                            </p>
                            <div className="mt-8 flex gap-4">
                                <Button 
                                    onClick={() => navigate('/about')}
                                    className="bg-white text-[#1E3A8A] hover:bg-cyan-50 border-none font-bold h-12 px-8 rounded-xl shadow-lg hover:shadow-xl transition-all"
                                >
                                    Our Mission
                                </Button>
                            </div>
                        </div>
                        
                        <div className="md:w-5/12 w-full bg-white/5 backdrop-blur-md rounded-2xl p-8 border border-white/10 shadow-inner">
                            <div className="flex items-end justify-between h-40 gap-3">
                                {[35, 55, 45, 70, 60, 85, 95].map((h, i) => (
                                    <div key={i} className="w-full relative group/bar">
                                        <div className="absolute bottom-0 w-full bg-blue-500/30 rounded-t-sm h-full opacity-20"></div>
                                        <motion.div 
                                            initial={{ height: 0 }}
                                            whileInView={{ height: `${h}%` }}
                                            transition={{ duration: 1.2, delay: i * 0.1, ease: "easeOut" }}
                                            className="absolute bottom-0 left-0 right-0 rounded-t-sm bg-gradient-to-t from-cyan-500 to-blue-400 group-hover/bar:from-cyan-400 group-hover/bar:to-blue-300 transition-all"
                                        >
                                            <div className="absolute -top-8 left-1/2 -translate-x-1/2 text-xs font-bold text-white opacity-0 group-hover/bar:opacity-100 transition-opacity whitespace-nowrap bg-black/50 px-2 py-1 rounded">
                                                +{h}%
                                            </div>
                                        </motion.div>
                                    </div>
                                ))}
                            </div>
                            <div className="flex justify-between mt-4 text-xs font-medium text-blue-200/80 uppercase tracking-wider border-t border-white/10 pt-4">
                                <span>Launch</span>
                                <span>Today</span>
                            </div>
                        </div>
                    </div>
                </motion.div>
            </div>
        </div>
      </section>

      <section className="bg-white py-24 border-y border-gray-100">
        <div className="container mx-auto px-4 md:px-16">
            <div className="flex flex-col lg:flex-row items-start gap-16">
                <div className="w-full lg:w-1/2 relative">
                     <div className="relative rounded-2xl overflow-hidden shadow-2xl border border-gray-200 bg-gray-900">
                        <div className="bg-[#1F293B] px-4 py-3 flex items-center gap-2 border-b border-white/10">
                            <div className="flex gap-1.5">
                                <div className="w-3 h-3 rounded-full bg-red-500"></div>
                                <div className="w-3 h-3 rounded-full bg-yellow-500"></div>
                                <div className="w-3 h-3 rounded-full bg-green-500"></div>
                            </div>
                            <div className="ml-4 flex items-center gap-2 text-xs text-slate-400 font-mono bg-black/20 px-3 py-1 rounded-full">
                                <Terminal size={10} />
                                <span>hacklab_v2025.sh</span>
                            </div>
                        </div>
                        
                        <div className="relative group">
                            <img src={hackathonImage} alt="Hackathon" className="w-full object-cover opacity-90 group-hover:scale-105 transition-transform duration-700" loading="lazy" />
                            <div className="absolute inset-0 bg-[#1E3A8A]/20 group-hover:bg-[#1E3A8A]/10 transition-colors"></div>
                            
                            <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-[#0f172a] to-transparent p-6 pt-20">
                                <div className="flex items-center gap-4 text-white/80 font-mono text-xs">
                                    <div className="flex items-center gap-1"><Code2 size={12} /> <span>48h_coding</span></div>
                                    <div className="flex items-center gap-1"><Users size={12} /> <span>150_devs</span></div>
                                </div>
                            </div>
                        </div>
                     </div>
                     
                     <div className="absolute -bottom-10 -right-10 w-40 h-40 rounded-full bg-[#06B6D4] opacity-10 -z-10"></div>
                </div>

                <div className="w-full lg:w-1/2">
                    
                    <h2 className="text-4xl font-bold text-[#1E3A8A] mb-6">Walumo HackLab 2025</h2>
                    <p className="text-lg text-[#6B7280] mb-8 leading-relaxed">
                        "Where talent meets technology". Walumo organizes hackathons, digital challenges, and innovation bootcamps designed to discover and empower Africa's most promising builders.
                    </p>
                    
                    <div className="bg-[#F9FAFB] p-6 rounded-xl border border-gray-100">
                        <p className="font-bold text-[#1F2937] mb-3">Stay informed about upcoming challenges</p>
                        <div className="flex gap-3">
                            <input 
                                type="email" 
                                placeholder="Your professional email" 
                                className="flex-1 bg-white border border-gray-200 rounded-md px-4 py-3 text-sm outline-none focus:border-[#3B82F6] focus:ring-1 focus:ring-[#3B82F6]"
                            />
                            <button className="bg-[#1E3A8A] text-white px-6 rounded-md font-bold hover:bg-[#1E3A8A]/90 transition-colors">
                                Subscribe
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
      </section>

      

      <section className="relative py-24 overflow-hidden">
         <div className="absolute inset-x-0 top-[10%] bottom-[10%]">
             <img src={communityImage} alt="Community" className="w-full h-full object-cover" loading="lazy" />
             <div className="absolute inset-0 bg-[#1E3A8A]/90 mix-blend-multiply"></div>
         </div>
         
         <div className="container mx-auto px-4 md:px-16 relative z-10 text-center">
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-8">Join the movement</h2>
            <p className="text-xl text-white/90 max-w-2xl mx-auto mb-12 font-light">
                Be part of Africa's growing community of innovators, builders, and dreamers shaping the digital future.
            </p>
            <Button 
                className="bg-white text-[#1E3A8A] hover:bg-[#F9FAFB] px-10 h-14 rounded-full font-bold shadow-lg transition-all"
                onClick={() => navigate('/contact')}
            >
                Join our community
            </Button>
         </div>
      </section>

    </div>
    </>
  );
};