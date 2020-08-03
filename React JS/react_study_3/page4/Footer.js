import React from 'react';

class Footer extends React.Component {
  render() {
    return (
      <div className='footer'>
        <div className='footer-inner'>
          <div className='footer-logo'>
            <img src='https://s3-ap-northeast-1.amazonaws.com/progate/shared/images/lesson/react/type_logo.png' />
            <p>Learn to code, learn to creative.</p>
          </div>
          <ul className='footer-list'>
            <li>SERVICES</li>
            <li>SUPPORT</li>
            <li>CONNECT WITH US</li>
          </ul>
        </div>
      </div>
    );
  }
}

export default Footer;
