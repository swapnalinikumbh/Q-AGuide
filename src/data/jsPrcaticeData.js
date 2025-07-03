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
    question: `fill()`,
    answer: `Fills array with static values.`,
    example: `new Array(3).fill(0); // [0, 0, 0]
console.log(new Array(3).fill(0)); // Output: [0, 0, 0] `,
  },
  {
    id: 24,
    question: `Flat()`,
    answer: `Flattens nested arrays to a specified depth.`,
    example: `[1, [2, [3]]].flat(2); // [1, 2, 3]
console.log([1, [2, [3]]].flat(2)); // Output: [1, 2, 3]`,
  },
  {
    id: 25,
    question: `at()`,
    answer: `Returns item at given index (supports negative index).`,
    example: `[10, 20, 30].at(-1); // 30
console.log([10, 20, 30].at(-1)); // Output: 30`,
  },
  {
    id: 26,
    question: `Array.isArray()`,
    answer: `Checks if a value is an array.`,
    example: `Array.isArray([1, 2]); // true
console.log(Array.isArray([1, 2])); // Output: true`,
  },
  {
    id: 27,
    question: `Array.from()`,
    answer: `Creates array from array-like or iterable object.`,
    example: `Array.from("abc"); // ["a", "b", "c"]
console.log(Array.from("abc")); // Output: ["a", "b", "c"]`,
  },
  {
    id: 28,
    question: `Array.of()`,
    answer: `Creates array from arguments.`,
    example: `Array.of(1, 2, 3); // [1, 2, 3]
console.log(Array.of(1, 2, 3)); // Output: [1, 2, 3]`,
  },
  {
    id: 29,
    question: `length`,
    answer: `Returns the number of characters in a string.  `,
    example: `"hello".length; // 5
console.log("hello".length); // Output: 5`,
  },
  {
    id: 30,
    question: `charAt(index)`,
    answer: `Returns the character at the specified index.`,
    example: `"hello".charAt(1); // "e"
console.log("hello".charAt(1)); // Output: "e"`,
  },
  {
    id: 31,
    question: `charCodeAt(index)`,
    answer: `Returns the Unicode of the character at the specified index.`,
    example: `"ABC".charCodeAt(0); // 65
console.log("ABC".charCodeAt(0)); // Output: 65`,
  },
  {
    id: 32,
    question: `toUpperCase()`,
    answer: `Converts to uppercase.`,
    example: `"hello".toUpperCase(); // "HELLO"
console.log("hello".toUpperCase()); // Output: "HELLO"`,
  },
  {
    id: 33,
    question: `toLowerCase()`,
    answer: `Converts to lowercase.`,
    example: `"HELLO".toLowerCase(); // "hello"
console.log("HELLO".toLowerCase()); // Output: "hello"`,
  },
  {
    id: 34,
    question: `includes(substring)`,
    answer: `Checks if a string contains the given substring.`,
    example: `"JavaScript".includes("Script"); // true
console.log("JavaScript".includes("Script")); // Output: true`,
  },
  {
    id: 35,
    question: `startsWith(substring)`,
    answer: `Checks if string starts with given substring.`,
    example: `"JavaScript".startsWith("Java"); // true
console.log("JavaScript".startsWith("Java")); // Output: true`,
  },
  {
    id: 36,
    question: `endsWith(substring)`,
    answer: `Checks if string ends with given substring.`,
    example: `"JavaScript".endsWith("Script"); // true
console.log("JavaScript".endsWith("Script")); // Output: true`,
  },
  {
    id: 37,
    question: `indexOf(substring)`,
    answer: `Returns the first index of substring or -1.`,
    example: `"banana".indexOf("a"); // 1
console.log("banana".indexOf("a")); // Output: 1`,
  },
  {
    id: 38,
    question: `lastIndexOf(substring)`,
    answer: `Returns the last index of substring or -1.`,
    example: `"banana".lastIndexOf("a"); // 5
console.log("banana".lastIndexOf("a")); // Output: 5`,
  },
  {
    id: 39,
    question: `match(regex)`,
    answer: `Matches string against a regex and returns result.`,
    example: `"abc123".match(/\d+/); // ["123"]
console.log("abc123".match(/\d+/)); // Output: ["123"]`,
  },
  {
    id: 40,
    question: `search(regex)`,
    answer: `Returns index of first match via regex or -1.`,
    example: `"abc123".search(/\d/); // 3
console.log("abc123".search(/\d/)); // Output: 3`,
  },
  {
    id: 41,
    question: `slice(start, end)`,
    answer: `Extracts part of the string (non-destructive).`,
    example: `"JavaScript".slice(0, 4); // "Java"
console.log("JavaScript".slice(0, 4)); // Output: "Java"`,
  },
  {
    id: 42,
    question: `substring(start, end)`,
    answer: `Similar to slice but doesn't support negative index.`,
    example: `"hello".substring(1, 4); // "ell"
console.log("hello".substring(1, 4)); // Output: "ell"`,
  },
  {
    id: 43,
    question: `substr(start, length) (deprecated)`,
    answer: `Extracts substring based on start and length.`,
    example: `"hello".substr(1, 3); // "ell"
console.log("hello".substr(1, 3)); // Output: "ell"`,
  },
  {
    id: 44,
    question: `replace(search, replacement)`,
    answer: `Replaces first match with replacement.`,
    example: `"cat".replace("c", "b"); // "bat"
console.log("cat".replace("c", "b")); // Output: "bat"`,
  },
  {
    id: 45,
    question: `replaceAll(search, replacement)`,
    answer: `Replaces all matches.`,
    example: `"1 2 3".replaceAll(" ", "-"); // "1-2-3"
console.log("1 2 3".replaceAll(" ", "-")); // Output: "1-2-3"`,
  },
  {
    id: 46,
    question: `trim()`,
    answer: `Removes whitespace from both ends. `,
    example: `"  hello  ".trim(); // "hello"
console.log("  hello  ".trim()); // Output: "hello"`,
  },
  {
    id: 47,
    question: `trimStart() or trimLeft()`,
    answer: `Removes leading whitespace.`,
    example: `"  hello".trimStart(); // "hello"
console.log("  hello".trimStart()); // Output: "hello"`,
  },
  {
    id: 48,
    question: `trimEnd() or trimRight()`,
    answer: `Removes trailing whitespace.`,
    example: `"hello  ".trimEnd(); // "hello"
console.log("hello  ".trimEnd()); // Output: "hello"`,
  },
  {
    id: 49,
    question: `padStart(length, char)`,
    answer: `Pads from the end.`,
    example: `"5".padEnd(3, "0"); // "500"
console.log("5".padEnd(3, "0")); // Output: "500"`,
  },
  {
    id: 50,
    question: `split(separator)`,
    answer: `Splits string into array based on separator.`,
    example: `"1,2,3".split(","); // ["1", "2", "3"]
console.log("1,2,3".split(",")); // Output: ["1", "2", "3"]`,
  },
  {
    id: 51,
    question: `concat(str2)`,
    answer: `Joins strings together.`,
    example: `"Hello".concat(" ", "World"); // "Hello World"
console.log("Hello".concat(" ", "World")); // Output: "Hello World"`,
  },
  {
    id: 52,
    question: `repeat(n)`,
    answer: `Repeats the string n times.`,
    example: `"ha".repeat(3); // "hahaha"
console.log("ha".repeat(3)); // Output: "hahaha"`,
  },
  {
    id: 53,
    question: `Template literals (backticks \` \`)`,
    answer: `Used to interpolate variables in strings.`,
    example: `const name = "John";
console.log(\`Hello, \${name}!\`); // Output: Hello, John!`,
  },
  {
    id: 54,
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
    id: 55,
    question: `let + setTimeout`,
    answer: `let is block scoped, so a new i is created for each iteration.
Each setTimeout captures the correct value of i at that time.`,
    example: `for (let i = 0; i < 5; i++) {
setTimeout(() => console.log(i), 100);
}
//output: 0, 1, 2, 3, 4`,
  },
  {
    id: 56,
    question: `var vs let in block scope`,
    answer: `var x is function scoped, so it's accessible outside the block.
let y is block scoped, so it cannot be accessed outside the { }.`,
    example: `{ 
  var x = 1; 
  let y = 2; 
}
console.log(x); // 1
console.log(y); // ReferenceError: y is not defined`,
  },
  {
    id: 57,
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
    id: 58,
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
    id: 59,
    question: `Promise with setTimeout`,
    answer: `This is a Promise that simulates an async operation using setTimeout. 
If successful, it resolves with 'done'. We handle the response using .then() and errors using .catch().`,
    example: `const getData = () => 
  new Promise((res, rej) => {
    setTimeout(() => res("done"), 1000);
  });

getData().then(console.log).catch(console.error);
// Output: done (after 1 second)`,
  },
  {
    id: 60,
    question: `Output of new Array(123) vs new Array(1.2)`,
    answer: `new Array(n) works only when n is a positive integer. If a non-integer like 1.2 is passed, JavaScript throws a RangeError because fractional lengths are not valid for array size."`,
    example: `const arr1 = new Array(123);
console.log(arr1.length); // 👉 123

const arr2 = new Array(1.2); // ❌ Error
console.log(arr2.length);`,
  },
  {
    id: 61,
    question: `find repeated letters/char in a string`,
    answer: `toLowerCase() ensures case-insensitivity
/[a-z]/.test(char) filters only alphabets
Characters like 2, !, space are ignored
Only letters repeated more than once are shown`,
    example: `const inputStr = "hello World!22345".toLowerCase();
const count = {};
const repeated = [];

for (let char of inputStr) {
  if (!/[a-z]/.test(char)) continue; // only letters

  count[char] = (count[char] || 0) + 1;
}

for (let key in count) {
  if (count[key] > 1) {
    repeated.push(key);
  }
}

console.log("Repeated letters:", repeated);
// Output: Repeated letters: [ 'l', 'o' ]`,
  },
  {
    id: 62,
    question: `find the sum of values in a nested object`,
    answer: `The object is nested like a linked list:
4 → 6 → 10 → 9
The function loops through obj, adds each value, and moves to obj.data.
Ends when obj becomes undefined.`,
    example: `const obj = {
  value: 4,
  data: {
    value: 6,
    data: {
      value: 10,
      data: {
        value: 9
      }
    }
  }
};

function sumValues(obj) {
  let sum = 0;
  while (obj) {
    sum += obj.value;
    obj = obj.data;
  }
  return sum;
}

console.log(sumValues(obj)); // 👉 29`,
  },
  {
    id: 63,
    question: `Give var, let and const examples in a function`,
    answer: `var is function-scoped and can be redeclared, so changes inside blocks affect the outer variable. 
    But let and const are block-scoped, so their values inside blocks do not affect the outer scope.`,
    example: `function demo() {
  var a = 1;
  let b = 2;
  const c = 3;

  if (true) {
    var a = 10;   // ✅ re-declares & overwrites outer 'var a'
    let b = 20;   // ✅ block-scoped; does NOT affect outer 'let b'
    // c = 30;    // ❌ Uncommenting this will cause error (const cannot be reassigned)
  }

  console.log(a); // 10
  console.log(b); // 2
  console.log(c); // 3
}
demo();`,
  },
  {
    id: 64,
    question: `fibonacci series using an array`,
    answer: `This generates the first n numbers of the Fibonacci series using an array. 
    It starts with [0, 1], then builds the rest by adding the last two elements.`,
    example: `function fibonacci(n){
  let fibSeries = [0, 1];

  for(let i = 2; i < n; i++){
    fibSeries[i] = fibSeries[i - 1] + fibSeries[i - 2];
  }

  return fibSeries.slice(0, n);
}

const n = 10;
console.log(fibonacci(n));
// Output: [0, 1, 1, 2, 3, 5, 8, 13, 21, 34]`,
  },
  {
    id: 65,
    question: `Palindrome`,
    answer: `A word, number, or phrase that reads the same forward and backward.
    To check for a palindrome, we clean the string (remove spaces/symbols), reverse it, and compare it to the original.`,
    example: `function isPalindrome(str) {
  const clean = str.toLowerCase().replace(/[^a-z0-9]/g, "");
  const reversed = clean.split("").reverse().join("");
  return clean === reversed;
}

// Test
console.log(isPalindrome("madam"));     // true
console.log(isPalindrome("hello"));     // false
console.log(isPalindrome("A man, a plan, a canal, Panama")); // true`,
  },
  {
    id: 66,
    question: `callback function example`,
    answer: `Callbacks use functions`,
    example: `function doTask(callback) {
  console.log("Start");
  setTimeout(() => {
    console.log("Done");
    callback();
  }, 1000);
}

doTask(() => {
  console.log("Callback finished");
});
// Output:
// Start
// Done
// Callback finished`,
  },
  {
    id: 67,
    question: `promise example`,
    answer: ` Promises provide cleaner syntax for chaining`,
    example: `function doTask() {
  return new Promise((resolve) => {
    console.log("Start");
    setTimeout(() => {
      console.log("Done");
      resolve();
    }, 1000);
  });
}

doTask().then(() => {
  console.log("Promise resolved");
});
// Output:
// Start
// Done
// Promise resolved`,
  },
  {
    id: 68,
    question: `async/Await example`,
    answer: `async/Await makes async code look like sync for better readability.`,
    example: `function doTask() {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve("Done");
    }, 1000);
  });
}

async function run() {
  console.log("Start");
  const result = await doTask();
  console.log(result); // "Done"
  console.log("Async function finished");
}

run();
// Output:
// Start
// Done
// Async function finished`,
  },
  {
    id: 69,
    question: `reduce() example`,
    answer: `reduce() is used to combine all elements of an array into a single value — such as sum, product, or even a new object or array.
    reduce() adds up all elements in the array.
acc is the accumulator (starts at 0).
current is the current item in the loop.`,
    example: `const numbers = [1, 2, 3, 4, 5];
const sum = numbers.reduce((acc, current) => acc + current, 0);
console.log(sum); // 👉 15`,
  },
  {
    id: 70,
    question: `Output of delete x, x=3 in a function`,
    answer: ``,
    example: `var x =1;
 var output = (function(){
   delete x;
   return x;
 })();
 console.log(x) 
// Output: 1
    
    const x =1;
 var output = (function(){
   x=3; // ← ⚠️ Trying to reassign a 'const'
   return x;
 });
 console.log(x)
 // Output: 1`,
  },
  {
    id: 71,
    question: `accessing object properties using dot and bracket notation`,
    answer: ``,
    example: `const person = {
  name: "Leo",
  age: 30,
  occupationL: "Software Engineer",
  address: {
    street: "123 main st",
    city: "Pune",
    state: "MH",
    zip: "411038"
  }
};

//Dot notation — clean & readable
console.log(person.age);                // 👉 30
console.log(person.address.city);      // 👉 "Pune"

Bracket notation — when key is a string or variable
console.log(person['age']);            // 👉 30
console.log(person['address']['city']); // 👉 "Pune"

for (const key in person) {
 if (person[key] === 30) {
  console.log(\`Key: \${key}, Value: \${person[key]}\`);
  }
}
// Output: Key: age, Value: 30`,
  },
  {
    id: 72,
    question: `for...in vs for...of`,
    answer: `for...in is used to loop through object keys, and for...of is used to loop through iterable values like arrays or strings.`,
    example: `const obj = {a:1, b:2, c:3};
for(const key in obj) {
  console.log(key);
}
// Output: a, b, c

for(const value of obj){
  console.log(value);
}
/ Output: TypeError: obj is not iterable

const arr = [1, 3, 5];

for(const index in arr){
  console.log(index);
}
// Output: 0, 1, 2

for(const value of arr){
  console.log(value);
}
// Output: 1, 3, 5`,
  },
  {
    id:73,
    question:`Print names of people with salary > 10000`,
    answer:`filter(person => person.sal > 10000) → filters only those with salary > 10000
forEach(person => console.log(person.name)) → prints their names`,
    example:`const sal = [
  { name: 'Leo', sal: 9000 },
  { name: 'John', sal: 12000 },
  { name: 'Ava', sal: 8000 }
];

sal
  .filter(person => person.sal > 10000)
  .forEach(person => console.log(person.name));
// Output: John`,
  },

  {
    id:74,
    question:`provide me the city that he is currently in with the names of the people`,
    answer:`This code extracts each person's current city from an array of people with multiple locations.
reduce() loops through each person (curr) and accumulates results in acc (initially an empty array).
Inside each iteration, it uses .find() to get the location object where isCurrent is true.
If such a location exists, it pushes an object with the person's name and their currentCity to the result.`,
    example:`const arr = [
  {
    name: 'swaransh',
    location: [
      { city: "pune", isCurrent: true },
      { city: "Sambhajinagar", isCurrent: false }
    ]
  },
  {
    name: "varad",
    location: [
      { city: "pune", isCurrent: false },
      { city: "sangli", isCurrent: true }
    ]
  }
];

const res = arr.reduce((acc, curr) => {
  const current = curr.location.find(loc => loc.isCurrent);
  if (current) {
    acc.push({ name: curr.name, currentCity: current.city });
  }
  return acc;
}, []);

console.log(res);
  // Output:  [
  { name: 'swaransh', currentCity: 'pune' },
  { name: 'varad', currentCity: 'sangli' }
]
`,
  }, {
    id: 75,
    question: `output of the following code`,
    answer: ` The code merges two objects using the spread operator.
If a property exists in both objects, the one from the second object overwrites the first.
This is useful for combining data from different sources or updating properties without modifying the original objects.`,
    example: `const user = {
  name: 'Alex',
  address: '15th Park Avenue',
  age: 43
};

const department = {
  name: 'userName',
  id: '001',
  Shift: 'Morning'
};

const merged = {
  ...user,
  ...department
};

console.log(merged);
// Output: {
// name: 'userName',  // 'userName' overwrites 'Alex' 
// address: '15th Park Avenue',
// age: 43, // 'age' is not overwritten
// id: '001', // 'id' is added from department
// Shift: 'Morning'
// }
// Note: If 'name' in department was not 'userName', it would have been `
  }
];
export default jsPracticeData;
