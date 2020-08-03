import React from 'react';

class Lesson extends React.Component {
  render() {
    return (
      <div className='lesson-card'>
        <div className='lesson-item'>
          {/* Insert the value of the name prop */}
          <p>{this.props.name}</p>
          {/* Specify the value of image prop for the src attribute */}
          <img src={this.props.image} />
          
        </div>
      </div>
    );
  }
}

export default Lesson;
