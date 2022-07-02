import months from "./months";

export const recentSort = (a, b) => {
  const adate = a.date.replace(",", "").split(" ");
  const bdate = b.date.replace(",", "").split(" ");

  if (parseInt(adate[2]) !== parseInt(bdate[2])) {
    return parseInt(bdate[2]) - parseInt(adate[2]);
  }
  // month
  if (months[adate[0]] !== months[bdate[0]]) {
    return months[bdate[0]] - months[adate[0]];
  }
  // day
  if (parseInt(adate[1]) !== parseInt(bdate[1])) {
    return parseInt(bdate[1]) - parseInt(adate[1]);
  }

  return bdate;
};

export const highestRatedSort = (a, b) => {
  return b.agree - b.disagree - (a.agree - a.disagree);
};

export const controversialSort = (a, b) => {
  return b.disagree - a.disagree;
};
