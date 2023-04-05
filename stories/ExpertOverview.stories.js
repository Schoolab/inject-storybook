import { createExpertOverview } from './layouts/expertOverview.js';

export default {
    title: 'Pages/Expert/ExpertOverview',
    parameters: {
        // More on Story layout: https://storybook.js.org/docs/html/configure/story-layout
        layout: 'fullscreen',
      },
};

export const ExpertOverview = () => createExpertOverview();
