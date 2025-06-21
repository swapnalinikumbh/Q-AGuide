const jsPracticeData = [
  {
    id: 1,
    question: `push() `,
    answer: `Adds item(s) to the end of the array.`,
    example: `let arr = [1, 2];
arr.push(3);
console.log(arr); // Output: [1, 2, 3]`,
  },
  {
    id: 2,
    question: `pop() `,
    answer: `Removes the last item from the array.`,
    example: `let arr = [1, 2, 3];
arr.pop(); // [1, 2]
console.log(arr); // Output: [1, 2]`,
  },
  {
    id: 3,
    question: ` unshift() `,
    answer: `Adds item(s) to the beginning of the array.`,
    example: `let arr = [2, 3];
arr.unshift(1); // [1, 2, 3]
console.log(arr); // Output: [1, 2, 3]`,
  },
  {
    id: 4,
    question: `shift() `,
    answer: `Removes the first item from the array.`,
    example: `let arr = [1, 2, 3];
arr.shift(); // [2, 3]
console.log(arr); // Output: [2, 3]`,
  },
  {
    id: 5,
    question: ` forEach()`,
    answer: `Executes a function for each array item (no return).`,
    example: `[1, 2, 3].forEach((n) => console.log(n));
// Output: 1, 2, 3`,
  },
  {
    id: 6,
    question: `map()`,
    answer: `Creates a new array by applying a function to each item.`,
    example: `const result = [1, 2, 3].map((n) => n * 2); // [2, 4, 6]
console.log(result); // Output: [2, 4, 6]`,
  },
  {
    id: 7,
    question: `filter()`,
    answer: `Returns a new array with items that pass the condition.`,
    example: `const even = [1, 2, 3, 4].filter((n) => n % 2 === 0); // [2, 4]
console.log(even); // Output: [2, 4]`,
  },
  {
    id: 8,
    question: `reduce()`,
    answer: `Reduces array to a single value.`,
    example: `const sum = [1, 2, 3].reduce((acc, val) => acc + val, 0); // 6
console.log(sum); // Output: 6`,
  },
  {
    id: 9,
    question: `some()`,
    answer: `Returns true if any element passes the test.`,
    example: `[1, 2, 3].some((n) => n > 2); // true
console.log([1, 2, 3].some((n) => n > 2)); // Output: true`,
  },
  {
    id: 10,
    question: `every()`,
    answer: `Returns true if all elements pass the test.`,
    example: `[1, 2, 3].every((n) => n > 0); // true
console.log([1, 2, 3].every((n) => n > 0)); // Output: true`,
  },
  {
    id: 11,
    question: `find()`,
    answer: `Returns the first item that matches the condition.`,
    example: `[1, 2, 3].find((n) => n > 1); // 2
console.log([1, 2, 3].find((n) => n > 1)); // Output: 2`,
  },
  {
    id: 12,
    question: `findIndex()`,
    answer: `Returns the index of the first matching item.`,
    example: `[1, 2, 3].findIndex((n) => n > 1); // 1
console.log([1, 2, 3].findIndex((n) => n > 1)); // Output: 1`,
  },
  {
    id: 13,
    question: `sort()`,
    answer: `Sorts the array in-place.`,
    example: `[3, 1, 2].sort(); // [1, 2, 3]
console.log([3, 1, 2].sort()); // Output: [1, 2, 3]`,
  },
  {
    id: 14,
    question: ` reverse()`,
    answer: `Reverses the array in-place.`,
    example: `[1, 2, 3].reverse(); // [3, 2, 1]
console.log([1, 2, 3].reverse()); // Output: [3, 2, 1]`,
  },
  {
    id: 15,
    question: `splice()`,
    answer: `Adds/removes elements at a specific index.`,
    example: `let arr = [1, 2, 3];
arr.splice(1, 1, 9); // [1, 9, 3]
console.log(arr); // Output: [1, 9, 3]`,
  },
  {
    id: 16,
    question: `slice()`,
    answer: `Returns a shallow copy of a portion of the array.`,
    example: `[1, 2, 3].slice(1, 2); // [2]
console.log([1, 2, 3].slice(1, 2)); // Output: [2]`,
  },
  {
    id: 17,
    question: `concat()`,
    answer: `Joins two or more arrays.`,
    example: `[1].concat([2], [3]); // [1, 2, 3]
console.log([1].concat([2], [3])); // Output: [1, 2, 3]`,
  },
  {
    id: 18,
    question: `include()`,
    answer: `Checks if a value exists in the array.`,
    example: `[1, 2, 3].includes(2); // true
console.log([1, 2, 3].includes(2)); // Output: true`,
  },
  {
    id: 19,
    question: `indexOf()`,
    answer: `Returns first index of the value (or -1).`,
    example: `["a", "b", "c"].indexOf("b"); // 1
console.log(["a", "b", "c"].indexOf("b")); // Output: 1`,
  },
  {
    id: 20,
    question: `lastIndexOf()`,
    answer: `Returns last index of the value.`,
    example: `["a", "b", "a"].lastIndexOf("a"); // 2
console.log(["a", "b", "a"].lastIndexOf("a")); // Output: 2`,
  },
  {
    id: 21,
    question: `join()`,
    answer: `Converts array to string with a separator.`,
    example: `[1, 2, 3].join("-"); // "1-2-3"
console.log([1, 2, 3].join("-")); // Output: "1-2-3"`,
  },
  {
    id: 22,
    question: `toString()`,
    answer: `Converts array to comma-separated string.`,
    example: `[1, 2, 3].toString(); // "1,2,3"
console.log([1, 2, 3].toString()); // Output: "1,2,3"`,
  },
  {
    id: 23,
    question: `flat()`,
    answer: `Fills array with static values.`,
    example: `new Array(3).fill(0); // [0, 0, 0]
console.log(new Array(3).fill(0)); // Output: [0, 0, 0] `,
  },
  {
    id: 24,
    question: `at()`,
    answer: `Returns item at given index (supports negative index).`,
    example: `[10, 20, 30].at(-1); // 30
console.log([10, 20, 30].at(-1)); // Output: 30`,
  },
  {
    id: 25,
    question: `Array.isArray()`,
    answer: `Checks if a value is an array.`,
    example: `Array.isArray([1, 2]); // true
console.log(Array.isArray([1, 2])); // Output: true`,
  },
  {
    id: 26,
    question: `Array.from()`,
    answer: `Creates array from array-like or iterable object.`,
    example: `Array.from("abc"); // ["a", "b", "c"]
console.log(Array.from("abc")); // Output: ["a", "b", "c"]`,
  },
  {
    id: 27,
    question: `Array.of()`,
    answer: `Creates array from arguments.`,
    example: `Array.of(1, 2, 3); // [1, 2, 3]
console.log(Array.of(1, 2, 3)); // Output: [1, 2, 3]`,
  },
  {
    id: 28,
    question: `length`,
    answer: `Returns the number of characters in a string.  `,
    example: `"hello".length; // 5
console.log("hello".length); // Output: 5`,
  },
  {
    id: 29,
    question: `charAt(index)`,
    answer: `Returns the character at the specified index.`,
    example: `"hello".charAt(1); // "e"
console.log("hello".charAt(1)); // Output: "e"`,
  },
  {
    id: 30,
    question: `charCodeAt(index)`,
    answer: `Returns the Unicode of the character at the specified index.`,
    example: `"ABC".charCodeAt(0); // 65
console.log("ABC".charCodeAt(0)); // Output: 65`,
  },
  {
    id: 31,
    question: `toUpperCase()`,
    answer: `Converts to uppercase.`,
    example: `"hello".toUpperCase(); // "HELLO"
console.log("hello".toUpperCase()); // Output: "HELLO"`,
  },
  {
    id: 32,
    question: `toLowerCase()`,
    answer: `Converts to lowercase.`,
    example: `"HELLO".toLowerCase(); // "hello"
console.log("HELLO".toLowerCase()); // Output: "hello"`,
  },
  {
    id: 33,
    question: `includes(substring)`,
    answer: `Checks if a string contains the given substring.`,
    example: `"JavaScript".includes("Script"); // true
console.log("JavaScript".includes("Script")); // Output: true`,
  },
  {
    id: 34,
    question: `startsWith(substring)`,
    answer: `Checks if string starts with given substring.`,
    example: `"JavaScript".startsWith("Java"); // true
console.log("JavaScript".startsWith("Java")); // Output: true`,
  },
  {
    id: 35,
    question: `endsWith(substring)`,
    answer: `Checks if string ends with given substring.`,
    example: `"JavaScript".endsWith("Script"); // true
console.log("JavaScript".endsWith("Script")); // Output: true`,
  },
  {
    id: 36,
    question: `indexOf(substring)`,
    answer: `Returns the first index of substring or -1.`,
    example: `"banana".indexOf("a"); // 1
console.log("banana".indexOf("a")); // Output: 1`,
  },
  {
    id: 37,
    question: `lastIndexOf(substring)`,
    answer: `Returns the last index of substring or -1.`,
    example: `"banana".lastIndexOf("a"); // 5
console.log("banana".lastIndexOf("a")); // Output: 5`,
  },
  {
    id: 38,
    question: `match(regex)`,
    answer: `Matches string against a regex and returns result.`,
    example: `"abc123".match(/\d+/); // ["123"]
console.log("abc123".match(/\d+/)); // Output: ["123"]`,
  },
  {
    id: 39,
    question: `search(regex)`,
    answer: `Returns index of first match via regex or -1.`,
    example: `"abc123".search(/\d/); // 3
console.log("abc123".search(/\d/)); // Output: 3`,
  },
  {
    id: 40,
    question: `slice(start, end)`,
    answer: `Extracts part of the string (non-destructive).`,
    example: `"JavaScript".slice(0, 4); // "Java"
console.log("JavaScript".slice(0, 4)); // Output: "Java"`,
  },
  {
    id: 41,
    question: `substring(start, end)`,
    answer: `Similar to slice but doesn't support negative index.`,
    example: `"hello".substring(1, 4); // "ell"
console.log("hello".substring(1, 4)); // Output: "ell"`,
  },
  {
    id: 42,
    question: `substr(start, length) (deprecated)`,
    answer: `Extracts substring based on start and length.`,
    example: `"hello".substr(1, 3); // "ell"
console.log("hello".substr(1, 3)); // Output: "ell"`,
  },
  {
    id: 43,
    question: `replace(search, replacement)`,
    answer: `Replaces first match with replacement.`,
    example: `"cat".replace("c", "b"); // "bat"
console.log("cat".replace("c", "b")); // Output: "bat"`,
  },
  {
    id: 44,
    question: `replaceAll(search, replacement)`,
    answer: `Replaces all matches.`,
    example: `"1 2 3".replaceAll(" ", "-"); // "1-2-3"
console.log("1 2 3".replaceAll(" ", "-")); // Output: "1-2-3"`,
  },
  {
    id: 45,
    question: `trim()`,
    answer: `Removes whitespace from both ends. `,
    example: `"  hello  ".trim(); // "hello"
console.log("  hello  ".trim()); // Output: "hello"`,
  },
  {
    id: 46,
    question: `trimStart() or trimLeft()`,
    answer: `Removes leading whitespace.`,
    example: `"  hello".trimStart(); // "hello"
console.log("  hello".trimStart()); // Output: "hello"`,
  },
  {
    id: 47,
    question: `trimEnd() or trimRight()`,
    answer: `Removes trailing whitespace.`,
    example: `"hello  ".trimEnd(); // "hello"
console.log("hello  ".trimEnd()); // Output: "hello"`,
  },
  {
    id: 48,
    question: `padStart(length, char)`,
    answer: `Pads from the end.`,
    example: `"5".padEnd(3, "0"); // "500"
console.log("5".padEnd(3, "0")); // Output: "500"`,
  },
  {
    id: 49,
    question: `split(separator)`,
    answer: `Splits string into array based on separator.`,
    example: `"1,2,3".split(","); // ["1", "2", "3"]
console.log("1,2,3".split(",")); // Output: ["1", "2", "3"]`,
  },
  {
    id: 50,
    question: `concat(str2)`,
    answer: `Joins strings together.`,
    example: `"Hello".concat(" ", "World"); // "Hello World"
console.log("Hello".concat(" ", "World")); // Output: "Hello World"`,
  },
  {
    id: 51,
    question: `repeat(n)`,
    answer: `Repeats the string n times.`,
    example: `"ha".repeat(3); // "hahaha"
console.log("ha".repeat(3)); // Output: "hahaha"`,
  },
  {
    id: 52,
    question: `Template literals (backticks \` \`)`,
    answer: `Used to interpolate variables in strings.`,
    example: `const name = "John";
console.log(\`Hello, \${name}!\`); // Output: Hello, John!`,
  },
  {
    id: 53,
    question: `var + setTimeout (closure issue)`,
    answer: `var is function scoped, not block scoped.
By the time setTimeout runs (after 100ms), the loop is over, and i = 5.
All 5 callbacks reference the same i, which is now 5.`,
    example: `for (var i = 0; i < 5; i++) {
setTimeout(() => console.log(i), 100);
}
// Output: 5, 5, 5, 5, 5`,
  },
  {
    id: 54,
    question: `let + setTimeout`,
    answer: `let is block scoped, so a new i is created for each iteration.
Each setTimeout captures the correct value of i at that time.`,
    example: `for (let i = 0; i < 5; i++) {
setTimeout(() => console.log(i), 100);
}
//output: 0, 1, 2, 3, 4`,
  },
  {
    id: 55,
    question: `var vs let in block scope`,
    answer: `var x is function scoped, so it's accessible outside the block.
let y is block scoped, so it cannot be accessed outside the { }.`,
    example: `{ 
  var x = 1; 
  let y = 2; 
}
console.log(x); // ?
console.log(y); // ?
// Output: 1, ReferenceError: y is not defined`,
  },
  {
    id: 56,
    question: `Function Declaration Hoisting`,
    answer: `Function declarations are hoisted entirely.
So sayHi() can be called before it's defined.`,
    example: `sayHi();
function sayHi() {
  console.log("Hi!");
}
// Output: Hi!`,
  },
  {
    id: 57,
    question: `Function Expression with var`,
    answer: `var greet is hoisted as undefined (not the function).
At greet() call, greet === undefined.
So calling it throws: TypeError: undefined is not a function`,
    example: `greet(); 
var greet = function() {
  console.log("Hello");
}
//TypeError: greet is not a function`,
  },
  {
    id: 58,
    question: ``,
    answer: ``,
    example: ``,
  },
];
export default jsPracticeData;
