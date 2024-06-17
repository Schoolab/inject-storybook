import { createCard } from './layouts/CardsProject.js';

export default {
    title: 'Components/Cards',
    parameters: {
        // More on Story layout: https://storybook.js.org/docs/html/configure/story-layout
        layout: 'fullscreen',
      },
};
export const Project = () => createCard();
