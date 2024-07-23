import navBar from '../components/navbars/default.html';
import shortcutBar from '../components/shortcutBar-collapsed.html';
import breadcrumb from "../components/page-header/breadcrumb.html";
import programContent from "../components/program-event-content.html";
import applicationTitle from "../components/page-header/title-no-subnav.html";
import applicationAside from "../components/asides/event.html";
import { script } from "../utils/script.js";
import {aside} from '../utils/aside.js'

export const createProgramEvent = () => {
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
  appMainContainer.className = 'container-fluid mb-lg-0 py-7';

  applicationContent.appendChild(appMainContainer);

  appMainContainer.insertAdjacentHTML('beforeend',programContent);
  applicationContainer.insertAdjacentHTML('beforeend',applicationAside);
  script();
  aside();
  return applicationUi;
};
