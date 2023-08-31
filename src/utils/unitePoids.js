export const unitePoids = (value, unit) => {
  if (unit === "kilos") {
    return value * 2.2046;
  } else if (unit === "livres") {
    return value / 2.2046;
  }
};
