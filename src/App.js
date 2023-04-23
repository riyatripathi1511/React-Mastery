import React from 'react';
//import logo from './logo.svg';
import './App.css';
import HelloFunctional from './component/HelloFunctional';
import HelloClass from './component/HelloClass';
function App() {
  return (
    <div className="App">
     <h1><strong>Hello App Component</strong></h1>
     <HelloFunctional></HelloFunctional>
     <HelloFunctional></HelloFunctional>
     <HelloFunctional/>
     <HelloClass></HelloClass>
    </div> 
  );
}

export default App;
