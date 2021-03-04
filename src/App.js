import React from 'react';
import Hello from './sayHello';

function App(){ 

  return(
    <div>
      <h1>Hello React! new</h1>
      <h1>This is the App Component</h1>
      <Hello />
    </div>
  );

}

export default App; //exports function to the 'root'
