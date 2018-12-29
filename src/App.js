import React, { Component } from 'react';
// import logo from './logo.svg';
import './App.css';
import WishContainer from './components/WishContainer'
import HolidayContainer from './components/HolidayContainer'
import Banner from './components/Banner'
import Search from './components/Search'
import WishForm from './components/WishForm'


class App extends Component {
  render() {
    return (
      <div className="container">
        <Banner />
        <div className="row">
          <div className="col">
            <HolidayContainer />
          </div>
          <div className="col-10">
            <div className="col-14">
              <Search /> <br />
              <WishForm />
              <WishContainer />
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default App;
