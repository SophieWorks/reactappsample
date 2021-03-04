import React from 'react';
import Video from './components/video';
import Top from './top';

function App(){ 

  return(
    <div className="app">
      <Top />
      <h1>Hello React! new</h1>
      <h1>This is the App Component</h1>
      <Video vidlink = "Tune in as Reanisa Mendonca from "/>

    </div>
  );

}

export default App; //exports function to the 'root'
