import navBar from '../components/navBar.html';
import shortcutBar from '../components/shortcutBar-not-expanded.html';
import sidebar from "../components/sidebar.html";
import breadcrump from "../components/breadcrump.html";
import LearningModulesContent from "../components/learning-content-content.html";
import subNav from "../components/subNav.html";
import applicationTitle from "../components/application-title.html";
import {script} from '../utils/script.js'

export const createLearningContent = () => {
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

  applicationContent.insertAdjacentHTML('beforeend',breadcrump);
  applicationContent.insertAdjacentHTML('beforeend',applicationTitle);

  applicationContent.insertAdjacentHTML('beforeend',subNav);

  const appMainContainer = document.createElement('div');
  appMainContainer.id ="appMainContainer";
  appMainContainer.className = 'container-lg container-lg-fluid mb-lg-0 py-7';

  applicationContent.appendChild(appMainContainer);
  appMainContainer.insertAdjacentHTML('beforeend',LearningModulesContent);
  script();
  return applicationUi;
};



