import { createUserJury } from './layouts/userJury.js';

export default {
    title: 'Pages/User/UserJury',
    parameters: {
        // More on Story layout: https://storybook.js.org/docs/html/configure/story-layout
        layout: 'fullscreen',
      },
};

export const UserJury = () => createUserJury();
