interface Greetable {
  readonly name: string;
  greet(phrase: string): void;
}

// can inherit from only 1 class, but can implements multiple interfaces
// interfaces are often used to share functionality amongst different classes
// It's a bit like working with abstract class system for the difference being that an interface has no
// implementation details at all, whereas abstract classes can be a mixture of you have to overwrite this parts and I have a concrete implementation parts.
class Person implements Greetable {
  name: string; // private, public are not allowed in interface
  age = 30;

  constructor(n: string) {
    this.name = n;
  }

  greet(phrase: string) {
    console.log(phrase + ' ' + this.name);
  }
}

// use interface as a type checking
let user1: Greetable; // Greetable also works since Person implements Greetable, therefore it will to comply with the interface

user1 = new Person('John');
// user1.name = 'Jane'; // gives ts error

user1.greet('Hi there, I am');
