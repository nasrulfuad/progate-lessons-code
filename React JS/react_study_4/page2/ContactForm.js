import React from 'react';

class ContactForm extends React.Component {
  render() {
    return (
      <div className='contact-form'>
        <form>
          <p>Email Address (required)</p>
          {/* Add the input tag */}
          <input />
          
          <p>Message (required)</p>
          {/* Add the textarea tag */}
          <textarea />
          
          {/* Add the submit button */}
          <input type="submit" value="Send" />
          
        </form>
      </div>
    );
  }
}

export default ContactForm;
