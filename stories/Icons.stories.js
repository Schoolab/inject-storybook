import { createIcons } from './layouts/Icons.js';

export default {
    title: 'Components/Icons',
    parameters: {
        // More on Story layout: https://storybook.js.org/docs/html/configure/story-layout
        layout: 'fullscreen',
      },
};
export const Icons = () => createIcons();

