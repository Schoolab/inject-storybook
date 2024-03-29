import navBar from '../components/navBar.html';
import shortcutBar from '../components/shortcutBar-not-expanded.html';
import breadcrump from "../components/breadcrump.html";
import programContent from "../components/program-event-content.html";
import applicationTitle from "../components/application-title-no-subnav.html";
import applicationAside from "../components/application-aside-event.html";
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

  applicationContent.insertAdjacentHTML('beforeend',breadcrump);
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
