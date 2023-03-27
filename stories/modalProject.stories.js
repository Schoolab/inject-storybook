import { createModalProject } from './layouts/modalProject.js';

export default {
    title: 'Pages/Modal/Project',
    parameters: {
        // More on Story layout: https://storybook.js.org/docs/html/configure/story-layout
        layout: 'fullscreen',
      },
};
export const Project = () => createModalProject();

