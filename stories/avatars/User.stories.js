import createAvatarHTML from "../components/avatars/user.html";

export default {
    title: 'Components/Avatars',
    parameters: {
        // More on Story layout: https://storybook.js.org/docs/html/configure/story-layout
        layout: 'centered',
      },
};

export const User = () => createAvatarHTML;
