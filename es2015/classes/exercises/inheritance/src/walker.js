// * exports
// - default: class
// * constructor parameters
// - legs: the amount of legs the walker has
// * methods
// - getLegs : It returns the amount of legs (the ones received in the constructor)
// - getSteps: It returns the amount of steps done
// - walk    : It increments the amount of steps done

class Walker {

    constructor(legs) {
        this._legs = legs;
        this._steps = 0;
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

export {
    Walker as default
}
