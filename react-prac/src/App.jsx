import Test from './components/Test';
import ThemeProvider from './context/ThemeContext';
// import { useState, useEffect, } from 'react';
// import Button from './components/Button';
// import InputField from './components/InputField';

import { BrowserRouter, Link, Route, Routes } from 'react-router-dom';

const App = () => {  
  // const [count, setCount] = useState(0);

  // useEffect(() => {
  //   console.log("THis is useEffect");
  // }, []);

  return (
    <ThemeProvider>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<p>Home - <Link to='/about'>About page</Link> </p>} />
          <Route path="/about" element={<p>About</p>} />
          <Route path="/home/:id" element={<Test />} />
          <Route path="*" element={<p>Not Found</p>} />
        </Routes>
      </BrowserRouter>
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

{/* <InputField label="Password" />
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
        /> */}

export default App;