// import { createBreadcrumb } from './components/page-header/breadcrumb.js';
import breadcrumbHtml from "../components/page-header/breadcrumb.html";

export default {
    title: 'Components/Page Header',
    parameters: {
        // More on Story layout: https://storybook.js.org/docs/html/configure/story-layout
        layout: 'fullscreen',
      },
};
// export const breadcrumb = () => createBreadcrumb();

export const Breadcrumb = () => breadcrumbHtml;





