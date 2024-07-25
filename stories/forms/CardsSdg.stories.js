import { createForms } from '../layouts/forms/CardsSdg.js';

export default {
    title: 'Components/Forms',
    parameters: {
        // More on Story layout: https://storybook.js.org/docs/html/configure/story-layout
        layout: 'centered',
      },
};
export const CardsSdg = () => createForms();
