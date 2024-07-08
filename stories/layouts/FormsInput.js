import createFormsHTML from '../components/forms-input.html';

import { script } from "../utils/script.js"

export const createForms = () => {
  const createForms = createFormsHTML;
  script();
  return createForms;
};

