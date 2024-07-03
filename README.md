# Weekly Food Logger

This project logs daily food items and compiles them into weekly lists starting from a specified date. It uses JavaScript sets to manage unique food items and combines them into weekly sets.

## Adding Food Items

Food items should be added to the items.js file. Each food item is a string constant. Example:
```
export const spinach = "spinach";
export const peas = "peas";
// Add more items as needed
```
If you add items that are not in the constant list, you will receive the following warning message:` WARNING: An item you provided could not be added because it is not in the constant list. You may want to modify logSet to display all details in the logAll function.`

## Logging Daily Sets

Daily sets of food items are defined globally using the globalThis object. The format for the date should be DMMDD where MM is the month and DD is the day. Example:
```
globalThis.D0701 = new Set([items.spinach, items.peas, items.redPeppers]);
globalThis.D0702 = new Set([items.avocado, items.kiwi, items.chocolate, items.coffee]);

```

## Logging Weekly Lists

Call the logAll function with the starting month and day to log daily and weekly sets. If not specified, it defaults to January 1st (01/01).
```
logAll(7, 1); // Starts tallying from July 1st

```