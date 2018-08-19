// @flow
import React, { Component } from 'react';
import '../styles/Navigation.css';

export class Navigation extends Component {
  render() {
    return (
      <nav id="navigation">
        <div className="navigation-wrapper">
          <NavItem id={'navigation-name'} text={'Beth Gilomen'} />
          <NavItem id={'about'} className={'nav-link'} text={'About Me'} />
          <NavItem id={'resume'} className={'nav-link'} text={'Resume'} />
          <NavItem id={'work'} className={'nav-link'} text={'Work'} />
          <NavItem id={'contact'} className={'nav-link'} text={'Contact'} />
        </div>
      </nav>
    );
  }
}

const NavItem = ({ id, text, className }) => (
  <span id={id} className={className}>
    {text}
  </span>
);
