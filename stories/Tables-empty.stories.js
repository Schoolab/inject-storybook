import { createTableEmpty } from './layouts/tables-empty.js';

export default {
    title: 'Components/Tables/EmptyTable',
    parameters: {
        // More on Story layout: https://storybook.js.org/docs/html/configure/story-layout
        layout: 'fullscreen',
      },
};
export const EmptyTable = () => createTableEmpty();

