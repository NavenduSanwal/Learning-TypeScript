// Union Types

// should work with numbers and string
function combine(
  a: number | string,
  b: number | string,
  resultConversion: 'as-number' | 'as-text'
) {
  let result;

  if ((typeof a === 'number' && typeof b === 'number') || resultConversion === 'as-number') {
    result = +a + +b;
  } else {
    result = a.toString() + b.toString();
  }

  // if (resultConversion === 'as-number') {
  //   return +result;
  // } else {
  //   return result.toString();
  // }

  return result;
}

const combineAges = combine(30, 25, 'as-number');
console.log('combineAges: ', combineAges);

const combineStringAges = combine('30', '25', 'as-number');
console.log('combineStringAges: ', combineStringAges);

const combineNames = combine('Peter', 'Parker', 'as-text');
console.log('combineNames: ', combineNames);
