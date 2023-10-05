import projectOverviewContent from "../components/mails-default-content.html";
import { script } from "../utils/script.js";

export const createMailsDefault = () => {
  const applicationUi = document.createElement('div');

  applicationUi.insertAdjacentHTML('beforeend',projectOverviewContent);

  script();
  return applicationUi;
};
