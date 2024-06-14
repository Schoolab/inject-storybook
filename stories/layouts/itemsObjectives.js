import itemsHTML from '../components/items-objectives.html';

import { script } from "../utils/script.js"

export const createItems = () => {
  const itemsObjectives = itemsHTML;
  script();
  return itemsObjectives;
};

