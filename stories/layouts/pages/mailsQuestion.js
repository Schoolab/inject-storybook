import mailsQuestionContent from "../../components/pages/mails-question-content.html";
import { script } from "../../utils/script.js";

export const createMailsQuestion = () => {
  const applicationUi = document.createElement('div');

  applicationUi.insertAdjacentHTML('beforeend',mailsQuestionContent);

  script();
  return applicationUi;
};
