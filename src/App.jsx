import React, { useState, useEffect } from 'react';
import Navbar from './components/common/Navbar';
import Footer from './components/common/Footer';
import Home from './pages/Home';
import Services from './pages/Services';
import Pricing from './pages/Pricing';
import Blog from './pages/Blog';
import Contributor from './pages/Contributor';
import About from './pages/About';
import Contact from './pages/Contact';

export default function App() {
  const [currentPage, setCurrentPage] = useState('home');

  // Dynamic SEO Controller
  useEffect(() => {
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
        description: 'Simple, transparent monthly pricing tiers: Starter ($400/mo), Growth & Launch ($600/mo), Enterprise ($1000/mo). 7-Day Live Guarantee.',
        path: '/pricing'
      },
      blog: {
        title: 'Reddit Marketing Blog & Case Insights | Reach4You',
        description: 'Authentic Reddit marketing strategies, subreddits selection guides, and case insights.',
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

    const currentSeo = seoData[currentPage] || seoData.home;
    const baseUrl = 'https://reach4you.agency';
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

    window.scrollTo({ top: 0, behavior: 'smooth' });
  }, [currentPage]);

  const renderPage = () => {
    switch (currentPage) {
      case 'home':
        return <Home setCurrentPage={setCurrentPage} />;
      case 'services':
        return <Services setCurrentPage={setCurrentPage} />;
      case 'pricing':
        return <Pricing setCurrentPage={setCurrentPage} />;
      case 'blog':
        return <Blog setCurrentPage={setCurrentPage} />;
      case 'contributor':
        return <Contributor setCurrentPage={setCurrentPage} />;
      case 'about':
        return <About setCurrentPage={setCurrentPage} />;
      case 'contact':
        return <Contact setCurrentPage={setCurrentPage} />;
      default:
        return <Home setCurrentPage={setCurrentPage} />;
    }
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
