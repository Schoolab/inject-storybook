import { createProgramHub } from '../layouts/pages/programsHub-explore.js';

export default {
    title: 'Pages/Programs Hub/Explore',
    parameters: {
        // More on Story layout: https://storybook.js.org/docs/html/configure/story-layout
        layout: 'fullscreen',
      },
};

export const Explore = () => createProgramHub();
