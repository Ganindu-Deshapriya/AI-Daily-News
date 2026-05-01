import { ALL_TAGS } from './constants';

/**
 * Calculate relative time string from a date string.
 * e.g. "3h ago", "1d ago"
 */
export function relativeTime(dateStr) {
  const diff = Date.now() - new Date(dateStr).getTime();
  const mins = Math.floor(diff / 60000);
  if (mins < 1) return 'just now';
  if (mins < 60) return `${mins}m ago`;
  const hrs = Math.floor(mins / 60);
  if (hrs < 24) return `${hrs}h ago`;
  const days = Math.floor(hrs / 24);
  return `${days}d ago`;
}

/**
 * Count articles per tag, returns { tagName: count } object.
 */
export function getTagCounts(articles) {
  const counts = {};
  ALL_TAGS.forEach(t => (counts[t] = 0));
  articles.forEach(a =>
    a.tags.forEach(t => {
      if (counts[t] !== undefined) counts[t]++;
    })
  );
  return counts;
}

/**
 * Generate a tagline from the top 3 most frequent tags.
 */
export function generateTagline(articles) {
  const counts = getTagCounts(articles);
  const sorted = Object.entries(counts).sort((a, b) => b[1] - a[1]);
  const top = sorted.slice(0, 3).map(e => e[0]);
  return `Today\u2019s signal: ${top.join(', ')}, and more from the frontier.`;
}
