
import tablesHTML from '../../components/tables/empty-state.html';

import { script } from "../../utils/script.js"
import { datatables } from '../../utils/datatables.js'

export const createTables = () => {
  const tables = tablesHTML;
  script();
  datatables();
  return tables;
};