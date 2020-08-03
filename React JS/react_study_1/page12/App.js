import React from 'react';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {name: 'Ken the Ninja'};
  }
  
  // Define a handleClick method
  handleClick(name) {
    this.setState({name: name});
  }
  
  render() {
    return (
    	<div>
    	  <h1>Hello, {this.state.name}!</h1>
    	  {/* Change the onClick event so that it calls the handleClick method */}
        <button onClick={() => {this.handleClick('Master White')}}>Master White</button>
        
    	  {/* Change the onClick event so that it calls the handleClick method */}
        <button onClick={() => {this.handleClick('Ken the Ninja')}}>Ken the Ninja</button>
        
      </div>
    );
  }
}

export default App;
