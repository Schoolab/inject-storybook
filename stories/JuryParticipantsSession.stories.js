import { createJuryParticipantsSession } from './layouts/juryParticipantsSession.js';

export default {
    title: 'Pages/Jury/ParticipantsSession',
    parameters: {
        // More on Story layout: https://storybook.js.org/docs/html/configure/story-layout
        layout: 'fullscreen',
      },
};

export const ParticipantsSession = () => createJuryParticipantsSession();
