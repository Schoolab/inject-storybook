// import { createBreadcrumb } from './components/breadcrumb.js';
import breadcrumbHtml from "./components/breadcrumb.html";

export default {
    title: 'Components/Breadcrumb',
    parameters: {
        // More on Story layout: https://storybook.js.org/docs/html/configure/story-layout
        layout: 'fullscreen',
      },
};
// export const breadcrumb = () => createBreadcrumb();

export const breadcrumb = () => breadcrumbHtml;





