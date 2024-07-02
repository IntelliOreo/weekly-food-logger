
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
  
  // Helper function to format the date
  const formatDate = (month, day) => {
    const monthStr = month.toString().padStart(2, '0');
    const dayStr = day.toString().padStart(2, '0');
    return `D${monthStr}${dayStr}`;
  };
  
  // Helper function to get the number of days in a month
  const getDaysInMonth = (month) => {
      if (month === 2) {
          return 28;
      } else if (month === 4 || month === 6 || month === 9 || month === 11) {
          return 30;
      } else {
          return 31;
      }
  };
   
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

/**
 * Combines multiple sets into one set.
 *
 * @param {...Set<string>} sets - An unspecified number of sets, each containing strings.
 * @returns {Set<string>} A new set containing all unique elements from the input sets.
 */

export const makeCombineSets = (...sets) => {
  const combinedArray = sets.flatMap(set => [...set]);
  return new Set(combinedArray);
} 


/**
 * Logs the size and optionally the details of a set of plant-based foods.
 *
 * @param {string} str - The name of the set to be printed before the set details.
 * @param {Set<string>} set - The set of plant-based foods whose size and details are to be logged.
 * @param {boolean} [details=false] - Whether to log the details of each item in the set.
 */

export const logSet = (str, set, details = false) => {
  console.log(`${str}:`, set.size);
  if(details){
    let numbers = 1;
    set.forEach((item) => {
      console.log(' ' + numbers + '. ' + item);
      numbers++;
    });
  }; 
  console.log();
};