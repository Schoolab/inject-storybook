import { createLearningCapsule } from '../layouts/pages/learningCapsule.js';

export default {
    title: 'Pages/Learning/Capsule',
    parameters: {
        // More on Story layout: https://storybook.js.org/docs/html/configure/story-layout
        layout: 'fullscreen',
      },
};

export const Capsule = () => createLearningCapsule();
