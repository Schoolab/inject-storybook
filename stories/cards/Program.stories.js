import { createCard } from '../layouts/cards/Program.js';

export default {
    title: 'Components/Cards',
    parameters: {
        // More on Story layout: https://storybook.js.org/docs/html/configure/story-layout
        layout: 'fullscreen',
      },
};
export const Program = () => createCard();
