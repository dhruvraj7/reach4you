import React, { useState, useMemo } from 'react';
import { 
  SUBREDDITS_DATA, 
  SUBREDDIT_CATEGORIES 
} from '../../data/subredditDirectoryData';
import { 
  Search, 
  Filter, 
  Copy, 
  Check, 
  ExternalLink, 
  ArrowUpDown, 
  Sparkles, 
  BookOpen, 
  ShieldAlert, 
  CheckCircle2, 
  HelpCircle, 
  TrendingUp, 
  Users, 
  Flame, 
  Target, 
  Zap, 
  Layers, 
  Clock, 
  Award, 
  AlertTriangle,
  ChevronDown,
  ChevronUp,
  FileText,
  Bookmark,
  Share2,
  Download
} from 'lucide-react';

export default function SubredditDirectory({ setCurrentPage }) {
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('All Categories');
  const [sortBy, setSortBy] = useState('members-desc');
  const [copiedId, setCopiedId] = useState(null);
  const [expandedId, setExpandedId] = useState(null);
  const [activeFaq, setActiveFaq] = useState(null);

  const handleDownloadPdf = () => {
    const pdfUrl = '/Ultimate-300-Subreddits-Directory-2026.pdf';
    const link = document.createElement('a');
    link.href = pdfUrl;
    link.download = 'Ultimate-300-Subreddits-Directory-2026.pdf';
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  // Copy link handler
  const handleCopyLink = (link, id) => {
    if (navigator.clipboard) {
      navigator.clipboard.writeText(link);
      setCopiedId(id);
      setTimeout(() => setCopiedId(null), 2000);
    }
  };

  // Filter and sort subreddits
  const filteredSubreddits = useMemo(() => {
    return SUBREDDITS_DATA.filter((sub) => {
      const matchesCategory =
        selectedCategory === 'All Categories' || sub.category === selectedCategory;
      const query = searchQuery.toLowerCase().trim();
      const matchesSearch =
        !query ||
        sub.name.toLowerCase().includes(query) ||
        sub.category.toLowerCase().includes(query) ||
        sub.audience.toLowerCase().includes(query) ||
        sub.tips.toLowerCase().includes(query) ||
        sub.postTypes.toLowerCase().includes(query);

      return matchesCategory && matchesSearch;
    }).sort((a, b) => {
      if (sortBy === 'members-desc') return b.membersCount - a.membersCount;
      if (sortBy === 'members-asc') return a.membersCount - b.membersCount;
      if (sortBy === 'name-asc') return a.name.localeCompare(b.name);
      if (sortBy === 'difficulty-asc') {
        const diffMap = { Easy: 1, Medium: 2, High: 3, 'Very High': 4 };
        return (diffMap[a.difficulty] || 2) - (diffMap[b.difficulty] || 2);
      }
      return 0;
    });
  }, [searchQuery, selectedCategory, sortBy]);

  // Jump Links / Table of Contents
  const tocSections = [
    { id: 'directory-search', title: '300+ Subreddit Directory' },
    { id: 'why-reddit-matters', title: 'Why Reddit Matters in 2026' },
    { id: 'how-reddit-marketing-works', title: 'How Reddit Marketing Works' },
    { id: 'why-reddit-ranks-on-google', title: 'Why Threads Rank on Google' },
    { id: 'how-reddit-influences-ai-search', title: 'How Reddit Influences AI Search' },
    { id: 'common-marketing-mistakes', title: 'Common Marketing Mistakes' },
    { id: 'how-to-build-karma', title: 'How to Build Karma Fast' },
    { id: 'reddit-posting-checklist', title: 'Pre-Posting Quality Checklist' },
    { id: 'content-templates', title: 'Proven Content Templates' },
    { id: 'find-customers-on-reddit', title: 'How to Find Customers' },
    { id: 'avoid-getting-banned', title: 'How to Avoid Account Bans' },
    { id: 'case-study-examples', title: 'Real SaaS & Tech Case Studies' },
    { id: 'faq-section', title: 'Frequently Asked Questions' },
    { id: 'ultimate-checklist', title: 'Ultimate Master Checklist' },
  ];

  const scrollToSection = (id) => {
    const el = document.getElementById(id);
    if (el) {
      el.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  };

  return (
    <div className="relative">
      
      {/* Sticky Table of Contents Sidebar for Desktop */}
      <aside className="hidden xl:block fixed top-32 left-6 w-64 z-30 bg-slate-900/95 backdrop-blur-md text-white p-5 rounded-2xl border border-slate-800 shadow-2xl space-y-3 max-h-[75vh] overflow-y-auto font-sans text-xs">
        <div className="flex items-center gap-2 font-bold text-[#FF4500] uppercase tracking-wider pb-2 border-b border-slate-800">
          <BookOpen className="w-4 h-4" />
          <span>Quick Navigation</span>
        </div>
        <nav className="space-y-1">
          {tocSections.map((sec) => (
            <button
              key={sec.id}
              onClick={() => scrollToSection(sec.id)}
              className="w-full text-left py-1.5 px-2 rounded-lg text-slate-300 hover:text-white hover:bg-slate-800 transition-colors cursor-pointer truncate"
            >
              • {sec.title}
            </button>
          ))}
        </nav>
      </aside>

      <div className="space-y-16">
        
        {/* Article Intro Banner */}
        <section className="bg-slate-950 text-white rounded-3xl p-8 sm:p-12 relative overflow-hidden shadow-2xl border border-slate-800 space-y-6">
          <div className="absolute top-0 right-0 w-96 h-96 bg-[#FF4500]/15 blur-3xl rounded-full pointer-events-none"></div>

          <div className="flex items-center gap-3 flex-wrap text-xs text-[#FF4500] font-bold uppercase tracking-wider">
            <span className="bg-[#FF4500]/20 px-3 py-1 rounded-full border border-[#FF4500]/40 flex items-center gap-1.5">
              <Sparkles className="w-3.5 h-3.5" /> 2026 Authority SEO Guide
            </span>
            <span>• 300+ Verified Communities</span>
            <span>• 100% Anti-Fluff</span>
          </div>

          <h1 className="text-3xl sm:text-5xl font-black text-white tracking-tight leading-[1.12]">
            The Ultimate Directory of 300+ Active Subreddits for SaaS, AI, Startups, Marketing, Gaming & Tech (2026)
          </h1>

          <p className="text-slate-300 text-base sm:text-lg leading-relaxed max-w-4xl font-normal">
            Welcome to the internet's most exhaustive, data-backed directory of active Reddit communities. Engineered specifically for SaaS founders, AI developers, marketers, indie hackers, and agency growth teams seeking authentic, spam-free organic customer acquisition.
          </p>

          <div className="pt-2 flex flex-col sm:flex-row items-center gap-4">
            <button
              onClick={handleDownloadPdf}
              className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-6 py-3.5 rounded-2xl font-extrabold text-xs text-white bg-[#FF4500] hover:bg-[#E03D00] shadow-xl shadow-[#FF4500]/30 hover:shadow-2xl transition-all cursor-pointer"
            >
              <Download className="w-4 h-4" />
              <span>Download PDF Directory Report (28 Pages)</span>
            </button>
            <span className="text-xs text-slate-400">
              ✓ Includes all 21 categories, karma rules, posting times, & strategy tips
            </span>
          </div>

          <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 pt-4 border-t border-slate-800/80 text-xs">
            <div className="bg-slate-900/80 p-3.5 rounded-xl border border-slate-800">
              <p className="text-slate-400 font-medium">Total Subreddits</p>
              <p className="text-xl font-black text-[#FF4500]">315 Subreddits</p>
            </div>
            <div className="bg-slate-900/80 p-3.5 rounded-xl border border-slate-800">
              <p className="text-slate-400 font-medium">Categories</p>
              <p className="text-xl font-black text-emerald-400">21 Sectors</p>
            </div>
            <div className="bg-slate-900/80 p-3.5 rounded-xl border border-slate-800">
              <p className="text-slate-400 font-medium">Combined Audience</p>
              <p className="text-xl font-black text-sky-400">140M+ Members</p>
            </div>
            <div className="bg-slate-900/80 p-3.5 rounded-xl border border-slate-800">
              <p className="text-slate-400 font-medium">Updated for</p>
              <p className="text-xl font-black text-amber-400">August 2026</p>
            </div>
          </div>
        </section>

        {/* Interactive Table of Contents for Mobile / Tablet */}
        <div className="xl:hidden bg-slate-100 p-6 rounded-2xl border border-slate-200 space-y-3">
          <div className="flex items-center gap-2 font-bold text-slate-900 text-sm">
            <BookOpen className="w-4 h-4 text-[#FF4500]" />
            <span>Table of Contents (Jump to Section)</span>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 text-xs">
            {tocSections.map((sec) => (
              <button
                key={sec.id}
                onClick={() => scrollToSection(sec.id)}
                className="text-left p-2 rounded-lg bg-white hover:bg-orange-50 text-slate-700 hover:text-[#FF4500] border border-slate-200/80 transition-colors font-medium cursor-pointer truncate"
              >
                • {sec.title}
              </button>
            ))}
          </div>
        </div>

        {/* ---------------------------------------------------- */}
        {/* INTERACTIVE DIRECTORY SECTION */}
        {/* ---------------------------------------------------- */}
        <section id="directory-search" className="space-y-8 scroll-mt-28">
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-4">
            <div>
              <div className="flex items-center gap-2 text-[#FF4500] text-xs font-extrabold uppercase tracking-wider mb-1">
                <Target className="w-4 h-4" />
                <span>Interactive Subreddit Explorer</span>
              </div>
              <h2 className="text-2xl sm:text-3xl font-extrabold text-slate-950 tracking-tight">
                Search & Filter 300+ Subreddits
              </h2>
              <p className="text-xs sm:text-sm text-slate-600 mt-1">
                Filter by category, search by audience keywords or karma rules, and sort by size or difficulty.
              </p>
            </div>

            <div className="flex items-center gap-2 text-xs font-semibold text-slate-500 bg-slate-100 px-3.5 py-2 rounded-full border border-slate-200">
              <Users className="w-4 h-4 text-[#FF4500]" />
              <span>Showing {filteredSubreddits.length} of {SUBREDDITS_DATA.length} Subreddits</span>
            </div>
          </div>

          {/* Controls: Search Bar & Sort Dropdown */}
          <div className="grid grid-cols-1 lg:grid-cols-4 gap-4">
            <div className="lg:col-span-3 relative">
              <Search className="w-5 h-5 text-slate-400 absolute left-4 top-1/2 -translate-y-1/2" />
              <input
                type="text"
                placeholder="Search by subreddit name, audience (e.g. 'Founders'), or tip keyword..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="w-full pl-12 pr-4 py-3.5 rounded-2xl bg-white border border-slate-300 focus:border-[#FF4500] focus:ring-2 focus:ring-[#FF4500]/20 text-sm text-slate-900 outline-none transition-all shadow-sm"
              />
              {searchQuery && (
                <button
                  onClick={() => setSearchQuery('')}
                  className="absolute right-4 top-1/2 -translate-y-1/2 text-xs font-bold text-slate-400 hover:text-slate-600 cursor-pointer"
                >
                  Clear
                </button>
              )}
            </div>

            <div className="relative">
              <ArrowUpDown className="w-4 h-4 text-slate-400 absolute left-3.5 top-1/2 -translate-y-1/2" />
              <select
                value={sortBy}
                onChange={(e) => setSortBy(e.target.value)}
                className="w-full pl-10 pr-4 py-3.5 rounded-2xl bg-white border border-slate-300 focus:border-[#FF4500] focus:ring-2 focus:ring-[#FF4500]/20 text-xs font-bold text-slate-800 outline-none transition-all shadow-sm appearance-none cursor-pointer"
              >
                <option value="members-desc">Sort by Members (High to Low)</option>
                <option value="members-asc">Sort by Members (Low to High)</option>
                <option value="name-asc">Sort Alphabetically (A-Z)</option>
                <option value="difficulty-asc">Sort by Difficulty (Easiest First)</option>
              </select>
            </div>
          </div>

          {/* Category Selector Pills */}
          <div className="flex items-center gap-2 overflow-x-auto pb-2 scrollbar-none">
            {SUBREDDIT_CATEGORIES.map((cat) => (
              <button
                key={cat}
                onClick={() => setSelectedCategory(cat)}
                className={`px-4 py-2 rounded-full text-xs font-bold whitespace-nowrap transition-all cursor-pointer ${
                  selectedCategory === cat
                    ? 'bg-[#FF4500] text-white shadow-md shadow-[#FF4500]/30'
                    : 'bg-slate-100 text-slate-700 hover:bg-slate-200 border border-slate-200/80'
                }`}
              >
                {cat}
              </button>
            ))}
          </div>

          {/* Subreddit Data List / Cards */}
          <div className="space-y-4">
            {filteredSubreddits.length === 0 ? (
              <div className="p-12 text-center bg-slate-50 rounded-3xl border border-dashed border-slate-300 space-y-3">
                <AlertTriangle className="w-8 h-8 text-amber-500 mx-auto" />
                <h3 className="text-base font-bold text-slate-900">No subreddits found matching your search.</h3>
                <p className="text-xs text-slate-500">Try adjusting your search query or switching the category filter.</p>
                <button
                  onClick={() => {
                    setSearchQuery('');
                    setSelectedCategory('All Categories');
                  }}
                  className="px-4 py-2 rounded-full text-xs font-bold bg-[#FF4500] text-white hover:bg-[#E03D00] transition-colors cursor-pointer"
                >
                  Reset All Filters
                </button>
              </div>
            ) : (
              filteredSubreddits.map((sub) => {
                const isExpanded = expandedId === sub.id;

                return (
                  <div
                    key={sub.id}
                    className="p-6 rounded-2xl bg-white border border-slate-200/90 hover:border-[#FF4500]/60 transition-all shadow-sm hover:shadow-md space-y-4"
                  >
                    {/* Header Row */}
                    <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3">
                      <div className="flex items-center gap-3">
                        <span className="w-10 h-10 rounded-xl bg-orange-50 text-[#FF4500] font-black text-sm flex items-center justify-center border border-orange-200/60 shrink-0">
                          r/
                        </span>
                        <div>
                          <div className="flex items-center gap-2 flex-wrap">
                            <h3 className="text-lg font-black text-slate-950 hover:text-[#FF4500] transition-colors">
                              <a href={sub.link} target="_blank" rel="noopener noreferrer" className="flex items-center gap-1">
                                <span>{sub.name}</span>
                                <ExternalLink className="w-3.5 h-3.5 text-slate-400 hover:text-[#FF4500]" />
                              </a>
                            </h3>
                            <span className="px-2.5 py-0.5 rounded-full text-[11px] font-bold bg-slate-100 text-slate-700 border border-slate-200">
                              {sub.category}
                            </span>
                            <span className={`px-2.5 py-0.5 rounded-full text-[11px] font-bold ${
                              sub.activity === 'Extremely High' ? 'bg-red-50 text-red-600 border border-red-200' :
                              sub.activity === 'Very High' ? 'bg-orange-50 text-[#FF4500] border border-orange-200' :
                              'bg-emerald-50 text-emerald-600 border border-emerald-200'
                            }`}>
                              🔥 {sub.activity} Activity
                            </span>
                          </div>
                          <p className="text-xs text-slate-500 mt-0.5">
                            <strong className="text-slate-800">{sub.members}</strong> members • Best Audience: {sub.audience}
                          </p>
                        </div>
                      </div>

                      {/* Action Buttons */}
                      <div className="flex items-center gap-2 shrink-0">
                        <button
                          onClick={() => handleCopyLink(sub.link, sub.id)}
                          className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg text-xs font-semibold bg-slate-100 hover:bg-slate-200 text-slate-700 transition-colors cursor-pointer"
                          title="Copy Reddit Link"
                        >
                          {copiedId === sub.id ? <Check className="w-3.5 h-3.5 text-emerald-600" /> : <Copy className="w-3.5 h-3.5 text-slate-500" />}
                          <span>{copiedId === sub.id ? 'Copied!' : 'Copy Link'}</span>
                        </button>

                        <button
                          onClick={() => setExpandedId(isExpanded ? null : sub.id)}
                          className="inline-flex items-center gap-1 px-3 py-1.5 rounded-lg text-xs font-bold bg-orange-50 text-[#FF4500] hover:bg-orange-100 border border-orange-200/60 transition-colors cursor-pointer"
                        >
                          <span>{isExpanded ? 'Less Info' : 'Full Strategy Details'}</span>
                          {isExpanded ? <ChevronUp className="w-3.5 h-3.5" /> : <ChevronDown className="w-3.5 h-3.5" />}
                        </button>
                      </div>
                    </div>

                    {/* Quick Metadata Summary Grid */}
                    <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 text-xs bg-slate-50/80 p-3.5 rounded-xl border border-slate-200/60">
                      <div>
                        <span className="font-bold text-slate-500">Karma & Age Req:</span>
                        <p className="text-slate-800 font-medium">{sub.karmaReq}</p>
                      </div>
                      <div>
                        <span className="font-bold text-slate-500">Promotion Policy:</span>
                        <p className="text-slate-800 font-medium">{sub.promoPolicy}</p>
                      </div>
                      <div>
                        <span className="font-bold text-slate-500">Posting Difficulty:</span>
                        <span className={`ml-1.5 font-bold px-2 py-0.5 rounded text-[10px] ${
                          sub.difficulty === 'Easy' ? 'bg-emerald-100 text-emerald-800' :
                          sub.difficulty === 'Medium' ? 'bg-amber-100 text-amber-800' :
                          'bg-red-100 text-red-800'
                        }`}>
                          {sub.difficulty}
                        </span>
                      </div>
                    </div>

                    {/* Expanded Deep Details */}
                    {isExpanded && (
                      <div className="pt-4 border-t border-slate-200 space-y-4 animate-fade-in text-xs">
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                          <div className="space-y-2">
                            <p className="font-extrabold text-slate-900 flex items-center gap-1.5">
                              <FileText className="w-4 h-4 text-[#FF4500]" />
                              <span>Best Performing Post Types:</span>
                            </p>
                            <p className="text-slate-700 leading-relaxed bg-white p-3 rounded-xl border border-slate-200">
                              {sub.postTypes}
                            </p>
                          </div>

                          <div className="space-y-2">
                            <p className="font-extrabold text-slate-900 flex items-center gap-1.5">
                              <Clock className="w-4 h-4 text-[#FF4500]" />
                              <span>Optimal Posting Time & Engagement:</span>
                            </p>
                            <div className="bg-white p-3 rounded-xl border border-slate-200 space-y-1">
                              <p className="text-slate-700"><strong>Best Time:</strong> {sub.bestTime}</p>
                              <p className="text-slate-700"><strong>Typical Engagement:</strong> {sub.engagement}</p>
                            </div>
                          </div>
                        </div>

                        {/* Tips Box */}
                        <div className="p-4 rounded-xl bg-slate-900 text-white space-y-2">
                          <div className="flex items-center gap-1.5 text-[#FF4500] font-bold">
                            <Zap className="w-4 h-4" />
                            <span>Actionable Strategy Tip for {sub.name}:</span>
                          </div>
                          <p className="text-slate-200 leading-relaxed">{sub.tips}</p>
                        </div>
                      </div>
                    )}

                  </div>
                );
              })
            )}
          </div>
        </section>

        {/* ---------------------------------------------------- */}
        {/* COMPREHENSIVE SECTIONS & DEEP GUIDES */}
        {/* ---------------------------------------------------- */}

        {/* Section 1: Why Reddit Matters */}
        <section id="why-reddit-matters" className="space-y-4 pt-6 border-t border-slate-200 scroll-mt-28">
          <div className="flex items-center gap-2 text-[#FF4500] font-extrabold text-xs uppercase tracking-wider">
            <span>01 • Executive Overview</span>
          </div>
          <h2 className="text-2xl sm:text-4xl font-black text-slate-950 tracking-tight">
            Why Reddit Has Become the Premier Channel for Product Discovery in 2026
          </h2>
          
          <div className="prose prose-slate max-w-none text-slate-700 leading-relaxed space-y-4 text-base">
            <p>
              In 2026, digital buyer behavior has fundamentally shifted. Traditional marketing channels—including Google search ads, sponsored LinkedIn posts, and generic affiliate blogs—face unprecedented skepticism. Consumers and enterprise decision-makers actively append <code>"reddit"</code> to Google search queries to bypass sponsored marketing fluff and read authentic, peer-verified recommendations.
            </p>
            <p>
              Reddit now operates as the world's largest archive of unfiltered buying intent. With over 800 million monthly active users across hyper-specialized subreddits, Reddit provides an unparalleled interest graph. Unlike social media platforms (X, LinkedIn, Instagram) that rely on creator follower counts, Reddit distributes content based purely on interest relevance and community upvotes.
            </p>

            <div className="my-6 p-6 rounded-2xl bg-slate-950 text-white space-y-3 shadow-xl">
              <h3 className="text-lg font-bold text-[#FF4500] flex items-center gap-2">
                <Flame className="w-5 h-5" /> Why Choosing the Correct Subreddit is Critical
              </h3>
              <p className="text-sm text-slate-300 leading-relaxed">
                Posting your product in the wrong subreddit is the #1 reason marketers get banned or ignored. Subreddits are independent digital nations with distinct cultural norms, strict moderation bots, and unique posting rules. A post format that gains 500 upvotes in <code>r/SideProject</code> will get deleted instantly in <code>r/startups</code>. Success requires precision matching between your post angle and the specific subreddit audience.
              </p>
            </div>
          </div>
        </section>

        {/* Section 2: How Reddit Marketing Works */}
        <section id="how-reddit-marketing-works" className="space-y-4 pt-6 border-t border-slate-200 scroll-mt-28">
          <div className="flex items-center gap-2 text-[#FF4500] font-extrabold text-xs uppercase tracking-wider">
            <span>02 • Core Mechanics</span>
          </div>
          <h2 className="text-2xl sm:text-4xl font-black text-slate-950 tracking-tight">
            How Reddit Marketing Works: The Value-First Karma Loop
          </h2>

          <div className="prose prose-slate max-w-none text-slate-700 leading-relaxed space-y-4 text-base">
            <p>
              Organic Reddit marketing is not about pitching features; it is about solving problems publicly. Reddit's algorithm evaluates early upvote velocity and comment density within the first 60 minutes of posting. If a post delivers immense immediate value (e.g. sharing raw code, breakdown statistics, or downloadable resources), users upvote it, pushing it to the subreddit "Hot" tab and the global Reddit front page.
            </p>

            {/* Visual Flow Diagram */}
            <div className="my-8 p-6 bg-slate-900 rounded-2xl text-white font-mono text-xs overflow-x-auto shadow-lg space-y-2">
              <div className="text-[#FF4500] font-bold text-sm mb-2">THE REDDIT VALUE-FIRST MARKETING LOOP</div>
              <pre className="text-slate-300">
{`┌──────────────────────────────────────────────┐
│  1. Identify Niche Subreddit Intent         │
│  (e.g., r/SaaS user asks for pricing help)   │
└──────────────────────┬───────────────────────┘
                       │
                       ▼
┌──────────────────────────────────────────────┐
│  2. Publish 100% Value Post Body (No Links)  │
│  (1,500 words of actionable framework)       │
└──────────────────────┬───────────────────────┘
                       │
                       ▼
┌──────────────────────────────────────────────┐
│  3. Community Triggers Early Upvotes         │
│  (Algorithmic push to Subreddit Hot tab)     │
└──────────────────────┬───────────────────────┘
                       │
                       ▼
┌──────────────────────────────────────────────┐
│  4. Introduce Product URL in Comments        │
│  (High intent traffic & permanent SEO rank) │
└──────────────────────────────────────────────┘`}
              </pre>
            </div>
          </div>
        </section>

        {/* Section 3: Why Reddit Threads Rank on Google */}
        <section id="why-reddit-ranks-on-google" className="space-y-4 pt-6 border-t border-slate-200 scroll-mt-28">
          <div className="flex items-center gap-2 text-[#FF4500] font-extrabold text-xs uppercase tracking-wider">
            <span>03 • SEO Integration</span>
          </div>
          <h2 className="text-2xl sm:text-4xl font-black text-slate-950 tracking-tight">
            Why Reddit Threads Dominate Google Page 1 Search Results
          </h2>

          <div className="prose prose-slate max-w-none text-slate-700 leading-relaxed space-y-4 text-base">
            <p>
              Google's multi-million dollar licensing agreement with Reddit and subsequent core search updates have permanently prioritized forum discussions on Page 1. When buyers search for commercial keywords like <em>"best CRM for AI startups"</em> or <em>"alternative to Salesforce"</em>, Google routinely ranks active Reddit threads above affiliate blogs.
            </p>
            <p>
              When your brand is naturally discussed and recommended within high-ranking Reddit threads, your product captures high-intent traffic for years with zero ongoing ad spend.
            </p>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-4 my-6">
              <div className="p-5 rounded-2xl bg-orange-50 border border-orange-200/80 space-y-2">
                <h4 className="font-bold text-slate-950 text-sm">High Domain Authority</h4>
                <p className="text-xs text-slate-600">Reddit's domain authority (DA 99) allows new sub-threads to index on Google within minutes.</p>
              </div>
              <div className="p-5 rounded-2xl bg-orange-50 border border-orange-200/80 space-y-2">
                <h4 className="font-bold text-slate-950 text-sm">User Consensus Signal</h4>
                <p className="text-xs text-slate-600">Google favors active user consensus and multi-user commentary over single-author blogs.</p>
              </div>
              <div className="p-5 rounded-2xl bg-orange-50 border border-orange-200/80 space-y-2">
                <h4 className="font-bold text-slate-950 text-sm">Permanent Search Asset</h4>
                <p className="text-xs text-slate-600">Top Reddit threads maintain Page 1 Google rankings for years, acting as evergreen lead engines.</p>
              </div>
            </div>
          </div>
        </section>

        {/* Section 4: How Reddit Influences AI Search */}
        <section id="how-reddit-influences-ai-search" className="space-y-4 pt-6 border-t border-slate-200 scroll-mt-28">
          <div className="flex items-center gap-2 text-[#FF4500] font-extrabold text-xs uppercase tracking-wider">
            <span>04 • Generative Engine Optimization (GEO)</span>
          </div>
          <h2 className="text-2xl sm:text-4xl font-black text-slate-950 tracking-tight">
            How Reddit Directly Influences AI Search (Perplexity, ChatGPT, Gemini)
          </h2>

          <div className="prose prose-slate max-w-none text-slate-700 leading-relaxed space-y-4 text-base">
            <p>
              Modern Generative AI search engines—including Perplexity AI, ChatGPT Search, Claude 3.5, and Google Gemini—heavily index and scrape Reddit threads during Retrieval-Augmented Generation (RAG). When users ask AI assistants: <em>"What is the best Reddit marketing agency?"</em> or <em>"Which SaaS tool is best for cold email?"</em>, the AI reads recent Reddit threads to construct its answer.
            </p>
            <p>
              Establishing positive brand mentions and organic recommendations across relevant subreddits ensures your product is cited as the recommended solution by AI chatbots.
            </p>
          </div>
        </section>

        {/* Section 5: Common Reddit Marketing Mistakes */}
        <section id="common-marketing-mistakes" className="space-y-4 pt-6 border-t border-slate-200 scroll-mt-28">
          <div className="flex items-center gap-2 text-red-600 font-extrabold text-xs uppercase tracking-wider">
            <ShieldAlert className="w-4 h-4" />
            <span>05 • Risk Mitigation</span>
          </div>
          <h2 className="text-2xl sm:text-4xl font-black text-slate-950 tracking-tight">
            7 Lethal Reddit Marketing Mistakes (And How to Avoid Them)
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 my-6">
            <div className="p-5 rounded-2xl bg-red-50 border border-red-200 space-y-2">
              <h4 className="font-bold text-red-950 text-sm flex items-center gap-1.5">
                <AlertTriangle className="w-4 h-4 text-red-600" /> 1. Direct Link Spamming
              </h4>
              <p className="text-xs text-red-800">
                Posting raw product links in post titles or post bodies without context triggers automated AutoModerator bans instantly.
              </p>
            </div>
            <div className="p-5 rounded-2xl bg-red-50 border border-red-200 space-y-2">
              <h4 className="font-bold text-red-950 text-sm flex items-center gap-1.5">
                <AlertTriangle className="w-4 h-4 text-red-600" /> 2. Brand-New Zero Karma Accounts
              </h4>
              <p className="text-xs text-red-800">
                Posting commercial content from accounts with 0 karma or under 30 days account age flags your domain across Reddit spam filters.
              </p>
            </div>
            <div className="p-5 rounded-2xl bg-red-50 border border-red-200 space-y-2">
              <h4 className="font-bold text-red-950 text-sm flex items-center gap-1.5">
                <AlertTriangle className="w-4 h-4 text-red-600" /> 3. Ignoring Subreddit Sidebar Rules
              </h4>
              <p className="text-xs text-red-800">
                Every subreddit has unique rules (e.g. self-promotion threads only, specific post tags). Ignoring them causes immediate post deletion.
              </p>
            </div>
            <div className="p-5 rounded-2xl bg-red-50 border border-red-200 space-y-2">
              <h4 className="font-bold text-red-950 text-sm flex items-center gap-1.5">
                <AlertTriangle className="w-4 h-4 text-red-600" /> 4. Arguing with Moderators
              </h4>
              <p className="text-xs text-red-800">
                Moderators are volunteer community leaders. Publicly arguing over deleted posts leads to permanent subreddit bans.
              </p>
            </div>
          </div>
        </section>

        {/* Section 6: How to Build Karma Fast */}
        <section id="how-to-build-karma" className="space-y-4 pt-6 border-t border-slate-200 scroll-mt-28">
          <div className="flex items-center gap-2 text-[#FF4500] font-extrabold text-xs uppercase tracking-wider">
            <span>06 • Account Preparation</span>
          </div>
          <h2 className="text-2xl sm:text-4xl font-black text-slate-950 tracking-tight">
            How to Build Reddit Karma Authentically (0 to 500+ Karma Guide)
          </h2>

          <div className="prose prose-slate max-w-none text-slate-700 leading-relaxed space-y-4 text-base">
            <p>
              Karma is Reddit's trust score. To participate freely without AutoModerator flags, accounts should accumulate at least 100+ Comment Karma and 50+ Post Karma.
            </p>
            <ul className="list-disc pl-5 space-y-2 text-sm text-slate-700">
              <li><strong>Answer New Questions in High-Volume Subreddits:</strong> Filter <code>r/AskReddit</code> or <code>r/software</code> by "Rising" or "New" and post helpful, insightful comments early.</li>
              <li><strong>Participate in Niche Discussion Threads:</strong> Provide genuine technical or marketing answers in subreddits related to your expertise.</li>
              <li><strong>Maintain a 9:1 Value Ratio:</strong> Ensure 9 out of every 10 posts or comments are purely helpful discussions with zero mention of your product.</li>
            </ul>
          </div>
        </section>

        {/* Section 7: Pre-Posting Quality Checklist */}
        <section id="reddit-posting-checklist" className="space-y-4 pt-6 border-t border-slate-200 scroll-mt-28">
          <div className="flex items-center gap-2 text-[#FF4500] font-extrabold text-xs uppercase tracking-wider">
            <span>07 • Execution Standard</span>
          </div>
          <h2 className="text-2xl sm:text-4xl font-black text-slate-950 tracking-tight">
            The Pre-Posting Quality Audit Checklist
          </h2>

          <div className="bg-slate-900 text-white p-6 sm:p-8 rounded-3xl space-y-4">
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 text-xs">
              <div className="flex items-start gap-3 bg-slate-800 p-3.5 rounded-xl">
                <CheckCircle2 className="w-5 h-5 text-emerald-400 shrink-0 mt-0.5" />
                <div>
                  <strong className="text-white text-sm">Account Age & Karma Verified</strong>
                  <p className="text-slate-300 mt-0.5">Account is &gt;30 days old with &gt;50 karma in target category.</p>
                </div>
              </div>
              <div className="flex items-start gap-3 bg-slate-800 p-3.5 rounded-xl">
                <CheckCircle2 className="w-5 h-5 text-emerald-400 shrink-0 mt-0.5" />
                <div>
                  <strong className="text-white text-sm">Sidebar Rules Checked</strong>
                  <p className="text-slate-300 mt-0.5">Post adheres to exact tag requirements and self-promotion policies.</p>
                </div>
              </div>
              <div className="flex items-start gap-3 bg-slate-800 p-3.5 rounded-xl">
                <CheckCircle2 className="w-5 h-5 text-emerald-400 shrink-0 mt-0.5" />
                <div>
                  <strong className="text-white text-sm">Value-First Post Body</strong>
                  <p className="text-slate-300 mt-0.5">Post body contains standalone value without requiring users to click out.</p>
                </div>
              </div>
              <div className="flex items-start gap-3 bg-slate-800 p-3.5 rounded-xl">
                <CheckCircle2 className="w-5 h-5 text-emerald-400 shrink-0 mt-0.5" />
                <div>
                  <strong className="text-white text-sm">Active 60-Min Response Window</strong>
                  <p className="text-slate-300 mt-0.5">Team is ready to answer every incoming comment in the first hour.</p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Section 8: Proven Content Templates */}
        <section id="content-templates" className="space-y-4 pt-6 border-t border-slate-200 scroll-mt-28">
          <div className="flex items-center gap-2 text-[#FF4500] font-extrabold text-xs uppercase tracking-wider">
            <span>08 • High-Converting Copywriting</span>
          </div>
          <h2 className="text-2xl sm:text-4xl font-black text-slate-950 tracking-tight">
            4 Proven High-Engagement Reddit Post Templates
          </h2>

          <div className="space-y-6">
            <div className="p-6 rounded-2xl bg-white border border-slate-200 shadow-sm space-y-3">
              <div className="flex items-center justify-between">
                <h3 className="font-extrabold text-slate-950 text-base">Template A: The "Failure & Retrospective" Post</h3>
                <span className="text-xs font-bold text-[#FF4500] bg-orange-50 px-2.5 py-1 rounded-full border border-orange-200">High Upvote Conversion</span>
              </div>
              <div className="bg-slate-950 text-slate-200 p-4 rounded-xl font-mono text-xs overflow-x-auto leading-relaxed">
                <p className="text-emerald-400">Title: How we wasted $15,000 on Facebook Ads before pivoting to organic community growth (Exact breakdown & numbers)</p>
                <p className="text-slate-400 mt-2">Body: Share step-by-step metrics, CPA comparison tables, and lessons learned. Mention product only in comments when asked.</p>
              </div>
            </div>

            <div className="p-6 rounded-2xl bg-white border border-slate-200 shadow-sm space-y-3">
              <div className="flex items-center justify-between">
                <h3 className="font-extrabold text-slate-950 text-base">Template B: The "Free Open-Source Resource" Post</h3>
                <span className="text-xs font-bold text-emerald-600 bg-emerald-50 px-2.5 py-1 rounded-full border border-emerald-200">Viral Developer Reach</span>
              </div>
              <div className="bg-slate-950 text-slate-200 p-4 rounded-xl font-mono text-xs overflow-x-auto leading-relaxed">
                <p className="text-emerald-400">Title: I built a free open-source tool that automates [Painful Task] (GitHub repo in comments)</p>
                <p className="text-slate-400 mt-2">Body: Provide clean code snippets, performance benchmarks, and direct GitHub source link.</p>
              </div>
            </div>
          </div>
        </section>

        {/* Section 9: How to Find Customers on Reddit */}
        <section id="find-customers-on-reddit" className="space-y-4 pt-6 border-t border-slate-200 scroll-mt-28">
          <div className="flex items-center gap-2 text-[#FF4500] font-extrabold text-xs uppercase tracking-wider">
            <span>09 • Customer Discovery</span>
          </div>
          <h2 className="text-2xl sm:text-4xl font-black text-slate-950 tracking-tight">
            How to Mine Reddit for High-Intent Buyers (Google Operators & Tools)
          </h2>

          <div className="prose prose-slate max-w-none text-slate-700 leading-relaxed space-y-4 text-base">
            <p>
              You can instantly find prospective buyers actively asking for recommendations using Google Search operators targeted at Reddit:
            </p>
            <div className="p-4 rounded-xl bg-slate-900 text-slate-200 font-mono text-xs space-y-2">
              <p><span className="text-[#FF4500]">Search Operator 1:</span> <code>site:reddit.com "looking for" "SaaS marketing agency"</code></p>
              <p><span className="text-[#FF4500]">Search Operator 2:</span> <code>site:reddit.com/r/SaaS "alternative to" [Competitor Name]</code></p>
              <p><span className="text-[#FF4500]">Search Operator 3:</span> <code>site:reddit.com "what is the best software for"</code></p>
            </div>
          </div>
        </section>

        {/* Section 10: How to Avoid Getting Banned */}
        <section id="avoid-getting-banned" className="space-y-4 pt-6 border-t border-slate-200 scroll-mt-28">
          <div className="flex items-center gap-2 text-red-600 font-extrabold text-xs uppercase tracking-wider">
            <ShieldAlert className="w-4 h-4" />
            <span>10 • Security Protocols</span>
          </div>
          <h2 className="text-2xl sm:text-4xl font-black text-slate-950 tracking-tight">
            Reddit Anti-Ban Protocol & Shadowban Protection
          </h2>

          <div className="prose prose-slate max-w-none text-slate-700 leading-relaxed space-y-4 text-base">
            <p>
              Reddit employs sophisticated anti-spam algorithms that detect vote manipulation, IP proxies, and unnatural link patterns.
            </p>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 text-xs font-medium">
              <div className="p-4 rounded-xl bg-slate-100 border border-slate-200 space-y-1">
                <strong className="text-slate-900">Never Buy Low-Quality Karma:</strong>
                <p className="text-slate-600">Automated karma farm accounts get flagged together in bulk bans.</p>
              </div>
              <div className="p-4 rounded-xl bg-slate-100 border border-slate-200 space-y-1">
                <strong className="text-slate-900">Avoid Upvote Manipulation Rings:</strong>
                <p className="text-slate-600">Reddit tracks IP addresses and network fingerprinting. Upvoting posts from the same WiFi network triggers shadowbans.</p>
              </div>
            </div>
          </div>
        </section>

        {/* Section 11: Real SaaS Case Studies */}
        <section id="case-study-examples" className="space-y-4 pt-6 border-t border-slate-200 scroll-mt-28">
          <div className="flex items-center gap-2 text-[#FF4500] font-extrabold text-xs uppercase tracking-wider">
            <span>11 • Real-World Proof</span>
          </div>
          <h2 className="text-2xl sm:text-4xl font-black text-slate-950 tracking-tight">
            Case Studies: Organic Growth Wins on Reddit
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="p-6 rounded-2xl bg-white border border-slate-200 shadow-sm space-y-3">
              <span className="px-3 py-1 rounded-full text-xs font-bold bg-orange-50 text-[#FF4500] border border-orange-200">
                SaaS Launch • $0 to $12k MRR
              </span>
              <h3 className="font-extrabold text-slate-950 text-base">How a Micro-SaaS Bootstrapper Scaled in r/microSaaS</h3>
              <p className="text-xs text-slate-600 leading-relaxed">
                By publishing weekly build-in-public revenue graphs and technical code challenges, the founder attracted 1,400+ signups directly from r/microSaaS and r/SideProject without spending a dollar on ads.
              </p>
            </div>

            <div className="p-6 rounded-2xl bg-white border border-slate-200 shadow-sm space-y-3">
              <span className="px-3 py-1 rounded-full text-xs font-bold bg-emerald-50 text-emerald-600 border border-emerald-200">
                AI Tool • 45,000+ Visitors
              </span>
              <h3 className="font-extrabold text-slate-950 text-base">Viral Open-Source Launch in r/LocalLLaMA</h3>
              <p className="text-xs text-slate-600 leading-relaxed">
                An AI developer shared an open-source model quantization script on GitHub with benchmark charts in r/LocalLLaMA. The thread reached the Reddit Front Page, earning 1,200 GitHub stars and 45k site visits.
              </p>
            </div>
          </div>
        </section>

        {/* Section 12: FAQ Section */}
        <section id="faq-section" className="space-y-4 pt-6 border-t border-slate-200 scroll-mt-28">
          <div className="flex items-center gap-2 text-[#FF4500] font-extrabold text-xs uppercase tracking-wider">
            <HelpCircle className="w-4 h-4" />
            <span>12 • Frequently Asked Questions</span>
          </div>
          <h2 className="text-2xl sm:text-4xl font-black text-slate-950 tracking-tight">
            Frequently Asked Questions About Reddit Marketing
          </h2>

          <div className="space-y-3">
            {[
              {
                q: "Is organic Reddit marketing effective for B2B SaaS?",
                a: "Yes. B2B decision-makers (CTOs, CMOs, Product Leads) actively use specialized subreddits like r/SaaS, r/devops, and r/marketing to discover tools and evaluate peer reviews."
              },
              {
                q: "How many subreddits should a startup focus on initially?",
                a: "Focus on 3 to 5 core subreddits where your target buyer persona is most active rather than posting across dozens of unrelated communities."
              },
              {
                q: "Can I post my product link directly in Reddit posts?",
                a: "No. Direct link posts are heavily filtered by AutoModerator. Write a comprehensive, value-first text post and introduce your product URL in the comments or bio."
              },
              {
                q: "What is the best way to handle negative comments on Reddit?",
                a: "Never argue defensively. Respond with transparent, constructive feedback, acknowledge bugs, and explain how your product addresses their concerns."
              }
            ].map((faq, idx) => (
              <div key={idx} className="border border-slate-200 rounded-2xl overflow-hidden bg-white">
                <button
                  onClick={() => setActiveFaq(activeFaq === idx ? null : idx)}
                  className="w-full text-left p-5 flex items-center justify-between font-bold text-slate-900 text-sm hover:text-[#FF4500] transition-colors cursor-pointer"
                >
                  <span>{faq.q}</span>
                  {activeFaq === idx ? <ChevronUp className="w-4 h-4 text-[#FF4500]" /> : <ChevronDown className="w-4 h-4 text-slate-400" />}
                </button>
                {activeFaq === idx && (
                  <div className="p-5 pt-0 text-xs text-slate-600 leading-relaxed border-t border-slate-100 bg-slate-50/50">
                    {faq.a}
                  </div>
                )}
              </div>
            ))}
          </div>
        </section>

        {/* Section 13: Ultimate Master Checklist */}
        <section id="ultimate-checklist" className="space-y-4 pt-6 border-t border-slate-200 scroll-mt-28">
          <div className="flex items-center gap-2 text-[#FF4500] font-extrabold text-xs uppercase tracking-wider">
            <CheckCircle2 className="w-4 h-4" />
            <span>13 • Master Execution Guide</span>
          </div>
          <h2 className="text-2xl sm:text-4xl font-black text-slate-950 tracking-tight">
            The Ultimate 10-Step Reddit Growth Master Checklist
          </h2>

          <div className="p-8 rounded-3xl bg-slate-950 text-white space-y-4 shadow-2xl">
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 text-xs">
              {[
                "1. Audit target subreddits using the 300+ Directory above.",
                "2. Verify subreddit post rules, karma requirements, and promo threads.",
                "3. Build account karma to >100 via helpful comments in r/AskReddit & niche subs.",
                "4. Draft a 1,500+ word value-first post sharing actionable case data.",
                "5. Exclude commercial links from the main post title and body text.",
                "6. Publish during optimal activity windows (Tuesdays/Thursdays 9 AM EST).",
                "7. Monitor post during the critical first 60 minutes to answer comments.",
                "8. Place product link naturally in response to user questions.",
                "9. Track Google indexation of thread using Search Console.",
                "10. Partner with Reach4You for managed organic Reddit campaign scaling."
              ].map((item, idx) => (
                <div key={idx} className="flex items-center gap-2.5 bg-slate-900 p-3.5 rounded-xl border border-slate-800">
                  <span className="w-5 h-5 rounded-full bg-[#FF4500]/20 text-[#FF4500] font-bold text-xs flex items-center justify-center shrink-0">
                    ✓
                  </span>
                  <span className="text-slate-200">{item}</span>
                </div>
              ))}
            </div>

            <div className="pt-6 flex flex-col sm:flex-row items-center justify-between gap-4 border-t border-slate-800/80">
              <div className="text-xs text-slate-300">
                Want to keep this complete 300+ directory offline? Download the official A4 PDF report.
              </div>
              <button
                onClick={handleDownloadPdf}
                className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-6 py-3.5 rounded-2xl font-extrabold text-xs text-slate-950 bg-white hover:bg-slate-100 shadow-xl transition-all cursor-pointer"
              >
                <Download className="w-4 h-4 text-[#FF4500]" />
                <span>Download Complete PDF Report (28 Pages)</span>
              </button>
            </div>
          </div>
        </section>

      </div>
    </div>
  );
}
