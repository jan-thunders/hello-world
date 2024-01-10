import React from "react" // 17.2
import "./style.css" 
import Button from "./Components/Button"

const App=()=>{

    let a = 10
    let h1Style = {textAlign: "center", border: "2px solid green"}

















    return (
       <div className="hello">
            <h1 style={h1Style}> Hello World , {a} </h1>
            <p> {2+3+4+5} </p>
            <p>Hey how are you!</p>
            
             <Button 
                name="Apple"
                color="green"
                price="100"
             />
            
            <Button 
                name="Banana"
                color="yellow"
                price="60"
             />

             <Button 
                name="Orange"
                color="orange"
                price="80"
             />
            
            
       </div>
     )
    










}

export default App







{/* <h1 style={{textAlign: "center", border: "2px solid green"}}> Hello World , {a} </h1> */}