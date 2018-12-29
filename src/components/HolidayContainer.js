import React from 'react';
import HolidayList from './HolidayList'

const holidaysEndpoint = 'http://localhost:3000/api/v1/holidays'
class HolidayContainer extends React.Component {
  // initial state
  state = {
    holidays: []
  }

  componentDidMount() {
    fetch(holidaysEndpoint).then(r => r.json()).then(holidays => { this.setState({ holidays: holidays }) })
  }


  render() {
    return(
      <div>
        <h1 className="holiday-h1">Holidays</h1>
          <HolidayList holidays={this.state.holidays}/>
      </div>
    )
  }

}


export default HolidayContainer;
