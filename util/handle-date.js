function convertDateToString(date) {
  let [year, month] = date.split("-");
  switch (month) {
    case "01":
      return `January ${year}`;
    case "02":
      return `February ${year}`;
    case "03":
      return `March ${year}`;
    case "04":
      return `April ${year}`;
    case "05":
      return `May ${year}`;
    case "06":
      return `June ${year}`;
    case "07":
      return `July ${year}`;
    case "08":
      return `August ${year}`;
    case "09":
      return `September ${year}`;
    case "10":
      return `October ${year}`;
    case "11":
      return `November ${year}`;
    case "12":
      return `December ${year}`;
    default:
      break;
  }
}

function formatYYYYMM(date) {
  const year = date.getFullYear();
  let month = date.getMonth() + 1;

  // Add leading zeros to the month value if necessary
  month = month.toString().padStart(2, "0");

  return `${year}-${month}`;
}

export function convertDateTime(start, end) {
  if (end === "") {
    return `${convertDateToString(start)} - Present · ${durationDisplay(
      start,
      formatYYYYMM(new Date())
    )}`;
  } else {
    return `${convertDateToString(start)} - ${convertDateToString(
      end
    )} · ${durationDisplay(start, end)}`;
  }
}

export function convertYearMonth(startDates, endDates) {
  const startYear = parseInt(startDates[0], 10);
  const startMonth = parseInt(startDates[1], 10);
  const endYear = parseInt(endDates[0], 10);
  const endMonth = parseInt(endDates[1], 10);

  return {
    startYear,
    startMonth,
    endYear,
    endMonth,
  };
}

export function calculateDuration(dateObj) {
  const { startYear, startMonth, endYear, endMonth } = dateObj;
  let durationYears = endYear - startYear;
  let durationMonths = endMonth - startMonth;
  if (durationMonths < 0) {
    durationYears--;
    durationMonths += 12;
  }

  return {
    durationYears,
    durationMonths,
  };
}

export function pluralize(num, word) {
  // Add an "s" to the word if the number is not 1
  if (num === 0) {
    return "";
  }
  if (num > 1) {
    word += "s";
  }
  // Return the number and the pluralized word
  return `${num} ${word}`;
}

/*
  Input start, end = format(yyyy,mm) -> "2022-05"
*/
export function durationDisplay(start, end) {
  const startDates = start.split("-");
  const endDates = end.split("-");

  const { durationYears, durationMonths } = calculateDuration(
    convertYearMonth(startDates, endDates)
  );

  return `${pluralize(durationYears, "yr")} ${pluralize(
    durationMonths,
    "mo"
  )}`;
}
