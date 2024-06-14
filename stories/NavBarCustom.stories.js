import { createNavBarCustom } from './layouts/navBarCustom.js';

export default {
    title: 'Components/NavBar',
    parameters: {
        // More on Story layout: https://storybook.js.org/docs/html/configure/story-layout
        layout: 'fullscreen',
      },
};
export const RaiseLab = () => createNavBarCustom();

