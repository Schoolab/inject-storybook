import { createProgramDashboard } from '../layouts/pages/programDashboard.js';

export default {
    title: 'Pages/Program/Dashboard/Default',
    parameters: {
        // More on Story layout: https://storybook.js.org/docs/html/configure/story-layout
        layout: 'fullscreen',
      },
};

export const Default = () => createProgramDashboard();
