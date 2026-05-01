export default function Header({ dateLabel, articleCount, tagline }) {
  return (
    <header className="site-header">
      <div className="container">
        <div className="header-top">
          <div className="logo">
            The Signal - By<span className="logo-accent"> GDesh.dev</span>
          </div>
          <div className="edition">Daily Edition</div>
        </div>
        <h1 className="hero-title">AI Intelligence Briefing</h1>
        <p className="tagline">{tagline}</p>
        <div className="meta-bar">
          <span>{dateLabel}</span>
          <span className="meta-dot">·</span>
          <span>{articleCount} articles</span>
          <span className="meta-dot">·</span>
          <span>Curated by automation</span>
        </div>
      </div>
    </header>
  );
}
