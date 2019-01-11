import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import CardList from './components/CardList'
import {cardsInfo} from './components/mockdata'
import FixedTimeTag from './components/FixedTimeTag'
import LiveTimeTag from './components/LiveTimeTag'

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <p>
            Edit <code>src/App.js</code> and save to reload.
          </p>
          <a
            className="App-link"
            href="https://reactjs.org"
            target="_blank"
            rel="noopener noreferrer"
          >
            Learn React
          </a>
        </header>
        <CardList cardsInfo={cardsInfo} />
        <FixedTimeTag />
        <LiveTimeTag />
      </div>
    );
  }
}

export default App;
