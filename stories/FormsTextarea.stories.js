import { createForms } from './layouts/FormsTextarea.js';

export default {
    title: 'Components/Forms',
    parameters: {
        // More on Story layout: https://storybook.js.org/docs/html/configure/story-layout
        layout: 'fullscreen',
      },
};
export const Textarea = () => createForms();
