interface Person {
  name: string;
  age: number;
  greet(phrase: string): void;
}

// use interface as a type checking
let user1: Person;

user1 = {
  name: 'John',
  age: 20,
  greet(phrase: string) {
    console.log(phrase + ' ' + this.name);
  },
};

user1.greet('Hi there, I am');
