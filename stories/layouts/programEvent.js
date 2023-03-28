import navBar from '../components/navBar.html';
import shortcutBar from '../components/shortcutBar.html';
import breadcrump from "../components/breadcrump.html";
import programContent from "../components/program-event-content.html";
import applicationTitle from "../components/application-title-no-subnav.html";
import { script } from "../utils/script.js";

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

  const applicationContentDiv = document.createElement('div');
  applicationContentDiv.className = 'd-flex flex-column';

  applicationContent.appendChild(applicationContentDiv);

  applicationContentDiv.insertAdjacentHTML('beforeend',breadcrump);
  applicationContentDiv.insertAdjacentHTML('beforeend',applicationTitle);


  const appMainContainer = document.createElement('div');
  appMainContainer.id ="appMainContainer";
  appMainContainer.className = 'container-lg container-lg-fluid mb-lg-0 py-7 px-7';

  applicationContentDiv.appendChild(appMainContainer);

  appMainContainer.insertAdjacentHTML('beforeend',programContent);
  script();
  return applicationUi;
};
