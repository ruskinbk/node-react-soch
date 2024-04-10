/* eslint-disable react/prop-types */
const Button = (props) => {
  const { label, isDisabled=false, onClick } = props;
  return (
    <button 
      disabled={isDisabled} 
      onClick={onClick}
    >{label}</button>
  )
}

export default Button;