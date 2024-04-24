import { useContext } from "react";
import { ThemeContext } from "../context/ThemeContext";

/* eslint-disable react/prop-types */
const Button = (props) => {
  const [theme, setTheme] = useContext(ThemeContext);
  const { label, isDisabled=false, onClick } = props;
  return (
    <button 
      disabled={isDisabled} 
      onClick={() => {
        setTheme(theme === 'light' ? 'dark' : 'light');
      }}
    >{theme}</button>
  )
}

export default Button;