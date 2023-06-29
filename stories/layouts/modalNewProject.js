
import modalNewProjectHTML from '../components/modal-new-project.html';

import { script } from "../utils/script.js"

export const createModalNewProject= () => {
  const modalNewProject = modalNewProjectHTML;
  script();
  return modalNewProject;
};

