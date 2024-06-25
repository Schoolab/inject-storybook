import {createShortcutBar} from './layouts/shortcutBarCollapsed.js';

export default {
    title: 'Components/ShortcutBar',
    parameters: {
        // More on Story layout: https://storybook.js.org/docs/html/configure/story-layout
        layout: 'fullscreen',
      },
};

export const Collapsed = () => createShortcutBar();


