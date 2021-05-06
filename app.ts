// Union Types

// should work with numbers and string
function combine(a: number | string, b: number | string) {
  let result;

  if (typeof a === 'number' && typeof b === 'number') {
    result = a + b;
  } else {
    result = a.toString() + b.toString();
    return result;
  }
}

const combineAges = combine(30, 25);
console.log('combineAges: ', combineAges);

const combineNames = combine('Peter', 'Parker');
console.log('combineNames: ', combineNames);
