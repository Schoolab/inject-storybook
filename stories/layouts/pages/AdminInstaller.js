import navBar from '../../components/navbars/default.html';
import breadcrumb from "../../components/page-header/breadcrumb.html";
import LearningModulesContent from "../../components/pages/admin-installer-content.html";
import applicationTitle from "../../components/page-header/title.html";
import {script} from '../../utils/script.js'

export const createAdminInstaller = () => {
  const applicationUi = document.createElement('div');
  applicationUi.className = 'application-ui';
  
  applicationUi.insertAdjacentHTML('beforeend', navBar);

  const applicationContainer = document.createElement('div');
  applicationContainer.className = 'application-container';

  applicationUi.appendChild(applicationContainer);

  const applicationContent = document.createElement('main');
  applicationContent.className = 'application-content';

  applicationContainer.appendChild(applicationContent);


  applicationContent.insertAdjacentHTML('beforeend',breadcrumb);
  applicationContent.insertAdjacentHTML('beforeend',applicationTitle);

  const appMainContainer = document.createElement('div');
  appMainContainer.id ="appMainContainer";
  appMainContainer.className = 'container-lg container-lg-fluid mb-lg-0 py-7';

  applicationContent.appendChild(appMainContainer);
  appMainContainer.insertAdjacentHTML('beforeend',LearningModulesContent);
  script();
  return applicationUi;
};



