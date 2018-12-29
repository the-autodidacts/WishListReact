import React from 'react';


class Holiday extends React.Component {
  // const {this.props.holiday} = holiday

  render() {
    // console.log("holiday props:", this.props);
    return(
      <div className="list-group-item">{this.props.holiday.name}</div>
    )
  }
}



export default Holiday;
