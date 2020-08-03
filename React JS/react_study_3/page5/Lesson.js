import React from 'react';

class Lesson extends React.Component {
  render() {
    const {name, image, introduction} = this.props;
    return (
      <div className='lesson-card'>
        <div className='lesson-item'>
          <p>{name}</p>
          <img src={image} />
        </div>
        {/* Prepare the modal */}
        <div className='modal'>
          <div className='modal-inner'>
            <div className='modal-header'></div>
            <div className='modal-introduction'>
              {/* Display the lesson name */}
              <h2>{name}</h2>
              
              {/* Display the lesson introduction */}
              <p>{introduction}</p>
              
            </div>
            <button className='modal-close-btn'>
              Close
            </button>
          </div>
        </div>
        
      </div>
    );
  }
}

export default Lesson;
