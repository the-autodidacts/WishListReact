import React from 'react';

const Wish = props => {
    console.log("Wish props:", props)


    return (
      <div className="col-sm">
        <div className="col-md-4">
          <div className="card mb-4 box-shadow" style={{width: '20rem'}}>
            <img src={props.wish.image} style={{width: '200px', height: '200px'}} className="img-thumbnail mx-auto" alt={props.wish.description}/>
            <div className="card-body">
              <h5 className="card-title">{props.wish.name}: ${props.wish.price}.00</h5>
              <p className="card-text">{props.wish.description}</p>
              <p>Ranking: {props.wish.ranking}</p>
              <button type="button" className="btn-lg">Received!</button>
            </div>
          </div>
        </div>
      </div>
    )
}

export default Wish;
