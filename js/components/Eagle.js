import { Bird } from './Bird.js'

class Eagle extends Bird {
    constructor(name, color, sound, wingsCount, canFly) {
        super(name, color, sound, wingsCount, canFly)
    }
}

export { Eagle }