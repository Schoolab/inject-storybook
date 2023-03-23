import { createManage } from './layouts/manage.js';

export default {
    title: 'Pages/SecondSidebar',
    parameters: {
        // More on Story layout: https://storybook.js.org/docs/html/configure/story-layout
        layout: 'fullscreen',
      },
};

export const SecondSidebar = () => createManage();
