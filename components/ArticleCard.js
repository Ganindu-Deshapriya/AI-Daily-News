import { TAG_COLORS } from '@/lib/constants';
import { relativeTime } from '@/lib/utils';

export default function ArticleCard({ article, index }) {
  const primaryTag = article.tags[0] || '';

  return (
    <article
      className="card"
      style={{
        borderLeftColor: TAG_COLORS[primaryTag] || 'var(--border)',
        animationDelay: `${index * 0.04}s`,
      }}
    >
      <div className="card-source">
        <span className="card-time">
          <i className="fa-regular fa-clock" style={{ marginRight: 5 }} />
          {relativeTime(article.pub_date)}
        </span>
      </div>

      <h2 className="card-title">
        <a href={article.link} target="_blank" rel="noopener noreferrer">
          {article.title}
          <i className="fa-solid fa-arrow-up-right-from-square ext-icon" />
        </a>
      </h2>

      <p className="card-summary">{article.summary}</p>

      <div className="card-footer">
        <div className="card-tags">
          {article.tags.map(tag => (
            <span
              key={tag}
              className="tag-badge"
              style={{ color: TAG_COLORS[tag] || 'var(--text-muted)' }}
            >
              {tag}
            </span>
          ))}
        </div>
        <a
          href={article.link}
          target="_blank"
          rel="noopener noreferrer"
          className="read-link"
          aria-label={`Read: ${article.title}`}
        >
          Read <i className="fa-solid fa-chevron-right" style={{ fontSize: 9 }} />
        </a>
      </div>
    </article>
  );
}
