// Error since object doesn't specify the type

// const person: object = {
//   name: 'Peter Parker',
//   age: 20,
// };

// console.log('person: ', person.name);
// console.log('person: ', person.nickname); // Property 'name' does not exist on type 'object'.

// Correct
const person: {
  name: string;
  age: number;
} = {
  name: 'Peter Parker',
  age: 20,
};

console.log('person: ', person.name);
