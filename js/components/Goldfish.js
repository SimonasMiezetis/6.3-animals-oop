import { Animal } from './Animal.js'

class Goldfish extends Animal{
    constructor(name, color, sound, grantsWishes) {
        super(name, color, sound)
        this.grantsWishes = grantsWishes;
    }

    makeWish() {
        if (this.grantsWishes === true) {
            console.log('I will make your wish come true');
        } else {
            console.log('I am not a magic Goldfish');
        }
        
    }
}

export { Goldfish }