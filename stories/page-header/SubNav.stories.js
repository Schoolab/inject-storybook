import {createSubNav} from "../layouts/page-header/SubNav.js";

export default {
    title: 'Components/Page Header',
    parameters: {
        // More on Story layout: https://storybook.js.org/docs/html/configure/story-layout
        layout: 'fullscreen',
      },
};
export const SubNav  = () => createSubNav();




