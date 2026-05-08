'use client';

import { ALL_TAGS, TAG_COLORS } from '@/lib/constants';

export default function FilterBar({ activeTag, onFilterChange, tagCounts, filteredCount, totalCount }) {
  const tags = ['all', ...ALL_TAGS];

  return (
    <section className="filter-section" aria-label="Filter articles by tag">
      <div className="container">
        <div className="filter-top">
          <div className="filter-label">Filter by topic</div>
          <div className="filter-count">
            Showing <strong>{filteredCount}</strong> of {totalCount} articles
          </div>
        </div>
        <div className="filter-bar" role="tablist">
          {tags.map(tag => {
            const isActive = activeTag === tag;
            const color = tag !== 'all' ? TAG_COLORS[tag] : 'var(--text-secondary)';
            const count = tag === 'all' ? totalCount : (tagCounts?.[tag] || 0);

            const activeStyle = isActive
              ? { background: color, borderColor: color }
              : {};

            return (
              <button
                key={tag}
                className={`filter-pill${isActive ? ' active' : ''}`}
                role="tab"
                aria-selected={isActive}
                onClick={() => onFilterChange(tag)}
                style={activeStyle}
              >
                {!isActive && tag !== 'all' && (
                  <span className="pill-dot" style={{ background: color }} />
                )}
                {tag === 'all' ? 'All' : tag}
                <span className="pill-badge">{count}</span>
              </button>
            );
          })}
        </div>
      </div>
    </section>
  );
}
