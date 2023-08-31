import { createModalUser } from './layouts/modalExternalProgram.js';

export default {
    title: 'Pages/Modal/ExternalProgram',
    parameters: {
        // More on Story layout: https://storybook.js.org/docs/html/configure/story-layout
        layout: 'fullscreen',
      },
};
export const ExternalProgram = () => createModalUser();

