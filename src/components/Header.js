import React, { Component } from 'react';
import '../styles/Header.css';
import withSizes from 'react-sizes';
import { scrollToSection } from '../theme-functions';
import BackgroundImageOnLoad from 'background-image-on-load';
import LoadingGif from '../img/status.gif';
import { CSSTransitionGroup } from 'react-transition-group';

class Header extends Component {
  state = {
    bgIsLoaded: false,
    loaderIn: false
  };

  componentDidMount() {}

  render() {
    const { bgIsLoaded } = this.state;

    return (
      <header
        id={'homescreen'}
        style={{
          height: this.props.windowHeight
        }}
      >
        <BackgroundImageOnLoad
          src={`https://s3.amazonaws.com/gilomen-portfolio-production/wonder2.jpg`}
          onLoadBg={() =>
            this.setState({
              bgIsLoaded: true
            })
          }
        />
        <CSSTransitionGroup
          transitionName="fade"
          transitionAppear={true}
          transitionAppearTimeout={300}
          transitionEnterTimeout={300}
          transitionLeaveTimeout={300}
        >
          {!bgIsLoaded && <Loader />}
        </CSSTransitionGroup>
        <CSSTransitionGroup
          transitionName="fade"
          transitionAppear={true}
          transitionAppearTimeout={300}
          transitionEnterTimeout={300}
          transitionLeaveTimeout={300}
        >
          {bgIsLoaded && (
            <HeaderContent windowHeight={this.props.windowHeight} />
          )}
        </CSSTransitionGroup>
      </header>
    );
  }
}

class HeaderContent extends Component {
  render() {
    return (
      <div
        className={'backstretch'}
        style={{
          height: this.props.windowHeight,
          backgroundImage: `url('https://s3.amazonaws.com/gilomen-portfolio-production/wonder2.jpg')`
        }}
      >
        <div className={'header-content'}>
          <div id="header-headlines" className={'animated bounceInDown'}>
            <p>Hello, my name is</p>
            <span>Beth Gilomen</span>
            <p>i'm a frontend engineer</p>
          </div>
          <div className="hi-icon-wrap hi-icon-effect-1 hi-icon-effect-1a animated bounceInUp">
            <a
              href="https://github.com/gilomen2"
              className="hi-icon hi-icon-mobile"
            >
              <i className="fab fa-github" />
            </a>
            <a
              href="https://www.linkedin.com/in/bethgilomen"
              className="hi-icon hi-icon-earth"
            >
              <i className="fab fa-linkedin" />
            </a>
          </div>
          <div
            className="arrow animated bounce"
            onClick={() => {
              scrollToSection('main-anchor');
            }}
          >
            <img
              width="20"
              height="20"
              alt=""
              src="data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0iMS4wIiBlbmNvZGluZz0idXRmLTgiPz4NCjwhLS0gR2VuZXJhdG9yOiBBZG9iZSBJbGx1c3RyYXRvciAxNi4wLjAsIFNWRyBFeHBvcnQgUGx1Zy1JbiAuIFNWRyBWZXJzaW9uOiA2LjAwIEJ1aWxkIDApICAtLT4NCjwhRE9DVFlQRSBzdmcgUFVCTElDICItLy9XM0MvL0RURCBTVkcgMS4xLy9FTiIgImh0dHA6Ly93d3cudzMub3JnL0dyYXBoaWNzL1NWRy8xLjEvRFREL3N2ZzExLmR0ZCI+DQo8c3ZnIHZlcnNpb249IjEuMSIgaWQ9IkxheWVyXzEiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyIgeG1sbnM6eGxpbms9Imh0dHA6Ly93d3cudzMub3JnLzE5OTkveGxpbmsiIHg9IjBweCIgeT0iMHB4Ig0KCSB3aWR0aD0iNTEycHgiIGhlaWdodD0iNTEycHgiIHZpZXdCb3g9IjAgMCA1MTIgNTEyIiBlbmFibGUtYmFja2dyb3VuZD0ibmV3IDAgMCA1MTIgNTEyIiB4bWw6c3BhY2U9InByZXNlcnZlIj4NCjxwYXRoIGZpbGw9IiNGRkZGRkYiIGQ9Ik0yOTMuNzUxLDQ1NS44NjhjLTIwLjE4MSwyMC4xNzktNTMuMTY1LDE5LjkxMy03My42NzMtMC41OTVsMCwwYy0yMC41MDgtMjAuNTA4LTIwLjc3My01My40OTMtMC41OTQtNzMuNjcyDQoJbDE4OS45OTktMTkwYzIwLjE3OC0yMC4xNzgsNTMuMTY0LTE5LjkxMyw3My42NzIsMC41OTVsMCwwYzIwLjUwOCwyMC41MDksMjAuNzcyLDUzLjQ5MiwwLjU5NSw3My42NzFMMjkzLjc1MSw0NTUuODY4eiIvPg0KPHBhdGggZmlsbD0iI0ZGRkZGRiIgZD0iTTIyMC4yNDksNDU1Ljg2OGMyMC4xOCwyMC4xNzksNTMuMTY0LDE5LjkxMyw3My42NzItMC41OTVsMCwwYzIwLjUwOS0yMC41MDgsMjAuNzc0LTUzLjQ5MywwLjU5Ni03My42NzINCglsLTE5MC0xOTBjLTIwLjE3OC0yMC4xNzgtNTMuMTY0LTE5LjkxMy03My42NzEsMC41OTVsMCwwYy0yMC41MDgsMjAuNTA5LTIwLjc3Miw1My40OTItMC41OTUsNzMuNjcxTDIyMC4yNDksNDU1Ljg2OHoiLz4NCjwvc3ZnPg0K"
            />
          </div>
        </div>
        <div className={'overlay-black'} />
      </div>
    );
  }
}

class Loader extends Component {
  render() {
    return (
      <div id="loader">
        <img
          src={LoadingGif}
          alt={'a loading gif indicating that the page is still loading'}
        />
      </div>
    );
  }
}

const mapSizesToProps = ({ height }) => ({
  windowHeight: height
});

export default withSizes(mapSizesToProps)(Header);
