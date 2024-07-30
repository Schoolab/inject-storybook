import { createUserProjects } from '../layouts/pages/userProjects.js';

export default {
    title: 'Pages/User/UserProjects',
    parameters: {
        // More on Story layout: https://storybook.js.org/docs/html/configure/story-layout
        layout: 'fullscreen',
      },
};

export const UserProjects = () => createUserProjects();
