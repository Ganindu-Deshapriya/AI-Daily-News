/** Tag color mapping — uses CSS custom properties for theme support */
export const TAG_COLORS = {
  LLM: 'var(--tag-llm)',
  Agents: 'var(--tag-agents)',
  Safety: 'var(--tag-safety)',
  Infrastructure: 'var(--tag-infra)',
  Tools: 'var(--tag-tools)',
  Research: 'var(--tag-research)',
  MLOps: 'var(--tag-mlops)',
  Multimodal: 'var(--tag-multimodal)',
  Robotics: 'var(--tag-robotics)',
  RAG: 'var(--tag-rag)',
};

/** Ordered list of known tags for filter bar and trend chart */
export const ALL_TAGS = [
  'LLM', 'Agents', 'Safety', 'Infrastructure',
  'Tools', 'Research', 'MLOps', 'Multimodal', 'Robotics', 'RAG',
];

/** Articles per page for pagination */
export const PAGE_SIZE = 8;

/** GitHub Gist raw URL for the digest JSON */
export const GIST_URL =
  'https://gist.githubusercontent.com/Ganindu-Deshapriya/3cc8526c774928919c420546054a2679/raw/data.json';
