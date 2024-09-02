import createAvatarHTML from '../../components/avatars/org.html';

import { script } from "../../utils/script.js"

export const createAvatar = () => {
  const createAvatar = createAvatarHTML;
  script();
  return createAvatar;
};
