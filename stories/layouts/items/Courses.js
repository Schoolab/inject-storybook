import itemsHTML from '../../components/items/courses.html';

import { script } from "../../utils/script.js"

export const createItems = () => {
  const items = itemsHTML;
  script();
  return items;
};

