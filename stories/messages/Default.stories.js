import { createMessage } from '../layouts/messages/Default.js';

export default {
    title: 'Components/Messages',
    parameters: {
        // More on Story layout: https://storybook.js.org/docs/html/configure/story-layout
        layout: 'centered',
      },
};
export const Default = () => createMessage();
