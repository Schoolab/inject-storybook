import { createTables } from './layouts/TablesSkewed.js';

export default {
    title: 'Components/Tables',
    parameters: {
        // More on Story layout: https://storybook.js.org/docs/html/configure/story-layout
        layout: 'fullscreen',
      },
};
export const Skewed = () => createTables();

