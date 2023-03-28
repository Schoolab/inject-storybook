
import alertesHTML from '../components/alertes.html';

import { script } from "../utils/script.js"

export const createAlertes = () => {
  const alertes = alertesHTML;
  script();
  return alertes;
};

