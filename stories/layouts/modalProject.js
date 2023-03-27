
import modalProjectHTML from '../components/modal-project.html';

import { script } from "../utils/script.js"

export const createModalProject= () => {
  const modalProject = modalProjectHTML;
  script();
  return modalProject;
};

