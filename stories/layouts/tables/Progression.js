import folders from "../../components/tables/folders.html";
import views from "../../components/tables/views.html";
import filters from "../../components/tables/filters.html";
import content from "../../components/tables/skewed.html";

import { script } from "../../utils/script.js"
import {datatables} from '../../utils/datatables.js'

export const createTables = () => {

  const applicationSection = document.createElement('div');
  applicationSection.className = 'd-flex flex-column p-24px gap-16px';

  applicationSection.insertAdjacentHTML('beforeend',views);
  applicationSection.insertAdjacentHTML('beforeend',filters);
  applicationSection.insertAdjacentHTML('beforeend',content);

  script();
  datatables();

  return applicationSection;
};
