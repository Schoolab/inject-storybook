import navBar from '../components/navBar.html';
import shortcutBar from '../components/shortcutBar-manage.html';
import sidebar from '../components/sidebar-subnav.html';
import subNav  from "../components/subNav.html";
import applicationTitle from "../components/application-title.html";
import breadcrumb from "../components/breadcrumb.html";

import folders from "../components/tables-folders.html";
import views from "../components/tables-views.html";
import filters from "../components/tables-filters.html";
import content from "../components/tables.html";

import { script } from "../utils/script.js"
import {datatables} from '../utils/datatables.js'

export const createTables = () => {

  const applicationSection = document.createElement('div');
  applicationSection.className = 'application-section gap-16px';

  applicationSection.insertAdjacentHTML('beforeend',folders);
  applicationSection.insertAdjacentHTML('beforeend',views);
  applicationSection.insertAdjacentHTML('beforeend',filters);
  applicationSection.insertAdjacentHTML('beforeend',content);

  script();
  datatables();

  return applicationSection;
};
