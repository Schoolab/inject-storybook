import { createSidebar } from '../layouts/sidebars/Admin.js';

export default {
    title: 'Components/Sidebar',
    parameters: {
        // More on Story layout: https://storybook.js.org/docs/html/configure/story-layout
        layout: 'fullscreen',
      },
};

export const Admin = () => createSidebar();
