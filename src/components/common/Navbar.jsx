import React, { useState, useEffect } from 'react';
import { Menu, X, ArrowUpRight } from 'lucide-react';

export default function Navbar({ currentPage, setCurrentPage }) {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 20) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'Home', id: 'home' },
    { name: 'Services', id: 'services' },
    { name: 'Pricing', id: 'pricing' },
    { name: 'Blog', id: 'blog' },
    { name: 'Become a Contributor', id: 'contributor' },
    { name: 'About', id: 'about' },
    { name: 'Contact', id: 'contact' },
  ];

  return (
    <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
      isScrolled ? 'py-3 glass-nav shadow-xs' : 'py-5 bg-white/80 backdrop-blur-sm'
    }`} aria-label="Main Navigation">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between">
          
          {/* Logo */}
          <button 
            onClick={() => { setCurrentPage('home'); }}
            className="flex items-center gap-2.5 group text-left cursor-pointer focus:outline-none focus:ring-2 focus:ring-[#FF4500]/30 rounded-xl"
            aria-label="Reach4You Home"
          >
            <div className="w-9 h-9 rounded-xl bg-[#FF4500] flex items-center justify-center text-white shadow-md shadow-[#FF4500]/20 group-hover:scale-105 transition-transform">
              <span className="font-extrabold text-xl tracking-tighter">r/</span>
            </div>
            <div>
              <div className="flex items-center gap-1.5">
                <span className="font-extrabold text-xl tracking-tight text-slate-900 group-hover:text-[#FF4500] transition-colors">
                  Reach<span className="text-[#FF4500]">4You</span>
                </span>
                <span className="px-1.5 py-0.5 text-[10px] font-semibold tracking-wide bg-orange-50 text-[#FF4500] border border-orange-200/60 rounded-full">
                  Reddit Only
                </span>
              </div>
              <p className="text-[10px] text-slate-500 font-medium tracking-tight -mt-0.5 hidden sm:block">
                Authentic Reddit Marketing Agency
              </p>
            </div>
          </button>

          {/* Desktop Navigation Links */}
          <div className="hidden lg:flex items-center gap-1 bg-slate-100/80 p-1.5 rounded-full border border-slate-200/70 shadow-xs">
            {navLinks.map((link) => {
              const isActive = currentPage === link.id || (link.id === 'blog' && typeof currentPage === 'string' && currentPage.startsWith('blog/'));
              return (
                <button
                  key={link.id}
                  onClick={() => { setCurrentPage(link.id); setMobileMenuOpen(false); }}
                  aria-current={isActive ? 'page' : undefined}
                  className={`px-4 py-1.5 rounded-full text-xs font-semibold transition-all cursor-pointer focus:outline-none focus:ring-2 focus:ring-[#FF4500]/30 ${
                    isActive
                      ? 'bg-white text-slate-950 shadow-xs border border-slate-200/50 font-bold'
                      : 'text-slate-600 hover:text-slate-950 hover:bg-white/50'
                  }`}
                >
                  {link.name}
                </button>
              );
            })}
          </div>

          {/* CTA & Mobile Menu Toggle */}
          <div className="flex items-center gap-3">
            <button 
              onClick={() => setCurrentPage('contact')}
              className="hidden sm:inline-flex items-center gap-1.5 px-5 py-2.5 rounded-full text-xs font-bold text-white bg-[#FF4500] hover:bg-[#E03D00] transition-all shadow-md shadow-[#FF4500]/25 hover:shadow-lg hover:shadow-[#FF4500]/35 hover:-translate-y-0.5 cursor-pointer focus:outline-none focus:ring-2 focus:ring-[#FF4500]/50"
            >
              <span>Get My Free Reddit Strategy</span>
              <ArrowUpRight className="w-3.5 h-3.5" />
            </button>

            {/* Mobile Hamburger Button */}
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="lg:hidden p-2 rounded-xl text-slate-700 hover:bg-slate-100 transition-colors focus:outline-none focus:ring-2 focus:ring-[#FF4500]/30"
              aria-label="Toggle Navigation Menu"
              aria-expanded={mobileMenuOpen}
            >
              {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Drawer */}
      {mobileMenuOpen && (
        <div className="lg:hidden bg-white/95 backdrop-blur-xl border-b border-slate-200 px-4 py-5 shadow-2xl animate-in slide-in-from-top-4 duration-200">
          <div className="flex flex-col gap-2">
            {navLinks.map((link) => {
              const isActive = currentPage === link.id || (link.id === 'blog' && typeof currentPage === 'string' && currentPage.startsWith('blog/'));
              return (
                <button
                  key={link.id}
                  onClick={() => { setCurrentPage(link.id); setMobileMenuOpen(false); }}
                  aria-current={isActive ? 'page' : undefined}
                  className={`px-4 py-2.5 rounded-xl text-sm font-semibold text-left transition-all ${
                    isActive
                      ? 'bg-orange-50 text-[#FF4500] font-bold border border-orange-200/50'
                      : 'text-slate-700 hover:bg-slate-50'
                  }`}
                >
                  {link.name}
                </button>
              );
            })}
            <div className="pt-3 mt-2 border-t border-slate-100">
              <button 
                onClick={() => { setCurrentPage('contact'); setMobileMenuOpen(false); }}
                className="w-full py-3 rounded-xl text-sm font-semibold text-white bg-[#FF4500] text-center shadow-md flex items-center justify-center gap-2"
              >
                <span>Get My Free Reddit Strategy</span>
                <ArrowUpRight className="w-4 h-4" />
              </button>
            </div>
          </div>
        </div>
      )}
    </nav>
  );
}
