import navBar from '../../components/navbars/custom-moho.html';
import shortcutBar from '../../components/shortcut-bar/collapsed.html';
import sidebar from "../../components/sidebars/manage.html";
import breadcrumb from "../../components/page-header/breadcrumb.html";
import programContent from "../../components/pages/random-content.html";
import subNav from "../../components/page-header/subNav.html";
import applicationTitle from "../../components/page-header/title.html";
import { script } from "../../utils/script.js";

export const createManage = () => {
  const applicationUi = document.createElement('div');
  applicationUi.className = 'application-ui';
  
  applicationUi.insertAdjacentHTML('beforeend', navBar);

  const applicationContainer = document.createElement('div');
  applicationContainer.className = 'application-container';

  applicationUi.appendChild(applicationContainer);

  applicationContainer.insertAdjacentHTML('beforeend',shortcutBar);
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

  appMainContainer.insertAdjacentHTML('beforeend',programContent);
  script();
  return applicationUi;
};

