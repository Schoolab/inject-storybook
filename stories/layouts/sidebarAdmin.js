
import sidebarHTML from '../components/sidebar-admin.html';

// import navBar from '../components/navbars/default.html';
// import shortcutBar from '../components/shortcutBar-collapsed.html';
import { script } from "../utils/script.js"

export const createSidebar = () => {
    const applicationUi = document.createElement('div');
    applicationUi.className = 'application-ui';

    // applicationUi.insertAdjacentHTML('beforeend', navBar);
    
    const applicationContainer = document.createElement('div');
    applicationContainer.className = 'application-container';
    
    applicationUi.appendChild(applicationContainer);
    
    // applicationContainer.insertAdjacentHTML('beforeend', shortcutBar);

    applicationContainer.insertAdjacentHTML('beforeend', sidebarHTML);

    script();
    return applicationUi;
};