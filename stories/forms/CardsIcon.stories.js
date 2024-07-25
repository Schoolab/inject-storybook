import { createForms } from '../layouts/forms/CardsIcon.js';

export default {
    title: 'Components/Forms',
    parameters: {
        // More on Story layout: https://storybook.js.org/docs/html/configure/story-layout
        layout: 'centered',
      },
};
export const CardsIcon = () => createForms();
