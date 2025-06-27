const reactpracticeData = [
  {
    id: 1,
    question: `fetch data from https://dummyjson.com/users and display the first name and last name of each user in a list using React functional components and hooks.`,
    answer: `It fetches user data once when the component loads.
It stores that data in state using useState.
It displays just first and last names using .map().
`,
    example: `import React, { useEffect, useState } from 'react';

function UserList() {
  const [users, setUsers] = useState([]);

  useEffect(() => {
    fetch("https://dummyjson.com/users") // Replace with correct URL
      .then(res => res.json())
      .then(data => {
        setUsers(data.users);
        console.log(data);// 'users' is the array inside the response
      })
      .catch(err => console.error("Error fetching users:", err));
  }, []);

  return (
    <div>
      <h2>User Names</h2>
      <ul>
        {users.map(user => (
          <li key={user.id}>
            {user.firstName} {user.lastName}
          </li>
        ))}
      </ul>
    </div>
  );
}

export default UserList;`,
  },
  {
    id: 2,
    question: `fetch data from https://dummyjson.com/users and display the first name and last name of each user in a list using React functional components and hooks. Use async/await syntax for fetching data.`,
    answer: ` This code uses async/await to fetch user data.
It defines an async function inside useEffect to handle the fetch.
It sets the fetched data to state and displays first and last names using .map().`,
    example: `import React, { useEffect, useState } from 'react';

function UserList() {
  const [users, setUsers] = useState([]);

  useEffect(() => {
    // Define an async function inside useEffect
    const fetchUsers = async () => {
      try {
        const response = await fetch("https://dummyjson.com/users");
        const data = await response.json();
        setUsers(data.users); // Set the users array from API response
        console.log(data);
      } catch (error) {
        console.error("Error fetching users:", error);
      }
    };

    fetchUsers(); // Call the async function
  }, []);

  return (
    <div>
      <h2>User Names</h2>
      <ul>
        {users.map(user => (
          <li key={user.id}>
            {user.firstName} {user.lastName}
          </li>
        ))}
      </ul>
    </div>
  );
}

export default UserList;`,
  },
  {
    id: 3,
    question: `increment and decrement a counter using React functional components and hooks. The initial count should be 0. Provide buttons to increment and decrement the count.`,
    answer: `Starts with count = 0.
Clicking Increment increases it by 1.
Clicking Decrement decreases it by 1.
Disables decrement button when count = 0 (optional safety check).`,
    example: `import React, { useState } from 'react';

function Counter() {
  const [count, setCount] = useState(0); // initial count is 0

  return (
    <div style={{ textAlign: 'center', marginTop: '50px' }}>
      <h2>Count: {count}</h2>
      <button onClick={() => setCount(count + 1)}>Increment</button>
      <button 
        onClick={() => setCount(count - 1)} 
        disabled={count === 0} // optional: prevent negative count
        style={{ marginLeft: '10px' }}
      >
        Decrement
      </button>
    </div>
  );
}

export default Counter;`,
  },
  {
    id: 4,
    question: `countdown timer that starts from 10 and decreases every second until it reaches 0. Use React functional components and hooks.`,
    answer: `Starts counting down from 10.
Decreases by 1 every second using setInterval.
Stops automatically at 0.
Uses cleanup (clearInterval) to prevent memory leaks.`,
    example: `import React, { useEffect, useState } from 'react';

function Countdown() {
  const [time, setTime] = useState(10); // starting value

  useEffect(() => {
    if (time === 0) return; // stop when time reaches 0

    const timer = setInterval(() => {
      setTime(prev => prev - 1);
    }, 1000); // decrease every 1 second

    return () => clearInterval(timer); // cleanup interval
  }, [time]);

  return (
    <div style={{ textAlign: 'center', marginTop: '50px' }}>
      <h2>Countdown: {time}</h2>
    </div>
  );
}

export default Countdown;`,
  },
  {
    id: 5,
    question: `output of the following code snippet`,
    answer: `The number after "Seconds:" automatically increases every second.
It starts from 0 and keeps counting up indefinitely.
This continues until the component is unmounted (removed from the screen).`,
    example: `
    import React,{ useState, useEffect } from 'react';

function App() {
  const [time, setTime] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setTime(prevTime => prevTime + 1);
    }, 1000);

    return () => clearInterval(interval); // Cleanup when component unmounts
  }, []);

  return <div>Seconds: {time}</div>;
}

export default App;
// Output: The component will display the number of seconds since it mounted, updating every second.
// Initially, it will show "Seconds: 0" and then increment every second.
Seconds: 0
Seconds: 1
Seconds: 2
Seconds: 3
Seconds: 4
...`,
  },
  {
    id: 6,
    question: ``,
    answer: ``,
    example: ``,
  },
  {
    id: 7,
    question: ``,
    answer: ``,
    example: ``,
  },
  {
    id: 8,
    question: ` `,
    answer: ``,
    example: ``,
  },
  {
    id: 9,
    question: ``,
    answer: ``,
    example: ``,
  },
  {
    id: 10,
    question: ``,
    answer: ``,
    example: ``,
  },
  {
    id: 11,
    question: ` `,
    answer: ``,
    example: ``,
  },
  {
    id: 12,
    question: ``,
    answer: ``,
    example: ``,
  },
  {
    id: 13,
    question: ``,
    answer: ``,
    example: ``,
  },
  {
    id: 14,
    question: ` `,
    answer: ``,
    example: ``,
  },
  {
    id: 15,
    question: ``,
    answer: ``,
    example: ``,
  },
];
export default reactpracticeData;
