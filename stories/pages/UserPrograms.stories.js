import { createUserPrograms } from '../layouts/pages/userPrograms.js';

export default {
    title: 'Pages/User/UserPrograms',
    parameters: {
        // More on Story layout: https://storybook.js.org/docs/html/configure/story-layout
        layout: 'fullscreen',
      },
};

export const UserPrograms = () => createUserPrograms();
