var Human = function(type) {
  this.type = type || 'human';
};

Human.isHuman = function(human) {
  return human instanceof Human;
}

Human.prototype.breathe = function() {
  console.log('h-a-a-a-m');
}

var Zero = function(type, firstName, lastName) {
  Human.apply(this, arguments);
  this.firstName = firstName;
  this.lastName = lastName;
};

Zero.prototype = Object.create(Human.prototype); // 상속하는 부분
Zero.prototype.constructor = Zero; 
Zero.prototype.sayName = function() {
  this.breathe();
  console.log(this.firstName, this.lastName);
};
var oldZero = new Zero('human', 'Zero', 'Cho');
oldZero.sayName();
console.log(Human.isHuman(oldZero)); // true
