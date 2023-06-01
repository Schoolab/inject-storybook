import { createExternalProgramLandingPage } from './layouts/externalProgramLandingPage.js';

export default {
    title: 'Pages/External/ProgramLandingPage',
    parameters: {
        // More on Story layout: https://storybook.js.org/docs/html/configure/story-layout
        layout: 'fullscreen',
      },
};

export const ProgramLandingPage = () => createExternalProgramLandingPage();
