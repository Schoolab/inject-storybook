import { createTables } from '../layouts/tables/Filters.js';

export default {
    title: 'Components/Tables/Elements',
    parameters: {
        // More on Story layout: https://storybook.js.org/docs/html/configure/story-layout
        layout: 'padded',
      },
};
export const Filters = () => createTables();