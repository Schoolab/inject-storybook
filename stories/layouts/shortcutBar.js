
import shortcutBarHTML from '../components/shortcutBar.html';
import { script } from "../utils/script.js"

export const createShortcutBar = () => {
  const shortcutBar = shortcutBarHTML;
  script();
  return shortcutBar;
};

