import itemsHTML from '../../components/items/questionnaires.html';

import { script } from "../../utils/script.js"

export const createItems = () => {
  const itemsQuestionnaires = itemsHTML;
  script();
  return itemsQuestionnaires;
};

