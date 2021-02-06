import { Fish } from './Fish.js'

class Nemo extends Fish {
    constructor(name, color, sound, canSwim) {
        super(name, color, sound, canSwim);
    }
}

export { Fish }