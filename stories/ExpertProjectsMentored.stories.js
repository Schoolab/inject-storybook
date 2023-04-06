import { createExpertProjectsMentored } from './layouts/expertProjectsMentored.js';

export default {
    title: 'Pages/Expert/ProjectMentored',
    parameters: {
        // More on Story layout: https://storybook.js.org/docs/html/configure/story-layout
        layout: 'fullscreen',
      },
};

export const ProjectMentored = () => createExpertProjectsMentored();
