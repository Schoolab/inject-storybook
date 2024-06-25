
import shortcutBarHTML from '../components/shortcutBar.html';
import { script } from "../utils/script.js"

export const createShortcutBar = () => {
  const applicationUi = document.createElement('div');
  applicationUi.className = 'application-ui';

  // applicationUi.insertAdjacentHTML('beforeend', navBar);
    
  const applicationContainer = document.createElement('div');
  applicationContainer.className = 'application-container';
    
  applicationUi.appendChild(applicationContainer);
    
  applicationContainer.insertAdjacentHTML('beforeend', shortcutBarHTML);
    
  script();
  return applicationUi;
};

