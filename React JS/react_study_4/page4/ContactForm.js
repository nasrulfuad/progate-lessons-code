import React from 'react';

class ContactForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      isSubmitted: false,
    };
  }

  /* Declare the handleSubmit method  */
  handleSubmit() {
    this.setState({ isSubmitted: true });
  }

  render() {
    let contactForm;
    if (this.state.isSubmitted) {
      contactForm = (
        <div className='contact-submit-message'>
          Sent Successfully
        </div>
      );
    } else {
      contactForm = (
        /* Add onSubmit to the form tag */
        <form onSubmit={() => {this.handleSubmit()}} >
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
        {contactForm}
      </div>
    );
  }
}

export default ContactForm;
