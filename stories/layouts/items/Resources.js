import itemsHTML from '../../components/items/resources.html';

import { script } from "../../utils/script.js"

export const createItems = () => {
  const items = itemsHTML;
  script();
  return items;
};

