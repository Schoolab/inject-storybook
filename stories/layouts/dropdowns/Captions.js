import createDropdownHTML from '../../components/dropdowns/captions.html';

import { script } from "../../utils/script.js"

export const createDropdown = () => {
  const createDropdown = createDropdownHTML;
  script();
  return createDropdown;
};

