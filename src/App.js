import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import WishContainer from './components/WishContainer'
import Banner from './components/Banner'

class App extends Component {
  render() {
    return (
      <div className="container">
        <Banner />
        <div className="row">
          <div className="col">
            HOLIDAYS SHOULD GO HERE
          </div>
          <div className="col-9">
            <div className="col-sm">
              <WishContainer />
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default App;
