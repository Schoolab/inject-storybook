import { createCard } from '../layouts/cards/Task.js';

export default {
    title: 'Components/Cards',
    parameters: {
        // More on Story layout: https://storybook.js.org/docs/html/configure/story-layout
        layout: 'centered',
      },
};
export const Task = () => createCard();
