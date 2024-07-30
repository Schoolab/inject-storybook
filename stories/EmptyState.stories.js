import { createEmptyState } from './layouts/EmptyState.js';

export default {
    title: 'Components/EmptyState',
    parameters: {
        // More on Story layout: https://storybook.js.org/docs/html/configure/story-layout
        layout: 'centered',
      },
};
export const emptyState = () => createEmptyState();

