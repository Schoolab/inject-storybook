import createAvatarHTML from '../../components/avatars/relation.html';

import { script } from "../../utils/script.js"

export const createAvatar = () => {
  const createAvatar = createAvatarHTML;
  script();
  return createAvatar;
};
