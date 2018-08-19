import React, { Component } from 'react';
import './styles/App.css';
import { Navigation } from './components/Navigation';
import Header from './components/Header';
import { AboutMe } from './components/AboutMe';
import { isVisible } from './theme-functions';

class App extends Component {
  state = {
    headerVisible: true
  };

  isHeaderVisible = () => {
    this.setState({
      headerVisible: isVisible('homescreen')
    });
  };

  componentDidMount() {
    window.addEventListener('scroll', this.isHeaderVisible);
  }

  render() {
    return (
      <div className="App">
        <Navigation visible={!this.state.headerVisible} />
        <Header />
        <AboutMe />
      </div>
    );
  }
}

export default App;
