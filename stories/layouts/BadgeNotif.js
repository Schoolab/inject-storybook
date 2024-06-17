import createBadgeHTML from '../components/badge-notif.html';

import { script } from "../utils/script.js"

export const createBadge = () => {
  const createBadge = createBadgeHTML;
  script();
  return createBadge;
};
