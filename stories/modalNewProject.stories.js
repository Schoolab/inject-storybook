import { createModalNewProject } from './layouts/modalNewProject.js';

export default {
    title: 'Pages/Modal/NewProject',
    parameters: {
        // More on Story layout: https://storybook.js.org/docs/html/configure/story-layout
        layout: 'fullscreen',
      },
};
export const NewProject = () => createModalNewProject();

