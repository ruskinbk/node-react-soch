/* eslint-disable react/prop-types */

const Box = ({ currentSymbol, onClick }) => {
  return (
    <button className="squares" onClick={onClick}>{currentSymbol}</button>
  )
}

export default Box