import { DateTime } from './Luxon.js';

const dateTime = () => {
  const dt = DateTime.now().toLocaleString(DateTime.DATETIME_MED_WITH_SECONDS);

  const dateTime = document.getElementById('dateTime');
  setInterval(() => {
    dateTime.innerHTML = dt;
  }, 1000);
};

export default dateTime;