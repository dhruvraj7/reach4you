import React, { useState } from 'react';
import { 
  ArrowUpRight, 
  Flame, 
  ShieldCheck, 
  Users, 
  TrendingUp, 
  Cpu, 
  ShoppingBag, 
  Gamepad2, 
  Layers, 
  MessageSquare, 
  Rocket, 
  Search, 
  CheckCircle2, 
  ChevronDown, 
  BotOff, 
  Sparkles, 
  Target, 
  Globe, 
  HeartHandshake, 
  Check, 
  Clock, 
  Award, 
  Layers3, 
  Eye, 
  ThumbsUp, 
  FileCheck, 
  MessageCircle 
} from 'lucide-react';
import Button from '../components/common/Button';
import Badge from '../components/common/Badge';
import Card from '../components/common/Card';

export default function Home({ setCurrentPage }) {
  // State for Interactive FAQ Accordion
  const [openFaq, setOpenFaq] = useState(0);

  // 1. Campaign Results (2 SaaS Case Studies)
  const campaignResults = [
    {
      badge: "Completed Reddit Campaign",
      title: "SaaS Product Launch Campaign",
      niche: "Multi-Subreddit Campaign",
      metrics: [
        { label: "Organic Reddit Views", value: "30,000+", icon: Eye },
        { label: "Organic Upvotes", value: "100+", icon: ThumbsUp },
        { label: "Posts & Comments Published", value: "20+", icon: MessageSquare },
        { label: "Active Reddit Contributors", value: "30+", icon: Users }
      ],
      details: "Campaign executed through authentic Reddit posts and comments distributed across multiple relevant subreddits."
    },
    {
      badge: "SaaS Growth Campaign",
      title: "B2B SaaS Growth Campaign",
      niche: "Multi-Subreddit Campaign",
      metrics: [
        { label: "Organic Reddit Views", value: "40,000+", icon: Eye },
        { label: "Organic Upvotes", value: "120+", icon: ThumbsUp },
        { label: "Posts & Comments Published", value: "30+", icon: MessageSquare },
        { label: "Active Reddit Contributors", value: "40+", icon: Users }
      ],
      details: "Multi-thread SaaS growth campaign distributed across targeted productivity, software, and founder subreddits."
    }
  ];

  // 4 Authorized Services ONLY
  const services = [
    {
      title: "Reddit Brand Awareness",
      desc: "Distribute natural posts and comments across multiple relevant subreddits to introduce your brand organically to targeted communities.",
      icon: Sparkles,
      tag: "Brand Visibility"
    },
    {
      title: "Product Launch Campaigns",
      desc: "Execute multi-thread announcements across carefully chosen subreddits of all sizes to generate launch momentum for new products.",
      icon: Rocket,
      tag: "Product Launches"
    },
    {
      title: "Reddit SEO",
      desc: "Create authentic Reddit discussion posts designed to rank in Google search results for key commercial search terms related to your industry.",
      icon: Search,
      tag: "Search Visibility"
    },
    {
      title: "Startup Growth Campaigns",
      desc: "Tailored multi-discussion promotion built to get early stage SaaS tools, AI apps, and tech startups discovered on Reddit.",
      icon: TrendingUp,
      tag: "Startup Growth"
    }
  ];

  // 5 Step Workflow (Updated to 7-Day Live Guarantee)
  const steps = [
    { step: "01", title: "Discovery Call", desc: "We evaluate your product, niche, and campaign objectives." },
    { step: "02", title: "Subreddit Selection", desc: "We carefully select relevant subreddits of all sizes tailored specifically to your niche." },
    { step: "03", title: "Multi-Thread Strategy", desc: "We design authentic post angles and comment topics distributed across multiple discussion threads." },
    { step: "04", title: "Contributor Execution", desc: "Our 50+ experienced Reddit contributors publish the agreed package of posts and comments." },
    { step: "05", title: "7-Day Live Guarantee", desc: "Payment is only made for Reddit posts and comments that remain live for at least 7 consecutive days." }
  ];

  // Target Industries
  const industries = [
    { title: "SaaS", desc: "Software tools reaching relevant user subreddits.", icon: Layers },
    { title: "AI", desc: "AI platforms & developer tools engaging tech communities.", icon: Cpu },
    { title: "Gaming", desc: "Indie games and studios building authentic player interest.", icon: Gamepad2 },
    { title: "Technology", desc: "Developer tools, cloud solutions, and tech products.", icon: TrendingUp },
    { title: "Ecommerce", desc: "D2C brands and physical products gaining real user discussion.", icon: ShoppingBag }
  ];

  // Why Choose Reach4You (6 Explicit Cards)
  const whyChooseUsCards = [
    { title: "100% Human Reddit Contributors", desc: "Every campaign is executed by experienced Redditors with aged, active accounts.", icon: HeartHandshake },
    { title: "No Bots or Automation", desc: "Strict zero-bot policy protecting your brand from bans, downvotes, and community backlash.", icon: BotOff },
    { title: "Multi-Thread Reddit Strategy", desc: "Campaigns are distributed across multiple subreddits rather than relying on a single discussion thread.", icon: Layers3 },
    { title: "7-Day Live Guarantee", desc: "Payment is only made for Reddit posts and comments that remain live for at least 7 consecutive days.", icon: Clock },
    { title: "Manual Quality Review", desc: "Every post and comment is manually reviewed to ensure proper subreddit rule compliance.", icon: FileCheck },
    { title: "Transparent Communication", desc: "Direct, honest communication on package deliverables, subreddit selection, and campaign status.", icon: MessageCircle }
  ];

  // Realistic FAQ
  const faqs = [
    {
      q: "How does Reach4You execute Reddit campaigns?",
      a: "Our team of 50+ vetted Reddit contributors creates authentic posts and comments distributed across multiple carefully selected subreddits relevant to your niche."
    },
    {
      q: "Which subreddits do you target for campaigns?",
      a: "We carefully select relevant subreddits of all sizes (small, medium, and large) based strictly on your product's specific niche, ensuring community relevance."
    },
    {
      q: "What is your campaign guarantee?",
      a: "Payment is only made for Reddit posts and comments that remain live for at least 7 consecutive days."
    },
    {
      q: "Do you use bots or automated software?",
      a: "No. We have a strict zero-bot policy. Every post and comment is published manually by experienced Reddit contributors with aged, active accounts."
    },
    {
      q: "Why do you distribute campaigns across multiple threads?",
      a: "Distributing discussions across multiple threads and subreddits builds broader brand exposure and prevents campaign reliance on any single discussion thread."
    }
  ];

  return (
    <div className="pt-20 pb-20 overflow-hidden space-y-24 sm:space-y-32">
      
      {/* =========================================================================
          HERO SECTION
          ========================================================================= */}
      <section className="relative min-h-[85vh] flex items-center justify-center pt-12 pb-16 px-4 sm:px-6 lg:px-8">
        
        {/* Ambient Glow */}
        <div className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[450px] bg-gradient-to-tr from-[#FF4500]/15 via-[#FF4500]/5 to-transparent blur-[140px] rounded-full pointer-events-none -z-10 animate-pulse-glow"></div>

        <div className="max-w-5xl mx-auto text-center space-y-8 relative z-10">
          
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-orange-50 border border-orange-200/70 text-[#FF4500] text-xs font-extrabold tracking-wide uppercase shadow-xs">
            <Flame className="w-4 h-4 fill-[#FF4500]" />
            <span>Dedicated Reddit Marketing Agency</span>
          </div>

          <h1 className="text-4xl sm:text-6xl lg:text-7xl font-extrabold text-slate-950 tracking-tight leading-[1.08] max-w-4xl mx-auto">
            Reddit Marketing That <span className="text-[#FF4500] inline-block relative">
              Builds Trust.
              <svg className="absolute -bottom-2 left-0 w-full h-3 text-[#FF4500]/30" viewBox="0 0 100 20" preserveAspectRatio="none">
                <path d="M0 10 Q 50 20 100 10" stroke="currentColor" strokeWidth="6" fill="none" strokeLinecap="round" />
              </svg>
            </span>
          </h1>

          <p className="text-lg sm:text-xl text-slate-600 max-w-3xl mx-auto font-normal leading-relaxed">
            Reach4You helps startups, SaaS companies, AI businesses, gaming studios, and ecommerce brands grow through authentic Reddit discussions across multiple subreddits powered by our trusted network of 50+ experienced Reddit contributors.
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
              onClick={() => setCurrentPage('contributor')}
              icon={Users}
              className="w-full sm:w-auto px-8 py-4 text-base"
            >
              Become a Contributor
            </Button>
          </div>

          <div className="pt-6 flex flex-wrap items-center justify-center gap-6 text-xs font-semibold text-slate-500">
            <span className="flex items-center gap-1.5">
              <CheckCircle2 className="w-4 h-4 text-[#FF4500]" />
              No Bots or Automation
            </span>
            <span className="flex items-center gap-1.5">
              <CheckCircle2 className="w-4 h-4 text-[#FF4500]" />
              50+ Active Reddit Contributors
            </span>
            <span className="flex items-center gap-1.5">
              <CheckCircle2 className="w-4 h-4 text-[#FF4500]" />
              Multi-Subreddit Campaigns
            </span>
            <span className="flex items-center gap-1.5">
              <CheckCircle2 className="w-4 h-4 text-[#FF4500]" />
              7-Day Live Guarantee
            </span>
          </div>

        </div>
      </section>


      {/* =========================================================================
          SECTION 1: CAMPAIGN RESULTS (REAL CAMPAIGN CASE STUDIES)
          ========================================================================= */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-10">
        <div className="text-center max-w-3xl mx-auto space-y-3">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-slate-100 text-slate-700 text-xs font-bold border border-slate-200">
            <Award className="w-3.5 h-3.5 text-[#FF4500]" />
            <span>Proven Reddit Track Record</span>
          </div>
          <h2 className="text-3xl sm:text-5xl font-extrabold text-slate-950 tracking-tight">
            Real Campaign Results
          </h2>
          <p className="text-slate-600 text-base font-normal">
            Successfully executed organic Reddit marketing campaigns across multiple relevant discussion threads.
          </p>
        </div>

        {/* 2 SaaS Campaign Case Studies Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 max-w-6xl mx-auto">
          {campaignResults.map((study, idx) => (
            <Card key={idx} className="relative p-6 sm:p-8 bg-white border-[#FF4500]/40 shadow-xl flex flex-col justify-between space-y-6">
              <div className="space-y-4">
                <div className="flex items-center justify-between border-b border-slate-100 pb-4">
                  <span className="text-xs font-extrabold text-white bg-[#FF4500] px-3 py-1 rounded-full">
                    {study.badge}
                  </span>
                  <span className="text-xs font-semibold text-slate-500">{study.niche}</span>
                </div>

                <h3 className="text-xl font-extrabold text-slate-950">{study.title}</h3>

                <div className="grid grid-cols-2 gap-3 sm:gap-4 my-2">
                  {study.metrics.map((metric, mIdx) => (
                    <div key={mIdx} className="p-4 rounded-2xl bg-orange-50/80 border border-orange-200/80 text-center">
                      <metric.icon className="w-5 h-5 text-[#FF4500] mx-auto mb-1.5" />
                      <p className="text-2xl sm:text-3xl font-extrabold text-slate-950">{metric.value}</p>
                      <p className="text-[11px] text-slate-600 font-semibold mt-1 leading-tight">{metric.label}</p>
                    </div>
                  ))}
                </div>

                <p className="text-xs text-slate-600 leading-relaxed font-normal pt-1">
                  {study.details}
                </p>
              </div>

              <div className="pt-4 border-t border-slate-100 flex items-center justify-between gap-4 text-xs text-slate-500">
                <span className="font-semibold text-slate-400">7-Day Live Guarantee</span>
                <button 
                  onClick={() => setCurrentPage('contact')} 
                  className="font-bold text-[#FF4500] hover:underline flex items-center gap-1 cursor-pointer shrink-0"
                >
                  <span>Get My Free Reddit Strategy</span>
                  <ArrowUpRight className="w-3.5 h-3.5" />
                </button>
              </div>
            </Card>
          ))}
        </div>

        <p className="text-center text-xs text-slate-400 italic">
          More campaign case studies will be added as we complete additional client campaigns.
        </p>
      </section>


      {/* =========================================================================
          SECTION 2: WHY CHOOSE REACH4YOU (6 EXPLICIT TRUST CARDS)
          ========================================================================= */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
        <div className="bg-gradient-to-b from-slate-950 via-slate-900 to-slate-950 text-white rounded-3xl p-8 sm:p-14 border border-slate-800 space-y-12 shadow-2xl relative overflow-hidden">
          
          <div className="absolute top-0 left-1/3 w-96 h-96 bg-[#FF4500]/15 blur-3xl rounded-full pointer-events-none"></div>

          <div className="text-center max-w-3xl mx-auto space-y-3 relative z-10">
            <span className="px-3 py-1 rounded-full bg-orange-950/80 text-[#FF4500] border border-orange-800/60 text-xs font-extrabold uppercase tracking-wide">
              The Reach4You Standard
            </span>
            <h2 className="text-3xl sm:text-5xl font-extrabold tracking-tight">
              Why Choose Reach4You
            </h2>
            <p className="text-slate-400 text-base font-normal">
              Built specifically for businesses seeking authentic, bot-free Reddit marketing across multiple subreddits.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 relative z-10">
            {whyChooseUsCards.map((item, idx) => (
              <div key={idx} className="p-6 rounded-2xl bg-slate-900/90 border border-slate-800 hover:border-orange-500/50 transition-all space-y-3 group">
                <div className="flex items-center gap-3">
                  <div className="w-8 h-8 rounded-full bg-[#FF4500]/20 text-[#FF4500] flex items-center justify-center shrink-0 border border-[#FF4500]/40">
                    <Check className="w-4 h-4 stroke-[3]" />
                  </div>
                  <h3 className="text-base font-bold text-white group-hover:text-[#FF4500] transition-colors">
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
          SECTION 3: SERVICES
          ========================================================================= */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
        <div className="text-center max-w-3xl mx-auto space-y-3">
          <Badge icon={Flame} variant="orange">Our Capabilities</Badge>
          <h2 className="text-3xl sm:text-5xl font-extrabold text-slate-950 tracking-tight">
            Specialized Reddit Marketing Services
          </h2>
          <p className="text-slate-600 text-base">
            We focus exclusively on creating authentic posts and comments distributed across multiple relevant subreddits of all sizes.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-5xl mx-auto">
          {services.map((srv, idx) => (
            <Card key={idx} className="flex flex-col justify-between p-8 bg-white border-slate-200/90 hover:border-[#FF4500] hover:shadow-xl transition-all group">
              <div>
                <div className="flex items-center justify-between mb-4">
                  <div className="w-12 h-12 rounded-2xl bg-orange-50 text-[#FF4500] flex items-center justify-center group-hover:bg-[#FF4500] group-hover:text-white transition-colors">
                    <srv.icon className="w-6 h-6" />
                  </div>
                  <span className="text-[11px] font-bold text-[#FF4500] bg-orange-50 border border-orange-200/50 px-3 py-1 rounded-full">
                    {srv.tag}
                  </span>
                </div>
                <h3 className="text-2xl font-bold text-slate-950 group-hover:text-[#FF4500] transition-colors">{srv.title}</h3>
                <p className="text-slate-600 text-sm mt-3 leading-relaxed font-normal">{srv.desc}</p>
              </div>

              <div className="pt-6 mt-6 border-t border-slate-100 flex items-center justify-between">
                <button 
                  onClick={() => setCurrentPage('services')} 
                  className="text-xs font-bold text-slate-900 group-hover:text-[#FF4500] flex items-center gap-1 cursor-pointer"
                >
                  <span>Learn details</span>
                  <ArrowUpRight className="w-3.5 h-3.5" />
                </button>
              </div>
            </Card>
          ))}
        </div>
      </section>


      {/* =========================================================================
          SECTION 4: HOW REACH4YOU WORKS
          ========================================================================= */}
      <section className="bg-slate-950 text-white py-20 rounded-3xl mx-4 sm:mx-6 lg:px-8 px-6 sm:px-12 relative overflow-hidden">
        <div className="absolute top-0 right-0 w-96 h-96 bg-[#FF4500]/15 blur-3xl rounded-full pointer-events-none"></div>

        <div className="max-w-7xl mx-auto space-y-16 relative z-10">
          
          <div className="text-center max-w-3xl mx-auto space-y-3">
            <span className="px-3 py-1 rounded-full bg-orange-950/60 text-[#FF4500] border border-orange-800/50 text-xs font-extrabold uppercase tracking-wide">
              Service Execution
            </span>
            <h2 className="text-3xl sm:text-5xl font-extrabold tracking-tight">
              How Reach4You Works
            </h2>
            <p className="text-slate-400 text-base font-normal">
              A transparent approach for publishing authentic posts and comments distributed across multiple relevant subreddits.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-6">
            {steps.map((st, idx) => (
              <div key={idx} className="relative p-6 rounded-2xl bg-slate-900/80 border border-slate-800 space-y-4 hover:border-orange-500/50 transition-colors">
                <span className="text-3xl font-extrabold text-[#FF4500] opacity-80">{st.step}</span>
                <h3 className="text-base font-bold text-white">{st.title}</h3>
                <p className="text-slate-400 text-xs leading-relaxed font-normal">{st.desc}</p>
              </div>
            ))}
          </div>

          <div className="text-center pt-4">
            <Button onClick={() => setCurrentPage('contact')} icon={ArrowUpRight} className="px-8 py-3.5 text-xs font-bold">
              Get My Free Reddit Strategy
            </Button>
          </div>

        </div>
      </section>


      {/* =========================================================================
          SECTION 5: INDUSTRIES WE SERVE
          ========================================================================= */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
        <div className="text-center max-w-3xl mx-auto space-y-3">
          <Badge icon={Target} variant="orange">Target Verticals</Badge>
          <h2 className="text-3xl sm:text-5xl font-extrabold text-slate-950 tracking-tight">
            Industries We Serve
          </h2>
          <p className="text-slate-600 text-base">
            We carefully select relevant subreddits of all sizes tailored specifically to your niche.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-6">
          {industries.map((ind, idx) => (
            <Card key={idx} className="text-center p-6 bg-white hover:border-[#FF4500] flex flex-col justify-between">
              <div>
                <div className="w-12 h-12 rounded-2xl bg-orange-50 text-[#FF4500] flex items-center justify-center mx-auto mb-4">
                  <ind.icon className="w-6 h-6" />
                </div>
                <h3 className="text-xl font-bold text-slate-950">{ind.title}</h3>
                <p className="text-xs text-slate-500 mt-2 leading-relaxed font-normal">{ind.desc}</p>
              </div>
            </Card>
          ))}
        </div>
      </section>


      {/* =========================================================================
          SECTION 6: FAQ ACCORDION
          ========================================================================= */}
      <section className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
        <div className="text-center space-y-3">
          <Badge icon={Sparkles} variant="orange">Got Questions?</Badge>
          <h2 className="text-3xl sm:text-5xl font-extrabold text-slate-950 tracking-tight">
            Frequently Asked Questions
          </h2>
          <p className="text-slate-600 text-base font-normal">
            Everything you need to know about partnering with Reach4You.
          </p>
        </div>

        <div className="space-y-4">
          {faqs.map((faq, idx) => {
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
          SECTION 7: FINAL CTA
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
          </div>

        </div>
      </section>

    </div>
  );
}
