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

function mixins (...constructors) {
    function Base(oxygen, legs) {
        initializers.forEach(init => init(this));
    }
    const prototypes = constructors.map(constructor => constructor.prototype);
    Object.assign(Base.prototype, ...prototypes);
    const initializers = constructors.map(constructor => constructor.init);
    return Base;
}

export default class WalkingCreature extends mixins(LivingCreature.prototype, Walker.prototype) {

    constructor(oxygen, legs) {
        super(oxygen, legs);
    }

    walk() {
        if (LivingCreature.hasDied()) {
            throw new Error('Ta muertito');
        }

        Walker.walk();
        LivingCreature.consumeOxygen();


    }
}
