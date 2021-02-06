import { Fish } from './Fish.js'

class Goldfish extends Fish{
    constructor(name, color, sound, canSwim, grantsWishes) {
        super(name, color, sound, canSwim)
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