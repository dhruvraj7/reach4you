import React, { useState } from 'react';
import Badge from '../components/common/Badge';
import Card from '../components/common/Card';
import Button from '../components/common/Button';
import SubredditDirectory from '../components/blog/SubredditDirectory';
import { 
  BLOG_POSTS, 
  getPostBySlug, 
  getRelatedPosts, 
  getPrevNextPosts 
} from '../data/blogPosts';
import { 
  ChevronRight, 
  Clock, 
  Calendar, 
  User, 
  ArrowUpRight, 
  ArrowLeft, 
  ArrowRight, 
  Share2, 
  Check, 
  BookOpen, 
  Sparkles,
  Layers,
  PhoneCall
} from 'lucide-react';

export default function BlogPost({ slug, setCurrentPage }) {
  const post = getPostBySlug(slug) || BLOG_POSTS[0];
  const relatedPosts = getRelatedPosts(post.slug, 3);
  const { prev, next } = getPrevNextPosts(post.slug);
  const [copied, setCopied] = useState(false);

  const handleShare = () => {
    if (navigator.clipboard) {
      navigator.clipboard.writeText(window.location.href);
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    }
  };

  const navigateToSlug = (targetSlug) => {
    if (typeof setCurrentPage === 'function') {
      setCurrentPage(`blog/${targetSlug}`);
    }
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <div className="pt-28 pb-20 max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12 animate-fade-in-up">
      
      {/* Breadcrumb Navigation */}
      <nav aria-label="Breadcrumb" className="flex items-center gap-2 text-xs text-slate-500 flex-wrap">
        <button 
          onClick={() => setCurrentPage('home')}
          className="hover:text-[#FF4500] transition-colors cursor-pointer"
        >
          Home
        </button>
        <ChevronRight className="w-3.5 h-3.5 text-slate-300" />
        <button 
          onClick={() => setCurrentPage('blog')}
          className="hover:text-[#FF4500] transition-colors cursor-pointer"
        >
          Blog
        </button>
        <ChevronRight className="w-3.5 h-3.5 text-slate-300" />
        <span className="text-slate-400 font-medium">{post.category}</span>
        <ChevronRight className="w-3.5 h-3.5 text-slate-300 hidden sm:inline" />
        <span className="text-slate-900 font-semibold truncate max-w-xs hidden sm:inline">{post.title}</span>
      </nav>

      {/* Article Header */}
      <header className="space-y-6 text-left">
        <div className="flex items-center gap-3 flex-wrap">
          <Badge variant="orange" icon={BookOpen}>{post.category}</Badge>
          <span className="inline-flex items-center gap-1.5 text-xs text-slate-500 font-medium">
            <Calendar className="w-3.5 h-3.5 text-slate-400" />
            {post.publishDate}
          </span>
          <span className="text-slate-300">•</span>
          <span className="inline-flex items-center gap-1.5 text-xs text-slate-500 font-medium">
            <Clock className="w-3.5 h-3.5 text-slate-400" />
            {post.readTime}
          </span>
        </div>

        <h1 className="text-3xl sm:text-5xl font-extrabold text-slate-950 tracking-tight leading-[1.15]">
          {post.title}
        </h1>

        <p className="text-base sm:text-xl text-slate-600 leading-relaxed font-normal">
          {post.excerpt}
        </p>

        {/* Author Details & Share Toolbar */}
        <div className="pt-4 border-t border-b border-slate-200/80 py-4 flex flex-col sm:flex-row sm:items-center justify-between gap-4">
          <div className="flex items-center gap-3.5">
            <img 
              src={post.author.avatar} 
              alt={post.author.name} 
              className="w-11 h-11 rounded-full object-cover ring-2 ring-[#FF4500]/20" 
            />
            <div>
              <div className="font-bold text-sm text-slate-900 flex items-center gap-1.5">
                <span>{post.author.name}</span>
                <span className="px-2 py-0.5 text-[10px] font-semibold bg-orange-50 text-[#FF4500] rounded-full border border-orange-200/60">
                  Verified Author
                </span>
              </div>
              <p className="text-xs text-slate-500">{post.author.role}</p>
            </div>
          </div>

          <div className="flex items-center gap-2">
            <button
              onClick={handleShare}
              className="inline-flex items-center gap-1.5 px-3.5 py-1.5 rounded-full text-xs font-semibold text-slate-700 bg-slate-100 hover:bg-slate-200 transition-colors cursor-pointer"
              title="Copy Article Link"
            >
              {copied ? <Check className="w-3.5 h-3.5 text-emerald-600" /> : <Share2 className="w-3.5 h-3.5 text-slate-500" />}
              <span>{copied ? 'Link Copied!' : 'Share Article'}</span>
            </button>
          </div>
        </div>
      </header>

      {/* Featured Graphic/Image */}
      <div className="relative rounded-3xl overflow-hidden shadow-xl border border-slate-200/80 aspect-[21/9]">
        <img 
          src={post.featuredImage} 
          alt={post.title} 
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-slate-950/40 via-transparent to-transparent"></div>
      </div>

      {/* Key Takeaways Box */}
      {post.keyTakeaways && post.keyTakeaways.length > 0 && (
        <div className="p-6 sm:p-8 rounded-3xl bg-slate-900 text-white shadow-xl space-y-4 relative overflow-hidden">
          <div className="absolute -right-8 -bottom-8 w-40 h-40 bg-[#FF4500]/20 rounded-full blur-2xl pointer-events-none"></div>
          
          <div className="flex items-center gap-2 text-[#FF4500]">
            <Sparkles className="w-5 h-5" />
            <h2 className="text-base font-extrabold uppercase tracking-wider">Key Executive Takeaways</h2>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 pt-2">
            {post.keyTakeaways.map((item, idx) => (
              <div key={idx} className="flex items-start gap-2.5 bg-slate-800/80 p-3.5 rounded-xl border border-slate-700/60">
                <span className="w-5 h-5 rounded-full bg-[#FF4500]/20 text-[#FF4500] font-bold text-xs flex items-center justify-center shrink-0 mt-0.5">
                  {idx + 1}
                </span>
                <p className="text-xs text-slate-200 leading-snug">{item}</p>
              </div>
            ))}
          </div>
        </div>
      )}

      {/* Article Content Sections / Directory Component */}
      {post.isInteractiveDirectory ? (
        <SubredditDirectory setCurrentPage={setCurrentPage} />
      ) : (
        <article 
          onClick={(e) => {
            const target = e.target.closest('a');
            if (target) {
              const href = target.getAttribute('href');
              if (href && href.startsWith('/')) {
                e.preventDefault();
                const pageKey = href.replace(/^\//, '');
                if (typeof setCurrentPage === 'function') {
                  setCurrentPage(pageKey || 'home');
                }
                window.scrollTo({ top: 0, behavior: 'smooth' });
              }
            }
          }}
          className="prose prose-slate max-w-none space-y-8 text-slate-800 leading-relaxed font-normal"
        >
          {post.sections && post.sections.map((sec, idx) => (
            <section key={idx} className="space-y-3 pt-2">
              <h2 className="text-2xl sm:text-3xl font-extrabold text-slate-950 tracking-tight">
                {sec.heading}
              </h2>
              <div 
                dangerouslySetInnerHTML={{ __html: sec.content }} 
                className="text-base text-slate-700 leading-relaxed space-y-4"
              />
            </section>
          ))}
        </article>
      )}

      {/* Author Bio Card */}
      <div className="p-6 rounded-3xl bg-slate-50 border border-slate-200 flex flex-col sm:flex-row items-center gap-5 text-center sm:text-left">
        <img 
          src={post.author.avatar} 
          alt={post.author.name} 
          className="w-16 h-16 rounded-full object-cover ring-4 ring-white shadow-md shrink-0" 
        />
        <div className="space-y-1.5 flex-grow">
          <h3 className="font-extrabold text-slate-950 text-base">Written by {post.author.name}</h3>
          <p className="text-xs text-[#FF4500] font-semibold">{post.author.role} at Reach4You Agency</p>
          <p className="text-xs text-slate-600 leading-relaxed">
            Specializing in authentic Reddit marketing, subreddit sentiment analysis, and search engine integration for SaaS and tech startups.
          </p>
        </div>
      </div>

      {/* Previous & Next Article Navigation */}
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-6 border-t border-slate-200">
        {prev ? (
          <button
            onClick={() => navigateToSlug(prev.slug)}
            className="p-5 rounded-2xl border border-slate-200 hover:border-[#FF4500] bg-white text-left transition-all group flex flex-col justify-between cursor-pointer hover:shadow-md"
          >
            <div className="flex items-center gap-1 text-xs text-slate-400 font-semibold mb-2 group-hover:text-[#FF4500]">
              <ArrowLeft className="w-3.5 h-3.5" />
              <span>Previous Article</span>
            </div>
            <h4 className="text-sm font-bold text-slate-950 group-hover:text-[#FF4500] line-clamp-2 transition-colors">
              {prev.title}
            </h4>
          </button>
        ) : <div />}

        {next ? (
          <button
            onClick={() => navigateToSlug(next.slug)}
            className="p-5 rounded-2xl border border-slate-200 hover:border-[#FF4500] bg-white text-right transition-all group flex flex-col justify-between cursor-pointer hover:shadow-md ml-auto w-full"
          >
            <div className="flex items-center justify-end gap-1 text-xs text-slate-400 font-semibold mb-2 group-hover:text-[#FF4500]">
              <span>Next Article</span>
              <ArrowRight className="w-3.5 h-3.5" />
            </div>
            <h4 className="text-sm font-bold text-slate-950 group-hover:text-[#FF4500] line-clamp-2 transition-colors">
              {next.title}
            </h4>
          </button>
        ) : <div />}
      </div>

      {/* Related Articles */}
      <div className="pt-8 space-y-6">
        <div className="flex items-center justify-between">
          <div>
            <h2 className="text-2xl font-extrabold text-slate-950 tracking-tight">Related Strategy Articles</h2>
            <p className="text-xs text-slate-500 mt-1">More insights on Reddit marketing and organic customer acquisition.</p>
          </div>
          <button
            onClick={() => setCurrentPage('blog')}
            className="text-xs font-bold text-[#FF4500] hover:underline flex items-center gap-1 cursor-pointer"
          >
            <span>View All</span>
            <ChevronRight className="w-4 h-4" />
          </button>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {relatedPosts.map((rel) => (
            <Card 
              key={rel.id} 
              className="flex flex-col justify-between p-6 bg-white border-slate-200 hover:border-[#FF4500] transition-all group cursor-pointer"
            >
              <div 
                onClick={() => navigateToSlug(rel.slug)}
                className="space-y-3"
              >
                <div className="aspect-video rounded-xl overflow-hidden mb-3">
                  <img src={rel.featuredImage} alt={rel.title} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300" />
                </div>
                <div className="flex items-center justify-between text-xs">
                  <span className="font-bold text-[#FF4500] bg-orange-50 px-2 py-0.5 rounded-full border border-orange-200/60">
                    {rel.category}
                  </span>
                  <span className="text-slate-400 text-[11px]">{rel.readTime}</span>
                </div>
                <h3 className="text-base font-bold text-slate-950 group-hover:text-[#FF4500] transition-colors leading-snug line-clamp-2">
                  {rel.title}
                </h3>
                <p className="text-xs text-slate-600 line-clamp-2 leading-relaxed">
                  {rel.excerpt}
                </p>
              </div>

              <div className="mt-4 pt-3 border-t border-slate-100 flex items-center justify-between text-xs">
                <span className="text-slate-400 font-medium">{rel.publishDate}</span>
                <button 
                  onClick={() => navigateToSlug(rel.slug)}
                  className="font-bold text-[#FF4500] group-hover:translate-x-0.5 transition-transform flex items-center gap-1 cursor-pointer"
                >
                  <span>Read</span>
                  <ArrowUpRight className="w-3.5 h-3.5" />
                </button>
              </div>
            </Card>
          ))}
        </div>
      </div>

      {/* Primary Conversion CTA Linking to Contact & Services */}
      <div className="bg-slate-950 text-white rounded-3xl p-8 sm:p-12 relative overflow-hidden shadow-2xl border border-slate-800">
        <div className="absolute top-0 right-0 w-80 h-80 bg-[#FF4500]/15 blur-3xl rounded-full pointer-events-none"></div>

        <div className="relative z-10 max-w-2xl mx-auto text-center space-y-6">
          <Badge icon={Sparkles} variant="orange">Launch Your Reddit Campaign</Badge>
          
          <h2 className="text-2xl sm:text-4xl font-extrabold text-white tracking-tight">
            Ready to turn Reddit into your top acquisition channel?
          </h2>

          <p className="text-slate-300 text-sm sm:text-base leading-relaxed font-normal">
            Book a strategy session to review target subreddits, outline campaign threads, and choose from our guaranteed campaign packages.
          </p>

          <div className="pt-2 flex flex-col sm:flex-row items-center justify-center gap-4">
            <button
              onClick={() => setCurrentPage('contact')}
              className="w-full sm:w-auto px-6 py-3.5 rounded-full text-xs font-bold text-white bg-[#FF4500] hover:bg-[#E03D00] transition-all shadow-lg shadow-[#FF4500]/30 hover:shadow-xl flex items-center justify-center gap-2 cursor-pointer"
            >
              <PhoneCall className="w-4 h-4" />
              <span>Book Strategy Call</span>
              <ArrowUpRight className="w-4 h-4" />
            </button>

            <button
              onClick={() => setCurrentPage('services')}
              className="w-full sm:w-auto px-6 py-3.5 rounded-full text-xs font-bold text-slate-200 bg-slate-900 hover:bg-slate-800 border border-slate-700 transition-all flex items-center justify-center gap-2 cursor-pointer"
            >
              <Layers className="w-4 h-4 text-[#FF4500]" />
              <span>Explore Reddit Services</span>
            </button>
          </div>

          <p className="text-[11px] text-slate-400 pt-2">
            ✓ 7-Day Live Guarantee Included • 100% Vetted Reddit Contributors • Zero Spam Risk
          </p>
        </div>
      </div>

    </div>
  );
}
