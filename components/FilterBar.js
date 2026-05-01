'use client';

import { ALL_TAGS, TAG_COLORS } from '@/lib/constants';

export default function FilterBar({ activeTag, onFilterChange }) {
  const tags = ['all', ...ALL_TAGS];

  return (
    <section className="filter-section" aria-label="Filter articles by tag">
      <div className="container">
        <div className="filter-label">Filter by topic</div>
        <div className="filter-bar" role="tablist">
          {tags.map(tag => {
            const isActive = activeTag === tag;
            const activeStyle =
              isActive && tag !== 'all'
                ? { background: TAG_COLORS[tag], borderColor: TAG_COLORS[tag] }
                : isActive
                  ? { background: 'var(--text-secondary)', borderColor: 'var(--text-secondary)' }
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
                {tag === 'all' ? 'All' : tag}
              </button>
            );
          })}
        </div>
      </div>
    </section>
  );
}
