import React from 'react';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {name: 'Ken the Ninja'};
  }
  
  render() {
    return (
    	<div>
    	  <h1>Hello, {this.state.name}!</h1>
    	  {/* Change the state for the onClick event */}
        <button onClick={() => {
          this.setState({name: 'Master White'});
        }}>Master White</button>
        
        {/* Change the state for the onClick event */}
        <button onClick={() => {
          this.setState({name: 'Ken the Ninja'});
        }}>Ken the Ninja</button>
        
      </div>
    );
  }
}

export default App;
