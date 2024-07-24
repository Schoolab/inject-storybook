import { createButton } from '../layouts/buttons/Interactive.js';

export default {
    title: 'Components/Buttons',
    parameters: {
        // More on Story layout: https://storybook.js.org/docs/html/configure/story-layout
        layout: 'centered',
      },
};
export const Interactive = () => createButton();
