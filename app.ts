// Unknown Type

let userInput: unknown;
let userName: string;

userInput = 5;
userInput = 'Peter'; // works if type is unknown

// userName = userInput; // Fails if type is unknown, pass if type is any

if (typeof userInput === 'string') userName = userInput; // with unknown type, TS requires extra explicit type checks in code

// Never Type
// if some error is thrown or on infinite loop

function generateError(message: string, code: number): never {
  // on hover, inferred type is void, a bug
  throw { message: message, errorCode: code };
}

generateError('Not Found', 404);
