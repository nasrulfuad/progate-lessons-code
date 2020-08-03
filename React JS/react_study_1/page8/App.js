import React from 'react';

class App extends React.Component {
  render() {
    return (
    	<div>
    	  <h1>Hello, Ken the Ninja!</h1>
        {/* Add a onClick event that prints the name in the console within the button tag */}
        <button onClick={() => {
          console.log('Master White')
        }}>Master White</button>
        
        {/* Add a onClick event that prints the name in the console within the button tag */}
        <button onClick={() => {
          console.log('Ken the Ninja')
        }}>Ken the Ninja</button>
        
      </div>
    );
  }
}

export default App;
