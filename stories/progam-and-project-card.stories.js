import { createCard } from './layouts/ProgamAndProjectCard.js';

export default {
    title: 'Components/ProgamAndProjectCard',
    parameters: {
        // More on Story layout: https://storybook.js.org/docs/html/configure/story-layout
        layout: 'fullscreen',
      },
};
export const ProgamAndProjectCard = () => createCard();

