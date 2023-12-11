import { createProgramLibrary } from './layouts/programLibrary.js';

export default {
    title: 'Pages/Program/Library',
    parameters: {
        // More on Story layout: https://storybook.js.org/docs/html/configure/story-layout
        layout: 'fullscreen',
      },
};

export const Library = () => createProgramLibrary();
