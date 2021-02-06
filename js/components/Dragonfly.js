import { Bird } from './Bird.js'

class Dragonfly extends Bird {
    constructor(name, color, sound, wingsCount, canFly) {
        super(name, color, sound, wingsCount, canFly)
        this.imposter = true;
    }
}

export { Dragonfly }