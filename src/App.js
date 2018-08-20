import React, { Component } from 'react';
import './styles/App.css';
import { Navigation } from './components/Navigation';
import Header from './components/Header';
import { AboutMe } from './components/AboutMe';
import { isVisible } from './theme-functions';
import { debounce } from 'lodash';
import { Resume } from './components/Resume';

class App extends Component {
  state = {
    headerVisible: true
  };

  isHeaderVisible = () => {
    this.setState({
      headerVisible: isVisible(document.getElementById('homescreen'))
    });
  };

  componentDidMount() {
    window.addEventListener('scroll', debounce(this.isHeaderVisible, 150));
  }

  render() {
    return (
      <div className="App">
        <Navigation visible={!this.state.headerVisible} />
        <Header />
        <div id="main">
          <AboutMe />
          <Resume />
        </div>
      </div>
    );
  }
}

export default App;
