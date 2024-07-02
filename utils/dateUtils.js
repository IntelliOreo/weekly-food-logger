/**
 * Formats the date as a string.
 * @param {number} month - The month (1-12).
 * @param {number} day - The day (1-31).
 * @returns {string} The formatted date string.
 */
export const formatDate = (month, day) => {
  const monthStr = month.toString().padStart(2, '0');
  const dayStr = day.toString().padStart(2, '0');
  return `D${monthStr}${dayStr}`;
};

/**
 * Gets the number of days in a given month.
 * @param {number} month - The month (1-12).
 * @returns {number} The number of days in the month.
 */
export const getDaysInMonth = (month) => {
    if (month === 2) {
        return 28;
    } else if (month === 4 || month === 6 || month === 9 || month === 11) {
        return 30;
    } else {
        return 31;
    }
};
