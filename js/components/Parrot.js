import { Bird } from './Bird.js'

class Parrot extends Bird {
    constructor(name, color, sound, wingsCount, canFly) {
        super(name, color, sound, wingsCount, canFly)
    }
}

export { Parrot }