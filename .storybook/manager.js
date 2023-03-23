import { addons } from '@storybook/addons';
import injectTheme from './injectTheme';

addons.setConfig({
  theme: injectTheme,
});