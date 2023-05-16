import { createTitleNav } from './layouts/titleNav.js';

export default {
    title: 'Components/TitleNav',
    parameters: {
        // More on Story layout: https://storybook.js.org/docs/html/configure/story-layout
        layout: 'fullscreen',
      },
};
export const TitleNav = () => createTitleNav();

