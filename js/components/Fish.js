import { Animal } from './Animal.js'

class Fish extends Animal{
    constructor(name, color, sound, canSwim) {
        super(name, color, sound)
        this.canSwim = canSwim;
    }

    swimAway() {
        console.log('I am swimming away');
    }
}

export { Fish }