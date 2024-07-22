
import navBarHTML from '../../components/navbars/custom-raiselab.html';

import { script } from "../../utils/script.js"

export const createNavBar = () => {
  const navBar = navBarHTML;
  script();
  return navBar;
};

