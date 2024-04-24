import { useState, useEffect, } from 'react';
import Button from './components/Button';
import ThemeProvider from './context/ThemeContext';
import InputField from './components/InputField';

const App = () => {  
  const [count, setCount] = useState(0);

  useEffect(() => {
    console.log("THis is useEffect");
  }, []);

  return (
    <ThemeProvider>
      <InputField label="Password" />
      <p>Count  is {count}</p>
      <Button 
        label="Increment" 
        onClick={() => {
          setCount(count + 1);
        }} 
      />
      <Button 
        label="Decrement" 
        onClick={() => {
          setCount(count - 1);
        }} 
      />
    </ThemeProvider>
  );
}


// JSX
// looks like HTML but it's not
// use {} to have js inside JSX
// attribute camelCase

// Components
// function
// returns jsx element
// single rooted jsx element

// hooks

export default App;