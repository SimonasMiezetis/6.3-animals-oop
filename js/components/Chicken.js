import { Bird } from './Bird.js'

class Chicken extends Bird {
    constructor(name, color, sound, wingsCount, canFly) {
        super(name, color, sound, wingsCount, canFly)
    }
}

export { Chicken }