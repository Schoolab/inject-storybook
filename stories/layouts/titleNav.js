
import navBarHTML from '../components/application-title.html';

import { script } from "../utils/script.js"

export const createTitleNav = () => {
  const navBar = navBarHTML;
  script();
  return navBar;
};

