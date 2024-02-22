class Animal {
  name = null;
  age = null;

  constructor(name, age) {
    this.name = name;
    this.age = age;
  }

  getName() {
    return this.name;
  }

  setName(newName) {
    this.name = newName;
  }

  getAge() {
    return this.age;
  }

  setAge(age) {
    this.age = age;
  }

  eat() {}
  hail() {}
}

class Cat extends Animal {
  species = null;

  constructor(name, age, species) {
    super(name, age);
    this.species = species;
  }

  getSpecies() {
    return this.species;
  }

  setSpecies(species) {
    this.species = species;
  }

  mission() {
    console.log("Sứ mệnh của tôi là bắt chuột!!");
  }

  eat() {
    console.log("Tôi ăn cá!");
  }

  hail() {
    console.log("Meo Meo");
  }
}

class Dog extends Animal {
  species = null;

  constructor(name, age, species) {
    super(name, age);
    this.species = species;
  }

  getSpecies() {
    return this.species;
  }

  setSpecies(species) {
    this.species = species;
  }

  mission() {
    console.log("Sứ mệnh của tôi là giữ nhà!!");
  }

  eat() {
    console.log("Tôi ăn thịt!");
  }

  hail() {
    console.log("Gâu gâu");
  }
}

const tom = new Cat("Tom", 2, "England");
console.log("age is:", tom.getAge());
console.log("species is:", tom.getSpecies());
console.log("name is:", tom.getName());
tom.mission();
tom.eat();
tom.hail();
