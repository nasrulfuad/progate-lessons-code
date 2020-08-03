import React from 'react';

class ContactForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      isSubmitted: false,
      email: '',
      /* Add hasEmailError */
      hasEmailError: false,
    };
  }

  handleEmailChange(event) {
    const inputValue = event.target.value;
    this.setState({email: inputValue});
  }

  handleSubmit() {
    this.setState({isSubmitted: true});
  }

  render() {
    /* Declare the variable emailErrorText */
    let emailErrorText;
    
    /* Create an if statement with hasEmailError as the condition */
    if (this.state.hasEmailError) {
      emailErrorText = (
        <p className='contact-message-error'>
          Please enter your email address
        </p>
      );
    }

    let contactForm;
    if (this.state.isSubmitted) {
      contactForm = (
        <div className='contact-submit-message'>
          Sent Successfully
        </div>
      );
    } else {
      contactForm = (
        <form onSubmit={() => {this.handleSubmit()}}>
          <p>Email Address (required)</p>
          <input
            value={this.state.email}
            onChange={(event) => {this.handleEmailChange(event)}}
          />
          {/* Display emailErrorText */}
          {emailErrorText}
          
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
