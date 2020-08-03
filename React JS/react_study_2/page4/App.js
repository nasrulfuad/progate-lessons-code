import React from 'react';
// import the Language component
import Language from './Language';

class App extends React.Component {
  render() {
    return (
      <div>
        <h1>List of Languages</h1>
        <div className="language">
          {/* call the Language component here */}
          <Language />
          
        </div>
      </div>
    );
  }
}

export default App;
