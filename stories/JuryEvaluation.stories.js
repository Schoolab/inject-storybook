import { createJuryEvaluation } from './layouts/juryEvaluation.js';

export default {
    title: 'Pages/Jury/Evaluation',
    parameters: {
        // More on Story layout: https://storybook.js.org/docs/html/configure/story-layout
        layout: 'fullscreen',
      },
};

export const Evaluation = () => createJuryEvaluation();
