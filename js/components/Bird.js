import { Animal } from './Animal.js'

class Bird extends Animal{
    constructor(name, color, sound, wingsCount, canFly) {
        super(name, color, sound)
        this.wingsCount = wingsCount;
        this.canFly = canFly;
    }

    flyAway() {
        if (this.canFly = true) {
            console.log('Flying away');
        } else {
            console.log('I can not fly away');
        }
    }
}

export { Bird }