function add(a: number, b: number) {
  // Return type is inferred as number
  return a + b;
}

function printResult(num: number): void {
  // similarly, void is also inferred
  console.log('num: ', num);
}

printResult(add(5, 12));

// Functions as Types

let combineValues: (a: number, b: number) => number;

combineValues = add;
// combineValues = 5; // Valid, if combineValues type is any, so TS will pass it, but it will fail in runtime since combineValues is no longer a function
// combineValues = printResult; // Valid, if combineValues type is Function, but will fail logic

console.log(combineValues(10, 10));
