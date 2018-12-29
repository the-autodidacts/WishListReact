import React from 'react';

const Wish = props => {
    console.log("Wish props:", props)


    return (
      <div className="card" style={{width: '20rem'}}>
        <img src={props.wish.image} style={{width: '200px', height: '200px'}} className="img-thumbnail mx-auto"/>
        <div className="card-body">
          <h5 className="card-title">{props.wish.name}: ${props.wish.price}.00</h5>
          <p className="card-text">{props.wish.description}</p>
          <a href="#" className="btn btn-primary">SOMEONE BOUGHT THIS 4 MEEE!</a>
        </div>
      </div>
    )
}

export default Wish;
