
import navBarHTML from '../../components/page-header/title.html';
import { script } from "../../utils/script.js"

export const createTitleNav = () => {
  const navBar = navBarHTML;
  script();
  return navBar;
};

