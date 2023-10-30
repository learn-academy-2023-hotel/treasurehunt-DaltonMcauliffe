import React from "react"

const Square = ({ value }) => {
// destructuring props  
//  const { value } = props is same as props.value
// instead pass the destructured prop in parameters
  return (
    <>
      <div className="square">{value}</div>
    </>
  )
}
export default Square
