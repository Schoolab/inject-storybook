import createButtonHTML from '../../components/buttons/warning.html';

import { script } from "../../utils/script.js"

export const createButton = () => {
  const createButton = createButtonHTML;
  script();
  return createButton;
};
