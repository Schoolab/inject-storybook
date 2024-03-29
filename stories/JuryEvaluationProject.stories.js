import { createJuryEvaluation } from './layouts/juryEvaluationProject.js';

export default {
    title: 'Pages/Jury/EvaluationProject',
    parameters: {
        // More on Story layout: https://storybook.js.org/docs/html/configure/story-layout
        layout: 'fullscreen',
      },
};

export const EvaluationProject = () => createJuryEvaluation();
