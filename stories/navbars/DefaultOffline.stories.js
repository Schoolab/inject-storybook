import { createNavBar } from '../layouts/navbars/DefaultOffline.js';

export default {
    title: 'Components/NavBar',
    parameters: {
        // More on Story layout: https://storybook.js.org/docs/html/configure/story-layout
        layout: 'fullscreen',
      },
};
export const DefaultOffline = () => createNavBar();

