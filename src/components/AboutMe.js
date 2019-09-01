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
            Frontend engineer in Austin, Texas with excellent technical and
            design skills. Bridging the communication gap between technical,
            creative, and business professionals.
            <SkillsGroup isVisible={this.state.hasBecomeVisible}>
              <Skill text={'javascript'} strength={'85'} />
              <Skill text={'react'} strength={'80'} />
              <Skill text={'redux'} strength={'80'} />
              <Skill text={'webpack'} strength={'40'} />
              <Skill text={'html'} strength={'100'} />
              <Skill text={'css, sass, less'} strength={'100'} />
              <Skill text={'git'} strength={'90'} />
              <Skill text={'jquery'} strength={'70'} />
              <Skill text={'angularjs'} strength={'30'} />
              <Skill text={'bootstrap'} strength={'70'} />
              <Skill text={'material ui'} strength={'70'} />
              <Skill text={'agile'} strength={'70'} />
              <Skill text={'rails'} strength={'50'} />
              <Skill text={'wordpress'} strength={'50'} />
              <Skill text={'web design'} strength={'70'} />
              <Skill text={'adobe illustrator'} strength={'70'} />
              <Skill text={'adobe photoshop'} strength={'45'} />
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
