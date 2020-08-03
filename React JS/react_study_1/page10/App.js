import React from 'react';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {name: 'Ken the Ninja'};
  }
  
  render() {
    return (
    	<div>
        {/* Rewrite the name part of "Hello, Ken the Ninja!" using state */}
    	  <h1>Hello,{this.state.name}!</h1>
    	  
        <button onClick={() => {console.log('Master White')}}>Master White</button>
        <button onClick={() => {console.log('Ken the Ninja')}}>Ken the Ninja</button>
      </div>
    );
  }
}

export default App;
