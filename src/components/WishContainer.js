import React from 'react';
import WishList from './WishList'
import WishForm from './WishForm'

const wishesEndpoint = 'http://localhost:3000/api/v1/wishes'
class WishContainer extends React.Component {

  // set initial state
  state = {
    wishes: []
  }

  // lifecycle method
  componentDidMount() {
    fetch(wishesEndpoint)
      .then(r => r.json())
      .then(wishes => {
        this.setState({
          wishes: wishes
        })
      })
  }

  render() {
    return(
      <div className="album py-5 bg-light">
        <div className="container">
              <WishList wishes={this.state.wishes}/>
        </div>
      </div>
    )
  }

}

export default WishContainer;
