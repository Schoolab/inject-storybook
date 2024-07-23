import navBar from '../components/navbars/default.html';
import shortcutBar from '../components/shortcutBar.html';
import breadcrumb from "../components/page-header/breadcrumb.html";
import projectOverviewContent from "../components/project-landing-page-content.html";
import subNav  from "../components/page-header/subNav.html";
import applicationTitle from "../components/page-header/title.html";
import { script } from "../utils/script.js"

export const createProjectLandingPage = () => {
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

  applicationContent.insertAdjacentHTML('beforeend',subNav);

  const appMainContainer = document.createElement('div');
  appMainContainer.id ="appMainContainer";

  applicationContent.appendChild(appMainContainer);

  appMainContainer.insertAdjacentHTML('beforeend',projectOverviewContent);
  script();
  return applicationUi;
};
