import { createExpertCoachingSession } from './layouts/expertCoachingSession.js';

export default {
    title: 'Pages/Expert/CoachingSession',
    parameters: {
        // More on Story layout: https://storybook.js.org/docs/html/configure/story-layout
        layout: 'fullscreen',
      },
};

export const CoachingSession = () => createExpertCoachingSession();
