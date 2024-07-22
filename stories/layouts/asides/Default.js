import createAsideHTML from '../../components/asides/default.html';

import { script } from "../../utils/script.js"

export const createAside = () => {
  const applicationUi = document.createElement('div');
  applicationUi.className = 'application-ui';
  
  // applicationUi.insertAdjacentHTML('beforeend', navBar);

  const applicationContainer = document.createElement('div');
  applicationContainer.className = 'application-container';

  applicationUi.appendChild(applicationContainer);

  // applicationContainer.insertAdjacentHTML('beforeend',shortcutBar);

  const applicationContent = document.createElement('main');
  applicationContent.className = 'application-content';

  applicationContainer.appendChild(applicationContent);

  // applicationContent.insertAdjacentHTML('beforeend',breadcrumb);
  // applicationContent.insertAdjacentHTML('beforeend',applicationTitle);
  // applicationContent.insertAdjacentHTML('beforeend',subNav);

  const appMainContainer = document.createElement('div');
  appMainContainer.id ="appMainContainer";
  appMainContainer.className = 'container-fluid mb-lg-0 py-7';

  applicationContent.appendChild(appMainContainer);
  // appMainContainer.insertAdjacentHTML('beforeend',LearningModulesCapsule);
  
  // applicationContent.insertAdjacentHTML('beforeend',applicationFooter);
  applicationContainer.insertAdjacentHTML('beforeend',createAsideHTML);

  script();
  return applicationUi;
};
