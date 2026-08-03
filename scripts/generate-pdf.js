import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';
import { jsPDF } from 'jspdf';
import autoTable from 'jspdf-autotable';
import { SUBREDDITS_DATA, SUBREDDIT_CATEGORIES } from '../src/data/subredditDirectoryData.js';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
const projectRoot = path.resolve(__dirname, '..');

export function generatePdf() {
  console.log('[pdf] Building Ultimate-300-Subreddits-Directory-2026.pdf...');

  const doc = new jsPDF({
    orientation: 'portrait',
    unit: 'mm',
    format: 'a4'
  });

  const pageWidth = doc.internal.pageSize.getWidth(); // 210mm
  const pageHeight = doc.internal.pageSize.getHeight(); // 297mm
  const margin = 15;
  const contentWidth = pageWidth - margin * 2;

  // Colors
  const primaryColor = [255, 69, 0];    // #FF4500
  const darkColor = [15, 23, 42];       // #0F172A (slate-900)
  const textColor = [30, 41, 59];       // #1E293B (slate-800)
  const mutedColor = [100, 116, 139];   // #64748B (slate-500)
  const lightBg = [248, 250, 252];      // #F8FAFC (slate-50)

  // ----------------------------------------------------
  // COVER PAGE (Page 1)
  // ----------------------------------------------------
  
  // Top Header Banner Box
  doc.setFillColor(...darkColor);
  doc.rect(0, 0, pageWidth, 90, 'F');

  // Brand Logo Mark & Name
  doc.setFillColor(...primaryColor);
  doc.roundedRect(margin, 20, 12, 12, 3, 3, 'F');
  doc.setTextColor(255, 255, 255);
  doc.setFont('helvetica', 'bold');
  doc.setFontSize(14);
  doc.text('r/', margin + 3.5, 28);

  doc.setFontSize(20);
  doc.text('Reach4You Agency', margin + 16, 28);

  // Document Badge
  doc.setFillColor(255, 69, 0);
  doc.roundedRect(margin, 42, 65, 7, 2, 2, 'F');
  doc.setFontSize(8);
  doc.setTextColor(255, 255, 255);
  doc.text('2026 OFFICIAL INDUSTRY REPORT', margin + 3, 46.5);

  // Main Cover Title
  doc.setFont('helvetica', 'bold');
  doc.setFontSize(22);
  doc.setTextColor(255, 255, 255);
  const titleLines = doc.splitTextToSize(
    'The Ultimate Directory of 300+ Active Subreddits for SaaS, AI, Startups, Marketing, Gaming & Tech',
    contentWidth
  );
  doc.text(titleLines, margin, 58);

  // Cover Main Body Area
  doc.setTextColor(...darkColor);
  doc.setFontSize(14);
  doc.setFont('helvetica', 'bold');
  doc.text('Executive Summary & Strategy Resource', margin, 105);

  doc.setFont('helvetica', 'normal');
  doc.setFontSize(10);
  doc.setTextColor(...textColor);
  const summaryText = [
    'This comprehensive intelligence report delivers the internet\'s most exhaustive directory of active Reddit communities in 2026. Designed for SaaS founders, AI developers, marketers, and growth teams, this document details 315 verified subreddits across 21 core technology sectors.',
    '',
    'Each entry provides verified member counts, activity levels, karma requirements, promotion policies, optimal posting times, and actionable strategy tips to maximize organic search visibility and customer acquisition without triggering spam filters.'
  ];
  let summaryY = 113;
  summaryText.forEach((line) => {
    const split = doc.splitTextToSize(line, contentWidth);
    doc.text(split, margin, summaryY);
    summaryY += split.length * 5;
  });

  // Metadata Box on Cover
  doc.setFillColor(...lightBg);
  doc.setDrawColor(226, 232, 240);
  doc.roundedRect(margin, 145, contentWidth, 50, 4, 4, 'FD');

  doc.setFont('helvetica', 'bold');
  doc.setFontSize(10);
  doc.setTextColor(...darkColor);
  doc.text('REPORT METADATA & AUTHOR CREDENTIALS', margin + 6, 153);

  doc.setFont('helvetica', 'normal');
  doc.setFontSize(9);
  doc.setTextColor(...textColor);
  doc.text('Author: Alex Rivera (Head of Reddit Strategy, Reach4You Agency)', margin + 6, 161);
  doc.text('Target Platform: Reddit (Search & Community Graph)', margin + 6, 167);
  doc.text('Publication Date: August 3, 2026', margin + 6, 173);
  doc.text('Total Verified Communities: 315 Subreddits across 21 Categories', margin + 6, 179);
  doc.text('Combined Audience Reach: 140,000,000+ Active Members', margin + 6, 185);

  // Key Highlights Box
  doc.setFillColor(255, 247, 237); // orange-50
  doc.setDrawColor(254, 215, 170); // orange-200
  doc.roundedRect(margin, 205, contentWidth, 65, 4, 4, 'FD');

  doc.setFont('helvetica', 'bold');
  doc.setFontSize(11);
  doc.setTextColor(...primaryColor);
  doc.text('CORE STRATEGY TAKEAWAYS', margin + 6, 214);

  const takeaways = [
    '• Google Search & Generative AI (ChatGPT, Perplexity) directly prioritize active Reddit threads on Page 1.',
    '• Reddit operates on a topic-based interest graph, enabling precise persona targeting.',
    '• Value-first text posts without upfront commercial links achieve 4x higher upvote velocity.',
    '• Every subreddit possesses strict sidebar rules; compliance is mandatory to avoid AutoModerator bans.',
    '• Includes proven post copywriting templates, customer discovery search operators, and master checklist.'
  ];

  doc.setFont('helvetica', 'normal');
  doc.setFontSize(9);
  doc.setTextColor(...textColor);
  let takeawayY = 222;
  takeaways.forEach((t) => {
    const split = doc.splitTextToSize(t, contentWidth - 12);
    doc.text(split, margin + 6, takeawayY);
    takeawayY += split.length * 5;
  });

  // ----------------------------------------------------
  // TABLE OF CONTENTS (Page 2)
  // ----------------------------------------------------
  doc.addPage();
  
  doc.setFont('helvetica', 'bold');
  doc.setFontSize(18);
  doc.setTextColor(...darkColor);
  doc.text('Table of Contents', margin, 22);

  doc.setDrawColor(...primaryColor);
  doc.setLineWidth(1);
  doc.line(margin, 25, margin + 40, 25);

  const tocItems = [
    { title: '1. Executive Overview: Why Reddit Product Discovery Matters in 2026', page: '3' },
    { title: '2. How Reddit Marketing Works: The Value-First Karma Loop', page: '3' },
    { title: '3. Why Reddit Threads Dominate Google Page 1 Search Results', page: '4' },
    { title: '4. How Reddit Influences Generative AI Search (ChatGPT, Perplexity, Claude)', page: '4' },
    { title: '5. 7 Lethal Reddit Marketing Mistakes & Risk Mitigation', page: '5' },
    { title: '6. Account Preparation: How to Build 500+ Karma Authentically', page: '5' },
    { title: '7. Pre-Posting Quality Audit Checklist & Post Templates', page: '6' },
    { title: '8. Mining Reddit for Customers & Anti-Ban Protocols', page: '6' },
    { title: '9. Category 1: SaaS (15 Subreddits)', page: '7' },
    { title: '10. Category 2: AI & Machine Learning (15 Subreddits)', page: '8' },
    { title: '11. Category 3: Startups & Entrepreneurship (15 Subreddits)', page: '9' },
    { title: '12. Category 4: Marketing & Demand Gen (15 Subreddits)', page: '10' },
    { title: '13. Category 5: SEO & Search Optimization (15 Subreddits)', page: '11' },
    { title: '14. Category 6: Programming & Software Engineering (15 Subreddits)', page: '12' },
    { title: '15. Category 7: Cybersecurity & InfoSec (15 Subreddits)', page: '13' },
    { title: '16. Category 8: DevOps & Site Reliability (15 Subreddits)', page: '14' },
    { title: '17. Category 9: Cloud Computing & Infrastructure (15 Subreddits)', page: '15' },
    { title: '18. Category 10: Machine Learning Deep-Dives (15 Subreddits)', page: '16' },
    { title: '19. Category 11: Data Science & Analytics (15 Subreddits)', page: '17' },
    { title: '20. Category 12: Gaming & Esports (15 Subreddits)', page: '18' },
    { title: '21. Category 13: Game Development (15 Subreddits)', page: '19' },
    { title: '22. Category 14: Ecommerce & DTC (15 Subreddits)', page: '20' },
    { title: '23. Category 15: Web Development & Frontend (15 Subreddits)', page: '21' },
    { title: '24. Category 16: Mobile Apps & App Store Growth (15 Subreddits)', page: '22' },
    { title: '25. Category 17: Business & Executive Operations (15 Subreddits)', page: '23' },
    { title: '26. Category 18: Product Management & Product Design (15 Subreddits)', page: '24' },
    { title: '27. Category 19: Finance & Investing (15 Subreddits)', page: '25' },
    { title: '28. Category 20: Design & Creative Technology (15 Subreddits)', page: '26' },
    { title: '29. Category 21: Niche Strategy & Reddit Growth (15 Subreddits)', page: '27' },
    { title: '30. Frequently Asked Questions & Master Checklist', page: '28' },
  ];

  doc.setFontSize(9.5);
  let tocY = 32;
  tocItems.forEach((item) => {
    doc.setFont('helvetica', 'normal');
    doc.setTextColor(...textColor);
    doc.text(item.title, margin, tocY);

    doc.setFont('helvetica', 'bold');
    doc.setTextColor(...primaryColor);
    doc.text(item.page, pageWidth - margin - 5, tocY);

    doc.setDrawColor(226, 232, 240);
    doc.setLineWidth(0.2);
    doc.line(margin + doc.getTextWidth(item.title) + 2, tocY - 1, pageWidth - margin - 8, tocY - 1);

    tocY += 7.5;
  });

  // ----------------------------------------------------
  // EXECUTIVE GUIDE SECTIONS (Pages 3 - 6)
  // ----------------------------------------------------

  // Function to render text section header
  const renderSectionHeader = (title, sub) => {
    doc.setFont('helvetica', 'bold');
    doc.setFontSize(14);
    doc.setTextColor(...darkColor);
    doc.text(title, margin, doc.y || 25);
    
    doc.setDrawColor(...primaryColor);
    doc.setLineWidth(0.8);
    doc.line(margin, (doc.y || 25) + 2, margin + 30, (doc.y || 25) + 2);
    
    if (sub) {
      doc.setFont('helvetica', 'normal');
      doc.setFontSize(9);
      doc.setTextColor(...mutedColor);
      doc.text(sub, margin, (doc.y || 25) + 8);
    }
  };

  // Page 3: Overview & Mechanics
  doc.addPage();
  doc.y = 22;
  renderSectionHeader('1. Executive Overview: Why Reddit Product Discovery Matters', 'The shift from sponsored advertising to authentic community validation.');

  doc.setFont('helvetica', 'normal');
  doc.setFontSize(9.5);
  doc.setTextColor(...textColor);
  let p3Text = [
    'In 2026, digital buyer behavior has fundamentally evolved. Buyers no longer trust top-ranking affiliate blogs or polished landing pages. Instead, users routinely append "reddit" to Google queries to find authentic peer reviews.',
    '',
    'Reddit operates as an interest-based graph across 100,000+ micro-communities. Unlike follower-based social media networks (LinkedIn, X, Instagram), Reddit distributes content based purely on interest relevance and community upvotes.',
    '',
    'Choosing the correct subreddit matters more than simply posting everywhere. A post that gains 500 upvotes in r/SideProject will be deleted instantly in r/startups. Success requires matching your content angle to specific subreddit rules.'
  ];
  let p3Y = 38;
  p3Text.forEach((l) => {
    const s = doc.splitTextToSize(l, contentWidth);
    doc.text(s, margin, p3Y);
    p3Y += s.length * 5;
  });

  p3Y += 5;
  doc.y = p3Y;
  renderSectionHeader('2. How Reddit Marketing Works: The Value-First Karma Loop', 'Understanding early upvote velocity and post distribution.');

  let loopText = [
    'Organic Reddit marketing is not about pitching features—it is about solving problems publicly. Reddit\'s distribution algorithm evaluates upvote velocity and comment density within the first 60 minutes.',
    '',
    '1. Identify Niche Subreddit Intent: Find user questions in target subreddits.',
    '2. Publish 100% Value Post: Write 1,000+ words of actionable content without raw product links.',
    '3. Community Upvote Boost: Immediate community value pushes the post to the Subreddit "Hot" tab.',
    '4. Introduce Product URL in Comments: Place product links naturally when users request them.'
  ];
  let loopY = p3Y + 16;
  loopText.forEach((l) => {
    const s = doc.splitTextToSize(l, contentWidth);
    doc.text(s, margin, loopY);
    loopY += s.length * 5;
  });

  // Page 4: SEO & Generative AI Search
  doc.addPage();
  doc.y = 22;
  renderSectionHeader('3. Why Reddit Threads Rank on Google Page 1', 'Google\'s licensing deal and forum indexing priority.');

  let p4Text = [
    'Google\'s core search algorithms permanently prioritize forum discussions on Page 1 for commercial buying queries. When users search "best project management software for startups reddit", Google ranks active Reddit threads above affiliate sites.',
    '',
    'High Domain Authority (DA 99) enables new Reddit posts to index within minutes. Establishing positive brand mentions within top-ranking threads creates permanent organic search assets.'
  ];
  let p4Y = 38;
  p4Text.forEach((l) => {
    const s = doc.splitTextToSize(l, contentWidth);
    doc.text(s, margin, p4Y);
    p4Y += s.length * 5;
  });

  p4Y += 5;
  doc.y = p4Y;
  renderSectionHeader('4. How Reddit Influences Generative AI Search (GEO)', 'Perplexity, ChatGPT, Claude, and Gemini RAG citation.');

  let aiText = [
    'Generative AI search engines heavily scrape and index active Reddit threads during Retrieval-Augmented Generation (RAG). When users ask AI assistants for product recommendations, the AI evaluates Reddit community consensus.',
    '',
    'Ensuring your brand is authentically discussed in relevant subreddits guarantees inclusion in AI-generated answer summaries.'
  ];
  let aiY = p4Y + 16;
  aiText.forEach((l) => {
    const s = doc.splitTextToSize(l, contentWidth);
    doc.text(s, margin, aiY);
    aiY += s.length * 5;
  });

  // Page 5: Mistakes & Karma
  doc.addPage();
  doc.y = 22;
  renderSectionHeader('5. 7 Lethal Reddit Marketing Mistakes', 'Avoid automated bans and account flags.');

  let mistakes = [
    '1. Direct Link Spamming: Dropping raw links in post bodies triggers instant AutoModerator deletion.',
    '2. Zero Karma Accounts: Posting commercial posts from new accounts flags your domain.',
    '3. Ignoring Sidebar Rules: Failing to check subreddit specific tag requirements.',
    '4. Arguing with Moderators: Moderator disputes lead to permanent subreddit bans.',
    '5. Buying Fake Karma: Low-quality karma farm accounts are banned in automated sweeps.'
  ];
  let mY = 38;
  mistakes.forEach((l) => {
    const s = doc.splitTextToSize(l, contentWidth);
    doc.text(s, margin, mY);
    mY += s.length * 5;
  });

  mY += 5;
  doc.y = mY;
  renderSectionHeader('6. Account Preparation & Karma Building', 'Reaching 100+ Comment Karma quickly.');

  let karmaText = [
    '• Filter high-volume subreddits (r/AskReddit, r/software) by "Rising" and post helpful comments early.',
    '• Answer questions in niche subreddits related to your core technical domain.',
    '• Maintain a strict 9:1 value ratio (9 value posts/comments for every 1 product reference).'
  ];
  let kY = mY + 16;
  karmaText.forEach((l) => {
    const s = doc.splitTextToSize(l, contentWidth);
    doc.text(s, margin, kY);
    kY += s.length * 5;
  });

  // Page 6: Pre-Posting Audit & Templates
  doc.addPage();
  doc.y = 22;
  renderSectionHeader('7. Pre-Posting Quality Audit Checklist & Copywriting Templates', 'Standard operating procedures for post execution.');

  let templatesText = [
    'Pre-Post Checklist:',
    '✓ Account age >30 days with >50 karma in target category.',
    '✓ Subreddit sidebar rules and self-promo threads checked.',
    '✓ Standalone value provided in post body without requiring external link clicks.',
    '✓ Team prepared to answer incoming comments during first 60-minute window.',
    '',
    'Proven Copywriting Framework (The Failure & Lesson Story):',
    'Title: "How we wasted $15,000 on Facebook Ads before pivoting to organic community growth (Exact breakdown)"',
    'Body: Provide detailed cost tables, conversion rates, and lessons. Mention product only in comments when requested.'
  ];
  let tY = 38;
  templatesText.forEach((l) => {
    const s = doc.splitTextToSize(l, contentWidth);
    doc.text(s, margin, tY);
    tY += s.length * 5;
  });

  // ----------------------------------------------------
  // SUBREDDIT CATEGORY TABLES (Pages 7 - 27)
  // ----------------------------------------------------

  const categories = SUBREDDIT_CATEGORIES.filter((c) => c !== 'All Categories');

  categories.forEach((catName, idx) => {
    doc.addPage();

    // Category Header
    doc.setFillColor(...darkColor);
    doc.rect(0, 0, pageWidth, 26, 'F');

    doc.setFont('helvetica', 'bold');
    doc.setFontSize(13);
    doc.setTextColor(255, 255, 255);
    doc.text(`CATEGORY ${idx + 1}: ${catName.toUpperCase()}`, margin, 17);

    doc.setFontSize(9);
    doc.setTextColor(...primaryColor);
    doc.text(`15 Verified Subreddits • A4 Directory Report`, pageWidth - margin - 60, 17);

    const catSubreddits = SUBREDDITS_DATA.filter((s) => s.category === catName);

    const tableRows = catSubreddits.map((sub) => [
      `${sub.name}\n${sub.link}`,
      sub.members,
      sub.activity,
      sub.karmaReq,
      sub.promoPolicy,
      sub.difficulty,
      sub.tips
    ]);

    autoTable(doc, {
      startY: 32,
      head: [['Subreddit & Link', 'Members', 'Activity', 'Karma Req', 'Promo Policy', 'Difficulty', 'Strategy Tip']],
      body: tableRows,
      margin: { left: margin, right: margin, bottom: 20 },
      styles: {
        fontSize: 7.5,
        cellPadding: 2.5,
        font: 'helvetica',
        textColor: textColor,
        overflow: 'linebreak'
      },
      headStyles: {
        fillColor: darkColor,
        textColor: [255, 255, 255],
        fontStyle: 'bold',
        fontSize: 8
      },
      alternateRowStyles: {
        fillColor: [248, 250, 252]
      },
      columnStyles: {
        0: { cellWidth: 35, fontStyle: 'bold', textColor: primaryColor },
        1: { cellWidth: 16, fontStyle: 'bold' },
        2: { cellWidth: 20 },
        3: { cellWidth: 25 },
        4: { cellWidth: 25 },
        5: { cellWidth: 18, fontStyle: 'bold' },
        6: { cellWidth: 'auto' }
      },
      didParseCell: function(data) {
        // Add clickable link to column 0
        if (data.section === 'body' && data.column.index === 0) {
          const rawText = data.cell.raw;
          const linkMatch = rawText.match(/https:\/\/reddit\.com\/r\/[^\s]+/);
          if (linkMatch) {
            data.cell.link = linkMatch[0];
          }
        }
      }
    });
  });

  // ----------------------------------------------------
  // FINAL PAGE: FAQ & MASTER CHECKLIST (Page 28)
  // ----------------------------------------------------
  doc.addPage();
  doc.y = 22;
  renderSectionHeader('30. Frequently Asked Questions & Master Execution Checklist', 'Final operational guidance for growth teams.');

  let faqs = [
    'Q: Is organic Reddit marketing effective for B2B SaaS?',
    'A: Yes. B2B decision-makers actively research tools in specialized subreddits like r/SaaS and r/devops.',
    '',
    'Q: How many subreddits should a startup target initially?',
    'A: Focus on 3 to 5 core subreddits where your buyer persona is most active.',
    '',
    'Q: How to handle negative comments on Reddit?',
    'A: Respond constructively without defensive arguments. Acknowledge bugs and state product roadmap solutions.'
  ];
  let fY = 38;
  faqs.forEach((l) => {
    const s = doc.splitTextToSize(l, contentWidth);
    doc.text(s, margin, fY);
    fY += s.length * 4.5;
  });

  fY += 6;
  doc.setFillColor(...darkColor);
  doc.roundedRect(margin, fY, contentWidth, 75, 4, 4, 'F');

  doc.setFont('helvetica', 'bold');
  doc.setFontSize(11);
  doc.setTextColor(...primaryColor);
  doc.text('ULTIMATE 10-STEP REDDIT MASTER CHECKLIST', margin + 6, fY + 10);

  const masterList = [
    '1. Audit target subreddits using the 315 Subreddit Directory tables.',
    '2. Verify subreddit sidebar rules, karma thresholds, and weekly promo threads.',
    '3. Build account karma to >100 via helpful comments in niche subreddits.',
    '4. Write 1,000+ word value-first post sharing raw data and framework.',
    '5. Exclude commercial links from post title and initial post body.',
    '6. Publish during optimal activity windows (Tuesdays/Thursdays 9 AM EST).',
    '7. Monitor and reply to every incoming comment during the first 60 minutes.',
    '8. Place product link naturally when requested in comment threads.',
    '9. Monitor Google Search Console indexation of top performing threads.',
    '10. Partner with Reach4You Agency for managed organic campaign scaling.'
  ];

  doc.setFont('helvetica', 'normal');
  doc.setFontSize(8.5);
  doc.setTextColor(255, 255, 255);
  let checkY = fY + 18;
  masterList.forEach((item) => {
    doc.text(item, margin + 6, checkY);
    checkY += 5.5;
  });

  // ----------------------------------------------------
  // FOOTER & PAGE NUMBERS (All Pages)
  // ----------------------------------------------------
  const totalPages = doc.internal.getNumberOfPages();

  for (let i = 1; i <= totalPages; i++) {
    doc.setPage(i);
    
    // Skip footer on Cover Page
    if (i === 1) continue;

    doc.setDrawColor(226, 232, 240);
    doc.setLineWidth(0.4);
    doc.line(margin, pageHeight - 14, pageWidth - margin, pageHeight - 14);

    doc.setFont('helvetica', 'normal');
    doc.setFontSize(8);
    doc.setTextColor(...mutedColor);
    doc.text('Reach4You Agency • Ultimate 300+ Subreddits Directory (2026)', margin, pageHeight - 8);

    doc.setFont('helvetica', 'bold');
    doc.setTextColor(...darkColor);
    doc.text(`Page ${i} of ${totalPages}`, pageWidth - margin - 18, pageHeight - 8);
  }

  // Save to public/ and dist/
  const pdfFilename = 'Ultimate-300-Subreddits-Directory-2026.pdf';
  const publicPdfPath = path.join(projectRoot, 'public', pdfFilename);
  const pdfBuffer = doc.output('arraybuffer');

  fs.writeFileSync(publicPdfPath, Buffer.from(pdfBuffer));
  console.log(`[pdf] Successfully generated PDF at public/${pdfFilename} (${(pdfBuffer.byteLength / 1024).toFixed(1)} KB)`);

  const distDir = path.join(projectRoot, 'dist');
  if (fs.existsSync(distDir)) {
    const distPdfPath = path.join(distDir, pdfFilename);
    fs.writeFileSync(distPdfPath, Buffer.from(pdfBuffer));
    console.log(`[pdf] Successfully copied PDF to dist/${pdfFilename}`);
  }
}

// Execute if run directly
if (process.argv[1] === __filename) {
  generatePdf();
}
