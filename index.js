import { logAll } from "./utils/logAllUtils.js";
import * as items from "./constants.js";
import { ConstantSet } from "./utils/setUtils.js";
import "./dailyLogs.js"; // Import previous daily food logs 

globalThis.d0809 = new ConstantSet([
  items.goldernBerrys,
  items.tomatoes,
  items.keyLime,
  items.farro,
  items.rice,
  items.chickpeas,
  items.leek,
  items.carrots,
  items.cilantro,
  items.cumin
  
])
// Starts tallying from Aug 1st and logs the top 20 most eaten items

logAll(8, 1, 20);
