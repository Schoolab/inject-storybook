import navBar from '../components/navBar.html';
import shortcutBar from '../components/shortcutBar-collapsed.html';
import breadcrumb from "../components/breadcrumb.html";
import projectOverviewContent from "../components/jury-evaluation-content-project.html";
import subNav  from "../components/subNav.html";
import applicationTitle from "../components/application-title.html";
import applicationAside from "../components/application-aside-jury.html";
import applicationFooter from "../components/application-footer.html";
import { script } from "../utils/script.js"
import {aside} from '../utils/aside.js'

export const createJuryEvaluation = () => {
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
  appMainContainer.className = 'container-fluid mb-lg-0 py-7';

  applicationContent.appendChild(appMainContainer);

  appMainContainer.insertAdjacentHTML('beforeend',projectOverviewContent);
  applicationContainer.insertAdjacentHTML('beforeend',applicationAside);
  applicationContent.insertAdjacentHTML('beforeend',applicationFooter);
  script();
  aside();
  return applicationUi;
};
