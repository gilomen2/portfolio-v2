// @flow
import React, { Component } from 'react';
import '../styles/Navigation.css';
import { scrollToSection } from '../theme-functions';

export class Navigation extends Component {
  render() {
    const { headerVisible, aboutVisible, resumeVisible } = this.props;
    return (
      <nav id="navigation" className={!headerVisible ? 'visible' : undefined}>
        <div className="navigation-wrapper">
          <NavItem className={'navigation-name'} text={'Beth Gilomen'} />
          <NavItem
            className={'nav-link'}
            active={aboutVisible && !resumeVisible}
            scrollTo={'about-content'}
            text={'About Me'}
          />
          <NavItem
            className={'nav-link'}
            active={resumeVisible && !aboutVisible}
            scrollTo={'resume-content'}
            text={'Resume'}
          />
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

const NavItem = ({ text, className, scrollTo, active }) => (
  <span
    className={`${className}${active ? ' active' : ''}`}
    onClick={() => scrollToSection(scrollTo)}
  >
    {text}
  </span>
);
