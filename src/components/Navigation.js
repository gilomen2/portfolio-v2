// @flow
import React, { Component } from 'react';
import '../styles/Navigation.css';
import { scrollToSection } from '../theme-functions';

export class Navigation extends Component {
  render() {
    return (
      <nav id="navigation" className={this.props.visible && 'visible'}>
        <div className="navigation-wrapper">
          <NavItem className={'navigation-name'} text={'Beth Gilomen'} />
          <NavItem
            className={'nav-link'}
            scrollTo={'about-me'}
            text={'About Me'}
          />
          <NavItem className={'nav-link'} scrollTo={'resume'} text={'Resume'} />
          <NavItem className={'nav-link'} scrollTo={'work'} text={'Work'} />
          <NavItem
            className={'nav-link'}
            scrollTo={'contact'}
            text={'Contact'}
          />
        </div>
      </nav>
    );
  }
}

const NavItem = ({ text, className, scrollTo }) => (
  <span className={className} onClick={() => scrollToSection(scrollTo)}>
    {text}
  </span>
);
