import React, { Component } from 'react';
import '../styles/Contact.css';
import { isVisible } from '../theme-functions';
import { debounce } from 'lodash';

export class Contact extends Component {
  state = {
    isSlidUp: false
  };

  componentDidMount() {
    window.addEventListener('scroll', debounce(this.isVisible));
  }

  isVisible = () => {
    if (
      !this.state.isSlidUp &&
      isVisible(document.getElementById('contact-content'))
    ) {
      this.setState({
        isSlidUp: true
      });
    } else if (!isVisible(document.getElementById('contact-content'))) {
      this.setState({
        isSlidUp: false
      });
    }
  };
  render() {
    const { isSlidUp } = this.state;
    return (
      <div id="contact-content">
        <div id="contact" className={`${isSlidUp && 'raise-up'}`}>
          <div className="headlines" id="headlines-contact-beth">
            <p>GET IN TOUCH</p>
            <div>
              <p>
                gilomen2@gmail.com <i className="fas fa-envelope" />
              </p>
              <p>
                <a href="https://www.linkedin.com/in/bethgilomen">LinkedIn</a>{' '}
                <i className="fab fa-linkedin" />
              </p>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
