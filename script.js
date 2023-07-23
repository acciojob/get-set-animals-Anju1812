class Animal {
  constructor(species) {
    this._species = species;
  }

  // Getter for species
  get species() {
    return this._species;
  }

  // Method to make a sound
  makeSound() {
    console.log("Some generic sound");
  }
}

class Cat extends Animal {
  constructor(species) {
    // Call the parent class (Animal) constructor
    super(species);
  }

  // Method specific to Cat class
  purr() {
    console.log("purr");
  }

  // Override the makeSound() method of the parent class
  makeSound() {
    console.log("Meow!");
  }
}

class Dog extends Animal {
  constructor(species) {
    // Call the parent class (Animal) constructor
    super(species);
  }

  // Method specific to Dog class
  bark() {
    console.log("woof");
  }

  // Override the makeSound() method of the parent class
  makeSound() {
    console.log("Woof!");
  }
}

// Example usage:
const genericAnimal = new Animal("Unknown");
console.log("Species:", genericAnimal.species); // Output: Species: Unknown
genericAnimal.makeSound(); // Output: Some generic sound

const cat = new Cat("Felis catus");
console.log("Species:", cat.species); // Output: Species: Felis catus
cat.makeSound(); // Output: Meow!
cat.purr(); // Output: purr

const dog = new Dog("Canis lupus familiaris");
console.log("Species:", dog.species); // Output: Species: Canis lupus familiaris
dog.makeSound(); // Output: Woof!
dog.bark(); // Output: woof

// Do not change the code below this line
window.Animal = Animal;
window.Dog = Dog;
window.Cat = Cat;
