import React, { Component } from 'react';
import './styles/App.css';
import { Navigation } from './components/Navigation';
import Header from './components/Header';

class App extends Component {
  render() {
    return (
      <div className="App">
        <Navigation />
        <Header />
      </div>
    );
  }
}

export default App;
