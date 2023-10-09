import mailsFlagContent from "../components/mails-flag-content.html";
import { script } from "../utils/script.js";

export const createMailsFlag = () => {
  const applicationUi = document.createElement('div');

  applicationUi.insertAdjacentHTML('beforeend',mailsFlagContent);

  script();
  return applicationUi;
};
