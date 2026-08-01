import React, { useState } from 'react';
import Badge from '../components/common/Badge';
import Card from '../components/common/Card';
import Button from '../components/common/Button';
import { Users, ShieldCheck, DollarSign, Award, CheckCircle2, Send } from 'lucide-react';

export default function Contributor({ setCurrentPage }) {
  const [formData, setFormData] = useState({
    fullName: '',
    emailAddress: '',
    phoneNumber: '',
    age: '',
    redditUsername: '',
    totalKarma: ''
  });

  return (
    <div className="pt-28 pb-20 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-16">
      
      {/* Header */}
      <div className="text-center max-w-3xl mx-auto space-y-4">
        <Badge icon={Users} variant="orange">Network of 50+ Vetted Contributors</Badge>
        <h1 className="text-4xl sm:text-6xl font-extrabold text-slate-950 tracking-tight">
          Become a Reach4You Contributor
        </h1>
        <p className="mt-4 text-slate-600 text-base sm:text-lg leading-relaxed font-normal">
          Are you an active Redditor? We work with experienced community members to create authentic, non-promotional Reddit posts and comments across relevant subreddits.
        </p>
      </div>

      {/* Contributor Benefits */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        <Card className="p-8 bg-white border-slate-200/90 hover:border-[#FF4500]">
          <div className="w-12 h-12 rounded-2xl bg-orange-50 text-[#FF4500] flex items-center justify-center mb-4">
            <DollarSign className="w-6 h-6" />
          </div>
          <h2 className="text-xl font-bold text-slate-950">Paid Assignments</h2>
          <p className="text-xs text-slate-600 mt-2 leading-relaxed font-normal">
            Earn money by participating in client campaign assignments across subreddits in your niche.
          </p>
        </Card>

        <Card className="p-8 bg-white border-slate-200/90 hover:border-[#FF4500]">
          <div className="w-12 h-12 rounded-2xl bg-orange-50 text-[#FF4500] flex items-center justify-center mb-4">
            <ShieldCheck className="w-6 h-6" />
          </div>
          <h2 className="text-xl font-bold text-slate-950">Zero Bot Policy</h2>
          <p className="text-xs text-slate-600 mt-2 leading-relaxed font-normal">
            We work exclusively with real humans. No automated upvote scripts or spam software ever.
          </p>
        </Card>

        <Card className="p-8 bg-white border-slate-200/90 hover:border-[#FF4500]">
          <div className="w-12 h-12 rounded-2xl bg-orange-50 text-[#FF4500] flex items-center justify-center mb-4">
            <Award className="w-6 h-6" />
          </div>
          <h2 className="text-xl font-bold text-slate-950">Flexible Schedule</h2>
          <p className="text-xs text-slate-600 mt-2 leading-relaxed font-normal">
            Choose assignments that fit your interests and active subreddit participation.
          </p>
        </Card>
      </div>

      {/* Contributor Application Form */}
      <div className="max-w-xl mx-auto">
        <Card hover={false} className="p-8 sm:p-10 border-slate-200 shadow-xl bg-white">
          <div className="text-center mb-8 space-y-2">
            <h2 className="text-2xl font-extrabold text-slate-950">Contributor Application</h2>
            <p className="text-xs text-slate-500 font-normal">
              Fill out the form below. If you're selected, we'll contact you via the email address you provide.
            </p>
          </div>

          <form action="https://formsubmit.co/reach4you2@gmail.com" method="POST" className="space-y-5">
            <input type="hidden" name="_captcha" value="false" />
            <input type="hidden" name="_subject" value="New Contributor Application" />
            <input type="hidden" name="_template" value="table" />
            
            {/* Field 1: Full Name */}
            <div>
              <label className="block text-xs font-bold text-slate-700 uppercase tracking-wider mb-2">Full Name</label>
              <input
                type="text"
                name="fullName"
                required
                placeholder="John Doe"
                value={formData.fullName}
                onChange={(e) => setFormData({ ...formData, fullName: e.target.value })}
                className="w-full px-4 py-3 rounded-xl border border-slate-200 text-xs focus:outline-none focus:ring-2 focus:ring-[#FF4500]/30"
              />
            </div>

            {/* Field 2: Email Address (Directly below Full Name) */}
            <div>
              <label className="block text-xs font-bold text-slate-700 uppercase tracking-wider mb-2">Email Address</label>
              <input
                type="email"
                name="emailAddress"
                required
                placeholder="yourname@example.com"
                value={formData.emailAddress}
                onChange={(e) => setFormData({ ...formData, emailAddress: e.target.value })}
                className="w-full px-4 py-3 rounded-xl border border-slate-200 text-xs focus:outline-none focus:ring-2 focus:ring-[#FF4500]/30"
              />
            </div>

            {/* Field 3: Phone Number */}
            <div>
              <label className="block text-xs font-bold text-slate-700 uppercase tracking-wider mb-2">Phone Number</label>
              <input
                type="tel"
                name="phoneNumber"
                required
                placeholder="+1 (555) 000-0000"
                value={formData.phoneNumber}
                onChange={(e) => setFormData({ ...formData, phoneNumber: e.target.value })}
                className="w-full px-4 py-3 rounded-xl border border-slate-200 text-xs focus:outline-none focus:ring-2 focus:ring-[#FF4500]/30"
              />
            </div>

            {/* Field 4: Age */}
            <div>
              <label className="block text-xs font-bold text-slate-700 uppercase tracking-wider mb-2">Age</label>
              <input
                type="number"
                name="age"
                required
                min="18"
                max="99"
                placeholder="25"
                value={formData.age}
                onChange={(e) => setFormData({ ...formData, age: e.target.value })}
                className="w-full px-4 py-3 rounded-xl border border-slate-200 text-xs focus:outline-none focus:ring-2 focus:ring-[#FF4500]/30"
              />
            </div>

            {/* Field 5: Reddit Username */}
            <div>
              <label className="block text-xs font-bold text-slate-700 uppercase tracking-wider mb-2">Reddit Username</label>
              <input
                type="text"
                name="redditUsername"
                required
                placeholder="u/yourusername"
                value={formData.redditUsername}
                onChange={(e) => setFormData({ ...formData, redditUsername: e.target.value })}
                className="w-full px-4 py-3 rounded-xl border border-slate-200 text-xs focus:outline-none focus:ring-2 focus:ring-[#FF4500]/30"
              />
            </div>

            {/* Field 6: Total Reddit Karma */}
            <div>
              <label className="block text-xs font-bold text-slate-700 uppercase tracking-wider mb-2">Total Reddit Karma</label>
              <input
                type="text"
                name="totalKarma"
                required
                placeholder="e.g. 5,000 karma"
                value={formData.totalKarma}
                onChange={(e) => setFormData({ ...formData, totalKarma: e.target.value })}
                className="w-full px-4 py-3 rounded-xl border border-slate-200 text-xs focus:outline-none focus:ring-2 focus:ring-[#FF4500]/30"
              />
            </div>

            <div className="pt-2">
              <Button type="submit" icon={Send} className="w-full py-3.5 text-xs font-bold">
                Submit Application
              </Button>
            </div>

            <p className="text-[11px] text-slate-400 text-center font-medium">
              Submissions are sent directly to reach4you2@gmail.com
            </p>
          </form>
        </Card>
      </div>

    </div>
  );
}
