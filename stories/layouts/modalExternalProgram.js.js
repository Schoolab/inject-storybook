
import modalExternalProgramHTML from '../components/modal-external-program.html';

import { script } from "../utils/script.js"

export const createModalUser= () => {
  const modalExternalProgram = modalExternalProgramHTML;
  script();
  return modalExternalProgram;
};

