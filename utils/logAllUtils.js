  import { formatDate, getDaysInMonth } from './dateUtils.js';
  import { makeCombineSets, logSet, ConstantSet } from './setUtils.js';

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
        }

        // Start tallying after the specified start date
        if (month === startMonth && day === startDay) {
          startTallying = true;
        }

        if (startTallying) {
          daysCounter++;
          if (globalThis[variableName] && globalThis[variableName] instanceof Set) {
            currentWeek.push(globalThis[variableName]);
          } else {
            currentWeek.push(new ConstantSet([]));
          }

          // After every 7 days, combine the sets and start a new week
          if (daysCounter === 7) {
            if (currentWeek.length > 0) {
              const weeklySet = makeCombineSets(...currentWeek);
              if (weeklySet.size > 0) {
                logSet(` Weekly tally`, weeklySet, true);
              }
            }
            currentWeek = [];
            daysCounter = 0;
          }
        }
      }
    }

    // Handle any remaining days in the last week
    if (startTallying && currentWeek.length > 0) {
      const weeklySet = makeCombineSets(...currentWeek);
      if (weeklySet.size > 0) {
        logSet(` Weekly tally`, weeklySet, true);
      }
    }
  };