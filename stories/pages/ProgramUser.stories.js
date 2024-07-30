import { createProgramUser } from '../layouts/pages/programUser.js';

export default {
    title: 'Pages/Program/User/About',
    parameters: {
        // More on Story layout: https://storybook.js.org/docs/html/configure/story-layout
        layout: 'fullscreen',
      },
};

export const About = () => createProgramUser();
