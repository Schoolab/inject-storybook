
import sidebarHTML from '../../components/sidebars/admin.html';

import { script } from "../../utils/script.js"

export const createSidebar = () => {
    const applicationUi = document.createElement('div');
    applicationUi.className = 'application-ui';
    
    const applicationContainer = document.createElement('div');
    applicationContainer.className = 'application-container';
    
    applicationUi.appendChild(applicationContainer);

    applicationContainer.insertAdjacentHTML('beforeend', sidebarHTML);

    script();
    return applicationUi;
};