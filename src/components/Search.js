import React from 'react';

class Search extends React.Component {


  render() {
    return(
      <div>
        <div className="navbar navbar-light bg-light">
          <form className="form-inline">
            <input className="form-control mr-sm-2" type="search" placeholder="Search for gifts..." aria-label="Search"/>
            <button className="btn btn-info" type="submit">Search</button>
          </form>
        </div>
      </div>
    )
  }
}

export default Search;
