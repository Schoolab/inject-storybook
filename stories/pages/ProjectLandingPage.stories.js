import { createProjectLandingPage } from '../layouts/pages/projectLandingPage.js';

export default {
    title: 'Pages/Project/LandingPage',
    parameters: {
        // More on Story layout: https://storybook.js.org/docs/html/configure/story-layout
        layout: 'fullscreen',
      },
};

export const LandingPage = () => createProjectLandingPage();
