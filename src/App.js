import React, { Component } from 'react';
// import logo from './logo.svg';
import './App.css';
import WishContainer from './components/WishContainer'
import HolidayContainer from './components/HolidayContainer'
import Banner from './components/Banner'

class App extends Component {
  render() {
    return (
      <div className="container">
        <Banner />
        <div className="row">
          <div className="col">
            <HolidayContainer />
          </div>
          <div className="col-9">
            <div className="col-4">
              <WishContainer />
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default App;
