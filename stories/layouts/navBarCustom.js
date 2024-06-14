
import navBarCustomHTML from '../components/navBar-custom-dark.html';

import { script } from "../utils/script.js"

export const createNavBarCustom = () => {
  const navBar = navBarCustomHTML;
  script();
  return navBar;
};

