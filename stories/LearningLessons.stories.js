import { createLearningLessons } from './layouts/learningLessons.js';

export default {
    title: 'Pages/Learning/Lessons',
    parameters: {
        // More on Story layout: https://storybook.js.org/docs/html/configure/story-layout
        layout: 'fullscreen',
      },
};

export const Lessons = () => createLearningLessons();
