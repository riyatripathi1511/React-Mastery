import React from 'react';
//import logo from './logo.svg';
import './App.css';
import HelloFunctional from './component/HelloFunctional';
import HelloClass from './component/HelloClass';
// import HelloES6 from './component/HelloFunctionalES6';

import {HelloFunctionalES6} from './component/HelloFunctionalES6';
function App() {
  return (
    <div className="App">
     <h1><strong>Hello App Component</strong></h1>
     <HelloFunctional></HelloFunctional>
     <HelloFunctional></HelloFunctional>
     <HelloFunctional/>
     <HelloClass></HelloClass>
     {/* <HelloES6/> */}
     <HelloFunctionalES6/>
    </div> 
  );
}

export default App;
