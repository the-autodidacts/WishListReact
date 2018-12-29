import React from 'react';

class Wish extends React.Component {


    render() {
      console.log("Wish props:", this.props)
      return (
        <div className="col-sm">
          <div className="col-md-4">
            <div className="card mb-4 box-shadow" style={{width: '20rem'}}>
              <img src={this.props.wish.image} style={{width: '300px', height: '300px'}} className="img-thumbnail mx-auto" alt={this.props.wish.description}/>
                <div className="card-body">
                <h5 className="card-title">{this.props.wish.name}: ${this.props.wish.price}.00</h5>
                <p className="card-text">{this.props.wish.description}</p>
                <p>Ranking: {this.props.wish.ranking}</p>
                  <button type="button" className="btn-lg">Received</button>
                </div>
            </div>
          </div>
        </div>
      )
    }
}

export default Wish;
