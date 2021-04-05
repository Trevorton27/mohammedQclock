function clock() {
  const today = new Date();

  const hours = addLeadingZero(today.getHours());
  const minutes = addLeadingZero(today.getMinutes());
  const seconds = addLeadingZero(today.getSeconds());
  const isAm = hours < 12 || hours === 0;
  let amPm = isAm ? 'AM' : 'PM';

  const timeDisplay = document.getElementById('displayTime');
  timeDisplay.textContent = `${getStandardHours(
    hours
  )}:${minutes}:${seconds} ${amPm}`;
}

function date() {
  const today = new Date();
  const day = getDayByIndex(today.getDay());
  const month = getMonthByIndex(today.getMonth());
  const date = addDateSuffix(today.getDate());
  const year = today.getFullYear();

  let dateDisplay = document.getElementById('displayDate');
  dateDisplay.textContent = `${day}, ${month} ${date} ${year}`;
}

function addLeadingZero(number) {
  return number < 10 ? '0' + number : number;
}

function getStandardHours(militaryHours) {
  militaryHours = militaryHours >= 13 ? militaryHours - 12 : militaryHours;

  militaryHours = militaryHours === 0 ? militaryHours + 12 : militaryHours;
  return militaryHours;
}

function addDateSuffix(date) {
  if (date < 10 || date > 20) {
    switch (date % 10) {
      case 1:
        return date + 'st';
      case 2:
        return date + 'nd';
      case 3:
        return date + 'rd';
    }
  }
  return date + 'th';
}

function getMonthByIndex(index) {
  const months = [
    'January',
    'Februray',
    'March',
    'April',
    'May',
    'June',
    'July',
    'August',
    'September',
    'October',
    'November',
    'December'
  ];
  return months[index];
}

function getDayByIndex(index) {
  const days = [
    'Sunday',
    'Monday',
    'Tuesday',
    'Wednesday',
    'Thursday',
    'Friday',
    'Saturday'
  ];
  return days[index];
}

clock();
date();

setInterval(() => {
  clock();
  date();
}, 1000);
