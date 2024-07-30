import { createManageApplicationForms } from '../layouts/pages/ManageApplicationForms.js';

export default {
    title: 'Pages/Manage/ApplicationForms',
    parameters: {
        // More on Story layout: https://storybook.js.org/docs/html/configure/story-layout
        layout: 'fullscreen',
      },
};

export const ApplicationForms = () => createManageApplicationForms();