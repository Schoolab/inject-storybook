import createFormsHTML from '../../components/forms/ckeditor.html';

import { script } from "../../utils/script.js"

export const createForms = () => {
  const createForms = createFormsHTML;
  script();
  return createForms;
};

