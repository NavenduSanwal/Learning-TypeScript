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
  hobbies: string[];
  role: [number, string];
} = {
  name: 'Peter Parker',
  age: 20,
  hobbies: ['crawling', 'slinging'],
  role: [2, 'photographer'],
};

person.role.push('superhero'); // Valid, but not necessarily logical, type inference is not helpful here
// person.role[1] = 10; // Valid, but not necessarily logical, type inference is not helpful here
// TUPLE to the rescue.....
// role: [number, string];

person.role.push('superhero'); // Still valid, push is allowed in tuples (exception), since tuple length is still enforceable, see below
// person.role = [];
// person.role = [0];
// person.role = [0, 'photographer', 'superhero'];
// person.role[1] = 10; // Invalid, Type 'number' is not assignable to type 'string'.

let favoriteActivities: any[];
// favoriteActivities = 'Sports'; // Type 'string' is not assignable to type 'string[]'.
favoriteActivities = ['Sports', 1];
// favoriteActivities = 1; // Since[] of any, it still gives error | Type 'number' is not assignable to type 'any[]'.

console.log('person: ', person.name);

for (const hobby of person.hobbies) {
  console.log('hobby: ', hobby.toUpperCase());
  // console.log('hobby: ', hobby.map()); // Property 'map' does not exist on type 'string'.
}

// ENUM

enum Role {
  ADMIN = 5,
  AUTHOR,
  READ_ONLY,
}

const person1 = {
  name: 'Peter Parker',
  age: 20,
  hobbies: ['crawling', 'slinging'],
  role: Role.AUTHOR,
};

if (person1.role === Role.ADMIN) {
  console.log('is admin');
}
