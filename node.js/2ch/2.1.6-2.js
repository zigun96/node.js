class Human {
  constructor(type = 'human') {
    this.type = type;
  }

  static isHuman(human) {
    return human instanceof Human;
  }
  // 
  breathe() {
    console.log('h-a-a-a-m');
  }
}

class Zero extends Human {
  constructor(type, firstName, lastName) {
    super(type);
    this.firstName = firstName;
    this.lastName = lastName;
  }

  sayName() {
    super.breathe();
    console.log(this.firstName, this.lastName);
  }
}

const newZero = new Zero('human', 'Zero', 'Cho');
newZero.sayName();
console.log(Human.isHuman(newZero)); // true
