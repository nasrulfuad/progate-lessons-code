import React from 'react';
import Language from './Language';

class App extends React.Component {
  render() {
    return (
      <div>
        <h1>List of Languages</h1>
        <div className="language">
          <Language />
          {/* Call the Language component twice */}
          <Language />
          <Language />
        </div>
      </div>
    );
  }
}

export default App;
