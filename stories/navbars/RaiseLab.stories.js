import { createNavBar } from '../layouts/navbars/RaiseLab.js';

export default {
    title: 'Components/NavBar',
    parameters: {
        // More on Story layout: https://storybook.js.org/docs/html/configure/story-layout
        layout: 'fullscreen',
      },
};
export const Raiselab = {
  render: () => createNavBar(),
  storyName: 'RaiseLab'
}