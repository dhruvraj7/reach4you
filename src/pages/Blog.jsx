import React, { useState } from 'react';
import Badge from '../components/common/Badge';
import Card from '../components/common/Card';
import Button from '../components/common/Button';
import { BLOG_POSTS } from '../data/blogPosts';
import { 
  BookOpen, 
  Search, 
  Clock, 
  User, 
  ArrowUpRight, 
  Calendar, 
  Sparkles, 
  Layers, 
  PhoneCall, 
  Tag 
} from 'lucide-react';

export default function Blog({ setCurrentPage }) {
  const [searchQuery, setSearchQuery] = useState('');
  const [activeCategory, setActiveCategory] = useState('All');

  const categories = ['All', 'Reddit Strategy', 'Reddit SEO', 'Subreddit Selection', 'Case Insights', 'Agency Insights'];

  const filteredPosts = BLOG_POSTS.filter(post => {
    const matchesCategory = activeCategory === 'All' || post.category === activeCategory;
    const matchesSearch = post.title.toLowerCase().includes(searchQuery.toLowerCase()) || 
                          post.excerpt.toLowerCase().includes(searchQuery.toLowerCase()) ||
                          post.tags.some(tag => tag.toLowerCase().includes(searchQuery.toLowerCase()));
    return matchesCategory && matchesSearch;
  });

  const featuredPost = BLOG_POSTS[0];

  const navigateToSlug = (slug) => {
    if (typeof setCurrentPage === 'function') {
      setCurrentPage(`blog/${slug}`);
    }
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <div className="pt-28 pb-20 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-16 animate-fade-in-up">
      
      {/* Header */}
      <div className="text-center max-w-3xl mx-auto space-y-4">
        <Badge icon={BookOpen} variant="orange">Reddit Marketing Insights</Badge>
        <h1 className="text-4xl sm:text-6xl font-extrabold text-slate-950 tracking-tight">
          Strategy & Insights
        </h1>
        <p className="mt-4 text-slate-600 text-base sm:text-lg leading-relaxed font-normal">
          In-depth guides, Reddit SEO breakdowns, and subreddit selection strategies for founders, marketers, and product teams.
        </p>
      </div>

      {/* Featured Article Banner */}
      {activeCategory === 'All' && !searchQuery && featuredPost && (
        <div className="relative rounded-3xl overflow-hidden bg-slate-950 text-white border border-slate-800 shadow-2xl group cursor-pointer"
             onClick={() => navigateToSlug(featuredPost.slug)}>
          <div className="grid grid-cols-1 lg:grid-cols-12 items-center">
            
            <div className="lg:col-span-7 p-8 sm:p-12 space-y-5 z-10">
              <div className="flex items-center gap-3 flex-wrap">
                <span className="text-xs font-bold text-[#FF4500] bg-[#FF4500]/15 px-3 py-1 rounded-full border border-[#FF4500]/30 flex items-center gap-1">
                  <Sparkles className="w-3.5 h-3.5" />
                  Featured Insight
                </span>
                <span className="text-xs text-slate-400 flex items-center gap-1">
                  <Clock className="w-3.5 h-3.5 text-[#FF4500]" />
                  {featuredPost.readTime}
                </span>
              </div>

              <h2 className="text-2xl sm:text-4xl font-extrabold text-white group-hover:text-orange-400 transition-colors leading-tight">
                {featuredPost.title}
              </h2>

              <p className="text-slate-300 text-sm sm:text-base leading-relaxed line-clamp-3">
                {featuredPost.excerpt}
              </p>

              <div className="pt-4 flex items-center justify-between border-t border-slate-800 text-xs text-slate-400">
                <div className="flex items-center gap-3">
                  <img 
                    src={featuredPost.author.avatar} 
                    alt={featuredPost.author.name} 
                    className="w-8 h-8 rounded-full object-cover ring-2 ring-[#FF4500]/40" 
                  />
                  <div>
                    <p className="font-bold text-white">{featuredPost.author.name}</p>
                    <p className="text-[11px] text-slate-400">{featuredPost.publishDate}</p>
                  </div>
                </div>

                <div className="font-bold text-[#FF4500] group-hover:translate-x-1 transition-transform flex items-center gap-1 text-sm">
                  <span>Read Article</span>
                  <ArrowUpRight className="w-4 h-4" />
                </div>
              </div>
            </div>

            <div className="lg:col-span-5 h-64 lg:h-full relative overflow-hidden">
              <img 
                src={featuredPost.featuredImage} 
                alt={featuredPost.title} 
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" 
              />
              <div className="absolute inset-0 bg-gradient-to-t lg:bg-gradient-to-r from-slate-950 via-slate-950/40 to-transparent"></div>
            </div>

          </div>
        </div>
      )}

      {/* Search & Category Filter Bar */}
      <div className="flex flex-col sm:flex-row items-center justify-between gap-4 bg-slate-50 p-4 rounded-2xl border border-slate-200 shadow-xs">
        <div className="flex flex-wrap items-center gap-2">
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => setActiveCategory(cat)}
              className={`px-3.5 py-1.5 rounded-full text-xs font-semibold transition-all cursor-pointer ${
                activeCategory === cat
                  ? 'bg-slate-950 text-white shadow-xs'
                  : 'bg-white text-slate-600 hover:text-slate-950 border border-slate-200'
              }`}
            >
              {cat}
            </button>
          ))}
        </div>

        <div className="relative w-full sm:w-64">
          <Search className="w-4 h-4 text-slate-400 absolute left-3 top-1/2 -translate-y-1/2" />
          <input
            type="text"
            placeholder="Search articles or tags..."
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            className="w-full pl-9 pr-4 py-2 text-xs rounded-xl bg-white border border-slate-200 focus:outline-none focus:ring-2 focus:ring-[#FF4500]/30 shadow-2xs"
          />
        </div>
      </div>

      {/* Article Grid */}
      {filteredPosts.length > 0 ? (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredPosts.map((post) => (
            <Card 
              key={post.id} 
              className="flex flex-col justify-between overflow-hidden bg-white border-slate-200/90 hover:border-[#FF4500] hover:shadow-xl transition-all duration-300 group cursor-pointer"
            >
              <div 
                onClick={() => navigateToSlug(post.slug)}
                className="space-y-4"
              >
                {/* Featured Image */}
                <div className="relative aspect-[16/9] overflow-hidden bg-slate-100">
                  <img 
                    src={post.featuredImage} 
                    alt={post.title} 
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300" 
                  />
                  <div className="absolute top-3 left-3">
                    <span className="text-[11px] font-bold text-slate-900 bg-white/95 backdrop-blur-md px-2.5 py-1 rounded-full border border-slate-200/80 shadow-xs">
                      {post.category}
                    </span>
                  </div>
                </div>

                <div className="p-6 pb-0 space-y-2">
                  <div className="flex items-center justify-between text-xs text-slate-400">
                    <span className="flex items-center gap-1 font-medium">
                      <Calendar className="w-3.5 h-3.5" />
                      {post.publishDate}
                    </span>
                    <span className="flex items-center gap-1 font-medium">
                      <Clock className="w-3.5 h-3.5 text-[#FF4500]" />
                      {post.readTime}
                    </span>
                  </div>

                  <h2 className="text-lg font-extrabold text-slate-950 group-hover:text-[#FF4500] transition-colors leading-snug line-clamp-2">
                    {post.title}
                  </h2>

                  <p className="text-xs text-slate-600 leading-relaxed font-normal line-clamp-3">
                    {post.excerpt}
                  </p>
                </div>
              </div>

              {/* Author & CTA Footer */}
              <div className="p-6 pt-4 mt-4 border-t border-slate-100 flex items-center justify-between text-xs text-slate-500">
                <div className="flex items-center gap-2">
                  <img 
                    src={post.author.avatar} 
                    alt={post.author.name} 
                    className="w-6 h-6 rounded-full object-cover" 
                  />
                  <span className="font-semibold text-slate-800 truncate max-w-[120px]">
                    {post.author.name}
                  </span>
                </div>

                <button 
                  onClick={() => navigateToSlug(post.slug)}
                  className="font-bold text-[#FF4500] hover:underline flex items-center gap-1 cursor-pointer"
                >
                  <span>Read Post</span>
                  <ArrowUpRight className="w-3.5 h-3.5" />
                </button>
              </div>
            </Card>
          ))}
        </div>
      ) : (
        <div className="text-center py-16 bg-slate-50 rounded-3xl border border-slate-200 space-y-3">
          <BookOpen className="w-10 h-10 text-slate-400 mx-auto" />
          <h3 className="text-lg font-bold text-slate-900">No matching articles found</h3>
          <p className="text-xs text-slate-500 max-w-sm mx-auto">Try resetting your category filter or search keywords to explore all Reddit marketing guides.</p>
          <button 
            onClick={() => { setActiveCategory('All'); setSearchQuery(''); }}
            className="px-4 py-2 text-xs font-bold bg-slate-900 text-white rounded-full hover:bg-slate-800 transition-colors"
          >
            Reset Filters
          </button>
        </div>
      )}

      {/* Blog CTA Banner linking to Contact and Services */}
      <div className="bg-slate-950 text-white rounded-3xl p-8 sm:p-12 text-center space-y-6 relative overflow-hidden border border-slate-800 shadow-2xl">
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-96 h-96 bg-[#FF4500]/10 blur-3xl rounded-full pointer-events-none"></div>

        <h2 className="text-2xl sm:text-3xl font-extrabold text-white tracking-tight">
          Ready to launch your authentic Reddit marketing campaign?
        </h2>

        <p className="text-slate-400 text-sm max-w-lg mx-auto font-normal leading-relaxed">
          Book a strategy call to map high-converting subreddits and select your monthly package with our 7-Day Live Guarantee.
        </p>

        <div className="flex flex-col sm:flex-row items-center justify-center gap-4 pt-2">
          <button
            onClick={() => setCurrentPage('contact')}
            className="w-full sm:w-auto px-6 py-3 rounded-full text-xs font-bold text-white bg-[#FF4500] hover:bg-[#E03D00] transition-all shadow-lg shadow-[#FF4500]/25 flex items-center justify-center gap-2 cursor-pointer"
          >
            <PhoneCall className="w-4 h-4" />
            <span>Book Strategy Call</span>
            <ArrowUpRight className="w-4 h-4" />
          </button>

          <button
            onClick={() => setCurrentPage('services')}
            className="w-full sm:w-auto px-6 py-3 rounded-full text-xs font-bold text-slate-200 bg-slate-900 hover:bg-slate-800 border border-slate-700 transition-all flex items-center justify-center gap-2 cursor-pointer"
          >
            <Layers className="w-4 h-4 text-[#FF4500]" />
            <span>Explore Services</span>
          </button>
        </div>
      </div>

    </div>
  );
}
