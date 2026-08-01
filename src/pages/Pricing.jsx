import React from 'react';
import Badge from '../components/common/Badge';
import Card from '../components/common/Card';
import Button from '../components/common/Button';
import { Check, Flame, ArrowUpRight, Clock, ShieldCheck, Mail, FileText, CreditCard, Sparkles, Rocket } from 'lucide-react';

export default function Pricing({ setCurrentPage }) {
  const pricingTiers = [
    {
      name: 'Starter Reddit Campaign',
      price: '$300',
      period: 'Per Campaign',
      tag: 'Starter Package',
      desc: 'Ideal for early-stage SaaS tools, AI apps, and startups looking to launch their initial multi-subreddit presence.',
      deliverables: [
        '20 Reddit Posts & Comments',
        'Multi-Subreddit Distribution',
        '30+ Active Reddit Contributors',
        '100% Human Posting',
        '7-Day Live Guarantee'
      ]
    },
    {
      name: 'Growth & Launch Campaign',
      price: '$500',
      period: 'Per Campaign',
      popular: true,
      tag: 'Most Popular',
      desc: 'Designed for scaling startups, gaming projects, and products launching new features across targeted subreddits.',
      deliverables: [
        '35 Reddit Posts & Comments',
        'Multi-Subreddit Distribution',
        '40+ Active Reddit Contributors',
        '100% Human Posting',
        '7-Day Live Guarantee'
      ]
    },
    {
      name: 'Enterprise Reddit Campaign',
      price: '$900',
      period: 'Per Campaign',
      tag: 'Maximum Impact',
      desc: 'For high-volume brands and established companies seeking extensive multi-subreddit discussion coverage.',
      deliverables: [
        '70 Reddit Posts & Comments',
        'Multi-Subreddit Distribution',
        '50+ Active Reddit Contributors',
        'Priority Campaign Execution',
        '100% Human Posting',
        '7-Day Live Guarantee'
      ]
    }
  ];

  const paymentTermsPoints = [
    "50% advance payment is required before campaign execution begins.",
    "The remaining 50% is payable after all agreed Reddit posts and comments remain live for at least 7 consecutive days.",
    "If any agreed deliverable is removed within the guarantee period, Reach4You will replace it at no additional cost.",
    "Campaign execution begins only after the advance payment has been received."
  ];

  return (
    <div className="pt-28 pb-20 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-16">
      
      {/* Header */}
      <div className="text-center max-w-3xl mx-auto space-y-4">
        <Badge icon={Flame} variant="orange">Transparent Campaign Pricing</Badge>
        <h1 className="text-4xl sm:text-6xl font-extrabold text-slate-950 tracking-tight">
          Campaign Pricing
        </h1>
        <p className="mt-4 text-slate-600 text-base sm:text-lg leading-relaxed font-normal">
          Simple, transparent per-campaign packages tailored to your brand goals. Payment is based on Reddit posts and comments that remain live on Reddit for at least 7 consecutive days.
        </p>
      </div>

      {/* Founder Pricing Banner */}
      <div className="max-w-3xl mx-auto p-6 rounded-3xl bg-slate-900/90 border border-orange-500/30 text-white text-center space-y-2 shadow-xl backdrop-blur-md relative overflow-hidden">
        <div className="absolute top-0 right-0 w-48 h-48 bg-[#FF4500]/10 blur-2xl rounded-full pointer-events-none"></div>
        <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-orange-950/80 text-[#FF4500] border border-orange-800/60 text-xs font-extrabold uppercase tracking-wide">
          <Rocket className="w-3.5 h-3.5 text-[#FF4500]" />
          <span>🚀 Founder Pricing</span>
        </div>
        <p className="text-xs sm:text-sm text-slate-300 font-medium max-w-xl mx-auto leading-relaxed pt-1">
          For a limited time, early clients receive discounted campaign pricing while we continue expanding our portfolio and case studies.
        </p>
      </div>

      {/* Pricing Cards Grid */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        {pricingTiers.map((tier, idx) => (
          <Card 
            key={idx} 
            className={`relative flex flex-col justify-between p-8 bg-white border-slate-200/90 ${
              tier.popular ? 'border-[#FF4500] ring-2 ring-[#FF4500]/20 shadow-xl' : 'hover:border-slate-300'
            }`}
          >
            {tier.popular && (
              <span className="absolute -top-3 left-1/2 -translate-x-1/2 bg-[#FF4500] text-white text-[11px] font-extrabold uppercase px-3.5 py-1 rounded-full tracking-wider shadow-md">
                Most Popular
              </span>
            )}
            <div>
              <div className="flex items-center justify-between mb-3">
                <span className="text-[11px] font-extrabold text-[#FF4500] bg-orange-50 px-2.5 py-1 rounded-full border border-orange-200/60">
                  {tier.tag}
                </span>
              </div>
              <h2 className="text-2xl font-extrabold text-slate-950">{tier.name}</h2>
              <p className="text-xs text-slate-500 mt-2 leading-relaxed font-normal">{tier.desc}</p>
              
              {/* Price Display */}
              <div className="my-6 p-4 rounded-2xl bg-slate-50 border border-slate-200/80 text-center">
                <div className="flex items-baseline justify-center gap-1.5">
                  <span className="text-4xl font-extrabold text-slate-950">{tier.price}</span>
                  <span className="text-slate-500 text-xs font-bold">{tier.period}</span>
                </div>
                <p className="text-[11px] text-emerald-600 font-bold mt-1">7-Day Live Guarantee Included</p>
              </div>

              <ul className="space-y-3 mb-8 text-xs font-medium text-slate-700">
                {tier.deliverables.map((f, fi) => (
                  <li key={fi} className="flex items-start gap-2.5">
                    <Check className="w-4 h-4 text-[#FF4500] shrink-0 mt-0.5" />
                    <span className={fi === 0 ? "font-bold text-slate-950" : ""}>{f}</span>
                  </li>
                ))}
              </ul>
            </div>

            <Button 
              onClick={() => setCurrentPage('contact')} 
              variant={tier.popular ? 'primary' : 'outline'} 
              icon={ArrowUpRight}
              className="w-full py-3 text-xs font-bold"
            >
              Start This Campaign
            </Button>
          </Card>
        ))}
      </div>

      {/* PAYMENT TERMS CARD */}
      <section className="max-w-4xl mx-auto">
        <Card hover={false} className="p-8 sm:p-10 bg-white border-slate-200 shadow-xl rounded-3xl space-y-6">
          
          {/* Header */}
          <div className="flex items-center gap-3 border-b border-slate-100 pb-5">
            <div className="w-10 h-10 rounded-2xl bg-orange-50 text-[#FF4500] flex items-center justify-center font-bold shrink-0">
              <CreditCard className="w-5 h-5" />
            </div>
            <div>
              <h2 className="text-2xl font-extrabold text-slate-950 tracking-tight">Payment Terms</h2>
              <p className="text-xs text-slate-500 font-normal">Clear, fair payment terms for every Reach4You campaign.</p>
            </div>
          </div>

          {/* 4 Bullet Points */}
          <ul className="space-y-4">
            {paymentTermsPoints.map((point, pIdx) => (
              <li key={pIdx} className="flex items-start gap-3 text-xs sm:text-sm text-slate-700 font-normal leading-relaxed">
                <div className="w-5 h-5 rounded-full bg-orange-50 text-[#FF4500] flex items-center justify-center shrink-0 mt-0.5 border border-orange-200">
                  <Check className="w-3 h-3 stroke-[3]" />
                </div>
                <span>{point}</span>
              </li>
            ))}
          </ul>

        </Card>
      </section>

      {/* Guarantee Callout Banner */}
      <div className="bg-slate-950 text-white rounded-3xl p-8 sm:p-12 border border-slate-800 flex flex-col md:flex-row items-center justify-between gap-8 shadow-xl">
        <div className="space-y-2 text-center md:text-left">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-orange-950/80 text-[#FF4500] border border-orange-800/60 text-xs font-bold">
            <Clock className="w-4 h-4" />
            <span>7-Day Live Guarantee</span>
          </div>
          <h2 className="text-2xl font-bold">How our package guarantee works</h2>
          <p className="text-slate-400 text-sm font-normal max-w-xl">
            Payment is only made for Reddit posts and comments that remain live for at least 7 consecutive days.
          </p>
        </div>
        <Button onClick={() => setCurrentPage('contact')} icon={ArrowUpRight} className="shrink-0 px-8 py-3.5 text-xs font-bold">
          Get My Free Reddit Strategy
        </Button>
      </div>

    </div>
  );
}
