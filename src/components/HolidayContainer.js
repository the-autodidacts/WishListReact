import React from 'react';

const holidaysEndpoint = 'http://localhost:3000/api/v1/holidays'
class HolidayContainer extends React.Component {
  // initial state
  state = {
    holidays: []
  }

  componentDidMount() {
    fetch(holidaysEndpoint).then(r => r.json()).then(data => { console.log(data) })
  }


  render() {
    return(
      <div></div>
    )
  }

}


export default HolidayContainer;
