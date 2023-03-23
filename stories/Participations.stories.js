import { createParticipation } from './layouts/participations.js';

export default {
    title: 'Pages/Participations',
    parameters: {
        // More on Story layout: https://storybook.js.org/docs/html/configure/story-layout
        layout: 'fullscreen',
      },
};

export const Participations = () => createParticipation();
