import React from 'react';
import Wish from './Wish'

const WishList = (props) => {
  console.log("WishList props:", props);

  const mappedWishes = props.wishes.map((wish) => {
    return <Wish wish={wish} key={wish.id} />
  })

  return (
    <div className="row">
      {mappedWishes}
   </div>
  )

}


export default WishList;
