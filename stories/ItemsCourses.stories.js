import { createItems } from './layouts/itemsCourses.js';

export default {
    title: 'Components/Items',
    parameters: {
        // More on Story layout: https://storybook.js.org/docs/html/configure/story-layout
        layout: 'fullscreen',
      },
};
export const Courses = () => createItems();

