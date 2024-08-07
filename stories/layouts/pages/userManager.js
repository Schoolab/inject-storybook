import navBar from '../../components/navbars/default.html';
import breadcrumb from "../../components/page-header/breadcrumb.html";
import subNav  from "../../components/page-header/subNav.html";
import participationsContent from "../../components/pages/user-manager-content.html";
import applicationTitle from "../../components/page-header/title-no-btn.html";
import { script } from "../../utils/script.js";

export const createUserManager = () => {
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
  applicationContent.insertAdjacentHTML('beforeend',subNav); 

  const appMainContainer = document.createElement('div');
  appMainContainer.id ="appMainContainer";
  appMainContainer.className = 'container-lg container-lg-fluid mb-lg-0 py-7';

  applicationContent.appendChild(appMainContainer);
  
  appMainContainer.insertAdjacentHTML('beforeend',participationsContent);
  script();
  return applicationUi;
};
