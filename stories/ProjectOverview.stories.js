import { createProjectOverview } from './layouts/projectOverview.js';

export default {
    title: 'Pages/Project/ProjectOverview',
    parameters: {
        // More on Story layout: https://storybook.js.org/docs/html/configure/story-layout
        layout: 'fullscreen',
      },
};

export const ProjectOverview = () => createProjectOverview();
