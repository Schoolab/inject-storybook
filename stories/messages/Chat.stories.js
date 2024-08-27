import { createMessage } from '../layouts/messages/Chat.js';

export default {
    title: 'Components/Messages',
    parameters: {
        // More on Story layout: https://storybook.js.org/docs/html/configure/story-layout
        layout: 'centered',
      },
};
export const Chat = () => createMessage();
