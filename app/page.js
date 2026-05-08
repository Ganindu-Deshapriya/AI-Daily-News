'use client';

import { useState, useEffect } from 'react';
import { GIST_URL, PAGE_SIZE } from '@/lib/constants';
import { generateTagline, getTagCounts } from '@/lib/utils';
import Header from '@/components/Header';
import FilterBar from '@/components/FilterBar';
import ArticleGrid from '@/components/ArticleGrid';
import Sidebar from '@/components/Sidebar';
import Footer from '@/components/Footer';
import Pagination from '@/components/Pagination';

export default function HomePage() {
  const [feed, setFeed] = useState(null);
  const [activeTag, setActiveTag] = useState('all');
  const [searchQuery, setSearchQuery] = useState('');
  const [currentPage, setCurrentPage] = useState(1);
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

  // Reset to page 1 whenever filters change
  const handleTagChange = (tag) => {
    setActiveTag(tag);
    setSearchQuery('');
    setCurrentPage(1);
  };

  const handleSearch = (q) => {
    setSearchQuery(q);
    setCurrentPage(1);
  };

  if (error) {
    return (
      <div className="loading-state">
        <i className="fa-solid fa-triangle-exclamation" style={{ fontSize: '2rem', color: 'var(--tag-safety)' }} />
        Failed to load feed: {error}
      </div>
    );
  }

  if (!feed) {
    return (
      <div className="loading-state">
        <div className="loading-spinner" />
        Loading today&apos;s intelligence…
      </div>
    );
  }

  // 1. Filter by tag
  const tagFiltered =
    activeTag === 'all'
      ? feed.articles
      : feed.articles.filter(a => a.tags.includes(activeTag));

  // 2. Filter by search
  const filtered = searchQuery.trim()
    ? tagFiltered.filter(a => {
        const q = searchQuery.toLowerCase();
        return a.title.toLowerCase().includes(q) ||
               (a.summary && a.summary.toLowerCase().includes(q));
      })
    : tagFiltered;

  // 3. Paginate
  const totalPages = Math.ceil(filtered.length / PAGE_SIZE);
  const paginated = filtered.slice((currentPage - 1) * PAGE_SIZE, currentPage * PAGE_SIZE);

  const tagCounts = getTagCounts(feed.articles);

  return (
    <>
      <Header
        dateLabel={feed.date_label}
        articleCount={feed.article_count}
        tagline={generateTagline(feed.articles)}
        searchQuery={searchQuery}
        onSearchChange={handleSearch}
      />
      <FilterBar
        activeTag={activeTag}
        onFilterChange={handleTagChange}
        tagCounts={tagCounts}
        filteredCount={filtered.length}
        totalCount={feed.articles.length}
      />
      <div className="container">
        <div className="main-layout">
          <div>
            <ArticleGrid articles={paginated} />
            <Pagination
              currentPage={currentPage}
              totalPages={totalPages}
              onPageChange={setCurrentPage}
            />
          </div>
          <Sidebar
            articles={feed.articles}
            onTagClick={handleTagChange}
          />
        </div>
      </div>
      <Footer />
    </>
  );
}
