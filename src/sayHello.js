import React from 'react';

function Hello(){

    
  // logic..added before return
  const sayHello = () => {
    console.log('hello');
  }

  //The below divs are NOT in HTML, it is JSX, but react compiles it into HTML
    return(
        <div>
          <h1>This is the Hello component</h1>
          <button onClick={sayHello}>Hello</button>
        </div>
    );
  
}

export default Hello;