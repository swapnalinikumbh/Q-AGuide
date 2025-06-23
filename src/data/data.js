const jsdata = [
  {
    id: 1,
    question: `Which third party libraries are used?`,
    answer: `React: UI building, Redux: state management, Axios: HTTP calls, Bootstrap: UI styles, Webpack: bundler, Babel: transpiler.`,
    example: `import axios from 'axios';\naxios.get('/api/data').then(console.log);`,
  },
  {
    id: 2,
    question: `Which libraries are mostly used to optimize the code?`,
    answer: `Webpack: bundling, Babel: transpiling, Code Splitting, Lazy Loading.`,
    example: `const Comp = React.lazy(() => import('./Comp'));`,
  },
  {
    id: 3,
    question: `What is object.freeze() and const?`,
    answer: `Object.freeze() that makes an object immutable at the top level. Once an object is frozen, you cannot add, delete, or modify its existing properties. It's important to note that this is a shallow freeze, meaning if the object contains nested objects, those inner objects can still be modified unless they are also frozen. We typically use Object.freeze() to protect configuration objects or constants from accidental changes.
    
    const in JavaScript is used to declare variables whose reference cannot be reassigned after initialization. However, if the variable points to an object or array, the contents of that object can still be modified — because const protects the binding, not the value itself. This makes const useful for declaring constants or ensuring that a variable name can't point to something else later in the code.`,
    example: `const settings = Object.freeze({ theme: "dark" });
settings.theme = "light"; // ❌ Won’t work – object is frozen
console.log(settings.theme); // ✅ still "dark"

const user = { name: "Leo" };
user.name = "Sachin";    // ✅ Allowed – modifying property
user = { name: "Virat" }; // ❌ Error – reassignment not allowed`,
  },
  {
    id: 4,
    question: `Data types in JS?`,
    answer: `Primitive: string, number, boolean, null, undefined, symbol. 
    Non-primitive: object, array, function.`,
    example: `let str = 'hello'; 
let obj = { a: 1 };`,
  },
  {
    id: 5,
    question: `Closures in JS?`,
    answer: `In JavaScript, a closure is a function that has access to the variables and parameters of its outer (enclosing) function, even after the outer function has finished executing. Closures are a fundamental concept in JavaScript and are always used to create private variables, maintain state, and wrap functionality. 
    -They are commonly used in JavaScript for tasks like data hiding, event handling, and creating modular code structures.`,
    example: `function outer() {
  let count = 0; // local to outer
  return function inner() {
    count++;
    console.log("Count is:", count);
  };
}

const counter = outer();
counter(); // Count is: 1
counter(); // Count is: 2
`,
  },
  {
    id: 6,
    question: `What is hoisting?`,
    answer: `Hoisting is a behavior in JavaScript where variable and function declarations are moved (or "hoisted") to the top of their containing scope during the compilation phase. We can use a variable or function before it's actually declared in code. However, there's a two types variable and function hoisting.

    Variable Hoisting:
    When we declare a variable using var, it gets hoisted to the top of its containing function or global scope. However, only the declaration is hoisted, not the initialization.

    Function Hoisting:
    Function declarations are fully hoisted, including both the declaration and the function's code. -Hoisting only affects the declarations, not assignments or initializations. Variables declared with let and const are also hoisted, but they aren't initialized until their actual declaration in the code. Additionally, function expressions (e.g., anonymous functions assigned to variables) are not hoisted in the same way as function declarations.
    
    -Hoisting is to avoid unexpected behavior and bugs in code. It's recommended to declare variables and functions at the beginning of their respective scopes to make code more readable and predictable.`,
    example: `console.log(a); // undefined
var a = 5;

var a;
console.log(a); // undefined
a = 5;

console.log(b); // ❌ ReferenceError
let b = 10;
`,
  },
  {
    id: 7,
    question: `Spreads and rest operator?`,
    answer: `Spread Operator (...):
    The spread operator allows us to spread the elements of an array or the properties of an object into another array or object. It's commonly used for creating shallow copies of arrays or objects and for combining multiple arrays or objects.
    
    For Arrays: The spread operator allows us to expand an array into its individual elements. It's often used to create a copy of an array, combine multiple arrays, or add elements to an existing array.
    
    For Objects: With objects, the spread operator is used to create a shallow copy of an object or merge multiple objects.

    Rest Operator (...):
    The rest operator allows us to collect multiple values into an array or object. 
    
    For Function Parameters (Arrays): In function parameters, the rest operator collects all remaining arguments into an array. This is useful when we have a variable number of arguments in a function.
    
    For Object Properties: When used in object destructuring, the rest operator collects remaining properties into a new object.`,
    example: `//Spread
const arr = [1, 2, 3];
const newArr = [...arr];
console.log(newArr); // [1, 2, 3]

const obj = { name: " Arjun" };
const newObj = { ...obj, age: 25 };
console.log(newObj); // { name: " Arjun", age: 25 }

//Rest
function sum(...numbers) {
  return numbers.reduce((total, n) => total + n, 0);
}
console.log(sum(1, 2, 3)); // 6

const [first, ...rest] = [10, 20, 30];
console.log(first); // 10
console.log(rest);  // [20, 30]
`,
  },
  {
    id: 8,
    question: `Difference between null and undefined?`,
    answer: `null: empty by intent. 
    undefined: declared but not assigned.`,
    example: `let a;
console.log(a); // undefined → declared but not assigned

let b = null;
console.log(b); // null → explicitly set to "no value"
`,
  },
  {
    id: 9,
    question: `Difference between var, let and const?`,
    answer: `var, let, and const are used to declare variables, but they have important differences in terms of scope, hoisting, and mutability:

    var:
    Variables declared with var are function-scoped or globally-scoped. This means they are visible throughout the function or globally, regardless of where they are declared within that function. -var variables are hoisted to the top of their function or global scope during execution, which means we can use them before they are declared in code. -However, they will be initialized with undefined. var variables can be reassigned and re-declared within the same scope.

    let:
    Variables declared with let are block-scoped, they are limited to the block (e.g., within {}) in which they are declared. -let variables are also hoisted, but they are not initialized until their declaration statement is came across in the code. Accessing them before declaration results in a ReferenceError. -let variables can be reassigned, but they cannot be re-declared within the same scope.
    
    const:
    Variables declared with const are also block-scoped like let. const variables must be initialized when declared, and their values cannot be reassigned after initialization. However, for objects and arrays declared with const, the properties or elements within them can be modified.`,
    example: `// var
var x = 10;
var x = 20; // ✅ Re-declared
x = 30;     // ✅ Re-assigned

// let
let y = 10;
// let y = 20; // ❌ SyntaxError: already declared
y = 15;      // ✅ Re-assigned

// const
const z = 10;
// const z = 20; // ❌ Error
// z = 25;       // ❌ Error
`,
  },
  {
    id: 10,
    question: `Reference error?`,
    answer: `Occurs when accessing undeclared variables.  try to reference a variable or function that has not been declared or is not within the current scope. Variable Not Declared, Typo in Variable Name, Out of Scope, Hoisting Issues`,
    example: `console.log(notDeclared);`,
  },
  {
    id: 11,
    question: `How to remove a property from an object?`,
    answer: `Use the delete operator to remove a property.`,
    example: `const obj = { a: 1, b: 2 }; 
delete obj.b; 
console.log(obj);`,
  },
  {
    id: 12,
    question: `How to convert JSON to string and string to json?`,
    answer: `Use JSON.stringify() and JSON.parse() methods.`,
    example: `const str = JSON.stringify({ a: 1 }); 
const obj = JSON.parse(str);`,
  },
  {
    id: 13,
    question: `Which methods/keywords are used to debug?`,
    answer: `console.log(), debugger keyword, browser DevTools., console.error(), Debugger Statement, Browser Developer Tools, Try-Catch Blocks`,
    example: `debugger; // pauses in browser if DevTools is open`,
  },
  {
    id: 14,
    question: `What are promises in JS?`,
    answer: `Promises in JavaScript are a way to manage asynchronous operations and handle their results or errors. They are especially useful for handling tasks like fetching data from a server, reading files, or any operation that may take some time to complete. Promises provide a way to work with asynchronous code that avoids the callback pyramid of doom (also known as callback hell).. 
    
    How promises work:
    Creating a Promise, Consuming a Promise, Chaining Promises`,
    example: `const fetchData = () => {
  return new Promise((resolve, reject) => {
    const success = true;

    setTimeout(() => {
      if (success) {
        resolve("Data loaded successfully");
      } else {
        reject("Failed to load data");
      }
    }, 1000);
  });
};

// Using the Promise
fetchData()
  .then((result) => console.log(result))    // Data loaded successfully
  .catch((error) => console.error(error));  // If failed`,
  },
  {
    id: 15,
    question: `What is optional chaining?`,
    answer: `Safely access nested object properties.`,
    example: `const user = {}; 
console.log(user?.info?.name);`,
  },
  {
    id: 16,
    question: `What is a ternary operator?`,
    answer: `Shorthand for if-else condition.`,
    example: `const type = age > 18 ? 'adult' : 'minor';`,
  },
  {
    id: 17,
    question: `What is destructuring?`,
    answer: `Extract values from objects or arrays. 
    
    Object Destructuring: Extract values from objects by creating variables with the same names as the object's properties.
    
    Array Destructuring: Allows to extract values from arrays by their position (index).`,
    example: `const person = { name: " Arjun", age: 25 };
// Extracting values
const { name, age } = person;
console.log(name); //  Arjun
console.log(age);  // 25

const numbers = [10, 20, 30];
// Extract first and second elements
const [first, second] = numbers;
console.log(first);  // 10
console.log(second); // 20

const user = { username: "admin" };
const { username: userName, role = "guest" } = user;
console.log(userName); // admin
console.log(role);     // guest
`,
  },
  {
    id: 18,
    question: `What are callbacks?`,
    answer: `A function passed to another function. function that is passed as an argument to another function and is executed after a specific event or condition occurs. commonly used in asynchronous operations like fetching data from a server, handling user events, and more. "callback hell" or "Pyramid of Doom," where deeply nested callbacks make code hard to read and maintain. To address this, JavaScript introduced Promises and, more recently, async/await syntax, which provide cleaner and more structured ways to handle asynchronous operations.`,
    example: `function greet(name, callback) {
  console.log("Hello, " + name); //Hello,  Arjun
  callback(); // call the function passed as an argument
}
function sayBye() {
  console.log("Goodbye!");
}
greet(" Arjun", sayBye); //Goodbye!

//Callback in Asynchronous Code
setTimeout(() => {
  console.log("Task complete after 1 second");
}, 1000);
//Task complete after 1 second`,
  },
  {
    id: 19,
    question: `What is DOM?`,
    answer: `Document Object Model – represents page structure.`,
    example: `document.getElementById('id').textContent = 'Hello';`,
  },
  {
    id: 20,
    question: `How do you make HTTP requests?`,
    answer: `Use fetch or Axios to call APIs.`,
    example: `fetch('/api')
    .then(res => res.json());`,
  },
  {
    id: 21,
    question: `How to handle API errors?`,
    answer: `Use try/catch with async/await or .catch() with promises.`,
    example: `fetch('/api') 
    .then(res => res.json())
    .catch(err => console.error(err));`,
  },
  {
    id: 22,
    question: `What are Higher Order Functions?`,
    answer: ` function that takes one or more functions as arguments, returns a function as its result, or both. Commonly used in JavaScript to create reusable code. -the map, filter, and reduce functions are commonly used Higher-Order Functions in JavaScript., Callback fn`,
    example: `//Takes a Function as an Argument
function greet(name) {
  return "Hello " + name;
}
function processUser(name, callback) {
  return callback(name);
}
console.log(processUser(" Arjun", greet)); // Hello  Arjun
};

//Returns a Function
function multiplier(factor) {
  return function (number) {
    return number * factor;
  };
}
const double = multiplier(2);
console.log(double(5)); // 10
`,
  },
  {
    id: 23,
    question: `How to get references in JavaScript?`,
    answer: `Use DOM selectors or variables that point to memory addresses.`,
    example: `const el = document.querySelector('#myId');`,
  },
  {
    id: 24,
    question: `What are events in JS?`,
    answer: `User actions like click, hover, Keyboard Events,form events(submit, input, change),Event Listeners ,etc., handled via listeners.`,
    example: `button.addEventListener('click', () => alert('Clicked'));`,
  },
  {
    id: 25,
    question: `What is the Event Loop?`,
    answer: `Mechanism that handles async tasks via queue and stack. The event loop continuously checks if the call stack is empty. When it is empty, the event loop looks at the task queues and moves any pending callbacks to the call stack for execution. `,
    example: `console.log("Start");
setTimeout(() => {
  console.log("Inside setTimeout");
}, 0);
console.log("End");

//Start
//End
//Inside setTimeout`,
  },
  {
    id: 26,
    question: `What is debouncing?`,
    answer: `Limits a function call until after wait time ends. event like resizing the browser window or typing in an input field. It helps reduce the number of function calls to improve performance and optimize`,
    example: `function debounce(func, delay) {
  let timeoutId;
  return function (...args) {
    clearTimeout(timeoutId); // cancel previous timer
    timeoutId = setTimeout(() => {
      func(...args); // run the actual function after delay
    }, delay);
  };
}

// Function to run
function searchInput(value) {
  console.log("Searching for:", value);
}

// Debounced version
const debouncedSearch = debounce(searchInput, 500);

// Simulate user typing
debouncedSearch("React");
debouncedSearch("React J");
debouncedSearch("React JS"); // ✅ Only this one runs after 500ms`,
  },
  {
    id: 27,
    question: `What is throttling?`,
    answer: `Limits function execution to once per interval. events like scrolling or resizing the browser window. It ensures that the function is executed at a maximum specified rate, preventing it from being called too frequently. Throttling is used to improve performance and reduce unnecessary function invocations.`,
    example: `function throttle(func, limit) {
  let lastCall = 0;
  return function (...args) {
    const now = Date.now();
    if (now - lastCall >= limit) {
      lastCall = now;
      func(...args);
    }
  };
}

// Function to run
function handleScroll() {
  console.log("Scroll event at", new Date().toLocaleTimeString());
}

// Throttled version (runs max once every 1000ms)
const throttledScroll = throttle(handleScroll, 1000);

// Simulate scrolling
window.addEventListener("scroll", throttledScroll);`,
  },
  {
    id: 28,
    question: `What is currying?`,
    answer: `A function is transformed into a sequence of functions, each taking a single argument. Transforming function with multiple arguments to nested unary functions.`,
    example: `function add(a) {
  return function (b) {
    return function (c) {
      return a + b + c;
    };
  };
}
console.log(add(1)(2)(3)); // 6

//ES6 Arrow Function
const add = a => b => c => a + b + c;
console.log(add(1)(2)(3)); // 6`,
  },
  {
    id: 29,
    question: `Debouncing vs Throttling?`,
    answer: `Debounce: fires after delay. Throttle: fires at intervals.`,
    example: `// Use debounce on input change, throttle on scroll`,
  },
  {
    id: 30,
    question: `What is async and defer in script tags?`,
    answer: `async loads and runs independently. defer waits for DOM parsing.`,
    example: `<script src='file.js' defer></script>`,
  },
  {
    id: 31,
    question: `Difference between call, apply, bind?`,
    answer: `call() invokes the function immediately, with arguments passed one by one.
    
    apply() also calls the function immediately, but arguments are passed as an array.
    
    bind() doesn't call the function right away — it returns a new function with this and optional arguments pre-set. call: fn.call(obj, arg1, arg2). apply: fn.apply(obj, [args]). bind: returns new function.`,
    example: `const person = {
  name: " Arjun",
};
function greet(greeting, punctuation) {
  console.log(\`\${greeting}, \${this.name}\${punctuation}\`);
}

//call
greet.call(person, "Hello", "!"); 
// Output: Hello,  Arjun!

//apply
greet.apply(person, ["Hi", "!!"]); 
// Output: Hi,  Arjun!!

//bind
const greetPerson = greet.bind(person, "Hey", "...");
greetPerson(); 
// Output: Hey,  Arjun...`,
  },
  {
    id: 32,
    question: `Event bubbling vs capturing?`,
    answer: `Capturing phase: The event travels from the top of the DOM (document) down to the target element.
    
    Bubbling phase: The event then bubbles back up from the target to the top.`,
    example: `// Bubbling (default)
document.getElementById("parent").addEventListener("click", () => {
  console.log("Parent clicked (bubbling)");
}, false); // or just omit this third parameter

// Capturing
document.getElementById("parent").addEventListener("click", () => {
  console.log("Parent clicked (capturing)");
}, true);

document.getElementById("child").addEventListener("click", () => {
  console.log("Child clicked");
});

//Parent clicked (capturing)
//Child clicked
//Parent clicked (bubbling)`,
  },
  {
    id: 33,
    question: `What is event delegation?`,
    answer: `Event delegation is a technique in JavaScript where you add a single event listener to a parent element instead of adding listeners to each child element. The event bubbles up from the child to the parent, and the parent can detect which child triggered it using event.target. This makes the code more efficient, especially when you have many child elements or dynamically added elements.`,
    example: `const menu = document.getElementById("menu");

menu.addEventListener("click", function (event) {
  if (event.target.tagName === "LI") {
    console.log("Clicked:", event.target.textContent);
  }
});
//Clicked: About`,
  },
  {
    id: 34,
    question: `What is AJAX?`,
    answer: `Asynchronous JavaScript and XML. Updates content without reload.`,
    example: `const xhr = new XMLHttpRequest();
    xhr.open('GET', '/api'); 
    xhr.send();`,
  },
  {
    id: 35,
    question: `What is BOM?`,
    answer: `Browser Object Model: interacts with browser (window, location).`,
    example: `console.log(window.location.href);`,
  },
  {
    id: 36,
    question: `How to handle exceptions?`,
    answer: `Use try...catch block for runtime errors.`,
    example: `try { JSON.parse('{ bad }');
  } 
  catch (e) { console.error(e); 
}`,
  },
  {
    id: 37,
    question: `What is a REST API?`,
    answer: `Web API using HTTP methods to access resources.`,
    example: `GET /users, POST /users, PUT /users/1`,
  },
  {
    id: 38,
    question: `Difference between keys and tags?`,
    answer: `A key is a name used to access a value inside an object. It represents a data label.

    A tag is an element used in HTML to define the structure and content of a webpage.`,
    example: `const obj = { key: 'value' };
<h1>Title</h1>`,
  },
  {
    id: 39,
    question: `Difference between forEach and map?`,
    answer: `forEach: used when we want to perform some action for each element in the array but do not need to create a new array based on the results. -We can use forEach to modify the original array.  no return. 
    
    map: creates a new array by applying a provided function to each element in the original array. returns new array.`,
    example: `//forEach
const numbers = [1, 2, 3];
numbers.forEach((num) => {
  console.log(num * 2); // just prints 2, 4, 6
});

//map
const numbers = [1, 2, 3];
const doubled = numbers.map((num) => num * 2);
console.log(doubled); // [2, 4, 6]`,
  },
  {
    id: 40,
    question: `What is a recursive function?`,
    answer: `Function that calls itself until a base condition is met.`,
    example: `function factorial(n) {
  if (n === 0) return 1;       // base case
  return n * factorial(n - 1); // recursive call
}

console.log(factorial(5)); // 120`,
  },
  {
    id: 41,
    question: `What are ES6 features?`,
    answer: `New syntax and features like let/const, arrow functions, Template Literals, Promises, Default Parameters, Spread Syntax, Destructuring Assignment, Rest and Spread Operators, Modules( import & export), Classes, Generators, Map and set, symbols, string methods(startsWith, endsWith, includes), Array methods(findIndex, forEach, map, find).`,
    example: `const sum = (a, b) => a + b;`,
  },
  {
    id: 42,
    question: `How to integrate APIs?`,
    answer: `Use fetch or Axios in component lifecycle or event handlers.`,
    example: `fetch('/api')
    .then(res => res.json())
    .then(data => console.log(data));`,
  },
  {
    id: 43,
    question: `How to call API without Axios?`,
    answer: `Use the fetch() function in JavaScript.`,
    example: `fetch('/api')
    .then(r => r.json())
    .then(console.log);`,
  },
  {
    id: 44,
    question: `What are map, filter, reduce?`,
    answer: `creates a new array by applying a provided function to each element in the original array. returns new array., 
    
    filter is an array method in JavaScript that creates a new array with only the elements that pass , 
    
    reduce is used to accumulate or reduce an array into a single value.`,
    example: `//map
const numbers = [1, 2, 3];
const doubled = numbers.map(num => num * 2);
console.log(doubled); // [2, 4, 6]

//filter
const numbers = [1, 2, 3, 4, 5];
const even = numbers.filter(num => num % 2 === 0);
console.log(even); // [2, 4]

//reduce
const numbers = [1, 2, 3, 4];
const sum = numbers.reduce((acc, num) => acc + num, 0);
console.log(sum); // 10`,
  },
  {
    id: 45,
    question: `Shallow copy vs deep copy?`,
    answer: `Shallow: only top-level Shallow copy means copying only the top-level properties of an object. If the object has nested objects, they’re still shared between the original and the copy. Deep: all levels copied. Deep copy means copying everything — including all nested objects — so the original and the copy are completely independent.`,
    example: `const original = { name: "A", address: { city: "Pune" } };
const shallow = { ...original };
shallow.address.city = "Mumbai";
console.log(original.address.city); // Mumbai ✅ (changed)

const original = { name: "A", address: { city: "Pune" } };
const deep = JSON.parse(JSON.stringify(original));
deep.address.city = "Mumbai";
console.log(original.address.city); // Pune ✅ (not changed)
`,
  },
  {
    id: 46,
    question: `What is Promise.all?`,
    answer: `is a method that takes multiple promises and runs them in parallel. It returns a single promise that resolves when all the input promises succeed, or rejects if any one fails.`,
    example: `Promise.all([p1, p2]).then(([a, b]) => console.log(a, b));`,
  },
  {
    id: 47,
    question: `Payload format in POST request?`,
    answer: `Usually JSON with proper headers. The most common format is JSON, but it can also be FormData, URL-encoded, or multipart/form-data (for file uploads). You must also set the appropriate Content-Type header.`,
    example: `fetch('/api',{
    method:'POST',
    headers:{'Content-Type':'application/json'},
    body:JSON.stringify({a:1})})`,
  },
  {
    id: 48,
    question: `FormData vs JSON?`,
    answer: `JSON is used to send structured text data (objects/arrays).
    
    FormData is used to send form fields and especially files, like images, in multipart/form-data format.`,
    example: `const fd = new FormData(); 
fd.append('file', file);`,
  },
  {
    id: 49,
    question: `What will this log: let x = 10; x = 'hello'; console.log(x);`,
    answer: `Logs 'hello' — x is reassigned.`,
    example: `let x = 10;
x = 'hello'; 
console.log(x);`,
  },
  {
    id: 50,
    question: `What about var x = 10; var x = 'hello'; console.log(x);`,
    answer: `Logs 'hello' — var allows re-declaration.`,
    example: `var x = 10; 
var x = 'hello'; 
console.log(x);`,
  },
  {
    id: 51,
    question: `What are promises?`,
    answer: `A Promise is an object in JavaScript that represents the result of an asynchronous operation — like an API call or file read. 
    It can be in one of three states:

    pending (waiting for result)
    fulfilled (operation succeeded)
    rejected (operation failed)`,
    example: `new Promise((res, rej) => res('done')).then(console.log);`,
  },
  {
    id: 52,
    question: `What is promise chaining?`,
    answer: `Linking multiple then() calls for sequential tasks.`,
    example: `fetch('/api') 
.then(r => r.json())
.then(data => console.log(data));`,
  },
  {
    id: 53,
    question: `Where is debouncing used?`,
    answer: `Input fields, search boxes, resizing — to limit event calls.`,
    example: `const handleSearch = (query) => {
  console.log("Searching for:", query);
};

const debouncedSearch = debounce(handleSearch, 500);

// Simulate typing
debouncedSearch("R");
debouncedSearch("Re");
debouncedSearch("React"); // ✅ Only this one will run after 500ms`,
  },
  {
    id: 54,
    question: `What is the difference between SessionStorage, LocalStorage, and Cookies?`,
    answer: `SessionStorage, LocalStorage, and Cookies are all used for client-side storage in the browser, but they differ in scope, persistence, and use cases.

🔸 SessionStorage:
- Scope: Data is stored per tab/session.
- Persistence: Cleared automatically when the browser tab or window is closed.
- Storage Limit: ~5MB.
- Accessibility: Only accessible within the same tab that stored it.
- Use Case: Temporary data like a user filling out a form or step-by-step wizards.

🔸 LocalStorage:
- Scope: Shared across all tabs and windows from the same origin.
- Persistence: Persists even after the browser is closed or system restarts.
- Storage Limit: ~5–10MB.
- Accessibility: Synchronous API, available on window.localStorage.
- Use Case: Store user preferences, tokens (not secure), light caching.

🔸 Cookies:
- Scope: Sent with every HTTP request (can be scoped to a path/domain).
- Persistence: Can have expiry dates (session cookies disappear after closing browser).
- Storage Limit: ~4KB.
- Accessibility: Accessible both on client-side and server-side.
- Use Case: Authentication, session tracking, remembering logged-in user across reloads.

🛡️ Security Note:
- Never store sensitive information (e.g., passwords, tokens) in LocalStorage or SessionStorage due to XSS risks.
- Cookies with \`HttpOnly\` and \`Secure\` flags are more secure for authentication.`,
    example: `// LocalStorage Example
  localStorage.setItem("theme", "dark");
  const theme = localStorage.getItem("theme");

  // SessionStorage Example
  sessionStorage.setItem("step", "2");
  const step = sessionStorage.getItem("step");

  // Cookie Example
  document.cookie = "username=John; expires=Fri, 31 Dec 2025 23:59:59 GMT; path=/";
  const cookies = document.cookie;`,
  },
  {
    id: 55,
    question: `What is OOP in JS?`,
    answer: `Object-oriented programming using classes and objects.`,
    example: `class Person { constructor(name) { this.name = name; } }`,
  },
  {
    id: 56,
    question: `4 pillars of OOP?`,
    answer: `Encapsulation, Abstraction, Inheritance, Polymorphism.`,
    example: `class Dog extends Animal { bark() {} }`,
  },
  {
    id: 57,
    question: `How to create objects?`,
    answer: `Using {}, new Object(), Object.create(), class.`,
    example: `const obj = { a: 1 }; 
const o = new Object();`,
  },
  {
    id: 58,
    question: `What is Temporal Dead Zone?`,
    answer: `Period where let/const exists but not initialized.`,
    example: `console.log(a); 
let a = 5; // ReferenceError`,
  },
  {
    id: 59,
    question: `TypeScript vs JavaScript?`,
    answer: `TypeScript is a superset of JavaScript that adds static typing and other features like interfaces, enums, and better tooling. TypeScript code is compiled into JavaScript before running in the browser.
    
    JavaScript is a dynamically typed language, meaning you don’t need to declare variable types — the type is determined at runtime.`,
    example: `let name: string = 'Sam';`,
  },
  {
    id: 60,
    question: `What is an IIFE?`,
    answer: `Immediately invoked function expression. An IIFE is a function in JavaScript that runs immediately after it's defined. It’s useful when you want to execute some code once and keep variables private, so they don't pollute the global scope."`,
    example: `(function () {
  const name = " Arjun";
  console.log("Hello", name);
})(); // Output: Hello  Arjun

//Arrow Function IIFE
(() => {
  console.log("This is an arrow function IIFE");
})(); // Output: This is an arrow function IIFE`,
  },
  {
    id: 61,
    question: `What is a prototype?`,
    answer: `An object that other objects inherit from.`,
    example: `function A(){}; 
A.prototype.sayHi = () => 'hi';`,
  },
  {
    id: 62,
    question: `Single-threaded vs Multi-threaded?`,
    answer: `JS is single-threaded. async enable multi-threading.`,
    example: `const worker = new Worker('worker.js');`,
  },
  {
    id: 63,
    question: `How to achieve multi-threading in JS?`,
    answer: `async APIs like setTimeout, fetch.`,
    example: `const worker = new Worker('task.js');`,
  },
  {
    id: 64,
    question: `conditional rendering`,
    answer: `if statement, Ternary operator, Logical AND, ? : inside JSX, switch statement. Conditional rendering is a technique in React (and JavaScript in general) that allows you to render different components or elements based on certain conditions. This is useful for displaying different content based on user state, data availability, or any other condition.`,
    example: `//Using if statement
if (isLoggedIn) {
  return <Dashboard />;
} else {
  return <Login />;
}

//Using Ternary Operator
{isLoggedIn ? <Dashboard /> : <Login />}

//Using && (logical AND)
{isAdmin && <AdminPanel />}

//Using ? : inside JSX
<h1>{score > 50 ? "Pass" : "Fail"}</h1>

//using switch statement
switch (status) {
  case "loading":
    return <Loading />;
  case "error":
    return <Error />;
  default:
    return <Content />;
}`,
  },
  {
    id: 65,
    question: `Lexical Scope and Scope Chain?`,
    answer: `Lexical scope a function can access variables from its parent (outer) scope, but not vice versa.
    The scope chain is the hierarchy of scopes that JavaScript uses to resolve variable references. When a variable is accessed, JavaScript first looks in the current scope, then in the parent scope, and continues up the chain until it finds the variable or reaches the global scope.`,
    example: `function outer() {
  const a = 10;
  function inner() {
    console.log(a); // ✅ can access \`a\` from outer
  }
  inner();
}
outer();

function outer() {
  function inner() {
    const b = 5;
  }
  console.log(b); // ❌ Error: b is not defined
}
outer();

// Scope Chain Example
const globalVar = "🌍 Global";
function outer() {
  const outerVar = "🌐 Outer";
  function inner() {
    const innerVar = "🔒 Inner";
    console.log(innerVar);   // ✅ Found in inner scope
    console.log(outerVar);   // ✅ Found in outer (parent) scope
    console.log(globalVar);  // ✅ Found in global scope
  }
  inner();
}

outer();
// Output:
// 🔒 Inner
// 🌐 Outer
// 🌍 Global

function outer() {
  function inner() {
    const secret = "I’m hidden";
  }
  console.log(secret); // ❌ Error: secret is not defined
}
outer();
`,
  },
];

export default jsdata;
