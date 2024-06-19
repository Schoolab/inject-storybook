
import modalHTML from '../components/modal-project.html';

import { script } from "../utils/script.js"

export const createModal= () => {
  const modal = modalHTML;
  script();
  return modal;
};

