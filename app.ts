function add(a: number, b: number) {
  // Return type is inferred as number
  return a + b;
}

function print(num: number): void {
  // similarly, void is also inferred
  console.log('num: ', num);
}

print(add(5, 12));
