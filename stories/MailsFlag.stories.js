import { createMailsFlag } from './layouts/mailsFlag.js';

export default {
    title: 'Pages/Mails/Flag',
    parameters: {
        // More on Story layout: https://storybook.js.org/docs/html/configure/story-layout
        layout: 'fullscreen',
      },
};

export const Flag = () => createMailsFlag();
