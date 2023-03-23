import { createLearningCourses } from './layouts/learningCourses.js';

export default {
    title: 'Pages/Learning/Courses',
    parameters: {
        // More on Story layout: https://storybook.js.org/docs/html/configure/story-layout
        layout: 'fullscreen',
      },
};

export const Courses = () => createLearningCourses();
