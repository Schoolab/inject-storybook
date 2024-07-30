import navBar from '../../components/navbars/default.html';
import shortcutBar from '../../components/shortcut-bar/default.html';
import breadcrumb from "../../components/page-header/breadcrumb.html";
import programContent from "../../components/pages/expert-coaching-session-content.html";
import applicationTitle from "../../components/page-header/title-coaching-session.html";
import { script } from "../../utils/script.js";

export const createExpertCoachingSession = () => {
  const applicationUi = document.createElement('div');
  applicationUi.className = 'application-ui';
  
  applicationUi.insertAdjacentHTML('beforeend', navBar);

  const applicationContainer = document.createElement('div');
  applicationContainer.className = 'application-container';

  applicationUi.appendChild(applicationContainer);

  applicationContainer.insertAdjacentHTML('beforeend',shortcutBar);

  const applicationContent = document.createElement('main');
  applicationContent.className = 'application-content';

  applicationContainer.appendChild(applicationContent);

  applicationContent.insertAdjacentHTML('beforeend',breadcrumb);
  applicationContent.insertAdjacentHTML('beforeend',applicationTitle);


  const appMainContainer = document.createElement('div');
  appMainContainer.id ="appMainContainer";
  appMainContainer.className = 'container-lg container-lg-fluid mb-lg-0 py-7';

  applicationContent.appendChild(appMainContainer);

  appMainContainer.insertAdjacentHTML('beforeend',programContent);
  script();
  return applicationUi;
};
