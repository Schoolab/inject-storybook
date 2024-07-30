import navBar from '../../components/navbars/default.html';
import shortcutBar from '../../components/shortcut-bar/collapsed.html';
import breadcrumb from "../../components/page-header/breadcrumb.html";
import LearningModulesCapsule from "../../components/learning-content-capsule.html";
import subNav from "../../components/page-header/subNav.html";
import applicationTitle from "../../components/page-header/title-no-desc.html";
import applicationFooter from "../../components/application-footer.html";
import applicationAside from "../../components/asides/capsules.html";
import {script} from '../../utils/script.js'
import {aside} from '../../utils/aside.js'

export const createLearningCapsule = () => {
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
  appMainContainer.insertAdjacentHTML('beforeend',LearningModulesCapsule);
  
  applicationContent.insertAdjacentHTML('beforeend',applicationFooter);
  applicationContainer.insertAdjacentHTML('beforeend',applicationAside);
  script();
  aside();
  return applicationUi;
};



