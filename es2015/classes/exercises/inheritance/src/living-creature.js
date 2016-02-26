// * exports
// - default: class
// * constructor parameters
// - oxygen: initial amount of oxygen
// * methods
// - getRemainingOxygen: It returns the amount of remaining oxygen
// - breath            : It increments the amount of remaining oxygen
// - consumeOxygen     : It decrements the amount of remaining oxygen
// - hasDied           : It returns true if the amount of oxygen is zero and false otherwise

export default class LivingCriature {

    static init(obj) {
        this._oxygen = oxygen;
    }

    constructor(oxygen) {
        if (isNaN(oxygen)) {
            throw new Error('Oxygen is not a number');
        }

        if (oxygen < 0) {
            throw new Error('Oxygen is less than zero');
        }
        this.constructor.init(this);
    }

    getRemainingOxygen() {
        return this._oxygen;
    }

    breath() {
        if (this.hasDied()) {
            throw new Error('Oxygen is not a number');
        }
        this._oxygen++;
    }

    consumeOxygen() {
        if (this.hasDied()) {
            throw new Error('Oxygen is not a number');
        }
        this._oxygen--;
    }

    hasDied() {
        return this._oxygen === 0;
    }

}
