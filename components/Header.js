'use client';

import ThemeToggle from './ThemeToggle';

export default function Header({ dateLabel, articleCount, tagline, searchQuery, onSearchChange }) {
  return (
    <header className="site-header">
      <div className="container">
        <div className="header-inner">
          <div className="header-brand">
            <div className="logo">
              The Signal &mdash; By <span className="logo-accent">GDesh.dev</span>
            </div>
            <h1 className="hero-title">AI Intelligence Briefing</h1>
            <div className="meta-bar">
              <span>{dateLabel}</span>
              <span className="meta-dot">·</span>
              <span>{articleCount} articles</span>
              <span className="meta-dot">·</span>
              <span>Curated by automation</span>
            </div>
            {tagline && <p className="tagline">{tagline}</p>}
          </div>

          <div className="header-controls">
            <div className="search-wrap">
              <i className="fa-solid fa-magnifying-glass search-icon" />
              <input
                id="search-input"
                type="search"
                className="search-input"
                placeholder="Search articles…"
                value={searchQuery}
                onChange={e => onSearchChange(e.target.value)}
                aria-label="Search articles"
              />
            </div>
            <ThemeToggle />
          </div>
        </div>
      </div>
    </header>
  );
}
