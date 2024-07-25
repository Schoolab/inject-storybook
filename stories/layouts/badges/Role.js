import createBadgeHTML from '../../components/badges/role.html';

import { script } from "../../utils/script.js"

export const createBadge = () => {
  const createBadge = createBadgeHTML;
  script();
  return createBadge;
};
