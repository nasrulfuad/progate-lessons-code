import React from 'react';

class App extends React.Component {
  render() {
    // Define the name constant
    const name = 'Ken the Ninja';
    
    // Define the imgUrl constant
    const imgUrl = 'https://s3-ap-northeast-1.amazonaws.com/progate/shared/images/lesson/react/kentheninja.png';
    
    return (
      <div>
        {/* Use the name constant name to display "Ken the Ninja" */}
        <h1>{name}</h1>
        
        {/* Use the imgUrl constant to display the image */}
        <img src={imgUrl} />
        
      </div>
    );
  }
}

export default App;
