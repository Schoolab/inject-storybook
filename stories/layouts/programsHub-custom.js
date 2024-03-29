import navBar from '../components/navBar-custom-dark.html';
import subNav  from "../components/subNav-programsHub.html";
import content from "../components/programsHub-default-custom-content.html";
import { script } from "../utils/script.js"

export const createProgramHub = () => {
  const applicationUi = document.createElement('div');
  applicationUi.className = 'application-ui';

  applicationUi.insertAdjacentHTML('beforeend', navBar);

  const applicationContainer = document.createElement('div');
  applicationContainer.className = 'application-container';

  applicationUi.appendChild(applicationContainer);

  const applicationContent = document.createElement('main');
  applicationContent.className = 'application-content';

  applicationContainer.appendChild(applicationContent);

  applicationContent.insertAdjacentHTML('beforeend',subNav);

  const appMainContainer = document.createElement('div');
  appMainContainer.id ="appMainContainer";
  appMainContainer.className = 'container-lg container-lg-fluid mb-lg-0 py-7';
  applicationContent.appendChild(appMainContainer);

  appMainContainer.insertAdjacentHTML('beforeend',content);
  script();
  return applicationUi;
};
