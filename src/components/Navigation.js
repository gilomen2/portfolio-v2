// @flow
import React, { Component } from 'react';
import '../styles/Navigation.css';

export class Navigation extends Component {
  render() {
    return (
      <nav id="navigation" className={this.props.visible && 'visible'}>
        <div className="navigation-wrapper">
          <NavItem text={'Beth Gilomen'} />
          <NavItem className={'nav-link'} text={'About Me'} />
          <NavItem className={'nav-link'} text={'Resume'} />
          <NavItem className={'nav-link'} text={'Work'} />
          <NavItem className={'nav-link'} text={'Contact'} />
        </div>
      </nav>
    );
  }
}

const NavItem = ({ text, className }) => (
  <span className={className}>{text}</span>
);
