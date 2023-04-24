import React, {Component} from "react";

class Welcome extends  Component {
  constructor(){
    super(); //calling super class constructor
    //data in the state is mutable and can be modified
    this.state ={name:"John Doe",age:"45"};
  }
  changeData(){
    debugger;
    this.setState({
      name:"Peter Warry",
      age:"32"
    });
  }
  render(){
     return(
       <div>
         <h2>Name is {this.state.name} and Age is {this.state.age}</h2>
         <button onClick={()=>this.changeData()}>Change details</button>
       </div>
     );
  }
}
export default Welcome;