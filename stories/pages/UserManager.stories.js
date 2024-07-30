import { createUserManager } from '../layouts/pages/userManager.js';

export default {
    title: 'Pages/User/UserManager',
    parameters: {
        // More on Story layout: https://storybook.js.org/docs/html/configure/story-layout
        layout: 'fullscreen',
      },
};

export const UserManager = () => createUserManager();
