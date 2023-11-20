import { createAdminPrograms } from './layouts/AdminPrograms.js';

export default {
    title: 'Pages/Admin/Programs',
    parameters: {
        // More on Story layout: https://storybook.js.org/docs/html/configure/story-layout
        layout: 'fullscreen',
      },
};

export const Programs = () => createAdminPrograms();
