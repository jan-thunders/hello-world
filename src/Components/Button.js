import React from "react"


// props => properties
//console.log("Props",props)  // read only object
    //props =  {name: "Apple", color: "green"}
    // console.log(props.name)
    // obj.name = "Mango"

const Button = ({name, color,price})=>{ 
    // props =  {name: "Apple", color: "green", price: "100"}

  return (
      <div>
          <button>{name}</button>
          <p> It is {color} in Color</p>
          <p> It costs {price} </p>
      </div>
  )
}


export default Button










// function sum(a,b){ // parameters
//     console.log(a+b)
// }


// sum(10,20) // args
// sum(5,6)