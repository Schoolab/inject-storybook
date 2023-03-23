import { createLearningCoursesModules } from './layouts/learningCoursesModules.js';

export default {
    title: 'Pages/Learning/Modules',
    parameters: {
        // More on Story layout: https://storybook.js.org/docs/html/configure/story-layout
        layout: 'fullscreen',
      },
};

export const Modules = () => createLearningCoursesModules();
