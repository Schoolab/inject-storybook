
import subNavHTML from '../../components/page-header/subNav.html';
import { script } from "../../utils/script.js"

export const createSubNav = () => {
  const subNav = subNavHTML;
  script();
  return subNav;
};

