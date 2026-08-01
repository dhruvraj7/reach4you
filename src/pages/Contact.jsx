import React, { useState } from 'react';
import Badge from '../components/common/Badge';
import Card from '../components/common/Card';
import Button from '../components/common/Button';
import { Mail, Send, CheckCircle2, Flame, Clock, ShieldCheck, MessageSquare, Check, Sparkles, SendHorizontal } from 'lucide-react';

export default function Contact() {
  const [formData, setFormData] = useState({
    fullName: '',
    workEmail: '',
    companyName: '',
    selectedPackage: 'Starter Reddit Campaign ($300 Per Campaign)',
    additionalNotes: ''
  });

  const howItWorksSteps = [
    { num: '①', title: 'Tell us about your product', desc: 'Share your business details and campaign notes with our team.' },
    { num: '②', title: 'Choose your package', desc: 'Select Starter ($300), Growth ($500), or Enterprise ($900).' },
    { num: '③', title: 'We review your requirements', desc: 'We carefully evaluate relevant subreddits of all sizes for your niche.' },
    { num: '④', title: 'We contact you within 24 hours', desc: 'Our team delivers your custom Reddit campaign roadmap.' },
  ];

  return (
    <div className="pt-28 pb-20 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 max-w-6xl mx-auto items-stretch">

        {/* =========================================================================
            LEFT INFORMATION PANEL (PREMIUM RE-DESIGN)
            ========================================================================= */}
        <div className="lg:col-span-5 flex flex-col justify-between space-y-6">
          <div className="bg-slate-950 text-white rounded-3xl p-8 sm:p-10 border border-slate-800 shadow-2xl space-y-8 flex-grow relative overflow-hidden">

            {/* Subtle Ambient Orange Aura */}
            <div className="absolute top-0 right-0 w-72 h-72 bg-[#FF4500]/15 blur-3xl rounded-full pointer-events-none"></div>

            <div className="relative z-10 space-y-6">

              {/* Panel Header */}
              <div className="space-y-2 border-b border-slate-800/80 pb-6">
                <span className="px-3 py-1 rounded-full bg-orange-950/80 text-[#FF4500] border border-orange-800/60 text-xs font-extrabold uppercase tracking-wide">
                  Simple Campaign Setup
                </span>
                <h2 className="text-2xl sm:text-3xl font-extrabold text-white tracking-tight">
                  How It Works
                </h2>
              </div>

              {/* 4 Premium Steps */}
              <div className="space-y-5">
                {howItWorksSteps.map((step, idx) => (
                  <div key={idx} className="flex items-start gap-3.5 group">
                    <div className="w-8 h-8 rounded-xl bg-slate-900 border border-slate-800 text-[#FF4500] flex items-center justify-center shrink-0 font-extrabold text-sm group-hover:border-[#FF4500]/60 transition-colors shadow-xs">
                      {step.num}
                    </div>
                    <div className="space-y-0.5">
                      <p className="text-sm font-bold text-slate-100 group-hover:text-white transition-colors">{step.title}</p>
                      <p className="text-xs text-slate-400 font-normal leading-relaxed">{step.desc}</p>
                    </div>
                  </div>
                ))}
              </div>

            </div>

            {/* Highlighted 7-Day Guarantee Card */}
            <div className="relative z-10 p-5 rounded-2xl bg-orange-950/40 border border-orange-800/50 space-y-2">
              <div className="flex items-center gap-2 text-xs font-bold text-[#FF4500]">
                <ShieldCheck className="w-4 h-4 text-[#FF4500]" />
                <span>7-Day Live Guarantee</span>
              </div>
              <p className="text-xs text-slate-300 font-normal leading-relaxed">
                Payment is only made for Reddit posts and comments that remain live for at least 7 consecutive days.
              </p>
            </div>

            {/* Prominent Email Footer */}
            <div className="relative z-10 pt-4 border-t border-slate-800/80 flex items-center justify-between">
              <div className="space-y-1">
                <p className="text-[11px] font-bold text-slate-400 uppercase tracking-wider">Direct Email Inquiry</p>
                <a
                  href="mailto:reach4you2@gmail.com"
                  className="text-sm font-extrabold text-[#FF4500] hover:underline flex items-center gap-1.5"
                >
                  <Mail className="w-4 h-4" />
                  <span>reach4you2@gmail.com</span>
                </a>
              </div>
              <span className="text-[10px] text-slate-500 font-semibold px-2.5 py-1 rounded-full bg-slate-900 border border-slate-800">
                24h Response
              </span>
            </div>

          </div>
        </div>

        {/* =========================================================================
            RIGHT FORM PANEL (ELEVATED & CENTERED)
            ========================================================================= */}
        <div className="lg:col-span-7 flex flex-col justify-center">
          <Card hover={false} className="p-8 sm:p-12 border-slate-200/90 shadow-2xl bg-white rounded-3xl space-y-6">
            <form action="https://formsubmit.co/reach4you2@gmail.com" method="POST" className="space-y-6">
              <input type="hidden" name="_captcha" value="false" />
              <input type="hidden" name="_subject" value="New Campaign Inquiry" />
              <input type="hidden" name="_template" value="table" />
              <input
                type="hidden"
                name="_next"
                value="https://reach4you.vercel.app/"
              />
              {/* Header Badge & Title */}
              <div className="space-y-2">
                <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-orange-50 text-[#FF4500] border border-orange-200/60 text-[11px] font-extrabold uppercase tracking-wider">
                  <Sparkles className="w-3.5 h-3.5" />
                  <span>FREE CAMPAIGN CONSULTATION</span>
                </span>
                <h1 className="text-3xl sm:text-4xl font-extrabold text-slate-950 tracking-tight leading-tight">
                  Let's Grow Your Brand on Reddit
                </h1>
                <p className="text-slate-600 text-xs sm:text-sm font-normal leading-relaxed">
                  Tell us about your business and we'll recommend the best Reddit campaign package.
                </p>
              </div>

              {/* Simplified 5 Form Fields */}
              <div className="space-y-4 pt-2">

                {/* Field 1: Full Name */}
                <div>
                  <label className="block text-xs font-bold text-slate-700 uppercase tracking-wider mb-2">Full Name</label>
                  <input
                    type="text"
                    name="fullName"
                    required
                    placeholder="Alex Morgan"
                    value={formData.fullName}
                    onChange={(e) => setFormData({ ...formData, fullName: e.target.value })}
                    className="w-full px-4 py-3.5 rounded-xl border border-slate-200 text-xs focus:outline-none focus:ring-2 focus:ring-[#FF4500]/30 transition-shadow"
                  />
                </div>

                {/* Field 2: Work Email */}
                <div>
                  <label className="block text-xs font-bold text-slate-700 uppercase tracking-wider mb-2">Work Email</label>
                  <input
                    type="email"
                    name="workEmail"
                    required
                    placeholder="alex@company.com"
                    value={formData.workEmail}
                    onChange={(e) => setFormData({ ...formData, workEmail: e.target.value })}
                    className="w-full px-4 py-3.5 rounded-xl border border-slate-200 text-xs focus:outline-none focus:ring-2 focus:ring-[#FF4500]/30 transition-shadow"
                  />
                </div>

                {/* Field 3: Company Name */}
                <div>
                  <label className="block text-xs font-bold text-slate-700 uppercase tracking-wider mb-2">Company Name</label>
                  <input
                    type="text"
                    name="companyName"
                    required
                    placeholder="Acme Inc."
                    value={formData.companyName}
                    onChange={(e) => setFormData({ ...formData, companyName: e.target.value })}
                    className="w-full px-4 py-3.5 rounded-xl border border-slate-200 text-xs focus:outline-none focus:ring-2 focus:ring-[#FF4500]/30 transition-shadow"
                  />
                </div>

                {/* Field 4: Selected Package Dropdown */}
                <div>
                  <label className="block text-xs font-bold text-slate-700 uppercase tracking-wider mb-2">Selected Package</label>
                  <select
                    name="selectedPackage"
                    value={formData.selectedPackage}
                    onChange={(e) => setFormData({ ...formData, selectedPackage: e.target.value })}
                    className="w-full px-4 py-3.5 rounded-xl border border-slate-200 text-xs focus:outline-none focus:ring-2 focus:ring-[#FF4500]/30 bg-white font-bold text-slate-900 cursor-pointer shadow-xs"
                  >
                    <option value="Starter Reddit Campaign ($300 Per Campaign)">Starter Reddit Campaign ($300 Per Campaign)</option>
                    <option value="Growth & Launch Campaign ($500 Per Campaign)">Growth & Launch Campaign ($500 Per Campaign)</option>
                    <option value="Enterprise Reddit Campaign ($900 Per Campaign)">Enterprise Reddit Campaign ($900 Per Campaign)</option>
                  </select>
                </div>

                {/* Field 5: Additional Notes */}
                <div>
                  <label className="block text-xs font-bold text-slate-700 uppercase tracking-wider mb-2">Additional Notes</label>
                  <textarea
                    name="additionalNotes"
                    rows={4}
                    placeholder="Tell us about your product, target audience, or launch notes..."
                    value={formData.additionalNotes}
                    onChange={(e) => setFormData({ ...formData, additionalNotes: e.target.value })}
                    className="w-full px-4 py-3.5 rounded-xl border border-slate-200 text-xs focus:outline-none focus:ring-2 focus:ring-[#FF4500]/30 transition-shadow resize-y"
                  ></textarea>
                </div>

              </div>

              {/* Submit Button */}
              <div className="pt-2">
                <Button type="submit" icon={SendHorizontal} className="w-full py-4 text-xs font-extrabold shadow-xl shadow-[#FF4500]/25">
                  Request My Campaign
                </Button>
              </div>

              <p className="text-[11px] text-slate-500 text-center font-medium">
                Submissions are sent directly to <span className="font-bold text-slate-800">reach4you2@gmail.com</span>
              </p>

            </form>
          </Card>
        </div>

      </div>

    </div>
  );
}
