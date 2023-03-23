import { createProgramDashboard } from './layouts/programDashboard.js';

export default {
    title: 'Pages/Program/DashboardCover',
    parameters: {
        // More on Story layout: https://storybook.js.org/docs/html/configure/story-layout
        layout: 'fullscreen',
      },
};

export const DashboardCover = () => createProgramDashboard();
