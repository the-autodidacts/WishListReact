import React from 'react';
import WishList from './WishList'
import WishFrom from './WishForm'

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
      <div>hi!</div>
    )
  }

}

export default WishContainer;
