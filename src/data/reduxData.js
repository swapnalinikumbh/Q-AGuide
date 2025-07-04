const reduxData =[
  {
    id: 1,
    question:  `What is Redux flow? `,
    answer:
       `Redux follows a unidirectional data flow to manage application state in a predictable way. The main steps in Redux flow are:

1. "Store": The single source of truth that holds the application state.
2. "Action": A plain JavaScript object that describes *what happened*. It has a \`type\` and optional \`payload\`.
3. "Dispatch": A method used to send an action to the store.
4. "Reducer": A pure function that receives the current state and an action, then returns a new updated state.
5. "Subscribe/Selector": Components use \`useSelector\` (React-Redux) to subscribe and get the updated state from the store.
  `,
    example:
       `User clicks button → dispatch(action) → reducer(state, action) → store updates → subscribed component re-renders `
  },
  {
    id: 2,
    question:  `What is Redux Toolkit? `,
    answer:
       `Redux Toolkit simplifies Redux development by reducing boilerplate. It provides methods like createSlice, configureStore, and uses Immer for immutable updates. 
       
       🔑 Key Features:
\`configureStore()\` – Sets up the Redux store with good defaults (DevTools, thunk middleware).

\`createSlice()\` – Generates actions + reducers in one step.

\`createAsyncThunk()\` – Handles async logic like API calls.

Less boilerplate – No need to write action types manually.

Immutability built-in – Uses Immer.js under the hood.

`,
    example:
       `const slice = createSlice({ name: 'counter', initialState: 0, reducers: { increment: (state) => state + 1 } }) `
  },
  {
    id: 3,
    question:  `What is Redux Thunk? `,
    answer:
       `Redux Thunk is middleware that lets you write action creators that return a function instead of an action. 
        Useful for async calls like APIs. `,
    example:
       `const fetchData = () => async (dispatch) => { const res = await axios.get('/api'); dispatch(setData(res.data)); } `
  },
  {
    id: 4,
    question:  `What is middleware in Redux? `,
    answer:
       `Middleware intercepts dispatched actions before they reach reducers. 
        Common uses: async logic (thunk), logging, auth, caching. `,
    example:
       `const logger = store => next => action => { console.log(action); return next(action); } `
  },
  {
    id: 5,
    question:  `What are interceptors in Redux? `,
    answer:
       `Interceptors are custom middleware functions that can modify, cancel, or enrich actions before they reach reducers. `,
    example:
       `const authInterceptor = store => next => action => { if (!store.getState().auth) return; next(action); } `
  },
  {
    id: 6,
    question:  `What is Redux Form? `,
    answer:
       `Redux Form manages form state in the Redux store. It handles field values, validation, and submission logic using Redux. `,
    example:
       `<Field name=\"email\" component=\"input\" type=\"email\" /> `
  },
  {
    id: 7,
    question:  `Redux Thunk vs Redux Saga? `,
    answer:
       `Thunk uses functions and is easier for simple async logic. 
        Saga uses generator functions and is better for complex workflows. 
        
        Redux Thunk and Redux Saga are both middleware libraries for handling asynchronous operations in Redux, but they differ in approach, complexity, and usage:

1.  "Concept":
   -  "Thunk": Lets you write functions (thunks) that can dispatch actions and access state.
   -  "Saga": Uses generator functions to handle side effects declaratively with effects like call, put, takeEvery.

2.  "Code Style":
   -  "Thunk": Imperative (step-by-step).
   -  "Saga": Declarative (describe what should happen).

3.  "Complexity":
   -  "Thunk": Simple to set up and use, ideal for basic async logic.
   -  "Saga": More powerful but complex; suitable for large-scale apps with complex workflows.

4.  "Debugging":
   -  "Thunk": Harder to trace async flows.
   -  "Saga": Easier debugging with sagas and effect tracking.

5.  "Use Cases":
   -  "Thunk": Ideal for simple API calls, form handling.
   -  "Saga": Ideal for polling, retries, cancellations, sequencing, background tasks.

6.  "Testing":
   -  "Thunk ": Easier to test as plain functions.
   -  "Saga ": Requires knowledge of generator testing but good for complex flows.`,
    example:
       `Thunk: dispatch(fetchUser()) | Saga: yield takeEvery('FETCH_USER', fetchUserSaga) `
  },
  {
    id: 8,
    question:  `How to get data from Redux store in a component? `,
    answer:
       `Use useSelector hook to read state and useDispatch to dispatch actions from React components. `,
    example:
       `const data = useSelector(state => state.counter); const dispatch = useDispatch(); `
  },
  {
    id: 9,
    question:  `Is multiple Redux store possible? `,
    answer:
       `Technically yes, but not recommended. It breaks the single source of truth. Use one store with combineReducers instead. `,
    example:
       `const store1 = createStore(reducer1); const store2 = createStore(reducer2); // avoid this `
  },
  {
    id: 10,
    question:  `Difference between useState and Redux? `,
    answer:
       `useState is local to a component. 
        Redux is global and shares state across components. Redux is better for complex app-wide state. `,
    example:
       `useState: const [count, setCount] = useState(0) | Redux: useSelector + useDispatch `
  },
  {
    id: 11,
    question:  `How to integrate Redux in a React app? `,
    answer:
       `Install redux, react-redux. Create store and reducer. Use Provider in index.js and useSelector/useDispatch in components. `,
    example:
       `createStore(reducer) → <Provider store={store}> → useSelector / useDispatch `
  }
];
export default reduxData