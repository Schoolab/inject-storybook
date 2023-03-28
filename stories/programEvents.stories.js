import { createProgramEvents } from './layouts/programEvents.js';

export default {
    title: 'Pages/Program/Events/Events',
    parameters: {
        // More on Story layout: https://storybook.js.org/docs/html/configure/story-layout
        layout: 'fullscreen',
      },
};

export const Events = () => createProgramEvents();
