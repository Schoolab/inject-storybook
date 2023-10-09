import { createMailsQuestion } from './layouts/mailsQuestion.js';

export default {
    title: 'Pages/Mails/Question',
    parameters: {
        // More on Story layout: https://storybook.js.org/docs/html/configure/story-layout
        layout: 'fullscreen',
      },
};

export const Question = () => createMailsQuestion();
