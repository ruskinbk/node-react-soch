/* eslint-disable react/prop-types */

import { useContext } from "react";
import { ThemeContext } from "../context/ThemeContext";

// can pass props
// should be always object in the component

// named export must have same name in the imported files
const InputField = (props) => {
  const [theme] = useContext(ThemeContext);

  return (
    <label>
      <span>{props.label} - {theme}</span>
      <input type="text" />
    </label>
  );
}

export default InputField; // we can rename in the imported files

