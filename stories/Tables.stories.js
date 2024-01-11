import { createTables } from './layouts/tables.js';

export default {
    title: 'Components/Tables/DefaultTable',
    parameters: {
        // More on Story layout: https://storybook.js.org/docs/html/configure/story-layout
        layout: 'fullscreen',
      },
};
export const DefaultTable = () => createTables();

