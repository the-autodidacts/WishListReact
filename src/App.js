import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import WishContainer from './components/WishContainer'


class App extends Component {
  render() {
    return (
      <div className="App">
        <WishContainer />
      </div>
    );
  }
}

export default App;
