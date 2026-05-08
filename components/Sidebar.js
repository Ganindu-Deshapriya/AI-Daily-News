import { ALL_TAGS, TAG_COLORS } from '@/lib/constants';
import { getTagCounts } from '@/lib/utils';

export default function Sidebar({ articles, onTagClick }) {
  const counts = getTagCounts(articles);
  const max = Math.max(...Object.values(counts), 1);
  const sorted = [...ALL_TAGS].sort((a, b) => (counts[b] || 0) - (counts[a] || 0));

  return (
    <aside className="sidebar" aria-label="Trends and information">
      {/* ─── Trend Chart ─── */}
      <div className="sidebar-section">
        <div className="sidebar-title">
          <span className="sidebar-title-icon">📊</span>
          Topic Pulse
        </div>
        {sorted.map(tag => {
          const pct = ((counts[tag] || 0) / max) * 100;
          return (
            <div
              className="trend-row"
              key={tag}
              onClick={() => onTagClick?.(tag)}
              role="button"
              tabIndex={0}
              onKeyDown={e => e.key === 'Enter' && onTagClick?.(tag)}
              aria-label={`Filter by ${tag}`}
              title={`Filter by ${tag}`}
            >
              <span className="trend-label">{tag}</span>
              <div className="trend-bar-bg">
                <div
                  className="trend-bar"
                  style={{ width: `${pct}%`, background: TAG_COLORS[tag] }}
                />
              </div>
              <span className="trend-count">{counts[tag] || 0}</span>
            </div>
          );
        })}
      </div>

      {/* ─── About ─── */}
      <div className="sidebar-section sidebar-about">
        <div className="sidebar-title">
          <span className="sidebar-title-icon">ℹ️</span>
          About
        </div>
        <p>
          The Signal is an automated daily briefing on artificial intelligence —
          distilled from dozens of sources into what matters.
        </p>
        <p>
          Built with{' '}
          <a href="https://n8n.io" target="_blank" rel="noopener noreferrer">n8n</a>{' '}
          workflows and{' '}
          <a href="https://nextjs.org/" target="_blank" rel="noopener noreferrer">Next.js</a>.
        </p>
      </div>
    </aside>
  );
}
