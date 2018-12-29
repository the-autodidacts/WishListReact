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

  // handlePost = (newWish) => {
  //   // console.log("u hit handle post");
  //   fetch(wishesEndpoint, {
  //     method: 'POST',
  //     headers: {
  //       'Content-Type': 'application/json', Accept: 'application/json'
  //     },
  //     body: JSON.stringify({
  //       name: newWish.name,
  //       description: newWish.description,
  //       image: newWish.image,
  //       ranking: newWish.ranking,
  //       price: newWish.price
  //     })
  //   })
  //   .then(r => r.json())
  //   .then(data => {
  //     console.log(data);
  //   })
  // }

  handlePost = () => {
    console.log("tirggered submit");
  }

  render() {
    return(
      <div className="album py-5 bg-light">
        <div className="container">
            <WishList wishes={this.state.wishes}/>
            <WishForm handlePost={this.handlePost} />
        </div>
      </div>
    )
  }

}

export default WishContainer;
