import createCardHTML from '../../components/cards/feed.html';

import { script } from "../../utils/script.js"

export const createCard = () => {
  const createCard = createCardHTML;
  script();
  return createCard;
};
