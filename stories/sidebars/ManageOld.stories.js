import { createSidebar } from '../layouts/sidebars/ManageOld.js';

export default {
    title: 'Components/Sidebar',
    parameters: {
        // More on Story layout: https://storybook.js.org/docs/html/configure/story-layout
        layout: 'fullscreen',
      },
};

export const ManageOld = () => createSidebar();
