import React, { useEffect, useLayoutEffect, useState } from 'react';
import './App.css';
import { Test } from './Test';
import { Test2 } from './Test2';

function App() {
  const [count, setCount] = useState(-1);

  useEffect(() => {
    console.log('App `useEffect` ran');
    console.log('(`useEffect`)Hey APP: %s', count);
  });

  useLayoutEffect(() => {
    console.log('App `useLayoutEffect` ran');
    setCount(-2);
    console.log('(`useLayoutEffect`)Hey APP: %s', count);
  }, []);

  return (
    <div className='App'>
      <p>Hello Vite + React!</p>
      <p>
        <button onClick={() => setCount((count) => count)}>
          count is: {count}
        </button>
      </p>
      <Test>
        <Test2 />
      </Test>
    </div>
  );
}

export default App;
