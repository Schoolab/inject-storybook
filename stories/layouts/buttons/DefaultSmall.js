import createButtonHTML from '../../components/buttons/default-small.html';

import { script } from "../../utils/script.js"

export const createButton = () => {
  const createButton = createButtonHTML;
  script();
  return createButton;
};
