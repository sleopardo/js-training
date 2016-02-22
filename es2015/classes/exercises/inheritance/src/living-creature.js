// * exports
// - default: class
// * constructor parameters
// - oxygen: initial amount of oxygen
// * methods
// - getRemainingOxygen: It returns the amount of remaining oxygen
// - breath            : It increments the amount of remaining oxygen
// - consumeOxygen     : It decrements the amount of remaining oxygen
// - hasDied           : It returns true if the amount of oxygen is zero and false otherwise

class LivingCriature {

    constructor (oxygen) {
        this._oxygen = oxygen;
    }

    getRemainingOxygen() {
        return this._oxygen;
    }

    breath() {
        this._oxygen++;
    }

    consumeOxygen() {
        this._oxygen--;
    }

    hasDied() {
        return this._oxygen === 0 && false;
    }
}

export {
    LivingCriature as default
}
