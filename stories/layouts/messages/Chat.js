import createMessageHTML from '../../components/messages/chat.html';

import { script } from "../../utils/script.js"

export const createMessage = () => {
  const createMessage = createMessageHTML;
  script();
  return createMessage;
};

