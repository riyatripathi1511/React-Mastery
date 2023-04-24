import React from "react";
import "./display.css"

// function Display(props){
//     <div>
//         <h4>Hello props.firstName props.lastName</h4>
//     </div>
// }

const Display = (props) => {
    console.log(props);
    //props has immutable properties
    //props.firstName ="XYZ"
    return(
     <div>
       <div style ={{margin:"auto",backgroundColor:"skyblue",border:"1px solid grey",height:"90px",width:"300px"}}>
        <h3>Hello {props.firstName}  {props.lastName}</h3> 
       <h4 className="text-styling">Your age is {props.age}</h4>
     </div>
     {props.children}
     </div>
    );
}
export default Display;