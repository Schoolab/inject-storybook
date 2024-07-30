
import emptyStateHTML from '../components/empty-state.html';

import { script } from "../utils/script.js"

export const createEmptyState = () => {
  const emptyState = emptyStateHTML;
  script();
  return emptyState;
};

