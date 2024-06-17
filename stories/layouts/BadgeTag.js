import createBadgeHTML from '../components/badge-tag.html';

import { script } from "../utils/script.js"

export const createBadge = () => {
  const createBadge = createBadgeHTML;
  script();
  return createBadge;
};
