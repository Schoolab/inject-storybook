import { createAside } from '../layouts/asides/Notes.js';

export default {
    title: 'Components/Asides',
    parameters: {
        // More on Story layout: https://storybook.js.org/docs/html/configure/story-layout
        layout: 'fullscreen',
      },
};
export const Notes = () => createAside();
