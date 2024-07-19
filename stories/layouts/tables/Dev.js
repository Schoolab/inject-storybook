
import tablesHTML from '../../components/tables/dev.html';

import { script } from "../../utils/script.js"

export const createTables = () => {
  const tables = tablesHTML;
  script();
  return tables;
};

