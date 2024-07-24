import createButtonHTML from '../../components/buttons/icon-small.html';

import { script } from "../../utils/script.js"

export const createButton = () => {
  const createButton = createButtonHTML;
  script();
  return createButton;
};
