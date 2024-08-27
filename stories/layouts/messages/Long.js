import createMessageHTML from '../../components/messages/long.html';

import { script } from "../../utils/script.js"

export const createMessage = () => {
  const createMessage = createMessageHTML;
  script();
  return createMessage;
};

