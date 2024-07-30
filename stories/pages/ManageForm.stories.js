import { createManageForm } from '../layouts/pages/ManageForm.js';

export default {
    title: 'Pages/Manage/Forms',
    parameters: {
        // More on Story layout: https://storybook.js.org/docs/html/configure/story-layout
        layout: 'fullscreen',
      },
};

export const Forms = () => createManageForm();
