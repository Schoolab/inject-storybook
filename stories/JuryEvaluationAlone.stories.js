import { createJuryEvaluationAlone } from './layouts/juryEvaluationAlone.js';

export default {
    title: 'Pages/Jury/EvaluationAlone',
    parameters: {
        // More on Story layout: https://storybook.js.org/docs/html/configure/story-layout
        layout: 'fullscreen',
      },
};

export const EvaluationAlone = () => createJuryEvaluationAlone();
