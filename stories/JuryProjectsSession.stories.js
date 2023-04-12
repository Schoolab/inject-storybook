import { createJuryProjectsSession } from './layouts/juryProjectsSession.js';

export default {
    title: 'Pages/Jury/ProjectsSession',
    parameters: {
        // More on Story layout: https://storybook.js.org/docs/html/configure/story-layout
        layout: 'fullscreen',
      },
};

export const ProjectsSession = () => createJuryProjectsSession();
