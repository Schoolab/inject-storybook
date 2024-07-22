import { createModal } from '../layouts/modals/NewProject.js';

export default {
    title: 'Components/Modals',
    parameters: {
        // More on Story layout: https://storybook.js.org/docs/html/configure/story-layout
        layout: 'fullscreen',
      },
};
export const NewProject = () => createModal();

