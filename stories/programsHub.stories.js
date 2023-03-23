import { createProgramHub } from './layouts/programsHub.js';

export default {
    title: 'Pages/Programs Hub/Default',
    parameters: {
        // More on Story layout: https://storybook.js.org/docs/html/configure/story-layout
        layout: 'fullscreen',
      },
};

export const Default = () => createProgramHub();
