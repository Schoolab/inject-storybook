import { createUserMyDashboard } from '../layouts/pages/userMyDashboard.js';

export default {
    title: 'Pages/User/MyDashboard',
    parameters: {
        // More on Story layout: https://storybook.js.org/docs/html/configure/story-layout
        layout: 'fullscreen',
      },
};

export const MyDashboard = () => createUserMyDashboard();
