
import modalHTML from '../../components/modals/model.html';

import { script } from "../../utils/script.js"

export const createModal= () => {
  const modal = modalHTML;
  script();
  return modal;
};

