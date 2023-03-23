import { createProgramDashboard } from './layouts/programDashboardCarousel.js';

export default {
    title: 'Pages/program/DashboardCarousel',
    parameters: {
        // More on Story layout: https://storybook.js.org/docs/html/configure/story-layout
        layout: 'fullscreen',
      },
};
export const DashboardCarousel = () => createProgramDashboard();
