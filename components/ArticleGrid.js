import ArticleCard from './ArticleCard';

export default function ArticleGrid({ articles }) {
  if (!articles.length) {
    return <div className="no-results">No articles found for this topic.</div>;
  }

  return (
    <main className="cards-grid" aria-label="Articles">
      {articles.map((article, i) => (
        <ArticleCard key={article.link} article={article} index={i} />
      ))}
    </main>
  );
}
