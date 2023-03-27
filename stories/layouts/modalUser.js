
import modalUserHTML from '../components/modal-user.html';

import { script } from "../utils/script.js"

export const createModalUser= () => {
  const modalUser = modalUserHTML;
  script();
  return modalUser;
};

