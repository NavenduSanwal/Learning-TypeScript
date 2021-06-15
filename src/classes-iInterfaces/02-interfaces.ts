interface Named {
  readonly name?: string;
  outputName?: string;
}

interface Greetable extends Named {
  greet(phrase: string): void;
}

// can inherit from only 1 class, but can implements multiple interfaces
// interfaces are often used to share functionality amongst different classes
// It's a bit like working with abstract class system for the difference being that an interface has no
// implementation details at all, whereas abstract classes can be a mixture of you have to overwrite this parts and I have a concrete implementation parts.
class Person implements Greetable {
  name?: string; // private, public are not allowed in interface
  age = 30;

  constructor(n?: string) {
    if (n) {
      this.name = n;
    }
  }

  greet(phrase?: string) {
    if (this.name) {
      console.log(phrase + ' ' + this.name);
    } else {
      console.log('Hi!');
    }
  }
}

// use interface as a type checking
let user1: Greetable; // Greetable also works since Person implements Greetable, therefore it will to comply with the interface

user1 = new Person('John');
// user1.name = 'Jane'; // gives ts error

user1.greet('Hi there, I am');

let user2 = new Person();
user2.greet();

// Interface as function

// type AddFn = (a: number, b: number) => number;
interface AddFn {
  // could be anonymous
  // COlon required instead of arrow
  (a: number, b: number): number;
}

let add: AddFn;

// can it have less than 2 params? not giving error??
add = (n1: number, n2: number) => n1 + n2;
