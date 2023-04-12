import { createJuryOverview } from './layouts/juryOverview.js';

export default {
    title: 'Pages/Jury/JuryOverview',
    parameters: {
        // More on Story layout: https://storybook.js.org/docs/html/configure/story-layout
        layout: 'fullscreen',
      },
};

export const JuryOverview = () => createJuryOverview();
