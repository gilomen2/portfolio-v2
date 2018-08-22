import React, { Component } from 'react';
import './styles/App.css';
import './styles/animate.css';
import { Navigation } from './components/Navigation';
import Header from './components/Header';
import { AboutMe } from './components/AboutMe';
import {
  bottomYOffset,
  elementRect,
  getBodyRect,
  isVisible,
  topYOffset
} from './theme-functions';
import { debounce } from 'lodash';
import { Resume } from './components/Resume';
import { Contact } from './components/Contact';

class App extends Component {
  aboutPosition;
  resumePosition;

  state = {
    headerVisible: true,
    aboutVisible: false,
    resumeVisible: false,
    contactVisible: false
  };

  sectionVisibility = () => {
    this.setState({
      headerVisible: isVisible(document.getElementById('homescreen')),
      aboutVisible: this.isAboutVisible(),
      resumeVisible: this.isResumeVisible(),
      contactVisible: this.isContactVisible()
    });
  };

  isAboutVisible = () => {
    return (
      document.documentElement.scrollTop >= this.aboutPosition.top &&
      document.documentElement.scrollTop <= this.aboutPosition.bottom
    );
  };

  isResumeVisible = () => {
    return (
      document.documentElement.scrollTop >= this.resumePosition.top &&
      document.documentElement.scrollTop <= this.resumePosition.bottom
    );
  };

  isContactVisible = () => {
    return isVisible(document.getElementById('contact-content'));
  };

  setUpScrollPositions = () => {
    const bodyRect = getBodyRect();
    this.aboutPosition = {
      top: topYOffset(
        bodyRect,
        elementRect(document.getElementById('about-content'))
      ),
      bottom: bottomYOffset(
        bodyRect,
        elementRect(document.getElementById('about-content'))
      )
    };
    this.resumePosition = {
      top: topYOffset(
        bodyRect,
        elementRect(document.getElementById('resume-content'))
      ),
      bottom: bottomYOffset(
        bodyRect,
        elementRect(document.getElementById('resume-content'))
      )
    };

    this.sectionVisibility();
  };

  componentDidMount() {
    this.setUpScrollPositions();
    window.addEventListener('scroll', debounce(this.sectionVisibility, 150));
    window.addEventListener('resize', debounce(this.setUpScrollPositions, 150));
  }

  render() {
    const {
      headerVisible,
      aboutVisible,
      resumeVisible,
      contactVisible
    } = this.state;
    return (
      <div className="App">
        <Navigation
          headerVisible={headerVisible}
          aboutVisible={aboutVisible}
          resumeVisible={resumeVisible}
          contactVisible={contactVisible}
        />
        <Header checkVisibility={this.sectionVisibility} />
        <div id="main">
          <div id="main-anchor" className="anchor" />
          <AboutMe />
          <Resume />
          <Contact />
        </div>
      </div>
    );
  }
}

export default App;
