// * exports
// - default: class
// * constructor parameters
// - legs: the amount of legs the walker has
// * methods
// - getLegs : It returns the amount of legs (the ones received in the constructor)
// - getSteps: It returns the amount of steps done
// - walk    : It increments the amount of steps done

export default class Walker {

    static init(obj) {
        obj._legs = legs;
        obj._steps = 0;
    }

    constructor(legs) {
        this.constructor.init(this);
    }

    getLegs() {
        return this._legs;
    }

    getSteps() {
        return this._steps;
    }

    walk() {
        this._steps++;
    }

}
