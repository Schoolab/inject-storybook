import { createAdminInstaller } from './layouts/AdminInstaller.js';

export default {
    title: 'Pages/Admin/Installer',
    parameters: {
        // More on Story layout: https://storybook.js.org/docs/html/configure/story-layout
        layout: 'fullscreen',
      },
};

export const Installer = () => createAdminInstaller();
