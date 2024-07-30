import { createManageDashboard } from '../layouts/pages/ManageDashboard.js';

export default {
    title: 'Pages/Manage/Dashboard',
    parameters: {
        // More on Story layout: https://storybook.js.org/docs/html/configure/story-layout
        layout: 'fullscreen',
      },
};

export const Dashboard = () => createManageDashboard();
