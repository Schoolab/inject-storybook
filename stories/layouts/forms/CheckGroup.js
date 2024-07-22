import createFormsHTML from '../../components/forms/check-group.html';

import { script } from "../../utils/script.js"

export const createForms = () => {
  const createForms = createFormsHTML;
  script();
  return createForms;
};

