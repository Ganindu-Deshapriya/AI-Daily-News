'use client';

import { useState, useEffect } from 'react';
import { GIST_URL } from '@/lib/constants';
import { generateTagline } from '@/lib/utils';
import Header from '@/components/Header';
import FilterBar from '@/components/FilterBar';
import ArticleGrid from '@/components/ArticleGrid';
import Sidebar from '@/components/Sidebar';
import Footer from '@/components/Footer';

export default function HomePage() {
  const [feed, setFeed] = useState(null);
  const [activeTag, setActiveTag] = useState('all');
  const [error, setError] = useState(null);

  useEffect(() => {
    fetch(GIST_URL)
      .then(res => {
        if (!res.ok) throw new Error(`HTTP ${res.status}`);
        return res.json();
      })
      .then(data => setFeed(data))
      .catch(err => setError(err.message));
  }, []);

  if (error) {
    return (
      <div className="loading-state">
        Failed to load feed: {error}
      </div>
    );
  }

  if (!feed) {
    return <div className="loading-state">Loading today&apos;s intelligence…</div>;
  }

  const filtered =
    activeTag === 'all'
      ? feed.articles
      : feed.articles.filter(a => a.tags.includes(activeTag));

  return (
    <>
      <Header
        dateLabel={feed.date_label}
        articleCount={feed.article_count}
        tagline={generateTagline(feed.articles)}
      />
      <FilterBar activeTag={activeTag} onFilterChange={setActiveTag} />
      <div className="container">
        <div className="main-layout">
          <ArticleGrid articles={filtered} />
          <Sidebar articles={feed.articles} />
        </div>
      </div>
      <Footer />
    </>
  );
}
