import React from 'react';
//import logo from './logo.svg';
import './App.css';
//import HelloFunctional from './component/HelloFunctional';
//import HelloClass from './component/HelloClass';
//import HelloES6 from './component/HelloFunctionalES6';

//named import should be always imported within {}
 //import {HelloFunctionalES6} from './component/HelloFunctionalES6';
 //import Display from './component/display';
  //import Welcome from './component/Welcome';
  import Count from './component/Count';
function App() {
  return (
    <div className="App">
      {/* <h1><strong>Hello App Component</strong></h1> */}
      {/* <HelloFunctional></HelloFunctional>
     <HelloFunctional></HelloFunctional>
     <HelloFunctional></HelloFunctional>
     <HelloFunctional/>
      <HelloClass name="Max" age="24"></HelloClass>
     <HelloClass name="Mani" age="29"></HelloClass>
      <HelloES6/>
      <HelloFunctionalES6/>

      <Display firstName="John" lastName="Doe" age="45">
     <p>Some text data from John</p>
     </Display><br/>
      <Display firstName="Peter" lastName="Warry" age="60">
        <input type ="text" placeholder='Enter your details'/>
      </Display> */}
     {/* <Welcome/> */}
     <Count/>
    </div> 
  ); 
  }

export default App;
