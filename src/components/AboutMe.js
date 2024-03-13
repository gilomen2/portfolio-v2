// @flow
import React, { Component } from 'react';
import profilePhoto from '../img/profile-photo.png';
import { isVisible } from '../theme-functions';
import { debounce } from 'lodash';
import '../styles/AboutMe.css';

export class AboutMe extends Component {
  state = {
    isAboutVisible: false,
    hasBecomeVisible: false
  };

  isInView = () => {
    if (
      !this.state.hasBecomeVisible &&
      isVisible(document.getElementById('about'))
    ) {
      this.setState({
        isAboutVisible: true,
        hasBecomeVisible: true
      });
    } else if (!isVisible(document.getElementById('about-content'))) {
      this.setState({
        isAboutVisible: false
      });
    } else if (isVisible(document.getElementById('about-content'))) {
      this.setState({
        isAboutVisible: true
      });
    }
  };

  componentDidMount() {
    this.isInView();
    window.addEventListener('scroll', debounce(this.isInView, 150));
  }

  render() {
    const { isAboutVisible } = this.state;
    return (
      <div id="about-content">
        <div id="about-me-anchor" className="anchor" />
        <div
          id="about"
          className={`${isAboutVisible ? 'raise-up' : undefined}`}
        >
          <div className="headlines" id="headlines-about">
            ABOUT <p>ME</p>
            <img id="my_photo" src={profilePhoto} alt={'Beth Gilomen'} />
          </div>
          <div id="about-me-box">
            As a Frontend Engineer, I have a passion for developing user-centric
            experiences. I leverage modern web technologies to create intuitive,
            aesthetically pleasing, and accessible web apps. I am strongly
            committed to understanding and advocating for the end user, while
            working closely with product, designers, backend engineers, and
            stakeholders. I am eager to bring my expertise to a team that values
            innovation, user empathy, and collaboration, where I can contribute
            to delivering outstanding user experiences.
            <SkillsGroup isVisible={this.state.hasBecomeVisible}>
              <Skill text={'javascript'} strength={'100'} />
              <Skill text={'react'} strength={'95'} />
              <Skill text={'redux'} strength={'80'} />
              <Skill text={'typescript'} strength={'85'} />
              <Skill text={'es6'} strength={'95'} />
              <Skill text={'webpack'} strength={'40'} />
              <Skill text={'html'} strength={'100'} />
              <Skill text={'css, sass, less'} strength={'100'} />
              <Skill text={'git'} strength={'90'} />
            </SkillsGroup>
          </div>
        </div>
      </div>
    );
  }
}

class SkillsGroup extends Component {
  render() {
    const children = React.Children.map(this.props.children, child => {
      return React.cloneElement(child, {
        isVisible: this.props.isVisible
      });
    });
    return <div id={'skills-group'}>{children}</div>;
  }
}

class Skill extends Component {
  render() {
    const { strength, text } = this.props;
    return (
      <p
        className="skills-line"
        style={{
          width: this.props.isVisible ? `${strength}%` : '0%'
        }}
      >
        <span className={!this.props.isVisible ? 'hidden' : undefined}>
          {text}
        </span>
      </p>
    );
  }
}
