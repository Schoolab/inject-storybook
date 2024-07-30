import { createProgramDashboard } from '../layouts/pages/programDashboard-custom-dark.js';

export default {
    title: 'Pages/Program/Dashboard/CustomDark',
    parameters: {
        // More on Story layout: https://storybook.js.org/docs/html/configure/story-layout
        layout: 'fullscreen',
      },
};

export const CustomDark = () => createProgramDashboard();
