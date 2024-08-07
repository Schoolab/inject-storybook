import { createItems } from '../layouts/items/Tasks.js';

export default {
    title: 'Components/Items',
    parameters: {
        // More on Story layout: https://storybook.js.org/docs/html/configure/story-layout
        layout: 'centered',
      },
};
export const Tasks = () => createItems();

