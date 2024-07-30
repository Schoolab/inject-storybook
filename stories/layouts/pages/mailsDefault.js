import mailsDefaultContent from "../../components/pages/mails-default-content.html";
import { script } from "../../utils/script.js";

export const createMailsDefault = () => {
  const applicationUi = document.createElement('div');

  applicationUi.insertAdjacentHTML('beforeend',mailsDefaultContent);

  script();
  return applicationUi;
};
