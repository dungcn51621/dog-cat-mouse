var Dog = require('./Dog');
var Cat = require('./Cat');
var Mouse = require('./Mouse');

var tom = new Cat();
var mouse = new Mouse('Mickey');
var dog = new Dog();

try{
	cat.eat(dog);
	console.log(cat);
}catch(error){
	console.log('Error while cat eating a dog');
}