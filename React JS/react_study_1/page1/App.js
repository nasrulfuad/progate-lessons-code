import React from 'react';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {name: 'Ken the Ninja'};
  }
  handleClick(name) {
    this.setState({name: name});
  }
  render() {
    return (
    	<div>
    	  <h1>Hello, {this.state.name}!</h1>
        <button onClick={() => this.handleClick('Master White')}>Master White</button>
        <button onClick={() => this.handleClick('Ken the Ninja')}>Ken the Ninja</button>
      </div>
    );
  }
}

export default App;
