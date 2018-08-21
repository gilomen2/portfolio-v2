import React, { Component } from 'react';
import '../styles/Contact.css';

export class Contact extends Component {
  render() {
    return (
      <div id="content-contact" className="beth">
        <div id="contact">
          <div className="headlines" id="headlines-contact-beth">
            <p>GET IN TOUCH</p>
            <div>
              <p>
                317.361.5503 <i className="fas fa-phone" />
              </p>
              <p>
                gilomen2@gmail.com <i className="fas fa-envelope" />
              </p>
              <p>
                <a href="http://bethgilomen.com">bethgilomen.com</a>{' '}
                <i className="fas fa-globe" />
              </p>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
