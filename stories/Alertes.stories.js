import { createAlertes } from './layouts/alertes.js';

export default {
    title: 'Components/Alertes',
    parameters: {
        // More on Story layout: https://storybook.js.org/docs/html/configure/story-layout
        layout: 'fullscreen',
      },
};
export const Alertes = () => createAlertes();

