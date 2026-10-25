class Pet {
    constructor(name, type) {
        this.name = name;
        this.type = type;
        this.hunger = 50;
    }

    describe() {
        return `I am a ${this.type} named ${this.name}.`;
    }

    feed() {
        this.hunger -= 10;
    }
}

const pet1 = new Pet("Sparky", "Dragon");
const pet2 = new Pet("Luna", "Cat");

console.log(pet1.describe());
console.log(pet2.describe());

const hungerDisplay = document.getElementById("hunger");
const feedButton = document.getElementById("feedButton");

hungerDisplay.textContent = pet1.hunger;

feedButton.addEventListener("click", () => {
    pet1.feed();
    hungerDisplay.textContent = pet1.hunger;
});