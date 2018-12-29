import React from 'react';

const holidaysEndpoint = 'http://localhost:3000/api/v1/holidays'
const wishesEndpoint = 'http://localhost:3000/api/v1/wishes'
class WishForm extends React.Component {

  constructor(props) {
    super(props)

    this.state = {
      name: '',
      description: '',
      image: '',
      ranking: '',
      price: '',
      holidays: [],
      selectedHoliday: ''
    }
  }

  // state = {
  //   name: '',
  //   description: '',
  //   image: '',
  //   ranking: '',
  //   holidays: [],
  //   selectedHoliday: ''
  // }

  componentDidMount() {
    fetch(holidaysEndpoint).then(r => r.json()).then(holidays => { this.setState({ holidays: holidays }) })
  }

  holidayOptions = () => {
    return this.state.holidays.map((h) => {
      return <option key={h.id}>{h.name}</option>
    })
  }

  handleChange = (event) => {
    // console.log(e.target.value);
    this.setState({
      [event.target.name]:event.target.value
    })
  }

  handleSubmit = (event) => {
    event.preventDefault()
    // this.props.handlePost(this.state)
    fetch(wishesEndpoint, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json', Accept: 'application/json'
      },
      body: JSON.stringify({
        name: this.state.name,
        description: this.state.description,
        image: this.state.image,
        ranking: this.state.ranking,
        price: this.state.price
      })
    })
    .then(r => r.json())
    .then(data => {
      console.log(data);
    })
  }

  render() {
    // console.log("WishForm props", this.props.handlePost);
    // console.log("====================");
    // console.log("WishForm state", this.state);
    return(
      <div>
      <form onSubmit={this.handleSubmit}>
        <div className="form-row">
          <div className="col">
          Name
            <input type="text" name="name" className="form-control" placeholder="whachu want?" onChange={this.handleChange} value={this.state.name}/>
          </div>
          <div className="col">
          Description
            <input type="text" name="description" className="form-control" placeholder="description..." onChange={this.handleChange} value={this.state.description}/>
          </div>
          <div className="col">
          Image Url
            <input type="text" name="image" className="form-control" placeholder="image url..." onChange={this.handleChange} value={this.state.image}/>
          </div>
          <div className="col">
          Ranking: 1-5
            <input type="text" name="ranking" className="form-control" placeholder="ranking 1-5..." onChange={this.handleChange} value={this.state.ranking}/>
            <small>5 is "I can't survive without it."</small>
          </div>
          <div className="col">
          Price
            <input type="text" name="price" className="form-control" placeholder="$$$" onChange={this.handleChange} value={this.state.price}/>
          </div>
          <select name="selectedHoliday" className="custom-select" id="inputGroupSelect01" onChange={this.handleChange} value={this.state.selectedHoliday}>
           <option default>Which Holiday do you want this for?...</option>
           {this.holidayOptions()}
         </select>
         <button type="submit" className="btn btn-info">Submit</button>
        </div>
        <br />
        </form>
      </div>
    )
  }


}


export default WishForm;
