import { createModalUser } from './layouts/modalUser.js';

export default {
    title: 'Pages/Modal/User',
    parameters: {
        // More on Story layout: https://storybook.js.org/docs/html/configure/story-layout
        layout: 'fullscreen',
      },
};
export const User = () => createModalUser();

