/** Tag color mapping — used across components */
export const TAG_COLORS = {
  LLM: 'var(--accent-llm)',
  Agents: 'var(--accent-agents)',
  Safety: 'var(--accent-safety)',
  Infrastructure: 'var(--accent-infra)',
  Tools: 'var(--accent-tools)',
  Research: 'var(--accent-research)',
  MLOps: 'var(--accent-mlops)',
  Multimodal: 'var(--accent-multimodal)',
  Robotics: 'var(--accent-robotics)',
  RAG: 'var(--accent-rag)',
};

/** Ordered list of known tags for filter bar and trend chart */
export const ALL_TAGS = [
  'LLM', 'Agents', 'Safety', 'Infrastructure',
  'Tools', 'Research', 'MLOps', 'Multimodal', 'Robotics', 'RAG'
];

/** GitHub Gist raw URL for the digest JSON */
export const GIST_URL =
  'https://gist.githubusercontent.com/Ganindu-Deshapriya/3cc8526c774928919c420546054a2679/raw/digest.json';
