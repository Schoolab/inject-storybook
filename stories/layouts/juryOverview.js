import navBar from '../components/navBar.html';
import shortcutBar from '../components/shortcutBar.html';
import breadcrump from "../components/breadcrump.html";
import projectOverviewContent from "../components/jury-overview-content.html";
import subNav  from "../components/subNav.html";
import applicationTitle from "../components/application-title.html";
import { script } from "../utils/script.js";

export const createJuryOverview = () => {
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

  applicationContentDiv.insertAdjacentHTML('beforeend',subNav);

  const appMainContainer = document.createElement('div');
  appMainContainer.id ="appMainContainer";
  appMainContainer.className = 'container-lg container-lg-fluid mb-lg-0 py-7';

  applicationContentDiv.appendChild(appMainContainer);

  appMainContainer.insertAdjacentHTML('beforeend',projectOverviewContent);

  script();
  return applicationUi;
};
