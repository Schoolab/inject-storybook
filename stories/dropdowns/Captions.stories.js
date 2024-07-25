import { createDropdown } from '../layouts/dropdowns/Captions.js';

export default {
    title: 'Components/Dropdowns',
    parameters: {
        // More on Story layout: https://storybook.js.org/docs/html/configure/story-layout
        layout: 'centered',
      },
};
export const Captions = () => createDropdown();
