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