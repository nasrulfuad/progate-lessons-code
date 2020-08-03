import React from 'react';

class Language extends React.Component {
  render() {
    return (
      <div className='language-item'>
        {/* change the code below to display name prop */}
        <div className='language-name'>{this.props.name}</div>
        
        {/* change value of src attribute to display image prop */}
        <img 
          className='language-image'
          src={this.props.image}
        />
        
      </div>
    );
  }
}

export default Language;
