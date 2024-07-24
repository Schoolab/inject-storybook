
import navBarHTML from '../../components/navbars/default-offline.html';

import { script } from "../../utils/script.js"

export const createNavBar = () => {
  const navBar = navBarHTML;
  script();
  return navBar;
};

