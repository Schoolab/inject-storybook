import {createShortcutBar} from '../layouts/shortcut-bar/Manage.js';

export default {
    title: 'Components/ShortcutBar',
    parameters: {
        // More on Story layout: https://storybook.js.org/docs/html/configure/story-layout
        layout: 'fullscreen',
      },
};

export const Manage = () => createShortcutBar();


