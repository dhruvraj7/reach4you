import React, { useState } from 'react';
import { 
  ArrowUpRight, 
  Flame, 
  ShieldCheck, 
  Users, 
  TrendingUp, 
  Search, 
  CheckCircle2, 
  BotOff, 
  Sparkles, 
  MessageSquare, 
  Rocket, 
  ChevronDown, 
  Target, 
  Clock, 
  BarChart3, 
  UserCheck, 
  HeartHandshake, 
  Check, 
  HelpCircle,
  Award,
  Zap,
  Globe,
  FileText,
  Layers,
  Cpu,
  Gamepad2,
  ShoppingBag,
  Smartphone,
  Layers3,
  FileCheck,
  MessageCircle
} from 'lucide-react';
import Button from '../components/common/Button';
import Badge from '../components/common/Badge';
import Card from '../components/common/Card';

export default function Services({ setCurrentPage }) {
  // FAQ Accordion State
  const [openFaq, setOpenFaq] = useState(0);

  // 4 Authorized Service Cards ONLY
  const servicesList = [
    {
      title: "Reddit Brand Awareness",
      desc: "Distribute natural posts and comments across multiple relevant subreddits of all sizes to introduce your brand naturally to targeted communities.",
      icon: Sparkles,
      tag: "Brand Visibility",
      benefits: [
        "Distributed across multiple relevant discussion threads",
        "Subreddits of all sizes carefully chosen for your niche",
        "7-Day Live Guarantee (Posts & comments live 7+ days)"
      ]
    },
    {
      title: "Product Launch Campaigns",
      desc: "Execute multi-thread announcements across relevant subreddits to generate organic launch momentum for new software features, AI tools, games, or products.",
      icon: Rocket,
      tag: "Product Launches",
      benefits: [
        "Multi-thread launch distribution across targeted subreddits",
        "100% human posts published by 50+ experienced contributors",
        "Build early user interest and discussion volume"
      ]
    },
    {
      title: "Reddit SEO",
      desc: "Create authentic Reddit discussion posts designed to rank in Google search results for valuable commercial search terms related to your product category.",
      icon: Search,
      tag: "Google Search Visibility",
      benefits: [
        "Target high-intent search queries in your niche",
        "Leverage Google's search preference for Reddit discussions",
        "Permanent organic thread presence on Reddit"
      ]
    },
    {
      title: "Startup Growth Campaigns",
      desc: "Tailored multi-discussion promotion built to get early-stage SaaS tools, AI apps, gaming projects, and tech startups discovered organically on Reddit.",
      icon: TrendingUp,
      tag: "Startup Growth",
      benefits: [
        "Reach early adopters in niche tech & founder subreddits",
        "Multi-discussion campaign structure tailored to your package",
        "Zero automated scripts or bot networks"
      ]
    }
  ];

  // Why Reddit Marketing Works
  const whyRedditWorks = [
    {
      title: "High Commercial Buyer Intent",
      desc: "Redditors search subreddits specifically asking for real product recommendations. Positioning your product naturally inside multiple relevant threads reaches buyers during their evaluation.",
      icon: Target,
      highlight: "High Intent"
    },
    {
      title: "Google SERP Visibility",
      desc: "Google frequently ranks Reddit discussions at the top of search result pages. Creating authentic Reddit posts in your niche captures organic search traffic.",
      icon: Search,
      highlight: "Search Traffic"
    },
    {
      title: "Ad Blindness Immunity",
      desc: "Reddit users ignore banner ads and sponsored posts. Authentic discussions created by experienced contributors bypass ad-blockers and build real community trust.",
      icon: ShieldCheck,
      highlight: "Authentic Trust"
    },
    {
      title: "Subreddits of All Sizes",
      desc: "We select relevant subreddits of all sizes—small, medium, and large—based strictly on community relevance to your specific niche.",
      icon: Globe,
      highlight: "Niche Relevance"
    }
  ];

  // Industries We Serve
  const industriesWeServe = [
    { title: "SaaS", desc: "B2B & B2C software tools reaching relevant user subreddits.", icon: Layers },
    { title: "AI", desc: "AI platforms, LLMs & developer tools engaging tech communities.", icon: Cpu },
    { title: "Gaming", desc: "Indie games, studios, and gaming projects building authentic player interest.", icon: Gamepad2 },
    { title: "Technology", desc: "Cloud tools, dev software, and tech solutions.", icon: TrendingUp },
    { title: "Ecommerce", desc: "D2C brands gaining authentic community discussion.", icon: ShoppingBag },
    { title: "Mobile Apps", desc: "iOS & Android mobile apps reaching active app user subreddits.", icon: Smartphone }
  ];

  // Process Steps (5 Steps)
  const processSteps = [
    { step: "01", title: "Discovery Call", desc: "We evaluate your product, niche, and campaign goals." },
    { step: "02", title: "Subreddit Selection", desc: "We select relevant subreddits of all sizes tailored specifically to your target niche." },
    { step: "03", title: "Multi-Thread Strategy", desc: "We design authentic post angles and comment topics distributed across multiple discussions." },
    { step: "04", title: "Contributor Execution", desc: "Our 50+ experienced Reddit contributors publish your package of posts and comments." },
    { step: "05", title: "7-Day Live Guarantee", desc: "Payment is only made for Reddit posts and comments that remain live for at least 7 consecutive days." }
  ];

  // Why Reach4You 6 Cards
  const whyReach4YouFeatures = [
    { title: "100% Human Reddit Contributors", desc: "Every campaign is executed by experienced Redditors with aged, active accounts.", icon: HeartHandshake },
    { title: "No Bots or Automation", desc: "Strict zero-bot policy protecting your brand from bans, downvotes, and community backlash.", icon: BotOff },
    { title: "Multi-Thread Reddit Strategy", desc: "Campaigns are distributed across multiple subreddits rather than relying on a single discussion thread.", icon: Layers3 },
    { title: "7-Day Live Guarantee", desc: "Payment is only made for Reddit posts and comments that remain live for at least 7 consecutive days.", icon: Clock },
    { title: "Manual Quality Review", desc: "Every post and comment is manually reviewed to ensure proper subreddit rule compliance.", icon: FileCheck },
    { title: "Transparent Communication", desc: "Direct, honest communication on package deliverables, subreddit selection, and campaign status.", icon: MessageCircle }
  ];

  // FAQ Items
  const serviceFaqs = [
    { q: "How are subreddits selected for a campaign?", a: "We carefully select relevant subreddits of all sizes (small, medium, and large) based strictly on your product's specific niche and community relevance." },
    { q: "What is your live campaign guarantee?", a: "Payment is only made for Reddit posts and comments that remain live for at least 7 consecutive days." },
    { q: "Why do campaigns use multiple discussion threads?", a: "Distributing posts and comments across multiple threads and subreddits ensures broader brand reach and avoids relying on a single discussion thread." },
    { q: "Do you use bots or automated software?", a: "No. We have a strict zero-bot policy. Every post and comment is created manually by experienced Reddit contributors with aged, active accounts." }
  ];

  return (
    <div className="pt-20 pb-20 overflow-hidden space-y-24 sm:space-y-32">
      
      {/* =========================================================================
          SECTION 1: HERO SECTION
          ========================================================================= */}
      <section className="relative min-h-[70vh] flex items-center justify-center pt-16 pb-12 px-4 sm:px-6 lg:px-8">
        <div className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[650px] h-[400px] bg-gradient-to-tr from-[#FF4500]/15 via-[#FF4500]/5 to-transparent blur-[140px] rounded-full pointer-events-none -z-10 animate-pulse-glow"></div>

        <div className="max-w-4xl mx-auto text-center space-y-8 relative z-10">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-orange-50 border border-orange-200/70 text-[#FF4500] text-xs font-extrabold tracking-wide uppercase shadow-xs">
            <Flame className="w-4 h-4 fill-[#FF4500]" />
            <span>High-Converting Reddit Growth</span>
          </div>

          <h1 className="text-4xl sm:text-6xl lg:text-7xl font-extrabold text-slate-950 tracking-tight leading-[1.08]">
            Reddit Marketing <span className="text-[#FF4500]">Services</span>
          </h1>

          <p className="text-lg sm:text-xl text-slate-600 max-w-2xl mx-auto font-normal leading-relaxed">
            We help startups and brands grow through authentic Reddit discussions across multiple relevant subreddits powered by 50+ vetted contributors.
          </p>

          <div className="pt-2 flex flex-col sm:flex-row items-center justify-center gap-4">
            <Button 
              onClick={() => setCurrentPage('contact')} 
              icon={ArrowUpRight}
              className="w-full sm:w-auto px-8 py-4 text-base shadow-xl shadow-[#FF4500]/25 hover:shadow-[#FF4500]/40"
            >
              Get My Free Reddit Strategy
            </Button>
            <Button 
              variant="outline" 
              onClick={() => setCurrentPage('pricing')} 
              icon={BarChart3}
              className="w-full sm:w-auto px-8 py-4 text-base"
            >
              View Campaign Packages
            </Button>
          </div>

          <div className="pt-6 flex flex-wrap items-center justify-center gap-6 text-xs font-semibold text-slate-500">
            <span className="flex items-center gap-1.5">
              <CheckCircle2 className="w-4 h-4 text-[#FF4500]" />
              50+ Vetted Contributors
            </span>
            <span className="flex items-center gap-1.5">
              <CheckCircle2 className="w-4 h-4 text-[#FF4500]" />
              Zero Bots Guarantee
            </span>
            <span className="flex items-center gap-1.5">
              <CheckCircle2 className="w-4 h-4 text-[#FF4500]" />
              7-Day Live Guarantee
            </span>
          </div>
        </div>
      </section>


      {/* =========================================================================
          SECTION 2: SERVICES (ONLY THE 4 AUTHORIZED SERVICES)
          ========================================================================= */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
        <div className="text-center max-w-3xl mx-auto space-y-3">
          <Badge icon={Sparkles} variant="orange">Core Services</Badge>
          <h2 className="text-3xl sm:text-5xl font-extrabold text-slate-950 tracking-tight">
            Specialized Reddit Services
          </h2>
          <p className="text-slate-600 text-base">
            Every service creates authentic Reddit posts and comments distributed across multiple relevant subreddits of all sizes.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-5xl mx-auto">
          {servicesList.map((service, idx) => (
            <Card key={idx} className="flex flex-col justify-between p-8 bg-white border-slate-200/90 hover:border-[#FF4500] hover:shadow-xl transition-all group">
              <div>
                <div className="flex items-center justify-between mb-5">
                  <div className="w-12 h-12 rounded-2xl bg-orange-50 text-[#FF4500] flex items-center justify-center group-hover:bg-[#FF4500] group-hover:text-white transition-colors shadow-xs">
                    <service.icon className="w-6 h-6" />
                  </div>
                  <span className="text-[11px] font-extrabold text-[#FF4500] bg-orange-50 border border-orange-200/60 px-3 py-1 rounded-full">
                    {service.tag}
                  </span>
                </div>

                <h3 className="text-2xl font-extrabold text-slate-950 group-hover:text-[#FF4500] transition-colors">{service.title}</h3>
                <p className="text-sm text-slate-600 mt-2 leading-relaxed font-normal">{service.desc}</p>

                <div className="mt-6 pt-5 border-t border-slate-100 space-y-3">
                  <p className="text-xs font-extrabold text-slate-900 uppercase tracking-wider">Key Benefits:</p>
                  <ul className="space-y-2.5">
                    {service.benefits.map((b, bi) => (
                      <li key={bi} className="flex items-start gap-2 text-xs text-slate-700 font-medium">
                        <Check className="w-4 h-4 text-[#FF4500] shrink-0 mt-0.5" />
                        <span>{b}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>

              <div className="pt-6 mt-6 border-t border-slate-100 flex items-center justify-between">
                <button 
                  onClick={() => setCurrentPage('contact')} 
                  className="w-full py-2.5 rounded-xl bg-slate-50 hover:bg-[#FF4500] hover:text-white text-slate-900 text-xs font-bold transition-all flex items-center justify-center gap-1.5 cursor-pointer shadow-xs"
                >
                  <span>Start This Campaign</span>
                  <ArrowUpRight className="w-3.5 h-3.5" />
                </button>
              </div>
            </Card>
          ))}
        </div>
      </section>


      {/* =========================================================================
          SECTION: WHY REDDIT MARKETING WORKS
          ========================================================================= */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
        <div className="text-center max-w-3xl mx-auto space-y-3">
          <Badge icon={TrendingUp} variant="orange">The Strategic Advantage</Badge>
          <h2 className="text-3xl sm:text-5xl font-extrabold text-slate-950 tracking-tight">
            Why Reddit Marketing Works
          </h2>
          <p className="text-slate-600 text-base">
            Reddit is where high-intent buyers evaluate solutions before making purchasing decisions.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {whyRedditWorks.map((item, idx) => (
            <Card key={idx} className="p-8 bg-white border-slate-200/90 hover:border-[#FF4500] flex flex-col justify-between group">
              <div>
                <div className="flex items-center justify-between mb-4">
                  <div className="w-12 h-12 rounded-2xl bg-slate-950 text-white flex items-center justify-center group-hover:bg-[#FF4500] transition-colors">
                    <item.icon className="w-6 h-6" />
                  </div>
                  <span className="text-[11px] font-extrabold text-[#FF4500] bg-orange-50 border border-orange-200/60 px-3 py-1 rounded-full">
                    {item.highlight}
                  </span>
                </div>
                <h3 className="text-2xl font-extrabold text-slate-950">{item.title}</h3>
                <p className="text-sm text-slate-600 mt-3 leading-relaxed font-normal">{item.desc}</p>
              </div>
            </Card>
          ))}
        </div>
      </section>


      {/* =========================================================================
          SECTION: INDUSTRIES WE SERVE
          ========================================================================= */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
        <div className="text-center max-w-3xl mx-auto space-y-3">
          <Badge icon={Target} variant="orange">Target Verticals</Badge>
          <h2 className="text-3xl sm:text-5xl font-extrabold text-slate-950 tracking-tight">
            Industries We Serve
          </h2>
          <p className="text-slate-600 text-base">
            We carefully select relevant subreddits of all sizes tailored specifically to your product's niche.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {industriesWeServe.map((ind, idx) => (
            <Card key={idx} className="p-8 bg-white hover:border-[#FF4500] flex flex-col justify-between group">
              <div>
                <div className="w-12 h-12 rounded-2xl bg-orange-50 text-[#FF4500] flex items-center justify-center mb-4 group-hover:scale-105 transition-transform">
                  <ind.icon className="w-6 h-6" />
                </div>
                <h3 className="text-2xl font-bold text-slate-950">{ind.title}</h3>
                <p className="text-sm text-slate-600 mt-2 leading-relaxed font-normal">{ind.desc}</p>
              </div>
            </Card>
          ))}
        </div>
      </section>


      {/* =========================================================================
          SECTION: OUR PROCESS
          ========================================================================= */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
        <div className="text-center max-w-3xl mx-auto space-y-3">
          <Badge icon={Clock} variant="orange">Clear Execution Path</Badge>
          <h2 className="text-3xl sm:text-5xl font-extrabold text-slate-950 tracking-tight">
            Our Process
          </h2>
          <p className="text-slate-600 text-base">
            How we execute your package of posts and comments across multiple relevant subreddits.
          </p>
        </div>

        <div className="relative">
          <div className="hidden lg:block absolute top-1/2 left-0 right-0 h-1 bg-slate-200 -translate-y-1/2 z-0"></div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-6 relative z-10">
            {processSteps.map((p, idx) => (
              <div key={idx} className="bg-white rounded-3xl p-6 border border-slate-200/90 shadow-xs hover:border-[#FF4500] hover:shadow-lg transition-all flex flex-col justify-between group">
                <div>
                  <div className="w-10 h-10 rounded-full bg-slate-950 text-white font-extrabold text-xs flex items-center justify-center mb-4 group-hover:bg-[#FF4500] transition-colors shadow-md">
                    {p.step}
                  </div>
                  <h3 className="text-base font-bold text-slate-950 group-hover:text-[#FF4500] transition-colors">{p.title}</h3>
                  <p className="text-xs text-slate-500 mt-2 leading-relaxed font-normal">{p.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>


      {/* =========================================================================
          SECTION: WHY REACH4YOU
          ========================================================================= */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-gradient-to-b from-slate-950 via-slate-900 to-slate-950 text-white rounded-3xl p-8 sm:p-14 border border-slate-800 space-y-12 shadow-2xl relative overflow-hidden">
          <div className="absolute top-0 right-1/4 w-96 h-96 bg-[#FF4500]/15 blur-3xl rounded-full pointer-events-none"></div>

          <div className="text-center max-w-3xl mx-auto space-y-3 relative z-10">
            <span className="px-3 py-1 rounded-full bg-orange-950/80 text-[#FF4500] border border-orange-800/60 text-xs font-extrabold uppercase tracking-wide">
              The Reach4You Standard
            </span>
            <h2 className="text-3xl sm:text-5xl font-extrabold tracking-tight">
              Why Reach4You
            </h2>
            <p className="text-slate-400 text-base">
              Key agency guarantees setting us apart.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 relative z-10">
            {whyReach4YouFeatures.map((item, idx) => (
              <div key={idx} className="p-6 rounded-2xl bg-slate-900/90 border border-slate-800 hover:border-orange-500/50 transition-all space-y-3 group">
                <div className="flex items-center gap-3">
                  <div className="w-8 h-8 rounded-full bg-[#FF4500]/20 text-[#FF4500] flex items-center justify-center shrink-0 border border-[#FF4500]/40">
                    <Check className="w-4 h-4 stroke-[3]" />
                  </div>
                  <h3 className="text-lg font-bold text-white group-hover:text-[#FF4500] transition-colors">
                    {item.title}
                  </h3>
                </div>
                <p className="text-xs text-slate-400 leading-relaxed pl-11 font-normal">
                  {item.desc}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>


      {/* =========================================================================
          SECTION: FAQ ACCORDION
          ========================================================================= */}
      <section className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
        <div className="text-center space-y-3">
          <Badge icon={HelpCircle} variant="orange">Service Questions</Badge>
          <h2 className="text-3xl sm:text-5xl font-extrabold text-slate-950 tracking-tight">
            Frequently Asked Questions
          </h2>
          <p className="text-slate-600 text-base font-normal">
            Common questions about launching your Reddit campaign with Reach4You.
          </p>
        </div>

        <div className="space-y-4">
          {serviceFaqs.map((faq, idx) => {
            const isOpen = openFaq === idx;
            return (
              <div 
                key={idx} 
                className={`rounded-2xl border transition-all overflow-hidden ${
                  isOpen ? 'bg-white border-[#FF4500]/50 shadow-md' : 'bg-slate-50/70 border-slate-200 hover:bg-white'
                }`}
              >
                <button
                  onClick={() => setOpenFaq(isOpen ? null : idx)}
                  className="w-full px-6 py-5 flex items-center justify-between text-left cursor-pointer"
                >
                  <span className="text-base font-bold text-slate-950">{faq.q}</span>
                  <div className={`w-8 h-8 rounded-full flex items-center justify-center transition-transform ${
                    isOpen ? 'bg-[#FF4500] rotate-180' : 'bg-slate-200 text-slate-700'
                  }`}>
                    <ChevronDown className={`w-4 h-4 ${isOpen ? 'text-white' : 'text-slate-700'}`} />
                  </div>
                </button>

                {isOpen && (
                  <div className="px-6 pb-6 pt-1 text-sm text-slate-600 leading-relaxed border-t border-slate-100 font-normal">
                    {faq.a}
                  </div>
                )}
              </div>
            );
          })}
        </div>
      </section>


      {/* =========================================================================
          SECTION: FINAL CTA
          ========================================================================= */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="relative rounded-3xl bg-slate-950 text-white p-10 sm:p-16 text-center space-y-8 overflow-hidden shadow-2xl">
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-[#FF4500]/25 blur-[120px] rounded-full pointer-events-none"></div>

          <div className="relative z-10 max-w-3xl mx-auto space-y-4">
            <span className="px-4 py-1.5 rounded-full bg-orange-950/80 text-[#FF4500] border border-orange-800/60 text-xs font-extrabold uppercase tracking-wide">
              Start Scaling Today
            </span>
            <h2 className="text-4xl sm:text-6xl font-extrabold tracking-tight">
              Ready to Grow on Reddit?
            </h2>
            <p className="text-slate-300 text-base sm:text-lg max-w-xl mx-auto leading-relaxed font-normal">
              Get your free strategy proposal to map relevant subreddits and select your campaign package.
            </p>
          </div>

          <div className="relative z-10 pt-2 flex flex-col sm:flex-row items-center justify-center gap-4">
            <Button 
              onClick={() => setCurrentPage('contact')} 
              icon={ArrowUpRight} 
              className="px-8 py-4 text-base shadow-xl shadow-[#FF4500]/30 hover:shadow-[#FF4500]/50"
            >
              Get My Free Reddit Strategy
            </Button>
            <Button 
              variant="outline" 
              onClick={() => setCurrentPage('pricing')} 
              icon={BarChart3}
              className="px-8 py-4 text-base bg-white/10 text-white border-slate-700 hover:bg-white/20"
            >
              View Campaign Packages
            </Button>
          </div>

        </div>
      </section>

    </div>
  );
}
