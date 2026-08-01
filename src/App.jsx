import React, { useState, useEffect } from 'react';
import Navbar from './components/common/Navbar';
import Footer from './components/common/Footer';
import Home from './pages/Home';
import Services from './pages/Services';
import Pricing from './pages/Pricing';
import Blog from './pages/Blog';
import BlogPost from './pages/BlogPost';
import Contributor from './pages/Contributor';
import About from './pages/About';
import Contact from './pages/Contact';
import { getPostBySlug } from './data/blogPosts';

function getPageFromPath(path) {
  const cleanPath = (path || window.location.pathname).replace(/\/$/, '');
  if (!cleanPath || cleanPath === '' || cleanPath === '/') return 'home';
  if (cleanPath === '/services') return 'services';
  if (cleanPath === '/pricing') return 'pricing';
  if (cleanPath === '/blog') return 'blog';
  if (cleanPath.startsWith('/blog/')) {
    const slug = cleanPath.replace('/blog/', '');
    return `blog/${slug}`;
  }
  if (cleanPath === '/contributor') return 'contributor';
  if (cleanPath === '/about') return 'about';
  if (cleanPath === '/contact') return 'contact';
  
  // Fallback check: if page is passed without leading slash
  return cleanPath.replace(/^\//, '');
}

function getPathFromPage(page) {
  if (!page || page === 'home') return '/';
  if (page.startsWith('blog/')) return `/${page}`;
  return `/${page}`;
}

export default function App() {
  const [currentPage, setCurrentPageState] = useState(() => getPageFromPath(window.location.pathname));

  const setCurrentPage = (pageKey) => {
    setCurrentPageState(pageKey);
    const targetPath = getPathFromPage(pageKey);
    if (window.location.pathname !== targetPath) {
      window.history.pushState({}, '', targetPath);
    }
  };

  useEffect(() => {
    const handlePopState = () => {
      setCurrentPageState(getPageFromPath(window.location.pathname));
    };
    window.addEventListener('popstate', handlePopState);
    return () => window.removeEventListener('popstate', handlePopState);
  }, []);

  // Dynamic SEO Controller
  useEffect(() => {
    const baseUrl = 'https://reach4you.agency';
    let currentSeo = {
      title: 'Reach4You | Dedicated Reddit Marketing Agency',
      description: 'Reach4You helps startups, SaaS, AI, gaming, and ecommerce brands grow through authentic Reddit posts and comments across multiple subreddits. Powered by 50+ vetted contributors.',
      path: '/'
    };

    if (currentPage.startsWith('blog/')) {
      const slug = currentPage.replace('blog/', '');
      const post = getPostBySlug(slug);
      if (post) {
        currentSeo = {
          title: post.seo?.metaTitle || `${post.title} | Reach4You Blog`,
          description: post.seo?.metaDescription || post.excerpt,
          path: `/blog/${post.slug}`,
          image: post.featuredImage,
          type: 'article',
          postData: post
        };
      } else {
        currentSeo = {
          title: 'Reddit Marketing Blog & Case Insights | Reach4You',
          description: 'Authentic Reddit marketing strategies, subreddit selection guides, and case insights.',
          path: '/blog'
        };
      }
    } else {
      const seoData = {
        home: {
          title: 'Reach4You | Dedicated Reddit Marketing Agency',
          description: 'Reach4You helps startups, SaaS, AI, gaming, and ecommerce brands grow through authentic Reddit posts and comments across multiple subreddits. Powered by 50+ vetted contributors.',
          path: '/'
        },
        services: {
          title: 'Reddit Marketing Services | Reach4You Agency',
          description: 'Explore specialized Reddit marketing services: Reddit Brand Awareness, Product Launch Campaigns, Reddit SEO, and Startup Growth Campaigns.',
          path: '/services'
        },
        pricing: {
          title: 'Transparent Pricing | Reach4You Agency',
          description: 'Simple, transparent monthly pricing tiers: Starter ($300/campaign), Growth & Launch ($500/campaign), Enterprise ($900/campaign). 7-Day Live Guarantee.',
          path: '/pricing'
        },
        blog: {
          title: 'Reddit Marketing Blog & Case Insights | Reach4You',
          description: 'Authentic Reddit marketing strategies, subreddit selection guides, and case insights.',
          path: '/blog'
        },
        contributor: {
          title: 'Become a Reddit Contributor | Reach4You Network',
          description: 'Apply to join the Reach4You network of 50+ vetted Reddit contributors. Paid assignments for experienced Redditors.',
          path: '/contributor'
        },
        about: {
          title: 'About Reach4You | The Reddit-Only Growth Agency',
          description: 'Learn why Reach4You exclusively specializes in Reddit marketing. Authentic human posts and comments across multiple relevant subreddits.',
          path: '/about'
        },
        contact: {
          title: 'Book a Strategy Call | Reach4You Reddit Marketing',
          description: 'Book a strategy session or select your package to launch your Reddit campaign with Reach4You.',
          path: '/contact'
        }
      };

      currentSeo = seoData[currentPage] || seoData.home;
    }

    const fullUrl = `${baseUrl}${currentSeo.path}`;

    document.title = currentSeo.title;

    let metaDesc = document.querySelector('meta[name="description"]');
    if (metaDesc) metaDesc.setAttribute('content', currentSeo.description);

    let canonical = document.getElementById('canonical-url');
    if (canonical) canonical.setAttribute('href', fullUrl);

    let ogTitle = document.getElementById('og-title');
    if (ogTitle) ogTitle.setAttribute('content', currentSeo.title);

    let ogDesc = document.getElementById('og-desc');
    if (ogDesc) ogDesc.setAttribute('content', currentSeo.description);

    let ogUrl = document.getElementById('og-url');
    if (ogUrl) ogUrl.setAttribute('content', fullUrl);

    let twTitle = document.getElementById('twitter-title');
    if (twTitle) twTitle.setAttribute('content', currentSeo.title);

    let twDesc = document.getElementById('twitter-desc');
    if (twDesc) twDesc.setAttribute('content', currentSeo.description);

    // Dynamic Schema Injection for BlogPosting / Article
    let existingSchemaScript = document.getElementById('dynamic-page-schema');
    if (existingSchemaScript) {
      existingSchemaScript.remove();
    }

    if (currentSeo.postData) {
      const p = currentSeo.postData;
      const schemaData = {
        "@context": "https://schema.org",
        "@type": "BlogPosting",
        "headline": p.title,
        "description": p.excerpt,
        "image": p.featuredImage,
        "datePublished": p.publishDate,
        "author": {
          "@type": "Person",
          "name": p.author.name,
          "jobTitle": p.author.role
        },
        "publisher": {
          "@type": "Organization",
          "name": "Reach4You",
          "logo": {
            "@type": "ImageObject",
            "url": "https://reach4you.agency/favicon.svg"
          }
        },
        "mainEntityOfPage": {
          "@type": "WebPage",
          "@id": fullUrl
        }
      };
      const script = document.createElement('script');
      script.id = 'dynamic-page-schema';
      script.type = 'application/ld+json';
      script.text = JSON.stringify(schemaData);
      document.head.appendChild(script);
    }

    window.scrollTo({ top: 0, behavior: 'smooth' });
  }, [currentPage]);

  const renderPage = () => {
    if (currentPage === 'home') return <Home setCurrentPage={setCurrentPage} />;
    if (currentPage === 'services') return <Services setCurrentPage={setCurrentPage} />;
    if (currentPage === 'pricing') return <Pricing setCurrentPage={setCurrentPage} />;
    if (currentPage === 'blog') return <Blog setCurrentPage={setCurrentPage} />;
    if (currentPage.startsWith('blog/')) {
      const slug = currentPage.replace('blog/', '');
      return <BlogPost slug={slug} setCurrentPage={setCurrentPage} />;
    }
    if (currentPage === 'contributor') return <Contributor setCurrentPage={setCurrentPage} />;
    if (currentPage === 'about') return <About setCurrentPage={setCurrentPage} />;
    if (currentPage === 'contact') return <Contact setCurrentPage={setCurrentPage} />;
    
    return <Home setCurrentPage={setCurrentPage} />;
  };

  return (
    <div className="min-h-screen flex flex-col justify-between bg-white text-slate-950 font-sans selection:bg-[#FF4500]/10 selection:text-[#FF4500] bg-grid-pattern">
      <header role="banner">
        <Navbar currentPage={currentPage} setCurrentPage={setCurrentPage} />
      </header>
      <main id="main-content" role="main" className="flex-grow">
        {renderPage()}
      </main>
      <Footer setCurrentPage={setCurrentPage} />
    </div>
  );
}
