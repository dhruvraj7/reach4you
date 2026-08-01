import React, { useState } from 'react';
import Badge from '../components/common/Badge';
import Card from '../components/common/Card';
import Button from '../components/common/Button';
import { Flame, ArrowUpRight, Clock, User, BookOpen, Search, X } from 'lucide-react';

export default function Blog({ setCurrentPage }) {
  const [selectedPost, setSelectedPost] = useState(null);
  const [searchQuery, setSearchQuery] = useState('');
  const [activeCategory, setActiveCategory] = useState('All');

  const categories = ['All', 'Reddit Strategy', 'Reddit SEO', 'Subreddit Selection'];

  const posts = [
    {
      id: 'reddit-marketing-guide-2026',
      slug: '/blog/reddit-marketing-guide-2026',
      title: 'The Guide to Authentic Reddit Marketing in 2026',
      excerpt: 'Why traditional ad campaigns fail on Reddit and how 100% human community contributors build brand trust across multiple subreddits without triggering spam filters.',
      content: `Reddit has become a key destination for product recommendations on the internet. However, Redditors have an acute detector for corporate marketing speech and bot accounts. In this guide, we break down how to naturally introduce your brand into relevant subreddits of all sizes using real, high-karma contributor accounts.`,
      category: 'Reddit Strategy',
      author: 'Reach4You Team',
      readTime: '6 min read'
    },
    {
      id: 'google-serp-reddit-seo-strategy',
      slug: '/blog/google-serp-reddit-seo-strategy',
      title: 'How to Position Your Brand on Google Search via Reddit SEO',
      excerpt: 'Google frequently ranks Reddit discussions in organic search results. Learn how authentic Reddit posts can capture high-intent search traffic.',
      content: `When prospective buyers search for product recommendations on Google, Reddit discussions frequently rank near the top. By creating authentic, helpful Reddit posts in your niche, your brand gains search visibility for commercial search terms.`,
      category: 'Reddit SEO',
      author: 'Reach4You Team',
      readTime: '8 min read'
    },
    {
      id: 'selecting-relevant-subreddits',
      slug: '/blog/selecting-relevant-subreddits',
      title: 'Why Subreddits of All Sizes Matter for Campaign Distribution',
      excerpt: 'Why focusing solely on massive subreddits is a mistake, and how selecting small, medium, and focused subreddits drives targeted discussion.',
      content: `Many brands assume marketing on Reddit requires posting in the largest defaults. In reality, smaller and medium-sized subreddits often possess higher community engagement and lower spam filters, providing ideal environments for multi-thread campaign distribution.`,
      category: 'Subreddit Selection',
      author: 'Reach4You Team',
      readTime: '5 min read'
    }
  ];

  const filteredPosts = posts.filter(post => {
    const matchesCategory = activeCategory === 'All' || post.category === activeCategory;
    const matchesSearch = post.title.toLowerCase().includes(searchQuery.toLowerCase()) || 
                          post.excerpt.toLowerCase().includes(searchQuery.toLowerCase());
    return matchesCategory && matchesSearch;
  });

  return (
    <div className="pt-28 pb-20 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-16">
      
      {/* Header */}
      <div className="text-center max-w-3xl mx-auto space-y-4">
        <Badge icon={BookOpen} variant="orange">Reddit Marketing Insights</Badge>
        <h1 className="text-4xl sm:text-6xl font-extrabold text-slate-950 tracking-tight">
          Strategy & Insights
        </h1>
        <p className="mt-4 text-slate-600 text-base sm:text-lg leading-relaxed font-normal">
          In-depth guides, Reddit SEO breakdowns, and subreddit selection insights for founders and growth marketers.
        </p>
      </div>

      {/* Search & Category Filter Bar */}
      <div className="flex flex-col sm:flex-row items-center justify-between gap-4 bg-slate-50 p-4 rounded-2xl border border-slate-200">
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
            placeholder="Search articles..."
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            className="w-full pl-9 pr-4 py-1.5 text-xs rounded-xl bg-white border border-slate-200 focus:outline-none focus:ring-2 focus:ring-[#FF4500]/30"
          />
        </div>
      </div>

      {/* Article Grid */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        {filteredPosts.map((post) => (
          <Card key={post.id} className="flex flex-col justify-between p-8 bg-white border-slate-200/90 hover:border-[#FF4500] transition-all group">
            <div>
              <div className="flex items-center justify-between gap-2 mb-3">
                <span className="text-[11px] font-bold text-[#FF4500] bg-orange-50 px-2.5 py-1 rounded-full border border-orange-200/60">
                  {post.category}
                </span>
                <span className="text-xs text-slate-400 flex items-center gap-1">
                  <Clock className="w-3.5 h-3.5" />
                  {post.readTime}
                </span>
              </div>
              
              <h2 className="text-xl font-extrabold text-slate-950 group-hover:text-[#FF4500] transition-colors leading-snug">
                {post.title}
              </h2>

              <p className="text-xs text-slate-600 mt-2 leading-relaxed font-normal">
                {post.excerpt}
              </p>
            </div>

            <div className="mt-6 pt-4 border-t border-slate-100 flex items-center justify-between text-xs text-slate-500">
              <span className="flex items-center gap-1 font-medium">
                <User className="w-3.5 h-3.5 text-[#FF4500]" />
                {post.author}
              </span>
              <button 
                onClick={() => setSelectedPost(post)}
                className="font-bold text-[#FF4500] hover:underline flex items-center gap-1 cursor-pointer"
              >
                <span>Read Article</span>
                <ArrowUpRight className="w-3.5 h-3.5" />
              </button>
            </div>
          </Card>
        ))}
      </div>

      {/* Article Reader Modal */}
      {selectedPost && (
        <div className="fixed inset-0 z-50 bg-slate-950/60 backdrop-blur-sm flex items-center justify-center p-4">
          <div className="bg-white rounded-3xl max-w-2xl w-full p-8 max-h-[85vh] overflow-y-auto relative border border-slate-200 shadow-2xl animate-in zoom-in-95 duration-200 space-y-6">
            <button 
              onClick={() => setSelectedPost(null)}
              className="absolute top-6 right-6 p-2 rounded-full bg-slate-100 hover:bg-slate-200 text-slate-700 transition-colors"
            >
              <X className="w-5 h-5" />
            </button>

            <div className="flex items-center gap-2">
              <span className="text-xs font-bold text-[#FF4500] bg-orange-50 px-2.5 py-1 rounded-full border border-orange-200">
                {selectedPost.category}
              </span>
              <span className="text-xs text-slate-400">{selectedPost.readTime}</span>
            </div>

            <h2 className="text-2xl sm:text-3xl font-extrabold text-slate-950 leading-tight">
              {selectedPost.title}
            </h2>

            <p className="text-sm text-slate-600 leading-relaxed font-normal">
              {selectedPost.content}
            </p>

            <div className="p-4 rounded-2xl bg-slate-50 border border-slate-200 text-xs text-slate-600 space-y-2">
              <p className="font-bold text-slate-900">Ready to launch a Reddit campaign for your product?</p>
              <p>Book a strategy call to map relevant subreddits and select your campaign package.</p>
              <Button onClick={() => { setSelectedPost(null); setCurrentPage('contact'); }} icon={ArrowUpRight} className="mt-2 text-xs py-2">
                Book Strategy Call
              </Button>
            </div>
          </div>
        </div>
      )}

      {/* Blog CTA */}
      <div className="bg-slate-950 text-white rounded-3xl p-8 sm:p-12 text-center space-y-4">
        <h2 className="text-2xl font-extrabold">Ready to launch your Reddit campaign?</h2>
        <p className="text-slate-400 text-sm max-w-md mx-auto font-normal">Book a call with our team to select your package and map target subreddits.</p>
        <Button onClick={() => setCurrentPage('contact')} icon={ArrowUpRight} className="mx-auto text-xs py-3 font-bold">
          Book Strategy Call
        </Button>
      </div>

    </div>
  );
}
