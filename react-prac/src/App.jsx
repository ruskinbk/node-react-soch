import { useState, useEffect } from 'react';
import Button from './components/Button';
// useState, useEffect

// always starts with use
// can only be used inside component or custom hook

const App = () => {
  const [count, setCount] = useState(0);
  
  useEffect(() => {
    console.log('This is from use effect');
  }, []);
  
  return (
    <>
      <h1>Hello</h1>
      <p>Count  is {count}</p>
      <Button 
        label="Hello" 
        onClick={() => {
          setCount(count + 1);
        }} 
      />
    </>
  );
}

export default App;