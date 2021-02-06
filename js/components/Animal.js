class Animal {
    constructor (name, color, sound) {
        this.name = name;
        this.color = color;
        this.sound = sound;
    }

    voice() {
        console.log(this.sound);
    }

    introduce() {
        console.log(`Hi mane is ${this.name}, my color is ${this.color}, and I speak like this: ${this.sound}!`);
    }
}

export { Animal }