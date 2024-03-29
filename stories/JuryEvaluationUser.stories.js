import { createJuryEvaluation } from './layouts/juryEvaluationUser.js';

export default {
    title: 'Pages/Jury/EvaluationUser',
    parameters: {
        // More on Story layout: https://storybook.js.org/docs/html/configure/story-layout
        layout: 'fullscreen',
      },
};

export const EvaluationUser = () => createJuryEvaluation();
