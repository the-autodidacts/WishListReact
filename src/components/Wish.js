import React from 'react';

const Wish = props => {
    console.log("Wish props:", props)


    return (
      <div className="card" style={{width: '20rem'}}>
        {props.wish.name}
        <img src={props.wish.image} style={{width: '200px', height: '200px'}} className="img-fluid img-thumbnail"/>
        <div class="card-body">
          <h5 class="card-title">Card title</h5>
          <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
          <a href="#" class="btn btn-primary">Go somewhere</a>
        </div>
      </div>
    )
}

export default Wish;
