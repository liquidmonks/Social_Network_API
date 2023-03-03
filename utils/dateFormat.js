// add suffix to day of the month
const addDateSuffix = (date) => {
  let dateStr = date.toString();

  // get last char of date string
  const lastChar = dateStr.charAt(dateStr.length - 1);

  // check if suffix is needed and add it
  if (lastChar === "1" && dateStr !== "11") {
    dateStr = `${dateStr}st`;
  } else if (lastChar === "2" && dateStr !== "12") {
    dateStr = `${dateStr}nd`;
  } else if (lastChar === "3" && dateStr !== "13") {
    dateStr = `${dateStr}rd`;
  } else {
    dateStr = `${dateStr}th`;
  }

  return dateStr;
};

// export function that formats a timestamp
module.exports = (timestamp, { monthLength = "short", dateSuffix = true } = {}) => {
  let months;

  // set the months object based on the provided options
  if (monthLength === "short") {
    months = {
      0: "Jan",
      1: "Feb",
      2: "Mar",
      3: "Apr",
      4: "May",
      5: "Jun",
      6: "Jul",
      7: "Aug",
      8: "Sep",
      9: "Oct",
      10: "Nov",
      11: "Dec",
    };
  } else {
    months = {
      0: "January",
      1: "February",
      2: "March",
      3: "April",
      4: "May",
      5: "June",
      6: "July",
      7: "August",
      8: "September",
      9: "October",
      10: "November",
      11: "December",
    };
  }

  // create a new date object from the provided timestamp
  const dateObj = new Date(timestamp);

  // get the formatted month from the months object
  const formattedMonth = months[dateObj.getMonth()];

  let dayOfMonth;

  // add suffix to day of the month if option is enabled
  if (dateSuffix) {
    dayOfMonth = addDateSuffix(dateObj.getDate());
  } else {
    dayOfMonth = dateObj.getDate();
  }

  // get the year from the date object
  const year = dateObj.getFullYear();

  let hour;

  // check for 24-hr time and adjust if needed
  if (dateObj.getHours > 12) {
    hour = Math.floor(dateObj.getHours() / 2);
  } else {
    hour = dateObj.getHours();
  }

  // if hour is 0 (12:00am), change it to 12
  if (hour === 0) {
    hour = 12;
  }

  // get the minutes from the date object
  const minutes = dateObj.getMinutes();

  let periodOfDay;

  // set the period of the day (am or pm) based on the hour
  if (dateObj.getHours() >= 12) {
    periodOfDay = "pm";
  } else {
    periodOfDay = "am";
  }

  // create the formatted timestamp string
  const formattedTimeStamp = `${formattedMonth} ${dayOfMonth}, ${year} at ${hour}:${minutes} ${periodOfDay}`;

  return formattedTimeStamp;
};
