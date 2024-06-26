import navBar from '../components/navBar.html';

import sidebar from "../components/sidebar-admin.html";
import breadcrumb from "../components/breadcrumb.html";
import LearningModulesContent from "../components/admin-programs-content.html";
import subNav from "../components/subNav.html";
import applicationTitle from "../components/application-title.html";
import {script} from '../utils/script.js'
import {datatables} from '../utils/datatables.js'

export const createAdminPrograms = () => {
  const applicationUi = document.createElement('div');
  applicationUi.className = 'application-ui';
  
  applicationUi.insertAdjacentHTML('beforeend', navBar);

  const applicationContainer = document.createElement('div');
  applicationContainer.className = 'application-container';

  applicationUi.appendChild(applicationContainer);

  
  applicationContainer.insertAdjacentHTML('beforeend',sidebar);

  const applicationContent = document.createElement('main');
  applicationContent.className = 'application-content';

  applicationContainer.appendChild(applicationContent);

  applicationContent.insertAdjacentHTML('beforeend',breadcrumb);
  applicationContent.insertAdjacentHTML('beforeend',applicationTitle);

  applicationContent.insertAdjacentHTML('beforeend',subNav);

  const appMainContainer = document.createElement('div');
  appMainContainer.id ="appMainContainer";
  appMainContainer.className = 'container-lg container-lg-fluid mb-lg-0 py-7';

  applicationContent.appendChild(appMainContainer);
  appMainContainer.insertAdjacentHTML('beforeend',LearningModulesContent);
  script();
  datatables();
  return applicationUi;
};



