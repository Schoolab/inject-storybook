import { createManageSetup } from '../layouts/pages/ManageSetup.js';

export default {
    title: 'Pages/Manage/Setup',
    parameters: {
        // More on Story layout: https://storybook.js.org/docs/html/configure/story-layout
        layout: 'fullscreen',
      },
};

export const Setup = () => createManageSetup();
