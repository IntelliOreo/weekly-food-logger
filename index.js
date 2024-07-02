import * as items from './items.js';
import { makeCombineSets, logSet, logAll } from './utils.js';

globalThis.D0701 = new Set([items.spinach, items.peas, items.redPeppers, items.carrots, items.garlic, items.lemon, items.mungBeans, items.coriander, items.blackPeppercorn, items.avocado, items.kiwi, items.cucumber, items.apple, items.coffee, items.pistachio, items.cumin]);

globalThis.D0702 = new Set([items.avocado, items.kiwi, items.chocolate, items.coffee]);

logAll(7,1);


