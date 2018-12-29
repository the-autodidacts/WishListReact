import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import WishContainer from './components/WishContainer'


class App extends Component {
  render() {
    return (
      <div className="container">
        <div className="row">
          <div className="col">
            HOLIDAYS SHOULD GO HERE
          </div>
          <div className="col-9">
            <WishContainer />
          </div>
        </div>
      </div>
    );
  }
}

export default App;
