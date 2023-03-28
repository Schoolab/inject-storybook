import { createProgramEvent } from './layouts/programEvent.js';

export default {
    title: 'Pages/Program/Events/Event',
    parameters: {
        // More on Story layout: https://storybook.js.org/docs/html/configure/story-layout
        layout: 'fullscreen',
      },
};

export const Event = () => createProgramEvent();
