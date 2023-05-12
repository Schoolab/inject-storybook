import { createUserExpert } from './layouts/userExpert.js';

export default {
    title: 'Pages/User/UserExpert',
    parameters: {
        // More on Story layout: https://storybook.js.org/docs/html/configure/story-layout
        layout: 'fullscreen',
      },
};

export const UserExpert = () => createUserExpert();
