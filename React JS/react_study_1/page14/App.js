import React from 'react';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {count: 0};
  }
  
  // Create the handleClick method here
  handleClick(){
    console.log('siap');
    this.setState({count: this.state.count+1});
  }
  
  render() {
    return (
      <div>
        <h1>
          {this.state.count}
        </h1>
        {/* Add an onClick event in the <button> tag */}
        <button onClick={() => {
          this.handleClick();
        }}>+</button>
        
      </div>
    );
  }
}

export default App;
