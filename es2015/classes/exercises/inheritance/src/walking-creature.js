// * exports
// - default: class
// * inherits from
// - LivingCreature
// - Walker
// * constructor parameters:
// - the ones required to be passed to their ancestor
// * methods
// - walk
//   - must throw an exception if it has died
//   - must consume oxygen and walk

import LivingCreature from "./living-creature";
import Walker from "./walker";

class WalkingCreature {
    constructor() {
        Object.assign(this.prototype, LivingCreature.prototype, Walker.prototype);
    }

    walk() {
        if (LivingCreature.hasDied()) {
            throw new Error('Ta muertito');
        }

        LivingCreature.consumeOxygen();
        Walker.walk();

    }
}

export {
    WalkingCreature as default
}
