const reactData = [
  {
    id: 1,
    question: `What is State  and props in React?`,
    answer: `In React, both state and props are used to manage and control data within components, but they serve different purposes and have different behaviors.

"State" is used to store data that can change over time within a component. It is mutable and private to the component. React uses the state to control dynamic behavior like user interactions, form values, toggles, etc. Updating state using \`setState\` (class components) or \`useState\` (functional components) triggers a re-render. State should not be modified directly.

"Props" (short for properties) are used to pass data from a parent component to a child component. Props are read-only and immutable in the child component. They allow components to be dynamic and reusable by supplying different input values. If the parent changes the props, the child re-renders with the new values.

Comparison Summary:
- "State": Local, mutable, managed internally using hooks or constructor, and changes trigger re-renders.
- "Props": External, read-only, passed from parent, and used to configure child components.`,
    example: `
  // Using props
  function Greeting(props) {
    return <h1>Hello, {props.name}!</h1>;
  }

  // Using state
  function Counter() {
    const [count, setCount] = useState(0);
    return <button onClick={() => setCount(count + 1)}>Count: {count}</button>;
  }`,
  },
  {
    id: 2,
    question: `Difference between State and Variables in React?`,
    answer:
      `State is managed by React and is used to trigger re-renders when data changes. It is asynchronous, meaning you can't immediately access updated values after calling \`setState\`. 
      
      Regular variables are standard JavaScript values that do not persist across renders and do not cause re-renders when changed. They’re good for temporary values that don’t affect UI.`,
    example: `let temp = 5; const [value, setValue] = useState(0);`,
  },
  {
    id: 3,
    question: `What is useEffect in React?`,
    answer: `"useEffect" is a React hook that allows you to perform side effects in functional components, such as fetching data, subscriptions, or DOM manipulation. It runs after every render by default or only when specified dependencies change. 
    It serves as a replacement for lifecycle methods like componentDidMount, componentDidUpdate, and componentWillUnmount in class components.`,
    example: `useEffect(() => { fetchData(); }, []);`,
  },
  {
    id: 4,
    question: `When does useEffect get called?`,
    answer: `"useEffect" runs after initial render (like "componentDidMount"), and again if any dependency changes (like "componentDidUpdate"). If a cleanup function is returned, it’s run during unmount or before the next effect execution.`,
    example: `//componentDidMount	
useEffect(() => { ... }, [])

//componentDidUpdate	
useEffect(() => { ... }, [dependency])

//componentWillUnmount	
useEffect(() => { return () => { ... }; }, [])

useEffect(() => { return () => clearInterval(timer); }, [dependency]);`,
  },
  {
    id: 5,
    question: `Difference between Redux and Context API?`,
    answer: `Redux is a robust library for managing complex global state, using a central store, reducers, and middleware. It’s suited for large apps. 
    
    Context API is a built-in way to share data without prop drilling—suitable for moderate state needs. 
    
    Redux has dev tools and async support; 
    
    Context has less boilerplate but limited scalability.`,
    example: `useContext(MyContext); vs useSelector(state => state.user)`,
  },
  {
    id: 6,
    question: `Virtual DOM vs Real DOM?`,
    answer: `The Real DOM is the actual rendered UI in the browser. 
    
    The Virtual DOM is an in-memory representation of the UI. React updates the Virtual DOM first, then compares it (diffing) with the old one, and updates only changed parts in the Real DOM, improving performance.`,
    example: `React compares new VDOM with old VDOM, then updates real DOM minimally.`,
  },
  {
    id: 7,
    question: `Controlled vs Uncontrolled Components?`,
    answer: `In React, controlled and uncontrolled components refer to how form elements (like input, textarea, select) are managed:

🔹 Controlled Component:
- The form element's value is controlled by React state.
- You use \`useState\` (or \`this.state\`) to manage the value.
- Changes trigger React re-renders.
- Useful when you need to validate or manipulate input.

🔹 Uncontrolled Component:
- The form element's value is managed by the DOM itself.
- You access the value using a \`ref\` (React reference).
- No React state is involved, so React doesn’t control the input.
- Useful for simple forms or integration with non-React code.

👉 Summary:
- Controlled = React is the single source of truth (recommended).
- Uncontrolled = DOM handles its own state (quick and less verbose).

Use case: controlled:	Complex forms, validation	and uncontrolled: Simple forms, quick inputs

`,
    example: `
// ✅ Controlled Component
function ControlledInput() {
  const [value, setValue] = useState('');

  return (
    <input
      value={value}
      onChange={(e) => setValue(e.target.value)}
    />
  );
}

// ✅ Uncontrolled Component
function UncontrolledInput() {
  const inputRef = useRef(null);

  const handleSubmit = () => {
    alert(inputRef.current.value);
  };

  return (
    <>
      <input ref={inputRef} />
      <button onClick={handleSubmit}>Submit</button>
    </>
  );
}`,
  },
  {
    id: 8,
    question: `Purpose of React Hooks?`,
    answer: `Hooks allow functional components to manage state, side effects, context, and more without using classes. They make logic reusable through custom hooks and promote a cleaner, more modular, and testable architecture.`,
    example: `useState, useEffect, useContext, useReducer, custom hooks`,
  },
  {
    id: 9,
    question: `useReducer syntax?`,
    answer: `useReducer is a React hook for managing complex state logic in functional components. It’s an alternative to useState, especially useful when state depends on previous values or involves multiple sub-values.`,
    example: `const [state, dispatch] = useReducer(reducerFunction, initialState);`,
  },
  {
    id: 10,
    question: `React Render Process?`,
    answer: `React converts component JSX to Virtual DOM, compares it with previous VDOM, calculates the diff, and updates the Real DOM efficiently. Updates are triggered by state/prop changes, and lifecycle hooks or effects run accordingly.`,
    example: `Triggered by state/props changes`,
  },
  {
    id: 11,
    question: `What is Render Props in React?`,
    answer: `Render Props is a technique where a component shares code by passing a function as a prop. That function controls how the output is rendered, allowing more flexible and reusable components.`,
    example: `<MyComponent render={() => <Child />} />`,
  },
  {
    id: 12,
    question: `What are Higher-Order Components (HOCs)?`,
    answer: `An HOC is a function that takes a component and returns a new component with extra functionality. HOCs are used for features like logging, authentication, or fetching data, allowing behavior reuse. 
    
    Higher-Order Components (HOCs) in React are functions that take a component as an input and return an enhanced version of that component. HOCs are a way to reuse component logic and add additional functionality to components without modifying their original source code.`,
    example: `const Enhanced = withLogger(MyComponent);`,
  },
  {
    id: 13,
    question: `What is React Suspense?`,
    answer: `React Suspense allows components to "suspend" rendering while waiting for asynchronous operations like data fetching or lazy-loaded components. It simplifies handling loading states by showing fallback UI.
    
    - to improve the user experience by allowing components to "suspend" while they wait for data to load, without requiring complex loading states or error handling logic.`,
    example: `<Suspense fallback={<Spinner />}><LazyComp /></Suspense>`,
  },
  {
    id: 14,
    question: `What is Lazy Loading in React?`,
    answer: `Lazy loading defers loading components, routes, or other assets until needed (e.g., navigation). This reduces initial bundle size and improves performance. Use React.lazy() along with Suspense for this.
    
    🧠 Why It's Important:
Without lazy loading:
Your app bundles everything upfront
Even components not immediately visible are loaded
🚫 Slower page load, higher memory usage

With lazy loading:
Only the essential code loads initially
Other components load on demand
✅ Faster load time, lower bundle size

`,
    example: `const LazyComp = React.lazy(() => import('./Comp'));
    
    | Use Case                              | Benefit                                |
| ------------------------------------- | -------------------------------------- |
| **Routes (pages)**                    | Load page components only when visited |
| **Modals, Tabs, Accordions**          | Load only when opened                  |
| **Charts, Maps, Dashboards**          | Heavy libs load only when needed       |
| **Images** (\`<img loading="lazy" />\`) | Save network and memory on scroll      |
`,
  },
  {
    id: 15,
    question: `What are Error Boundaries?`,
    answer: `Error Boundaries are React components that catch rendering errors in child components and show fallback UI instead of crashing the whole app. They improve stability.
    
    Create an Error Boundary Component that implements the \`componentDidCatch\` lifecycle method to catch errors in its child components. This method receives the error and error info as arguments, allowing you to log the error or display a fallback UI.
    Error Boundaries only catch errors in the render phase, not in event handlers or asynchronous code.
    They can be class components that implement \`getDerivedStateFromError\` and \`componentDidCatch\` methods, or functional components using the \`useErrorBoundary\` hook from libraries like \`react-error-boundary\`.
    Error Boundaries are not used for handling errors in asynchronous code or event handlers; they only catch errors during rendering, lifecycle methods, and constructors of child components.
    
    To use an Error Boundary, wrap it around components that may throw errors. If an error occurs in any of the child components, the Error Boundary will catch it and render a fallback UI instead of crashing the entire application.`,
    example: `componentDidCatch(error, info)`,
  },
  {
    id: 16,
    question: `What is componentDidCatch?`,
    answer: `"componentDidCatch" is a lifecycle method that captures errors thrown in child components. It lets you log them and show alternative UI, acting as a safety net.`,
    example: `componentDidCatch(error, info) { logError(error); }`,
  },
  {
    id: 17,
    question: `Describe a React project challenge and solution.`,
    answer: `In one project, rendering a large table caused performance lag. We used pagination to reduce load, virtualization to render only visible rows, memoization to avoid unnecessary re-renders, and SSR/code-splitting to improve first load speed.`,
    example: `Implemented pagination and virtualization to render only visible rows.`,
  },
  {
    id: 18,
    question: `What is Node.js environment?`,
    answer: `Node.js is a runtime that runs JavaScript on the server. It uses an event-driven, non-blocking I/O model. It’s suitable for APIs, real-time apps, and uses npm to manage packages.`,
    example: "const express = require(`express`);",
  },
  {
    id: 19,
    question: `What is one-way data binding in React?`,
    answer: `In React, data flows in one direction—from parent to child. Parent passes data via props, and child cannot modify it. Instead, child must trigger parent updates via callbacks. This unidirectional flow ensures predictable state.`,
    example: `<ChildComponent data={parentData} />`,
  },
  {
    id: 20,
    question: `How to pass data child-to-parent and parent-to-child?`,
    answer: `Parent passes data to child via props. For child-to-parent communication, parent defines a callback and passes it as prop. Child calls the function with data to update parent’s state. This pattern is called "lifting state up."`,
    example: `// Parent-to-child communication
function Parent() {
  return <Child message="Hello from parent!" />;
}

function Child({ message }) {
  return <p>{message}</p>;
}

// Child-to-parent communication
function Parent() {
  const handleChildData = (data) => {
    console.log('Received from child:', data);
  };
  return <Child onSendData={handleChildData} />;
}

function Child({ onSendData }) {
  return (
    <button onClick={() => onSendData('Hello from child!')}>
      Send to Parent
    </button>
  );
}`,
  },
  {
    id: 21,
    question: "Lifecycle methods of React class components?",
    answer: `React class components have three main lifecycle phases:

1. "Mounting Phase" – When the component is created and inserted into the DOM:
   - \`constructor()\`: Initializes state and binds methods.
   - \`static getDerivedStateFromProps(props, state)\`: Syncs state with props.
   - \`render()\`: Returns JSX to be rendered.
   - \`componentDidMount()\`: Runs after the component is added to the DOM. Ideal for data fetching.

2. "Updating Phase" – When component updates due to prop/state changes:
   - \`static getDerivedStateFromProps()\`: Called again to sync new props.
   - \`shouldComponentUpdate(nextProps, nextState)\`: Determines whether re-render is needed.
   - \`render()\`: Called again to re-render UI.
   - \`getSnapshotBeforeUpdate(prevProps, prevState)\`: Captures information (e.g., scroll position) before DOM updates.
   - \`componentDidUpdate(prevProps, prevState, snapshot)\`: Acts after the DOM has updated.

3. "Unmounting Phase" – When component is removed:
   - \`componentWillUnmount()\`: Cleanup such as clearing timers or unsubscribing.

4. "Error Handling (React 16+)"
   - \`static getDerivedStateFromError(error)\`: Update state when render fails.
   - \`componentDidCatch(error, info)\`: Log errors or display fallback UI.
`,
    example: `class MyComponent extends React.Component {
  constructor(props) {
    super(props);
    this.state = { count: 0 };
  }

  static getDerivedStateFromProps(nextProps, prevState) {
    return null; // optional state update based on props
  }

  componentDidMount() {
    console.log("Component mounted");
  }

  shouldComponentUpdate(nextProps, nextState) {
    return true; // allow re-render
  }

  getSnapshotBeforeUpdate(prevProps, prevState) {
    return null; // snapshot before update
  }

  componentDidUpdate(prevProps, prevState, snapshot) {
    console.log("Component updated");
  }

  componentWillUnmount() {
    console.log("Component will unmount");
  }

  render() {
    return <h1>Count: {this.state.count}</h1>;
  }
}`,
  },
  {
    id: 22,
    question: "How to optimize a React app?",
    answer: `Optimizing a React app improves performance, loading time, and user experience. Key strategies include:

1. "Code Splitting": Use React.lazy and Suspense to load components on demand.
2. "Bundle Analysis": Use tools like Webpack Bundle Analyzer to detect large modules.
3. "Minification & Tree Shaking": Minify assets and remove unused code.
4. "Production Build": Use optimized production builds with \`npm run build\`.
5. "Image Optimization": Compress images using tools like TinyPNG or WebP format.
6. "Lazy Load Images": Load images only when in the viewport using \`loading="lazy"\`.
7. "Caching with Service Workers": Use Workbox or CRA's service worker for PWA caching.
8. "Memoization": Use \`React.memo\`, \`useMemo\`, and \`useCallback\` to avoid re-renders.
9. "Virtualization": Use libraries like \`react-window\` to render only visible content.
10. "SSR": Use Server-Side Rendering (e.g., Next.js) for faster first paint.
11. "CDNs": Use CDN for faster asset delivery.
12. "Network Optimization": Reduce API calls, use pagination, caching, and compression.

Each technique reduces the load, memory use, or rendering cost for better performance.`,
    example: `// React.memo example to prevent unnecessary re-render
const ExpensiveComponent = React.memo(({ data }) => {
  return <div>{data}</div>;
});`,
  },
  {
    id: 23,
    question: "Hooks in React?",
    answer: `Hooks let you use state and lifecycle features in functional components. Introduced in React 16.8, they simplify and modularize component logic.

Common hooks:
1. \`useState()\`: Adds local state.
2. \`useEffect()\`: Handles side-effects (fetching data, timers).
3. \`useContext()\`: Access React Context without prop drilling.
4. \`useReducer()\`: Advanced state logic, alternative to useState.
5. \`useRef()\`: Store mutable values that don’t trigger re-render.
6. \`useMemo()\`: Memoize expensive calculations.
7. \`useCallback()\`: Memoize callback functions.
8. \`useLayoutEffect()\`: Like useEffect, but fires synchronously after DOM mutations.
9. "Custom Hooks": Reuse logic across multiple components.

Hooks help write cleaner, more reusable code with fewer bugs.`,
    example: `const [count, setCount] = useState(0);

useEffect(() => {
  // runs on mount
}, []);

const value = useContext(MyContext);

const [state, dispatch] = useReducer(reducer, initialState);

const inputRef = useRef();

const result = useMemo(() => expensiveCalc(a), [a]);

const memoFn = useCallback(() => doSomething(), []);

useLayoutEffect(() => {
  // sync with DOM
}, []);`,
  },
  {
    id: 24,
    question: "What is prop drilling in React?",
    answer: `Prop drilling is the process of passing data through multiple nested components even when intermediate components don't need the data, just to reach a deeply nested child.

It can lead to:
- Redundant props in intermediate components
- Tight coupling
- More difficult debugging
- Performance overhead from unnecessary re-renders

"Solutions":
- React Context API
- Redux or other state management tools

These alternatives allow sharing state across components without manually passing props at every level.`,
    example: `// Avoiding prop drilling with Context
const UserContext = React.createContext();

function App() {
  return (
    <UserContext.Provider value="John">
      <Parent />
    </UserContext.Provider>
  );
}

function Parent() {
  return <Child />;
}

function Child() {
  const username = useContext(UserContext);
  return <div>Hello, {username}</div>;
}`,
  },
  {
    id: 25,
    question:
      "What if we don’t provide an empty array in useEffect dependency?",
    answer: `The second argument to \`useEffect()\` controls when the effect runs:

- \`[]\` (empty array): Runs only on mount (componentDidMount).
- \`[dep1, dep2]\`: Runs on mount and when any dependency changes.
- No array: Runs on every render (not recommended).

If no dependency array is provided, \`useEffect\` runs after "every" render, which can lead to:
- Unnecessary API calls
- Infinite loops if the effect updates state
- Performance issues

Always include a proper dependency array to avoid bugs and improve efficiency.`,
    example: `// This useEffect runs after every render (bad practice)
useEffect(() => {
  console.log("Rendered again!");
});

// Correct version: runs only once on mount
useEffect(() => {
  console.log("Mounted!");
}, []);`,
  },
  {
    id: 26,
    question: "Is JSX directly readable by the browser?",
    answer: `No. JSX is a syntax extension for JavaScript that looks like HTML but is not valid JavaScript. Browsers cannot interpret JSX directly.

JSX needs to be transpiled into standard JavaScript using a tool like Babel before it can be executed by the browser. This transpilation is usually handled during the build process (e.g., using Webpack + Babel).`,
    example: `// JSX code
const element = <h1>Hello, JSX!</h1>;

// Babel transpiles this to:
const element = React.createElement('h1', null, 'Hello, JSX!');`,
  },

  {
    id: 27,
    question: "What are performance optimization hooks in React?",
    answer: `React offers several hooks and utilities to optimize performance:

1. "useMemo": Memoizes computed values. Prevents expensive recalculations.
2. "useCallback": Memoizes functions so they don't change unless dependencies do.
3. "React.memo": Prevents re-rendering of components if props haven’t changed.
4. "useRef": Stores values across renders without causing re-render.
5. "useLayoutEffect": Like useEffect, but fires after layout & before paint (for measurements).

These tools reduce unnecessary rendering and improve responsiveness.`,
    example: `const memoizedValue = useMemo(() => expensiveCalculation(data), [data]);

const memoizedFn = useCallback(() => doSomething(a), [a]);

const MemoComponent = React.memo(({ name }) => <p>{name}</p>);`,
  },
  {
    id: 28,
    question: "What are stateful components in React?",
    answer: `Stateful components are components that manage their own local state.

In React:
- "Class components" were originally used to manage state via \`this.state\` and \`this.setState\`.
- "Functional components" can now be stateful using hooks like \`useState()\`.

Stateful components are responsible for handling dynamic data, user input, and events.`,
    example: `// Stateful class component
class Counter extends React.Component {
  state = { count: 0 };
  increment = () => this.setState({ count: this.state.count + 1 });

  render() {
    return <button onClick={this.increment}>Count: {this.state.count}</button>;
  }
}

// Functional equivalent
function CounterFn() {
  const [count, setCount] = useState(0);
  return <button onClick={() => setCount(count + 1)}>Count: {count}</button>;
}`,
  },
  {
    id: 29,
    question: "What are imports and exports in React (ES6 modules)?",
    answer: `ES6 modules allow splitting code into reusable pieces.

- "Named Export": Export multiple values.
- "Default Export": Export a single main value.

Usage:
- Named exports require curly braces and exact name.
- Default exports can be imported with any name.

Helps with code modularity and reuse.`,
    example: `// utils.js
export const add = (a, b) => a + b;
export const sub = (a, b) => a - b;

// main.js
import { add, sub } from './utils';

// default export
export default function App() {}
// imported as:
import MyApp from './App';`,
  },
  {
    id: 30,
    question: "Difference between library and framework?",
    answer: `A "library" is a collection of pre-written code developers can use. A "framework" provides a structure with predefined rules and lifecycle that calls the developer's code.

- "Library":
  - You call it when needed.
  - More flexible.
  - Example: React, Lodash.

- "Framework":
  - It calls your code.
  - More opinionated.
  - Example: Angular, Next.js

In essence, you are in control with a library, but the framework is in control of your app’s structure.`,
    example: `// React is a library - you decide when to use components
function MyApp() {
  return <Button />;
}

// Angular is a framework - it defines modules, lifecycle, structure`,
  },

  {
    id: 31,
    question: "What are lifecycle methods in functional components in React?",
    answer: `In functional components, React doesn't use traditional lifecycle methods like class components. 
Instead, lifecycle behavior is handled using the \`useEffect\` hook.

The \`useEffect\` hook lets you run side effects in response to lifecycle events such as:
- Mounting (componentDidMount)
- Updating (componentDidUpdate)
- Unmounting (componentWillUnmount)

You can control when the effect runs by using the dependency array passed as the second argument to useEffect.
This approach makes lifecycle logic more concise and easier to manage in functional components.
  `,
    example: `// Runs once on mount (componentDidMount)
useEffect(() => {
  console.log("Component mounted");
}, []);

// Runs on specific state/prop update (componentDidUpdate)
useEffect(() => {
  console.log("State updated");
}, [count]);

// Runs on unmount (componentWillUnmount)
useEffect(() => {
  return () => {
    console.log("Component unmounted");
  };
}, []);
  `,
  },
  {
    id: 32,
    question: `What is the onChange event in React JS?`,
    answer: `The onChange event in React is used to capture user input and track changes in form elements like input, textarea, or select. It's a controlled way to handle user interaction with form elements. When the value of an element changes, the event handler is triggered, allowing us to update state or perform logic based on the input. This is critical for building forms where you want to manage values inside state and respond to user changes in real-time.`,
    example: `import React, { useState } from 'react';

function NameForm() {
  const [name, setName] = useState('');

  const handleChange = (event) => {
    setName(event.target.value);
  };

  return (
    <div>
      <input type="text" value={name} onChange={handleChange} />
      <p>Hello, {name}</p>
    </div>
  );
}
  `,
  },
  {
    id: 33,
    question: `What is Axios in React?`,
    answer: `Axios is a popular third-party JavaScript library used to make HTTP requests from the browser. It works with Promises and provides a simple and clean syntax to perform GET, POST, PUT, DELETE operations. In React, it's commonly used for fetching data from APIs. Axios supports request and response interceptors, automatic JSON data transformation, and works in both client and server environments (like Node.js).`,
    example: `import axios from 'axios';
import React, { useEffect, useState } from 'react';

function Users() {
  const [users, setUsers] = useState([]);

  useEffect(() => {
    axios.get('https://jsonplaceholder.typicode.com/users')
      .then(response => setUsers(response.data))
      .catch(error => console.error(error));
  }, []);

  return (
    <ul>
      {users.map(user => <li key={user.id}>{user.name}</li>)}
    </ul>
  );
}
  `,
  },
  {
    id: 34,
    question: `What are Template Literals in React (ES6)?`,
    answer: `Template literals in JavaScript are enclosed in backticks (\`) and allow embedded expressions using \`\${}\`. In React, they are useful for creating dynamic strings (like dynamic class names, messages, URLs). They improve code readability and eliminate the need for concatenation.`,
    example: `const firstName = "John";
const greeting = \`Hello, \${firstName}!\`; // "Hello, John!"

function Message() {
  const age = 25;
  return <p>{\`You are \${age} years old.\`}</p>;
}
//output: "You are 25 years old."`,
  },
  {
    id: 35,
    question: `What is Reconciliation in React JS?`,
    answer: `Reconciliation is the process React uses to update the DOM efficiently. When the state or props of a component change, React creates a new Virtual DOM tree. It compares the new tree with the previous one using a diffing algorithm, calculates the minimal number of changes, and updates only the affected parts in the actual DOM. This improves performance by avoiding full re-renders.`,
    example: `// When setState is called, React triggers reconciliation
setState({ name: 'John' });
// React compares virtual DOM before and after change, and updates only affected parts
  `,
  },
  {
    id: 36,
    question: `What is Server-Side Rendering (SSR) in React?`,
    answer: `Server-Side Rendering (SSR) is the technique where React components are rendered to HTML on the server and sent to the client. This results in a faster initial page load and better SEO, as the content is available in the initial HTML. After loading, React hydrates the app—making it interactive by attaching event listeners.

SSR is beneficial for:
- Faster first paint and time-to-interactive
- Better SEO (search engines can crawl HTML content)
- Enhanced performance on slower networks or devices

React alone doesn't support SSR directly, so frameworks like **Next.js** are commonly used. SSR is suitable for content-heavy or SEO-critical pages, while dynamic dashboards or user-specific data are often better with Client-Side Rendering (CSR).

SSR Flow:
1. User requests a page.
2. The server fetches data and renders React to HTML.
3. HTML is sent to the browser.
4. React hydrates the page and takes over for interactivity.

Hydration means making the static server-rendered HTML interactive by attaching React's functionality on top of it.

Drawbacks:
- Slower response time under load
- More complex architecture
- Higher server costs due to rendering on every request

Frameworks for SSR:
- Next.js (most popular)
- Remix
- Custom Node.js + ReactDOMServer setups (less common)

SSR vs CSR:
SSR renders HTML on the server, ideal for SEO and fast loads.
CSR renders everything in the browser using JS, ideal for highly dynamic apps.`,

    example: `// Example: SSR in Next.js (server renders before page is sent)
export async function getServerSideProps() {
  const res = await fetch('https://api.example.com/data');
  const data = await res.json();
  return { props: { data } }; // Passed to page as props
}

function HomePage({ data }) {
  return <div>{data.message}</div>;
}

export default HomePage;
`,
  },

  {
    id: 37,
    question: `What is Strict Mode in React?`,
    answer: `StrictMode is a React tool used during development to identify potential issues in the code. It doesn't render anything to the UI and has no effect in production. It helps detect side-effects, deprecated methods, and unexpected behaviors by running components twice in development (in certain lifecycle methods).`,
    example: `import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
  `,
  },
  {
    id: 38,
    question: `How can we implement responsive design in React?`,
    answer: `Responsive design ensures a web application works well on all devices (mobile, tablet, desktop). In React, we can use CSS media queries, CSS frameworks (Bootstrap, Tailwind, Material-UI), dynamic resizing using window width state, or styled-components to apply responsive styles.`,
    example: `// Example with Material-UI
import { useMediaQuery } from '@mui/material';

function ResponsiveComponent() {
  const isMobile = useMediaQuery('(max-width:600px)');
  return (
    <div>
      {isMobile ? <p>Mobile View</p> : <p>Desktop View</p>}
    </div>
  );
}
  `,
  },
  {
    id: 39,
    question: `What are Layouts in React?`,
    answer: `Layouts are structural components used to organize content visually. React apps use layouts to wrap pages or sections with headers, footers, sidebars, etc. Layouts can be created manually with Flexbox/Grid or using frameworks like Bootstrap, Material UI, or Tailwind CSS. Next.js also supports dynamic layouts per page.`,
    example: `// Custom layout component
function Layout({ children }) {
  return (
    <div>
      <header>My Header</header>
      <main>{children}</main>
      <footer>My Footer</footer>
    </div>
  );
}

// Usage in App
function App() {
  return (
    <Layout>
      <p>Welcome to the main content</p>
    </Layout>
  );
}
  `,
  },
  {
    id: 40,
    question: `What is React Router?`,
    answer: `React Router is a routing library for React used to manage navigation between different views or pages. It enables Single Page Applications (SPA) to update the URL and UI without reloading the page. Core components include <BrowserRouter>, <Route>, <Link>, <Routes>. It also supports route parameters, nested routes, and dynamic routing.
    
    | Feature       | Hook / Component            | Use                        |
| ------------- | --------------------------- | -------------------------- |
| Define routes | \`<Route />\` & \`<Routes />\`  | URL to component           |
| Navigation    | \`<Link />\`, \`useNavigate()\` | Move between routes        |
| Read params   | \`useParams()\`               | Read \`:id\` from URL        |
| Nested routes | \`<Outlet />\`                | Render children components |
| Redirect      | \`<Navigate />\`              | Conditional redirect       |
| Catch-all/404 | path="\*"                   | Unknown routes handler     |
`,
    example: `import { BrowserRouter, Routes, Route, Link } from 'react-router-dom';

function Home() {
  return <h1>Home Page</h1>;
}
function About() {
  return <h1>About Page</h1>;
}

function App() {
  return (
    <BrowserRouter>
      <nav>
        <Link to="/">Home</Link> | <Link to="/about">About</Link>
      </nav>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
      </Routes>
    </BrowserRouter>
  );
}`,
  },
  {
    id: 41,
    question: "What is the meaning of 'this' keyword in React JS?",
    answer:
      "In React (especially in class components), the `this` keyword refers to the current instance of the component. It is used to access properties and methods defined in the class, such as `this.state`, `this.props`, or custom methods. However, since JavaScript's `this` binding can change based on how a function is called, you often need to bind event handler methods to the component instance using `.bind(this)` or arrow functions to ensure `this` refers to the correct context.",
    example: `class MyComponent extends React.Component {
  constructor(props) {
    super(props);
    this.state = { count: 0 };

    // Binding this manually
    this.handleClick = this.handleClick.bind(this);
  }

  handleClick() {
    // 'this' refers to the component instance
    this.setState({ count: this.state.count + 1 });
  }

  render() {
    return (
      <div>
        <p>Count: {this.state.count}</p>
        <button onClick={this.handleClick}>Increase</button>
      </div>
    );
  }
}`,
  },
  {
    id: 42,
    question: "Why do we use keys in React?",
    answer: `Keys help React identify which items have changed, are added, or are removed from a list. They're essential for optimizing rendering performance during the reconciliation process. React uses keys to track elements in a list, ensuring minimal DOM operations and consistent component state.

Keys must be unique among siblings and stable (not change between renders) to ensure correct behavior, especially when elements are added or reordered dynamically.`,
    example: `{items.map(item => (
  <li key={item.id}>{item.name}</li>
))}
// 'key={item.id}' uniquely identifies each list item.
`,
  },
  {
    id: 43,
    question: "What is React.memo?",
    answer: `React.memo is a higher-order component that memoizes functional components. It prevents unnecessary re-renders when props haven't changed, improving performance. It performs a shallow comparison of props and re-renders only if they change.

It’s useful for functional components that render the same output given the same props.

💡 When to Use?
Components that are pure and render same output for same props

Components with heavy UI or large lists

Child components receiving props from parent`,
    example: `const MyComponent = React.memo(function MyComponent({ name }) {
  return <div>{name}</div>;
});
// Will only re-render if 'name' changes.
`,
  },
  {
    id: 44,
    question:
      "How can we implement componentWillUnmount in a functional component?",
    answer: `In functional components, the cleanup phase of useEffect mimics componentWillUnmount. You define a return function inside useEffect, which React calls when the component unmounts.`,
    example: `useEffect(() => {
  const timer = setInterval(() => console.log("Running"), 1000);

  return () => {
    clearInterval(timer); // cleanup
    console.log("Component unmounted");
  };
}, []);
`,
  },
  {
    id: 45,
    question: "How do we manage global state in applications?",
    answer: `You can manage global state using:
1. Context API – for medium apps or sharing data deeply across components.
2. Redux – a powerful state management library with a central store and reducer logic.
3. Zustand, Jotai, Recoil – newer lightweight global state solutions.
These tools allow components to access shared data without prop drilling.`,
    example: `// Using Context API:
const UserContext = React.createContext();

function App() {
  const [user, setUser] = useState('Admin');
  return <UserContext.Provider value={user}><Dashboard /></UserContext.Provider>;
}

function Dashboard() {
  const user = useContext(UserContext);
  return <h1>Welcome {user}</h1>;
}
`,
  },
  {
    id: 46,
    question:
      "What is the difference between synthetic and non-synthetic events?",
    answer: `"Synthetic Event" is React’s wrapper over the browser’s native event. It provides a consistent API across all browsers and supports React's internal event delegation.

"Non-Synthetic Event" is the native DOM event provided by the browser (e.g., using addEventListener).

- Synthetic events are pooled and optimized by React.
- Native events are raw and used outside React (e.g., in useEffect).
- React 17+ disables event pooling by default.

Use synthetic events inside JSX handlers, and native events for global listeners.
  `,
    example: `// Synthetic Event
<button onClick={(e) => console.log("Synthetic", e)}>Click</button>

// Non-Synthetic Event
useEffect(() => {
  const handler = (e) => console.log("Native", e);
  window.addEventListener("scroll", handler);
  return () => window.removeEventListener("scroll", handler);
}, []);
  `,
  },
  {
    id: 47,
    question: "Difference between Virtual DOM and Shallow DOM in React?",
    answer: `Virtual DOM is a lightweight copy of the actual DOM used by React to efficiently re-render only changed parts. It improves performance via diffing and reconciliation.

Shallow DOM isn't a formal React term but often refers to shallow rendering in tests (e.g., Enzyme) where only the component itself is rendered without children.`,
    example: `// Virtual DOM: React creates a virtual copy of the DOM to optimize updates

// Shallow DOM: Used in tests
shallow(<MyComponent />); // Doesn't render children
`,
  },
  {
    id: 48,
    question: "What are Pure and Non-pure functions in React?",
    answer: `Pure functions always return the same output for the same input and have no side effects. In React, pure components render the same output for the same props.

Non-pure functions may produce different outputs for the same input or have side effects like changing external variables or API calls.`,
    example: `// Pure
const PureGreet = ({ name }) => <h1>Hello, {name}</h1>;

// Non-pure
let count = 0;
function NonPureComponent() {
  count++;
  return <p>Clicked {count} times</p>;
}
`,
  },
  {
    id: 49,
    question: "What is browser rendering in React?",
    answer: `Browser rendering is the process of converting HTML, CSS, and JS into a visual interface. React handles rendering by updating the virtual DOM, then syncing it with the real DOM using the reconciliation process.

Steps:
1. Parse HTML/CSS → DOM/CSSOM.
2. Construct Render Tree.
3. Layout → Paint → Composite.`,
    example: `// React updates state
setState({ value: 1 });
// React triggers re-render → Virtual DOM diff → DOM update
`,
  },
  {
    id: 50,
    question: "What are the key features of React?",
    answer: `1. Component-Based Architecture
2. Virtual DOM for efficient updates
3. JSX syntax
4. One-way data binding
5. React Hooks (useState, useEffect, etc.)
6. Server-side rendering (SSR)
7. Reusability and modular code
8. Developer tools and performance optimizations`,
    example: `// React component with JSX, state and props
function Welcome({ name }) {
  const [count, setCount] = useState(0);
  return <h1>Hello {name}, clicked {count} times</h1>;
}
`,
  },
  {
    id: 51,
    question: "Can we avoid using Virtual DOM in React?",
    answer: `Yes, you can avoid Virtual DOM using alternatives like:
- Svelte: Compiles components into imperative DOM code.
- Incremental DOM: Used in libraries like Inferno, applies DOM updates directly.
- Vanilla JS: Manually manipulate DOM for fine control.

However, React’s Virtual DOM is efficient for most apps and is central to its design.`,
    example: `// Svelte avoids Virtual DOM
<script>
  let name = 'World';
</script>

<h1>Hello {name}</h1>
`,
  },
  {
    id: 52,
    question: "How to fetch data from store in React?",
    answer: `In React, especially when using Redux, data is fetched from the store using the useSelector hook. useSelector allows a component to access a piece of state from the Redux store.
To trigger data fetching or any side effect, we use useEffect. If an action is required to fetch data, we dispatch it using useDispatch. This setup ensures components reactively re-render when the store's state updates.`,
    example: `import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { fetchUsers } from './userSlice';

function UserList() {
  const dispatch = useDispatch();
  const users = useSelector((state) => state.users.list);

  useEffect(() => {
    dispatch(fetchUsers());
  }, [dispatch]);

  return (
    <ul>
      {users.map(user => <li key={user.id}>{user.name}</li>)}
    </ul>
  );
}
  `,
  },
  {
    id: 53,
    question: "Which package provides the useSelector hook?",
    answer: `The useSelector hook is provided by the 'react-redux' package. It's used to read values from the Redux store state in functional React components.`,
    example: `import { useSelector } from 'react-redux';

const count = useSelector((state) => state.counter.value);
  `,
  },
  {
    id: 54,
    question: "Why do we use Hooks in React?",
    answer: `Hooks allow functional components to have state and lifecycle features, which were previously available only in class components. They simplify component logic, encourage reusable logic via custom hooks, and remove the need for class syntax or the 'this' keyword.`,
    example: `import React, { useState, useEffect } from 'react';

function Timer() {
  const [count, setCount] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => setCount(c => c + 1), 1000);
    return () => clearInterval(interval);
  }, []);

  return <h1>{count}</h1>;
}
  `,
  },
  {
    id: 55,
    question: "What are challenges in building login pages in React?",
    answer: `1. Secure Authentication: Handling credentials and tokens securely.
2. Form Validation: Validating fields with libraries like Formik and Yup.
3. Error Handling: Displaying messages for failed logins or network errors.
4. UI Feedback: Showing loading spinners or disabling buttons.
5. Token Storage: Securely storing access/refresh tokens (e.g., HTTP-only cookies).
6. Redirects: Managing post-login routes and protected pages.`,
    example: `// with Formik
<Formik
  initialValues={{ email: '', password: '' }}
  onSubmit={handleLogin}
  validationSchema={LoginSchema}>
  {({ handleSubmit }) => (
    <form onSubmit={handleSubmit}>
      <Field name="email" />
      <Field name="password" type="password" />
      <button type="submit">Login</button>
    </form>
  )}
</Formik>
  `,
  },
  {
    id: 56,
    question: "What is unit testing in React?",
    answer: `Unit testing verifies individual components or logic in isolation to ensure they work correctly. "Jest" and React Testing Library are commonly used tools for this purpose. Tests should be written to validate props, behavior, user interactions, and expected output of components.`,
    example: `// Button.test.js using Jest and React Testing Library
import { render, screen, fireEvent } from '@testing-library/react';
import Button from './Button';

test('calls onClick when clicked', () => {
  const handleClick = jest.fn();
  render(<Button onClick={handleClick}>Click</Button>);
  fireEvent.click(screen.getByText('Click'));
  expect(handleClick).toHaveBeenCalledTimes(1);
});
  `,
  },
  {
    id: 57,
    question: "const, let, var scoping differences?",
    answer: `Variables declared with const and let are block scoped, while var is function scoped. Inside nested blocks, new variables can shadow outer ones. var allows re-declaration, const and let do not.`,
    example: `var x = 5;
if (true) {
  let x = 10;
  console.log(x); // 10 (block scoped)
}
console.log(x); // 5 (outer scope)
  `,
  },
  {
    id: 58,
    question: "Difference between useEffect and useLayoutEffect?",
    answer: `useEffect runs after the DOM has been painted. It is non-blocking and preferred for most side effects.
useLayoutEffect runs synchronously after DOM updates but before the browser paints, making it suitable for measuring DOM or doing synchronous layout updates.`,
    example: `useEffect(() => {
  console.log('useEffect: after paint');
});

useLayoutEffect(() => {
  console.log('useLayoutEffect: before paint');
});
  `,
  },
  {
    id: 59,
    question: "Difference between useMemo and useCallback?",
    answer: `useMemo is used to memoize a computed value to avoid expensive recalculations.

    useCallback is used to memoize a function to prevent it from being re-created on every render.`,
    example: `// useMemo
const sortedList = useMemo(() => expensiveSort(list), [list]);

// useCallback
const handleClick = useCallback(() => {
  console.log('Clicked');
}, []);
  `,
  },
  {
    id: 60,
    question: "Useful libraries for React developers?",
    answer: `1. Redux – for global state management.
2. React Router – for routing and navigation.
3. Axios – for making HTTP requests.
4. Material-UI – for styled components.
5. Formik + Yup – for forms and validation.
6. Jest + React Testing Library – for testing components.`,
    example: `// Importing Material UI component
import { Button } from '@mui/material';

// Using Redux hooks
import { useDispatch, useSelector } from 'react-redux';
  `,
  },

  {
    id: 61,
    question: "What is JSX in React?",
    answer: `JSX (JavaScript XML) is a syntax extension that allows writing HTML-like code inside JavaScript. It improves code readability and makes it easier to define UI components using familiar HTML tags. JSX must be compiled using Babel to standard JavaScript using React.createElement.`,
    example: `// JSX
const element = <h1>Hello, {user.name}</h1>;

// Compiled version
const element = React.createElement('h1', null, 'Hello, ', user.name);
  `,
  },
  {
    id: 62,
    question:
      "What is the difference between class and functional components in React?",
    answer: `Class components are ES6 classes that extend React.Component and use lifecycle methods for managing state and side effects. 
  
    Functional components are plain JavaScript functions introduced as stateless, but with the introduction of Hooks (e.g., useState, useEffect), they now support state and side-effects.

Key differences:
1. Syntax: Class vs function.
2. State: Class uses this.state and setState; Functional uses useState.
3. Lifecycle: Class uses lifecycle methods; Functional uses hooks like useEffect.
4. 'this': Required in class components to access props/state; not used in functional components.
5. Performance: Functional components are generally simpler and easier to test.`,
    example: `// Class Component
  class Counter extends React.Component {
    constructor(props) {
      super(props);
      this.state = { count: 0 };
    }
    render() {
      return <button onClick={() => this.setState({ count: this.state.count + 1 })}>
        Count: {this.state.count}
      </button>;
    }
  }

  // Functional Component
  function Counter() {
    const [count, setCount] = useState(0);
    return <button onClick={() => setCount(count + 1)}>Count: {count}</button>;
  }
  `,
  },
  {
    id: 63,
    question: "What are the lifecycle phases of a class component in React?",
    answer: `React class components go through these phases:

1. Mounting – Component is created and inserted into the DOM.
2. Updating – Component is re-rendered due to state/props changes.
3. Unmounting – Component is removed from the DOM.
4. Error Handling – Errors during render phase are caught.

Lifecycle methods:
- Mounting: constructor(), static getDerivedStateFromProps(), render(), componentDidMount()
- Updating: static getDerivedStateFromProps(), shouldComponentUpdate(), render(), getSnapshotBeforeUpdate(), componentDidUpdate()
- Unmounting: componentWillUnmount()
- Error Handling: componentDidCatch(), static getDerivedStateFromError()`,
    example: `class Example extends React.Component {
    constructor(props) {
      super(props);
      this.state = { data: null };
    }
    componentDidMount() {
      fetchData().then(res => this.setState({ data: res }));
    }
    componentWillUnmount() {
      console.log("Component is being removed");
    }
    render() {
      return <div>{this.state.data}</div>;
    }
  }
  `,
  },
  {
    id: 64,
    question: "What is Socket.IO in React?",
    answer: `Socket.IO is a library for real-time, bi-directional communication between a client and server. In React, it’s often used to build real-time features such as chat applications, notifications, or live updates. Socket.IO uses WebSockets under the hood but provides fallback options for older browsers.`,
    example: `// Server-side (Node.js + Express)
const io = require("socket.io")(server);
io.on("connection", socket => {
  socket.emit("welcome", "Hello from server");
});

// Client-side (React)
import { useEffect } from "react";
import { io } from "socket.io-client";

const socket = io("http://localhost:4000");

function App() {
  useEffect(() => {
    socket.on("welcome", msg => console.log(msg));
  }, []);
  return <h1>Socket.IO in React</h1>;
}
  `,
  },

  {
    id: 65,
    question: "Can we have multiple Context APIs in one project?",
    answer: `Yes, React allows multiple Contexts. Each Context can be used to manage different parts of global state independently (e.g., AuthContext, ThemeContext, LanguageContext). Context is useful to avoid prop drilling and makes shared state accessible across components.`,
    example: `const ThemeContext = React.createContext();
  const AuthContext = React.createContext();

  function App() {
    return (
      <ThemeContext.Provider value="dark">
        <AuthContext.Provider value={{ user: 'John' }}>
          <Layout />
        </AuthContext.Provider>
      </ThemeContext.Provider>
    );
  }

  function Layout() {
    const theme = useContext(ThemeContext);
    const auth = useContext(AuthContext);
    return <div>Theme: {theme}, User: {auth.user}</div>;
  }
  `,
  },
  {
    id: 66,
    question: "What is the alternative to React.memo in class components?",
    answer: `In class components, the equivalent of React.memo is the shouldComponentUpdate() lifecycle method. This method lets you control whether a component should re-render based on changes in props or state. If it returns false, the component will not re-render, optimizing performance.`,
    example: `class PureClassComponent extends React.Component {
    shouldComponentUpdate(nextProps) {
      return nextProps.value !== this.props.value;
    }
    render() {
      console.log("Rendered");
      return <div>{this.props.value}</div>;
    }
  }
  `,
  },
  {
    id: 67,
    question: "What is a .env file in React?",
    answer: `.env files are used to define environment-specific variables in a React app. They store configuration values such as API endpoints, keys, ports, or any variable you don't want to hard-code into your source files. React reads these at build time via process.env.

Environment variables in React must be prefixed with REACT_APP_ to be accessible in the code.

The .env file is typically placed in the root directory of your project.`,
    example: `// .env
REACT_APP_API_URL=https://api.example.com
REACT_APP_ENV=development

// In your React component
const apiUrl = process.env.REACT_APP_API_URL;
console.log(apiUrl); // 'https://api.example.com'
  `,
  },
  {
    id: 68,
    question: "How to fetch data from a .env file in React?",
    answer: `To fetch data from a .env file in React:
1. Define variables in the .env file and prefix them with REACT_APP_.
2. Access them in your React components using process.env.VARIABLE_NAME.
Note: .env variables are read during build time, not runtime. So you must rebuild your project if the .env file changes.`,
    example: `// .env
REACT_APP_BACKEND_URL=https://api.myserver.com

// App.js
const backend = process.env.REACT_APP_BACKEND_URL;
fetch(\`\${backend}/users\`).then(...);
  `,
  },

  {
    id: 69,
    question: "How to change the default port of a React app?",
    answer: `React apps run on port 3000 by default. You can change this in two ways:

1. "Using .env file" – Add PORT=your_port
2. "Via scripts" – Modify the start script in package.json

Useful when running multiple apps locally or avoiding port conflicts.`,
    example: `// Method 1: .env
PORT=4000

// Method 2: package.json
"scripts": {
  "start": "PORT=4000 react-scripts start"
}

// Run
npm start // App now runs on http://localhost:4000
  `,
  },
  {
    id: 70,
    question: "What is prop validation and how to do it in React?",
    answer: `Prop validation ensures that components receive correct prop types. React provides a library called prop-types to define expected types and mark required props.

This helps catch bugs, makes code self-documenting, and improves maintainability.`,
    example: `// Install prop-types
npm install prop-types

// In your component
import PropTypes from 'prop-types';

function UserCard({ name, age }) {
  return <p>{name} is {age} years old.</p>;
}

UserCard.propTypes = {
  name: PropTypes.string.isRequired,
  age: PropTypes.number
};
  `,
  },
  {
    id: 71,
    question: "Does updating a useRef value trigger a re-render?",
    answer: `No. Updating a useRef value does NOT cause a component to re-render. useRef is used to store a mutable value that persists across renders but doesn’t trigger re-render like useState.

It’s ideal for storing DOM references or keeping values without causing a UI update.`,
    example: `function Timer() {
  const intervalId = useRef(null);

  useEffect(() => {
    intervalId.current = setInterval(() => {
      console.log("Running...");
    }, 1000);
    return () => clearInterval(intervalId.current);
  }, []);

  return <h2>Check console</h2>;
}
  `,
  },
  {
    id: 72,
    question:
      "What is the difference between stateful and stateless components in React?",
    answer: `In React, components can be categorized as either "stateful" or "stateless", depending on whether they manage their own state.

🔹 "Stateful Component":
- A component that maintains its own internal state using either class-based state or the useState/useReducer hooks.
- Responsible for managing data, handling logic, and rendering UI accordingly.
- Usually "smart/container components".
- Can use lifecycle methods (in class) or hooks (in function) to respond to updates and side effects.

🔹 "Stateless Component":
- A component that does "not manage any internal state".
- It purely renders UI based on props passed to it.
- Typically known as "dumb/presentational components".
- Easy to test and reuse.

With the introduction of hooks (React 16.8+), functional components can now be both stateful and stateless.`,
    example: `// Stateless Component
function Greeting({ name }) {
  return <h1>Hello, {name}!</h1>;
}

// Stateful Component
import { useState } from "react";
function Counter() {
  const [count, setCount] = useState(0);
  return (
    <>
      <p>You clicked {count} times</p>
      <button onClick={() => setCount(count + 1)}>Click me</button>
    </>
  );
}
  `,
  },

  {
    id: 73,
    question: "What are styled-components in React and how do they work?",
    answer: `Styled-components is a popular CSS-in-JS library that allows developers to write actual CSS code inside JavaScript files to style React components. It uses tagged template literals to style components and scopes styles automatically.

🔹 "Key Features":
- "Scoped styles": CSS rules apply only to the component, avoiding global CSS conflicts.
- "Dynamic styling": Can pass props to change styles based on conditions.
- "Better readability": Styles are colocated with the component logic.
- "Theming": Supports theming using the ThemeProvider.
- "No class name bugs": Automatically generates unique class names.

🔹 "Why Use Styled-Components?":
- Avoids the need for separate \`.css\` files.
- Supports dynamic and conditional styling.
- Encourages modular, maintainable component design.`,
    example: `// 1. Install styled-components
// npm install styled-components

// 2. Use it in a React component
import styled from 'styled-components';

const Button = styled.button\`
  background-color: \${props => props.primary ? "blue" : "gray"};
  color: white;
  padding: 10px 20px;
  border: none;
  border-radius: 5px;
\`;

export default function App() {
  return (
    <>
      <Button primary>Primary Button</Button>
      <Button>Default Button</Button>
    </>
  );
}
  `,
  },

  {
    id: 74,
    question:
      "What tools are available to debug and measure performance in React applications?",
    answer: `To debug and measure performance in React, several tools and techniques can be used to analyze rendering, memory usage, and overall app performance:

1. "React Developer Tools - Profiler Tab":
   - Visualize component render timings.
   - Detect unnecessary re-renders.
   - Shows which props changed between renders.

2. "Chrome DevTools – Performance Tab":
   - Records JavaScript execution, layout, and paint processes.
   - Identifies slow frames and long tasks.
   - Useful for browser-level performance insights.

3. "Why Did You Render":
   - Logs to the console when components re-render unnecessarily.
   - Helpful for detecting performance issues caused by prop changes.

4. "Lighthouse (Built into Chrome)":
   - Audits page performance, accessibility, and best practices.
   - Great for overall health check of a React app.

5. "Webpack Bundle Analyzer / Source Map Explorer":
   - Analyzes and visualizes the bundle size.
   - Identifies large dependencies or unnecessary code in your build.

6. "React Profiler API (<Profiler>)":
   - Programmatic way to measure performance per component render.

7. "React.lazy & Code Splitting":
   - Helps in lazy loading components and reducing the initial bundle size.

These tools help developers detect bottlenecks, optimize re-renders, and reduce load times in React applications.
  `,
    example: `// Example: Using React Profiler API
import { Profiler } from "react";

<Profiler id="MyComponent" onRender={(id, phase, actualDuration) => {
  console.log(\`[Profiler] \${id} took \${actualDuration}ms to render in \${phase} phase\`);
}}>
  <MyComponent />
</Profiler>

// Example: Using Why Did You Render
import React from 'react';
import whyDidYouRender from '@welldone-software/why-did-you-render';

if (process.env.NODE_ENV === 'development') {
  whyDidYouRender(React, {
    trackAllPureComponents: true,
  });
}
  `,
  },
  {
    id:75,
    question:`React 19 features `,
    answer:`🧱 1. Server Components & Server Actions
Server Components are now stable, allowing rendering on the server to reduce client bundle sizes 
Server Actions (via "use server") let you define async server-side functions that client code can call directly 

🔄 2. Form & Action APIs
You can now pass functions directly to <form action={…}> (or <button formAction={…}>) to handle submissions without explicit event handlers .
New hook: useFormStatus() provides state (pending, etc.) of the surrounding form to child components 

🚀 3. Optimistic UI with useOptimistic()
A built-in hook for managing optimistic updates during async operations, auto-reverting or applying once complete

⚙️ 4. Automatic Compiler Optimizations
React 19’s compiler handles optimizations (memoization, callback stability) automatically, reducing the need for manual useMemo, useCallback, and memo()

🔧 5. Simplified Refs & Context
Refs can now be passed as ordinary props:
No more forwardRef in most cases 
You can now write <Context value="..."> instead of <Context.Provider> 

🧹 6. Ref Callback Cleanup
ref callback functions now accept returnable cleanup logic, akin to useEffect cleanups

🪶 7. Metadata & Assets Support
You can embed <title>, <meta>, <link> inside components, and React will hoist them to <head> for SEO 
Built-in support for <link rel="stylesheet">, async scripts, and resource preloading

🌐 8. Custom Elements & Hydration Improvements
Full support for Web Components (custom elements) 
Hydration errors now include diffs for easier debugging 

🛠️ 9. Dev Tools & Performance
Enhanced React DevTools with improved performance profiling and render metrics 
Automatic batching of state updates continues and improves performance under frequent updates `,
    example:`function MyInput({ ref }) { return <input ref={ref} /> }

    🎯 TL;DR – Why Upgrade?
React 19 brings:
Cleaner APIs for refs, forms, metadata, and server actions
Performance boosts via compiler optimizations
Better support for new web standards (RSC, Custom Elements, metadata)
Developer-friendly features & tooling`,
  },
  {
    id: 76,
    question: `What Triggers a Re-render?`,
    answer: `React re-renders a component when:
1.State changes via useState
2.Props change
3.Context value changes
4.Parent re-renders
5.Force update`,
    example: `| Hook          | Runs on initial render | Runs on re-render | Triggered by                |
| ------------- | ---------------------- | ----------------- | --------------------------- |
| \`useState\`    | ✅ Gets initial value   | ✅ Keeps state     | When \`setState()\` is called |
| \`useEffect\`   | ✅ After first render   | ✅ If deps change  | Side effects (API, DOM)     |
| \`useMemo\`     | ✅ Returns memoized val | ✅ If deps change  | Expensive calculations      |
| \`useCallback\` | ✅ Returns memoized fn  | ✅ If deps change  | Prevent re-creation         |
`,
  },
//   {
//     id: 77,
//     question: `uesContext hooks`,
//     answer: `useContext is a React hook that lets you access values from a Context directly inside a functional component — without using <Context.Consumer>.

// It helps share data (like theme, auth user, language, etc.) across the component tree without manually passing props at every level.

// ✅ When to Use?
// Share global data like user info, theme, auth state, language

// Avoid prop drilling (passing props through many nested components)`,
//     example: `// AuthContext.js
// export const AuthContext = React.createContext(null);

// // App.jsx
// <AuthContext.Provider value={{ user: 'Swapnali', isLoggedIn: true }}>
//   <Dashboard />
// </AuthContext.Provider>

// // Dashboard.jsx
// const { user, isLoggedIn } = useContext(AuthContext);`,
//   },
//   {
//     id: 78,
//     question: `What is JWT (JSON Web Token) in React?`,
//     answer: `JWT (JSON Web Token) is a secure, compact token format used to authenticate users between a client (like React) and a server (like Node.js).

// It is widely used in token-based authentication to ensure that a user is who they say they are.

// 🔗 Structure of a JWT:
// A JWT has 3 parts, separated by . (dots): Header.Payload.Signature

// ✅ How JWT Works in a React App
// 1.Login Request:

// User submits login form in React (email/password)

// React sends a POST request to backend /login

// 2.Backend Verifies and Returns Token:

// If valid, backend responds with a signed JWT

// 3.React Stores JWT:

// React stores token in localStorage or sessionStorage

// 4.Authenticated Requests:

// React sends token in Authorization header for secure APIs

// 5.Backend Validates Token:

// Server verifies the signature and allows/denies access`,
//     example: `| Practice                                 | Why It Matters             |
// | ---------------------------------------- | -------------------------- |
// | Always use HTTPS                         | Prevent token interception |
// | Don't store in cookies (unless HttpOnly) | Avoid XSS                  |
// | Set token expiration                     | Prevent long-lived access  |
// | Use strong secret key                    | Protect from brute force   |

// | Term       | Description                           |
// | ---------- | ------------------------------------- |
// | JWT        | A signed token for authentication     |
// | Usage      | Login, verify, and authorize requests |
// | Storage    | \`localStorage\` or \`sessionStorage\`    |
// | Secure it? | Yes, use HTTPS and token expiry       |
// `,
//   },
//   {
//     id: 79,
//     question: ``,
//     answer: ``,
//     example: ``,
//   },
//   {
//     id: 80,
//     question: `What is a Refresh Token in JWT Authentication? `,
//     answer: `A Refresh Token is a special kind of token used to get a new access token after the current one expires, without requiring the user to log in again.

// It is used alongside an Access Token to keep the user authenticated for a long session, securely.

// | Access Token                     | Refresh Token                        |
// | -------------------------------- | ------------------------------------ |
// | Short-lived (e.g. 15 mins)       | Long-lived (e.g. 7 days, 30 days)    |
// | Sent with every API call         | Used only when access token expires  |
// | Stored in memory or localStorage | Stored in \`HttpOnly Cookie\` (secure) |

// 🔧 How Refresh Token Flow Works:
// 1.✅ User logs in
// → Server issues Access Token + Refresh Token

// 2.✅ React stores:

// Access Token → localStorage or in-memory

// Refresh Token → HttpOnly Cookie (secure, not accessible by JS)

// 3.❌ Access Token expires
// → React sends Refresh Token to /refresh-token

// 4.✅ Server verifies Refresh Token
// → Returns a new Access Token

// 5.🔁 Process repeats until Refresh Token also expires

// | Term          | Purpose                                                 | Lifetime         |
// | ------------- | ------------------------------------------------------- | ---------------- |
// | Access Token  | Authenticates API requests                              | Short (e.g. 15m) |
// | Refresh Token | Used to get a new access token                          | Long (e.g. 7d)   |
// | Storage       | Access: memory/localStorage; Refresh: cookie (HttpOnly) |                  |

// ⚠️ Best Practices:
// Store refresh token in HttpOnly cookies (to prevent XSS)

// Use rotation: issue new refresh token every time

// Blacklist refresh tokens on logout

// Use refresh token endpoint only over HTTPS`,
//     example: `[ React App ]
//      |
//      |— login —>
//      |<— access + refresh tokens —
//      |
//      |— API call with access token —>
//      |<— 401 Unauthorized (expired) —
//      |
//      |— request refresh token —>
//      |<— new access token —
//      |
//      |— retry API call —>
// `,
//   },
//   {
//     id: 81,
//     question: `Public route and privets route how to identify ?`,
//     answer: `| Type              | Accessible To               | Examples                     |
// | ----------------- | --------------------------- | ---------------------------- |
// | **Public Route**  | Everyone (logged in or not) | Login, Register, Home        |
// | **Private Route** | Only logged-in users        | Dashboard, Profile, Settings |


// ✅ Goal:
// We want to:
// Show Public pages like /login to unauthenticated users only
// Restrict Private pages like /dashboard to authenticated users only
// `,
//     example: `| Route Type    | Component Wrapper  | Redirects to                 |
// | ------------- | ------------------ | ---------------------------- |
// | Public Route  | \`<PublicRoute />\`  | To `/dashboard` if logged in |
// | Private Route | \`<PrivateRoute />\` | To `/login` if not logged in |
// `,
//   },
//   {
//     id: 82,
//     question: `Why Use Next.js Over Plain React?`,
//     answer: `🔹 Quick Answer:
// Next.js = React + Performance + SEO + Routing + Backend + Optimization built-in.

// If you're using plain React and manually adding routing, SSR, APIs, image optimization, etc., Next.js gives it all out-of-the-box.

// | React              | Next.js                        |
// | ------------------ | ------------------------------ |
// | \`react-router-dom\` | File-based routing (no config) |

// Use Next.js when you want:
// SEO optimization
// Fast loading pages
// Simpler routing
// Full-stack capability (React + backend)
// Production-ready features

// Use React (CRA) when you:
// Want full control
// Are building small projects/tools
// Don’t need SSR or SEO`,
//     example: `| Feature                   | React (CRA)           | Next.js           |
// | ------------------------- | --------------------- | ----------------- |
// | Routing                   | Manual (react-router) | Auto file-based   |
// | SSR / SSG                 | ❌                     | ✅                 |
// | SEO support               | ❌                     | ✅                 |
// | API routes                | ❌                     | ✅                 |
// | Image Optimization        | ❌                     | ✅                 |
// | Performance (Static HTML) | ❌                     | ✅                 |
// | Deployment                | Manual                | 1-click on Vercel |
// `,
//   },
//   {
//     id: 83,
//     question: `Single Page Application (SPA) vs Server-Side Rendering (SSR) – Explained for React/Next.js`,
//     answer: `A Single Page Application (SPA) is a web app that loads a single HTML page, and dynamically updates content via JavaScript without refreshing the entire page.

// 📌 React (CRA) is a typical SPA framework.
// | Feature            | SPA (React)                          |
// | ------------------ | ------------------------------------ |
// | Page Load          | Loads once, then JS takes over       |
// | Routing            | Handled client-side (\`react-router\`) |
// | SEO                | ❌ Bad SEO (content loads via JS)     |
// | Speed (after load) | ✅ Fast (no reload)                   |
// | Initial Load       | ❌ Slower (JS-heavy)                  |

// In Server-Side Rendering, the HTML for each page is rendered on the server and sent to the browser.

// 📌 Next.js supports SSR out of the box.
// | Feature       | SSR (Next.js)                       |
// | ------------- | ----------------------------------- |
// | Page Load     | HTML rendered on server per request |
// | Routing       | File-based, rendered on demand      |
// | SEO           | ✅ Great SEO (HTML ready on load)    |
// | Speed         | ✅ Fast first load                   |
// | JS Dependency | Works without JS (partial support)  |
// `,
//     example: `| Feature          | SPA (React)      | SSR (Next.js)              |
// | ---------------- | ---------------- | -------------------------- |
// | First Load Speed | ⏳ Slow           | ⚡ Fast                     |
// | SEO Friendly     | ❌ No             | ✅ Yes                      |
// | Full Page Reload | ❌ Never          | ✅ Happens if needed        |
// | Best Use Case    | Dashboards, Apps | Blogs, E-commerce, Landing |

// | Which One to Use You need...       | Choose              |
// | ---------------------------------- | ------------------- |
// | SEO, fast first load, public app   | ✅ **SSR (Next.js)** |
// | JS-based dashboard, internal tools | ✅ **SPA (React)**   |
// `,
//   },
//   {
//     id: 84,
//     question: `Next.js`,
//     answer: `Next.js is a React framework that provides:
// ✅ Server-side rendering (SSR)
// ✅ Static site generation (SSG)
// ✅ API routes (Backend inside frontend)
// ✅ Built-in routing, SEO, image optimization, lazy loading
// 👉 Think of it as React + Backend + SEO + Performance, all in one.

// | Feature            | React (CRA) | Next.js      |
// | ------------------ | ----------- | ------------ |
// | SEO                | ❌           | ✅ SSR/SSG    |
// | Routing            | Manual      | ✅ File-based |
// | API (Backend)      | ❌           | ✅ API routes |
// | Performance        | Basic       | ✅ Optimized  |
// | Image Optimization | ❌           | ✅ Built-in   |
// | Code Splitting     | Manual      | ✅ Automatic  |

// 🚀 Core Features in One Line:
// 1.File-based Routing:
// pages/about.js → /about route automatically.

// 2.Pre-rendering:
// Use getServerSideProps() for SSR, or getStaticProps() for SSG.

// 3.API Routes:
// pages/api/user.js → http://localhost:3000/api/user

// 4.Image Component:
// Use next/image for optimized, lazy-loaded images.

// 5.App Directory (New):
// Next 13+ supports app/ directory for layouts, nested routing, and React Server Components.

// `,
//     example: `my-next-app/
// ├── pages/
// │   ├── index.js          ← Home Page
// │   ├── about.js          ← /about route
// │   └── api/
// │       └── hello.js      ← /api/hello endpoint
// ├── public/               ← Static assets (images, icons)
// ├── styles/               ← CSS/SCSS files
// └── next.config.js        ← Configuration

// npx create-next-app@latest my-app
// cd my-app
// npm run dev`,
//   },
//   {
//     id: 85,
//     question: `Next.js Routing vs React Router DOM – Key Differences Explained`,
//     answer: `| Feature        | **React (with react-router-dom)** | **Next.js**                              |
// | -------------- | --------------------------------- | ---------------------------------------- |
// | Routing system | Manual (you define routes)        | **File-based routing** (auto)            |
// | Setup required | Yes (install + define routes)     | No setup — uses \`pages/\` folder          |
// | Nested routes  | Manually using \`<Outlet />\`       | By folder nesting (\`pages/blog/[id].js\`) |
// | Dynamic routes | \`/:id\` manually                   | \`[id].js\` automatically                  |
// `,
//     example: `| Feature         | React Router DOM    | Next.js Routing              |
// | --------------- | ------------------- | ---------------------------- |
// | Route config    | Manual              | File-based (auto)            |
// | Code Splitting  | Manual              | Automatic                    |
// | Dynamic Routes  | \`:param\`            | \`[param].js\`                 |
// | Nested Routes   | \`<Outlet />\`        | Folder structure             |
// | Middleware/Auth | Custom hook/context | Built-in middleware possible |
// | SEO Friendly    | ❌ (CSR only)        | ✅ (SSR/SSG)                  |
// `,
//   },
];

export default reactData;
