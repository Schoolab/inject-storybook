import { createButton } from '../layouts/buttons/DefaultSmall.js';

export default {
    title: 'Components/Buttons/Small',
    parameters: {
        // More on Story layout: https://storybook.js.org/docs/html/configure/story-layout
        layout: 'centered',
      },
};
export const Default = () => createButton();
