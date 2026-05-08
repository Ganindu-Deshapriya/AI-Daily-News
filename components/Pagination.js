'use client';

export default function Pagination({ currentPage, totalPages, onPageChange }) {
  if (totalPages <= 1) return null;

  // Build page numbers with ellipsis
  const pages = [];
  if (totalPages <= 7) {
    for (let i = 1; i <= totalPages; i++) pages.push(i);
  } else {
    pages.push(1);
    if (currentPage > 3) pages.push('…');
    for (let i = Math.max(2, currentPage - 1); i <= Math.min(totalPages - 1, currentPage + 1); i++) {
      pages.push(i);
    }
    if (currentPage < totalPages - 2) pages.push('…');
    pages.push(totalPages);
  }

  const scrollToTop = () => window.scrollTo({ top: 0, behavior: 'smooth' });

  const go = (p) => {
    onPageChange(p);
    scrollToTop();
  };

  return (
    <nav aria-label="Pagination" style={{ marginTop: 8 }}>
      <p className="pagination-info">
        Page {currentPage} of {totalPages}
      </p>
      <div className="pagination">
        <button
          className="page-btn page-btn-nav"
          onClick={() => go(currentPage - 1)}
          disabled={currentPage === 1}
          aria-label="Previous page"
        >
          <i className="fa-solid fa-chevron-left" style={{ fontSize: 10 }} />
          Prev
        </button>

        {pages.map((p, i) =>
          p === '…' ? (
            <span key={`ellipsis-${i}`} className="page-ellipsis">…</span>
          ) : (
            <button
              key={p}
              className={`page-btn${p === currentPage ? ' active' : ''}`}
              onClick={() => go(p)}
              aria-current={p === currentPage ? 'page' : undefined}
            >
              {p}
            </button>
          )
        )}

        <button
          className="page-btn page-btn-nav"
          onClick={() => go(currentPage + 1)}
          disabled={currentPage === totalPages}
          aria-label="Next page"
        >
          Next
          <i className="fa-solid fa-chevron-right" style={{ fontSize: 10 }} />
        </button>
      </div>
    </nav>
  );
}
