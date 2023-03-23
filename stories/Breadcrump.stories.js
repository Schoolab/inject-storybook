// import { createBreadcrump } from './components/breadcrumb.js';
import breadcrumpHtml from "./components/breadcrump.html";

export default {
    title: 'Components/Breadcrump',
    parameters: {
        // More on Story layout: https://storybook.js.org/docs/html/configure/story-layout
        layout: 'fullscreen',
      },
};
// export const breadcrump = () => createBreadcrump();

export const breadcrump = () => breadcrumpHtml;





