import React from 'react';

const holidaysEndpoint = 'http://localhost:3000/api/v1/holidays'
class WishForm extends React.Component {

  state = {
    name: '',
    description: '',
    image: '',
    ranking: '',
    holidays: []
  }

  componentDidMount() {
    fetch(holidaysEndpoint).then(r => r.json()).then(holidays => { this.setState({ holidays: holidays }) })
  }

  holidayOptions = () => {
    return this.state.holidays.map((h) => {
      return <option key={h.id}>{h.name}</option>
    })
  }

  render() {
    return(
      <div>
      <form>
        <div className="form-row">
          <div className="col">
            <input type="text" className="form-control" placeholder="whachu want?"/>
          </div>
          <div className="col">
            <input type="text" className="form-control" placeholder="description..."/>
          </div>
          <div className="col">
            <input type="text" className="form-control" placeholder="image url..."/>
          </div>
          <div className="col">
            <input type="text" className="form-control" placeholder="ranking 1-5..."/>
            <small>5 is "I can't survive without it."</small>
          </div>
          <select className="custom-select" id="inputGroupSelect01">
           <option selected>Choose Holiday...</option>
           {this.holidayOptions()}
         </select>
        </div>
        </form>
      </div>
    )
  }


}


export default WishForm;
