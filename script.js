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

const petContainer = document.getElementById("petContainer");
const petNameInput = document.getElementById("petName");
const addPetButton = document.getElementById("addPetButton");

function displayPet(pet) {
    const petCard = document.createElement("div");
    petCard.className = "pet-card";

    const petDescription = document.createElement("h3");
    petDescription.textContent = pet.describe();

    const hungerLabel = document.createElement("p");
    hungerLabel.textContent = "Hunger: ";

    const hungerDisplay = document.createElement("span");
    hungerDisplay.textContent = pet.hunger;

    hungerLabel.appendChild(hungerDisplay);

    const feedButton = document.createElement("button");
    feedButton.textContent = "Feed Pet";

    feedButton.addEventListener("click", () => {
        pet.feed();
        hungerDisplay.textContent = pet.hunger;
    });

    petCard.appendChild(petDescription);
    petCard.appendChild(hungerLabel);
    petCard.appendChild(feedButton);

    petContainer.appendChild(petCard);
}

function addPet() {
    const name = petNameInput.value.trim();

    if (name === "") {
        alert("Please enter a pet name.");
        return;
    }

    const newPet = new Pet(name, "Pet");
    displayPet(newPet);

    petNameInput.value = "";
    petNameInput.focus();
}

addPetButton.addEventListener("click", addPet);

// Add two example pets when the page loads.
displayPet(new Pet("Sparky", "Dragon"));
displayPet(new Pet("Luna", "Cat"));