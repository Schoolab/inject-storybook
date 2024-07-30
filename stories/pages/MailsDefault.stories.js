import { createMailsDefault } from '../layouts/pages/mailsDefault.js';

export default {
    title: 'Pages/Mails/Default',
    parameters: {
        // More on Story layout: https://storybook.js.org/docs/html/configure/story-layout
        layout: 'fullscreen',
      },
};

export const Default = () => createMailsDefault();
