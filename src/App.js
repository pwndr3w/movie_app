import React from 'react';

function Food({fav}) {
  return <h1>I like {fav}</h1>
}


function App() {
  return (
    <div className="App" >
      Edit <code>src/App.js</code> and save to reload Part 2.
      <h1>Hello</h1>
      <Food fav="kimchi"/>
    </div>
  
  );
}

export default App;
