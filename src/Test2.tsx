import React, { useEffect, useLayoutEffect, useState } from 'react';

export function Test2() {
  const [family, setFamily] = useState('Moies');

  useEffect(() => {
    console.log('Test2 `useEffect` ran');
  });

  useLayoutEffect(() => {
    console.log('Test2 `useLayoutEffect` ran');
  }, []);

  return <p>Hello {family}</p>;
}
