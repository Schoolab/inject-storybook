import navBar from '../components/navBar.html';
import breadcrump from "../components/breadcrump.html";
import participationsContent from "../components/participations-content.html";
import applicationTitle from "../components/application-title-no-btn.html";
import { script } from "../utils/script.js";

export const createParticipation = () => {
  const applicationUi = document.createElement('div');
  applicationUi.className = 'application-ui';

  applicationUi.insertAdjacentHTML('beforeend', navBar);

  const applicationContainer = document.createElement('div');
  applicationContainer.className = 'application-container';

  applicationUi.appendChild(applicationContainer);

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
  
  appMainContainer.insertAdjacentHTML('beforeend',participationsContent);
  script();
  return applicationUi;
};
