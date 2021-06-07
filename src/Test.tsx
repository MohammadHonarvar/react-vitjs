import React, { useEffect, useLayoutEffect, useState } from 'react';

export function Test(props: {
  children:
    | string
    | number
    | boolean
    | {}
    | React.ReactElement<any, string | React.JSXElementConstructor<any>>
    | React.ReactNodeArray
    | React.ReactPortal
    | null
    | undefined;
}) {
  const [name, setName] = useState('David');

  useEffect(() => {
    console.log('Test `useEffect` ran');
    setName('Jeff');
    console.log('(`useEffect`)Hey TEST: %s', name);
  });

  useLayoutEffect(() => {
    console.log('Test `useLayoutEffect` ran');
  }, []);

  return (
    <div>
      <p>Hello {name}</p>
      {props.children}
    </div>
  );
}
