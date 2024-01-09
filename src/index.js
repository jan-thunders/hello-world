import React from "react"; 
import ReactDOM from "react-dom";
import "./style.css" 

// JSX (99.99% HTML + 20% Js)

const Hello=()=>{

    let a = 10

    let h1Style = {textAlign: "center", border: "2px solid green"}

    return (
       <div className="hello">
            {/* <h1 style={{textAlign: "center", border: "2px solid green"}}> Hello World , {a} </h1> */}
            <h1 style={h1Style}> Hello World , {a} </h1>
            <p> {2+3+4+5} </p>
            <p>Hey how are you!</p>
       </div>
     )
    

}

{/* <Hello/> */}

ReactDOM.render(<Hello/>,  document.getElementById("root"))


//  
/* */























// // function
// function hello(){
//     return "hello world"
// }

// hello()


// // component -functional component
// function Hello(){
//     return <h1>Hello World</h1>
// }

// <Hello> </Hello>

// <Hello />

