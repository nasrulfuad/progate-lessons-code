import React from 'react';

class ContactForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      /* Initialize the isSubmitted state */
      isSubmitted: false
    };
  }

  render() {
    /* Declare the contactForm variable */
    let contactForm;
    
    /* Create an if statement with isSubmitted as the conditional statement */
    if (this.state.isSubmitted) {
      contactForm = (
        <div className='contact-submit-message'>
          Sent Successfully
        </div>
      );
    } else {
      contactForm = (
        <form>
          <p>Email Address (required)</p>
          <input />
          <p>Message (required)</p>
          <textarea />
          <input
            type='submit'
            value='Send'
          />
        </form>
      );
    }
    
    return (
      <div className='contact-form'>
        {/* Erase code below and display the contactForm variable */}
        {contactForm}
        {/* Erase until here */}
      </div>
    );
  }
}

export default ContactForm;
