import { createProgramHubEvents } from './layouts/programHubEvents.js';

export default {
    title: 'Pages/Programs Hub/Events',
    parameters: {
        // More on Story layout: https://storybook.js.org/docs/html/configure/story-layout
        layout: 'fullscreen',
      },
};

export const Events = () => createProgramHubEvents();
