import { createTitleNav } from './layouts/TitleNav.js';

export default {
    title: 'Components/Page Header',
    parameters: {
        // More on Story layout: https://storybook.js.org/docs/html/configure/story-layout
        layout: 'fullscreen',
      },
};
export const TitleNav = () => createTitleNav();

