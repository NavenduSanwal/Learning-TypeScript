// Error since object doesn't specify the type

// const person: object = {
//   name: 'Peter Parker',
//   age: 20,
// };

// console.log('person: ', person.name);
// console.log('person: ', person.nickname); // Property 'name' does not exist on type 'object'.

// Correct
const person = {
  name: 'Peter Parker',
  age: 20,
  hobbies: ['crawling', 'slinging'],
};

let favoriteActivities: string[];
// favoriteActivities = 'Sports'; // Type 'string' is not assignable to type 'string[]'.
favoriteActivities = ['Sports'];

console.log('person: ', person.name);

for (const hobby of person.hobbies) {
  console.log('hobby: ', hobby.toUpperCase());
  // console.log('hobby: ', hobby.map()); // Property 'map' does not exist on type 'string'.
}
