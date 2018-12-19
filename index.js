var Dog = require('./Dog');
var Cat = require('./Cat');

var tom = new Cat();
var dog = new Dog('Tom');

dog.eat(tom);
console.log(dog);