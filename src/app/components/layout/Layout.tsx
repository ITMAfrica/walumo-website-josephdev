import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Menu, X, ArrowRight, Globe, ChevronRight } from 'lucide-react';
import logo from 'figma:asset/94c269edcbdb74938b680b232242789e3d1593b9.png';
import itmLogo from 'figma:asset/f400fbfd35dd3d41718d690c56fecd7e001e64a0.png';
import footerBg from 'figma:asset/6aa33663005a9d2f7e773eda9c02ed045d2cdd12.png';

interface LayoutProps {
  children: React.ReactNode;
  currentPage: string;
  onNavigate: (page: string) => void;
}

const navItems = [
  { id: 'home', label: 'Home' },
  { id: 'connect', label: 'Solutions' },
  { id: 'about', label: 'About' },
  { id: 'what-we-do', label: 'What we do' },
  { id: 'partners', label: 'Partners' },
  { id: 'contact', label: 'Contact' },
];

export const Layout: React.FC<LayoutProps> = ({ children, currentPage, onNavigate }) => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <div className="min-h-screen flex flex-col bg-[#FFFFFF] font-sans text-[#1F2937]">
      <header 
        className={`sticky top-0 z-50 transition-all duration-300 border-b ${
          scrolled ? 'bg-white/95 backdrop-blur-sm shadow-sm border-gray-100 py-3' : 'bg-white border-transparent py-5'
        }`}
      >
        <div className="container mx-auto px-6 flex justify-between items-center">
          {/* Logo Section */}
          <div className="flex items-center gap-5">
            <div 
              className="cursor-pointer flex items-center gap-2" 
              onClick={() => onNavigate('home')}
            >
              <img src={logo} alt="WALUMO" className="h-10 md:h-12 w-auto" />
            </div>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center p-1 gap-1">
            {navItems.map((item) => (
              <button
                key={item.id}
                onClick={() => onNavigate(item.id)}
                className={`
                  relative px-4 py-1.5 rounded-full text-base font-medium transition-colors duration-300
                  ${currentPage === item.id 
                    ? 'text-white' 
                    : 'text-slate-500 hover:text-[#1E3A8A] hover:bg-blue-50'
                  }
                `}
              >
                <span className="relative z-10">{item.label}</span>
                <AnimatePresence>
                  {currentPage === item.id && (
                    <motion.div 
                      initial={{ opacity: 0, scale: 0.9 }}
                      animate={{ opacity: 1, scale: 1 }}
                      exit={{ opacity: 0, scale: 0.9 }}
                      transition={{ duration: 0.2 }}
                      className="absolute inset-0 bg-[#0F172A] rounded-full shadow-md shadow-blue-900/10"
                      style={{ zIndex: 0 }}
                    />
                  )}
                </AnimatePresence>
              </button>
            ))}
          </nav>

          {/* Powered By ITM - Moved here */}
          <div className="hidden sm:flex flex-row items-center gap-3">
              {/* Vertical Separator */}
              <div className="h-10 w-px bg-slate-200 mr-2"></div>
              
              <span className="text-[9px] uppercase text-slate-400 font-bold tracking-widest leading-none">Powered by</span>
              <img src={itmLogo} alt="ITM Holding" className="h-14 w-auto" />
          </div>

          {/* Mobile Menu Button */}
          <button 
            className="md:hidden p-2 text-[#1F2937]"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          >
            {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </header>

      {/* Mobile Menu Overlay */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            className="md:hidden bg-white border-b border-gray-200 overflow-hidden fixed top-[60px] left-0 right-0 z-40 shadow-xl"
          >
            <nav className="flex flex-col p-6 space-y-4">
              {navItems.map((item) => (
                <button
                  key={item.id}
                  onClick={() => {
                    onNavigate(item.id);
                    setIsMobileMenuOpen(false);
                  }}
                  className={`text-left text-lg font-semibold py-2 border-b border-gray-50 ${
                     currentPage === item.id ? 'text-[#1E3A8A]' : 'text-[#1F2937]'
                  }`}
                >
                  {item.label}
                </button>
              ))}
              <div className="mt-auto p-6 border-t border-gray-100 space-y-3">
                  <span className="text-xs text-slate-400 font-bold uppercase tracking-wider">Powered by</span>
                  <img src={itmLogo} alt="ITM Holding" className="h-5 w-auto self-start" />
              </div>
              <button 
                onClick={() => {
                    onNavigate('contact');
                    setIsMobileMenuOpen(false);
                  }}
                className="bg-[#1E3A8A] text-white text-center font-bold h-14 rounded-xl mt-4 hover:bg-[#1E3A8A]/90 transition-colors"
              >
                Join the community
              </button>
            </nav>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Main Content */}
      <main className="flex-grow">
        <AnimatePresence mode="wait">
          <motion.div
            key={currentPage}
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            transition={{ duration: 0.3 }}
          >
            {children}
          </motion.div>
        </AnimatePresence>
      </main>

      {/* Footer - Walumo Deep Blue */}
      <footer className="relative text-white pt-32 pb-16 overflow-hidden bg-[#0B1221]">
        {/* Background layer */}
        <div className="absolute inset-0 z-0">
          <img src={footerBg} alt="" className="w-full h-full object-cover opacity-10" />
          <div className="absolute inset-0 bg-gradient-to-b from-[#1E3A8A]/80 via-[#0B1221] to-[#0B1221]"></div>
          {/* Subtle dot grid */}
          <div className="absolute inset-0 opacity-[0.05]"
            style={{ backgroundImage: 'radial-gradient(circle, #06B6D4 1px, transparent 1px)', backgroundSize: '32px 32px' }}>
          </div>
          {/* Top cyan accent line */}
          <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-cyan-500/60 to-transparent"></div>
        </div>

        <div className="container mx-auto px-6 relative z-10">
          {/* Newsletter / Pre-footer CTA */}
          <div className="mb-20 p-8 md:p-12 rounded-3xl border border-white/10 bg-white/[0.03] backdrop-blur-sm flex flex-col md:flex-row items-center justify-between gap-8">
            <div>
              <h3 className="text-2xl font-bold text-white mb-2">Stay in the loop</h3>
              <p className="text-white/60 max-w-sm">Innovation news, hackathon announcements, and ecosystem updates — directly to your inbox.</p>
            </div>
            <div className="flex gap-3 w-full md:w-auto">
              <input
                type="email"
                placeholder="your@email.com"
                className="flex-1 md:w-64 bg-white/10 border border-white/10 rounded-full px-5 py-3 text-sm text-white placeholder-white/40 outline-none focus:border-cyan-500/50 transition-colors"
              />
              <button className="bg-gradient-to-r from-blue-600 to-cyan-600 hover:from-blue-500 hover:to-cyan-500 text-white px-6 py-3 rounded-full font-bold text-sm transition-all whitespace-nowrap shadow-lg shadow-cyan-500/20">
                Subscribe
              </button>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-20">
            
            {/* Brand Column */}
            <div className="col-span-1 md:col-span-1 space-y-6">
               <img src={logo} alt="WALUMO" className="h-20 w-auto brightness-0 invert" />
               <p className="text-white/60 leading-relaxed text-sm">
                 Connecting Africa's untapped technological potential to global innovation standards.
               </p>
               <div className="flex gap-3 pt-2">
                 {['in', 'X', 'ig'].map((social) => (
                    <a key={social} href="#" className="w-9 h-9 rounded-full bg-white/10 border border-white/10 flex items-center justify-center hover:bg-cyan-500 hover:border-cyan-500 transition-all duration-300">
                        <span className="text-[10px] font-bold text-white/80">{social}</span>
                    </a>
                 ))}
               </div>
            </div>
            
            {/* Links */}
            <div>
              <h4 className="font-bold text-base mb-6 text-cyan-400 tracking-wide">Explore</h4>
              <ul className="space-y-3 text-white/60 text-sm">
                {navItems.slice(0, 3).map((item) => (
                  <li key={item.id}>
                    <button onClick={() => onNavigate(item.id)} className="hover:text-white transition-colors flex items-center gap-2 group">
                      <ChevronRight size={14} className="text-blue-500 group-hover:translate-x-1 transition-transform" /> {item.label}
                    </button>
                  </li>
                ))}
              </ul>
            </div>

             {/* Links 2 */}
             <div>
              <h4 className="font-bold text-base mb-6 text-cyan-400 tracking-wide">Participate</h4>
              <ul className="space-y-3 text-white/60 text-sm">
                  <li>
                    <button onClick={() => onNavigate('partners')} className="hover:text-white transition-colors flex items-center gap-2 group">
                      <ChevronRight size={14} className="text-blue-500 group-hover:translate-x-1 transition-transform" /> Become a Partner
                    </button>
                  </li>
                  <li>
                    <button onClick={() => onNavigate('contact')} className="hover:text-white transition-colors flex items-center gap-2 group">
                      <ChevronRight size={14} className="text-blue-500 group-hover:translate-x-1 transition-transform" /> Join the community
                    </button>
                  </li>
                  <li>
                    <button onClick={() => onNavigate('what-we-do')} className="hover:text-white transition-colors flex items-center gap-2 group">
                      <ChevronRight size={14} className="text-blue-500 group-hover:translate-x-1 transition-transform" /> HackLab 2025
                    </button>
                  </li>
              </ul>
            </div>

            {/* Contact */}
            <div>
              <h4 className="font-bold text-base mb-6 text-cyan-400 tracking-wide">Nairobi HQ</h4>
              <ul className="space-y-4 text-white/60 text-sm">
                <li className="flex flex-col gap-1">
                    <span className="font-semibold text-white text-sm">Highway Heights, 7th floor</span>
                    <span>Marcus Garvey Road, Kilimani</span>
                </li>
                <li>
                    <a href="mailto:info@walumoafrica.com" className="text-cyan-400 hover:text-cyan-300 transition-colors underline decoration-cyan-500/30 underline-offset-4 text-sm">
                        info@walumoafrica.com
                    </a>
                </li>
                
              </ul>
            </div>
          </div>

          {/* Bottom bar */}
          <div className="border-t border-white/10 pt-10 flex flex-col md:flex-row justify-between items-center text-xs text-white/40 gap-4">
            <div className="flex items-center gap-3">
              <p>© {new Date().getFullYear()} Walumo. An ITM Holding entity.</p>
              <div className="hidden md:flex items-center gap-2">
                <span className="w-1 h-1 rounded-full bg-white/20"></span>
                <img src={itmLogo} alt="ITM Holding" className="h-5 w-auto opacity-60 hover:opacity-100 transition-opacity" />
              </div>
            </div>
            <div className="flex gap-6">
                <a href="#" className="hover:text-white transition-colors">Privacy Policy</a>
                <a href="#" className="hover:text-white transition-colors">Terms of Service</a>
                <a href="#" className="hover:text-white transition-colors">Cookie Settings</a>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
};