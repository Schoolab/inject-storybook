import itemsHTML from '../components/items-courses.html';

import { script } from "../utils/script.js"

export const createItems = () => {
  const itemsCourses = itemsHTML;
  script();
  return itemsCourses;
};

