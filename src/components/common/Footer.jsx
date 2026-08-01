import React from 'react';
import { ArrowUpRight, ShieldCheck, CheckCircle2, Mail } from 'lucide-react';

export default function Footer({ setCurrentPage }) {
  const industries = [
    'SaaS Companies',
    'AI Startups',
    'Gaming Studios',
    'Tech Startups',
    'Ecommerce Brands',
    'Mobile Apps'
  ];

  return (
    <footer className="bg-slate-950 text-slate-400 pt-16 pb-12 border-t border-slate-800 relative overflow-hidden" role="contentinfo">
      {/* Ambient Orange Glow */}
      <div className="absolute top-0 right-1/4 w-96 h-96 bg-[#FF4500]/10 blur-3xl rounded-full pointer-events-none"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-10 pb-12 border-b border-slate-800/80">
          
          {/* Brand Column */}
          <div className="lg:col-span-2 space-y-4">
            <button 
              onClick={() => { setCurrentPage('home'); }} 
              className="flex items-center gap-2.5 text-left cursor-pointer"
            >
              <div className="w-9 h-9 rounded-xl bg-[#FF4500] flex items-center justify-center text-white font-extrabold text-xl shadow-md">
                r/
              </div>
              <span className="font-extrabold text-2xl text-white tracking-tight">
                Reach<span className="text-[#FF4500]">4You</span>
              </span>
            </button>
            <p className="text-sm text-slate-400 max-w-sm leading-relaxed">
              Reach4You is the dedicated Reddit marketing agency creating authentic posts and comments distributed across multiple relevant subreddits of all sizes. Powered by 50+ vetted Reddit contributors.
            </p>
            <div className="flex items-center gap-2 text-xs text-orange-400 font-medium bg-orange-950/40 border border-orange-800/40 px-3 py-1.5 rounded-full w-fit">
              <ShieldCheck className="w-4 h-4 text-[#FF4500]" />
              <span>10-Day Live Guarantee Included</span>
            </div>
          </div>

          {/* Quick Navigation Links */}
          <div>
            <h3 className="text-xs font-bold text-slate-200 uppercase tracking-wider mb-4">Navigation</h3>
            <ul className="space-y-2.5 text-sm">
              {[
                { name: 'Home', id: 'home' },
                { name: 'Services', id: 'services' },
                { name: 'Pricing', id: 'pricing' },
                { name: 'Blog', id: 'blog' },
                { name: 'Become a Contributor', id: 'contributor' },
                { name: 'About Us', id: 'about' },
                { name: 'Contact', id: 'contact' },
              ].map((item) => (
                <li key={item.id}>
                  <button 
                    onClick={() => { setCurrentPage(item.id); }}
                    className="hover:text-white transition-colors cursor-pointer text-left"
                  >
                    {item.name}
                  </button>
                </li>
              ))}
            </ul>
          </div>

          {/* Target Industries */}
          <div>
            <h3 className="text-xs font-bold text-slate-200 uppercase tracking-wider mb-4">Industries We Serve</h3>
            <ul className="space-y-2.5 text-sm">
              {industries.map((ind) => (
                <li key={ind} className="flex items-center gap-2 text-slate-400">
                  <CheckCircle2 className="w-3.5 h-3.5 text-[#FF4500]" />
                  <span>{ind}</span>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Information */}
          <div>
            <h3 className="text-xs font-bold text-slate-200 uppercase tracking-wider mb-4">Get In Touch</h3>
            <p className="text-xs text-slate-400 mb-3 leading-relaxed">
              Have questions or ready to launch your campaign? Contact our team directly:
            </p>
            <a 
              href="mailto:reach4you2@gmail.com" 
              className="text-xs font-bold text-[#FF4500] hover:underline flex items-center gap-1.5 mb-4"
            >
              <Mail className="w-4 h-4" />
              <span>reach4you2@gmail.com</span>
            </a>
            <button 
              onClick={() => { setCurrentPage('contact'); }}
              className="w-full py-2.5 px-4 rounded-xl text-xs font-bold text-white bg-[#FF4500] hover:bg-[#E03D00] transition-colors flex items-center justify-center gap-2 shadow-lg shadow-[#FF4500]/20 cursor-pointer"
            >
              <span>Get My Free Reddit Strategy</span>
              <ArrowUpRight className="w-3.5 h-3.5" />
            </button>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between text-xs text-slate-500 gap-4">
          <p>© {new Date().getFullYear()} Reach4You Agency. Payment is based on Reddit posts and comments that remain live on Reddit for at least 10 days.</p>
          <div className="flex items-center gap-6">
            <button onClick={() => setCurrentPage('about')} className="hover:text-slate-400 cursor-pointer">About Agency</button>
            <button onClick={() => setCurrentPage('contributor')} className="hover:text-slate-400 cursor-pointer">Become a Contributor</button>
            <button onClick={() => setCurrentPage('contact')} className="hover:text-slate-400 cursor-pointer">Contact Us</button>
          </div>
        </div>
      </div>
    </footer>
  );
}
