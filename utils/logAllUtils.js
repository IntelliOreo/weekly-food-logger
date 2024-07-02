import { formatDate, getDaysInMonth } from './dateUtils.js';
import { makeCombineSets, logSet } from './setUtils.js';
/**
 * Function to loop over all dates from 0101 to 1231, log variables if they exist
 * and are of type Set, and then combine sets into weekly lists starting from a specified date.
 * @param {number} startMonth - The starting month (1-12).
 * @param {number} startDay - The starting day (1-31).
 */

export const logAll = (startMonth = 1, startDay = 1) => {
  let currentWeek = [];
  let daysCounter = 0;
  let startTallying = false;
   
  // Loop over months and days
  for (let month = 1; month <= 12; month++) {
    const daysInMonth = getDaysInMonth(month);
    for (let day = 1; day <= daysInMonth; day++) {
      const variableName = formatDate(month, day);
      
      // Check if the variable exists
      if (globalThis[variableName] && globalThis[variableName] instanceof Set) {
        logSet(`Date ${month}/${day}`, globalThis[variableName]);
        currentWeek.push(globalThis[variableName]);
      }
      
      // Start tallying after the specified start date
      if (month === startMonth && day === startDay) {
        startTallying = true;
      }

      if (startTallying) {
        daysCounter++;
      }
      // After every 7 days, combine the sets and start a new week
      if (daysCounter === 7) {
        if (currentWeek.length > 0) {
          const weeklySet = makeCombineSets(...currentWeek);
          logSet(` Weekly tally`, weeklySet, true);
        }
        currentWeek = [];
        daysCounter = 0;
      }
      
    }
  }
};

