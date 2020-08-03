import React from 'react';

class App extends React.Component {
  constructor(props) {
    super(props);
    // Define the state
    this.state = {count: 0};
  }
  
  render() {
    return (
      <div>
        <h1>
          {/* Display the value of state */}
          {this.state.count}
        </h1>
        {/* Add a <button> tag */}
        <button>+</button>
        
      </div>
    );
  }
}

export default App;
