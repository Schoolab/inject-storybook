import { createProgramHub } from './layouts/programsHub-custom.js';

export default {
    title: 'Pages/Programs Hub/Custom',
    parameters: {
        // More on Story layout: https://storybook.js.org/docs/html/configure/story-layout
        layout: 'fullscreen',
      },
};

export const Custom = () => createProgramHub();
