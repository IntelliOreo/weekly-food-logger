import { formatDate, getDaysInMonth } from './dateUtils.js';
import { makeCombineSets, logSet, ConstantSet } from './setUtils.js';

/**
 * Logs daily and weekly food sets starting from a specified date and logs the top most eaten items.
 * @param {number} [startMonth=1] - The month to start tallying from (1-12).
 * @param {number} [startDay=1] - The day of the month to start tallying from (1-31).
 * @param {number} [topItemsCount=15] - The number of top most eaten items to log.
 */

export const logAll = (startMonth = 1, startDay = 1, topItemsCount = 15) => {
  const allTimeFrequency = new Map();

  logDailyAndWeekly(startMonth, startDay, allTimeFrequency);
  logTopItems(allTimeFrequency, topItemsCount);
};

function logTopItems(frequencyMap, topCount) {
  const sortedItems = [...frequencyMap.entries()].sort((a, b) => b[1] - a[1]).slice(0, topCount);
  console.log(`Top ${topCount} most eaten items:`);
  sortedItems.forEach(([item, count], index) => {
    console.log(`${index + 1}. ${item}: ${count} times`);
  });
}

function logDailyAndWeekly(startMonth, startDay, allTimeFrequency) {
  let currentWeek = [];
  let daysCounter = 0;
  let startTallying = false;
  let count = 0;

  for (let month = 1; month <= 12; month++) {
    const daysInMonth = getDaysInMonth(month);
    for (let day = 1; day <= daysInMonth; day++) {
      const variableName = formatDate(month, day);

      if (globalThis[variableName] && globalThis[variableName] instanceof Set) {   
        updateFrequency(globalThis[variableName], allTimeFrequency);
      }

      if (month === startMonth && day === startDay) {
        startTallying = true;
      }

      if (startTallying) {
        daysCounter++;
        if (globalThis[variableName] && globalThis[variableName] instanceof Set) {
          logDailySet(month, day, globalThis[variableName]);
          currentWeek.push(globalThis[variableName]);
          count++;
        } else {
          currentWeek.push(new ConstantSet([]));
        }

        if (daysCounter === 7) {
          logWeeklySet(currentWeek, count);
          currentWeek = [];
          daysCounter = 0;
          count = 0;
        }
      }
    }
  }

  if (startTallying && currentWeek.length > 0) {
    logWeeklySet(currentWeek, count);
  }
}

function logDailySet(month, day, set) {
  logSet(`Date ${month}/${day}`, set);
}

function logWeeklySet(weekSets, count) {
  if (weekSets.length > 0) {
    const weeklySet = makeCombineSets(...weekSets);
    if (weeklySet.size > 0) {
      logSet(`Weekly tally, recorded ${count} days/ 7 days`, weeklySet, true);
    }
  }
}

function updateFrequency(set, frequencyMap) {
  set.forEach(item => frequencyMap.set(item, (frequencyMap.get(item) || 0) + 1));
}


 