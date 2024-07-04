/**
 * A specialized set that logs a warning message if the item added is not in the constant list.
 * 
 * @class ConstantSet
 * @extends {Set}
 */

export class ConstantSet extends Set {
  constructor(args) {
    super();
    let error;
    args.forEach(item => {
      if (item === undefined || item === null) {
        error = true; 
      } else {
        super.add(item);    
      }
    });
    if(error){
      console.warn(`WARNING: An item you submitted could not be added because it is not part of the constant list.`);
      console.warn();
      console.warn(`>> The following items were received: ${args}.`)
      console.warn();
      console.warn(`>> Identify the missing item by checking for double or trailing commas.`);
      console.warn();
    }
  }

  add(item) {
    if (item === undefined || item === null) {
      console.warn(`WARNING: An item you provided could not be added because it is not in the constant list.`);
    } else {
      return super.add(item);
    }
  }
}

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
      if(numbers < 10){
        numbers = numbers.toString().padStart(2, '0');
      }
      console.log(' ' + numbers + '. ' + item);
      numbers++;
    });
  }; 
  console.log();
};