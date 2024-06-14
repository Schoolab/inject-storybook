import { createItems } from './layouts/itemsObjectives.js';

export default {
    title: 'Components/Items',
    parameters: {
        // More on Story layout: https://storybook.js.org/docs/html/configure/story-layout
        layout: 'fullscreen',
      },
};
export const Objectives = () => createItems();

