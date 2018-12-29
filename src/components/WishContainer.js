import React from 'react';
import WishList from './WishList'
import WishForm from './WishForm'

const wishesEndpoint = 'http://localhost:3000/api/v1/wishes'
class WishContainer extends React.Component {

  constructor() {
    super()

    this.state = { wishes: [] }
  }
  // set initial state
  // state = {
  //   wishes: []
  // }

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


  handlePost = (newWish) => {
    // console.log("u hit handle post");
    fetch(wishesEndpoint, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({
        name: newWish.name,
        description: newWish.description,
        image: newWish.image,
        ranking: newWish.ranking,
        price: newWish.price
      })
    })
    .then(r => r.json())
    .then(newWishObject => {
      // const wishes = Object.assign({}, this.state.wishes, newWishObject)
      this.setState({ wishes: [...this.state.wishes, newWishObject]}, () => console.log("update state is", this.state))
    })
  }



  render() {
    return(
      <div className="album py-16 bg-light" style={{width: '100%'}}>
        <div className="container">
          <WishForm handlePost={this.handlePost} />
          <WishList wishes={this.state.wishes}/>
        </div>
      </div>
    )
  }

}

export default WishContainer;
