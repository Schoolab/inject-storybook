import createFormsHTML from '../../components/forms/cards-grid.html';

import { script } from "../../utils/script.js"

export const createForms = () => {
  const createForms = createFormsHTML;
  script();
  return createForms;
};

