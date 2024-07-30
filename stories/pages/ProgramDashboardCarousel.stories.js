import { createProgramDashboard } from '../layouts/pages/programDashboardCarousel.js';

export default {
    title: 'Pages/program/Dashboard/Carousel',
    parameters: {
        // More on Story layout: https://storybook.js.org/docs/html/configure/story-layout
        layout: 'fullscreen',
      },
};
export const Carousel = () => createProgramDashboard();
