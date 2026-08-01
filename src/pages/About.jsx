import React from 'react';
import Badge from '../components/common/Badge';
import Card from '../components/common/Card';
import Button from '../components/common/Button';
import { ShieldCheck, Flame, HeartHandshake, ArrowUpRight, Award, BotOff, Layers3, Clock, Mail } from 'lucide-react';

export default function About({ setCurrentPage }) {
  return (
    <div className="pt-28 pb-20 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-20">
      
      {/* Header */}
      <div className="text-center max-w-3xl mx-auto space-y-4">
        <Badge icon={Flame} variant="orange">The Dedicated Reddit Agency</Badge>
        <h1 className="text-4xl sm:text-6xl font-extrabold text-slate-950 tracking-tight">
          Exclusively Built for Authentic Reddit Growth
        </h1>
        <p className="mt-4 text-slate-600 text-base sm:text-lg leading-relaxed font-normal">
          Reach4You provides specialized Reddit marketing by creating authentic posts and comments distributed across multiple relevant subreddits of all sizes, powered by 50+ vetted Reddit contributors.
        </p>
      </div>

      {/* Mission & Specialization Cards */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        <Card className="p-8 bg-white border-slate-200/90 hover:border-[#FF4500]">
          <div className="w-12 h-12 rounded-2xl bg-orange-50 text-[#FF4500] flex items-center justify-center mb-4">
            <ShieldCheck className="w-6 h-6" />
          </div>
          <h2 className="text-2xl font-extrabold text-slate-950">Why Reddit Specialization Matters</h2>
          <p className="text-slate-600 text-sm mt-3 leading-relaxed font-normal">
            Multi-channel advertising agencies treat Reddit like Facebook or Google Ads, flooding subreddits with promotional pitch deck speak. Redditors instantly downvote ad copy. We exclusively focus on Reddit culture, subreddit guidelines, and natural discussion angles to ensure every campaign post and comment feels genuine.
          </p>
        </Card>

        <Card className="p-8 bg-white border-slate-200/90 hover:border-[#FF4500]">
          <div className="w-12 h-12 rounded-2xl bg-orange-50 text-[#FF4500] flex items-center justify-center mb-4">
            <HeartHandshake className="w-6 h-6" />
          </div>
          <h2 className="text-2xl font-extrabold text-slate-950">Our 50+ Vetted Contributor Network</h2>
          <p className="text-slate-600 text-sm mt-3 leading-relaxed font-normal">
            Reach4You manages a network of 50+ real, experienced Reddit contributors across tech, AI, gaming, SaaS, and e-commerce subreddits. Each contributor owns an aged account with active karma history, allowing recommendations to be integrated naturally across multiple discussion threads.
          </p>
        </Card>
      </div>

      {/* Core Agency Commitments */}
      <div className="bg-slate-950 text-white rounded-3xl p-8 sm:p-14 border border-slate-800 space-y-10 shadow-2xl relative overflow-hidden">
        <div className="absolute top-0 right-1/4 w-96 h-96 bg-[#FF4500]/15 blur-3xl rounded-full pointer-events-none"></div>

        <div className="text-center max-w-2xl mx-auto space-y-3 relative z-10">
          <span className="px-3.5 py-1 rounded-full bg-orange-950/80 text-[#FF4500] border border-orange-800/60 text-xs font-bold uppercase tracking-wide">
            Our Service Guarantees
          </span>
          <h2 className="text-3xl sm:text-4xl font-extrabold tracking-tight">
            How We Protect Brand Authenticity
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 relative z-10">
          <div className="p-6 rounded-2xl bg-slate-900 border border-slate-800 space-y-3">
            <div className="w-10 h-10 rounded-xl bg-orange-500/20 text-[#FF4500] flex items-center justify-center font-bold">
              <BotOff className="w-5 h-5" />
            </div>
            <h3 className="text-lg font-bold text-white">Strict Zero-Bot Policy</h3>
            <p className="text-xs text-slate-400 leading-relaxed font-normal">
              We never use upvote bots, comment generators, or synthetic accounts. Every post and comment is published manually by real Redditors.
            </p>
          </div>

          <div className="p-6 rounded-2xl bg-slate-900 border border-slate-800 space-y-3">
            <div className="w-10 h-10 rounded-xl bg-orange-500/20 text-[#FF4500] flex items-center justify-center font-bold">
              <Layers3 className="w-5 h-5" />
            </div>
            <h3 className="text-lg font-bold text-white">Multi-Thread Distribution</h3>
            <p className="text-xs text-slate-400 leading-relaxed font-normal">
              Campaigns are distributed across multiple subreddits of all sizes tailored to your niche rather than relying on a single discussion.
            </p>
          </div>

          <div className="p-6 rounded-2xl bg-slate-900 border border-slate-800 space-y-3">
            <div className="w-10 h-10 rounded-xl bg-orange-500/20 text-[#FF4500] flex items-center justify-center font-bold">
              <Clock className="w-5 h-5" />
            </div>
            <h3 className="text-lg font-bold text-white">Live 5+ Day Guarantee</h3>
            <p className="text-xs text-slate-400 leading-relaxed font-normal">
              Payment is based on agreed package deliverables, with all posts and comments guaranteed to remain live for at least five days.
            </p>
          </div>
        </div>
      </div>

      {/* CTA Box */}
      <div className="bg-slate-50 rounded-3xl p-8 sm:p-12 border border-slate-200 text-center space-y-4">
        <h2 className="text-2xl font-extrabold text-slate-950">Ready to launch your campaign?</h2>
        <p className="text-slate-600 text-sm max-w-md mx-auto font-normal">Talk to our team or contact us directly at <span className="font-bold text-[#FF4500]">reach4you2@gmail.com</span>.</p>
        <div className="pt-2 flex flex-col sm:flex-row items-center justify-center gap-4">
          <Button onClick={() => setCurrentPage('contact')} icon={ArrowUpRight} className="px-6 py-3 text-xs font-bold">
            Book a Strategy Call
          </Button>
          <Button variant="outline" onClick={() => setCurrentPage('pricing')} className="px-6 py-3 text-xs font-bold">
            View Pricing Packages
          </Button>
        </div>
      </div>

    </div>
  );
}
