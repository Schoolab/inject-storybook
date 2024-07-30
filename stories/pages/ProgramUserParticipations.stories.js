import { createProgramUserParticipations } from '../layouts/pages/programUserParticipations.js';

export default {
    title: 'Pages/Program/User/Participations',
    parameters: {
        // More on Story layout: https://storybook.js.org/docs/html/configure/story-layout
        layout: 'fullscreen',
      },
};

export const Participations = () => createProgramUserParticipations();
