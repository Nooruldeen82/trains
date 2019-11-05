/* 

import React, { Component } from "react";
import shortid from "shortid";
export class Search extends Component {
  state = {
    stopName: "", // I changed this
    origin: "", // I changed this
    id: "",
    result: [
      {
        type: "ICE",
        stopName: "Wuppertal",
        dateTime: "12:00",
        origin: "Köln",
        track: "1"
      }
    ]
  };
  //   input
  handleInput = event => {
    event.preventDefault();

    this.setState({
      id: shortid.generate(),
      [event.target.name]: event.target.value
    });
  };
  //   submit
  handleSubmit = event => {
    event.preventDefault();

    const result = this.props.searchObj.filter(
      flight =>
        flight.stopName === this.state.stopName &&
        flight.origin === this.state.origin
    );
    this.setState({
      result: result
    });
    this.forceUpdate();
    console.log(result);
    this.setState({
      stopName: "",
      origin: ""
    });
  };
  render() {
    return (
      <div>
        <form className="form-group row" onSubmit={this.handleSubmit}>
          <div className="row m-auto ">
            <div className="col-lg-5 col-sm-12">
              <input
                type="text"
                name="stopName" // I changed this
                value={this.state.stopName} // stopName is a property in api object
                onChange={this.handleInput}
                className="form-group border border-dark"
                placeholder="From"
              />
            </div>
            <div className="col-lg-5 col-sm-12">
              <input
                type="text"
                name="origin" // I changed this
                value={this.state.origin} // origin is a property in api object
                onChange={this.handleInput}
                className="form-group border border-dark"
                placeholder="To"
              />
            </div>
            <div className="col-lg-2">
              <button type="submit" className="btn btn-danger text-white">
                Search
              </button>
            </div>
          </div>
        </form>
        <div className="trips">
          <div className="header">
            <table className="table table-bordered bg-dark text-white">
            
              
              <tr>
                <th>Type</th>
                <th>From</th>
                <th>Date</th>
                <th>To</th>
                <th>Track</th>
              </tr>
            </table>
          </div>
          <div className="main">
          
            {this.state.result.map(trip => (
              <div
                className="sub d-flex flex-row align-self-space bg-info pb-3"
                key={trip.detailsId}
              >
                <div className="text-success">{trip.type}</div>
                <div className="text-success">{trip.stopName}</div>
                <div className="text-success">{trip.dateTime}</div>
                <div className="text-success">{trip.origin}</div>
                <div className="text-success">{trip.track}</div>
              </div>
            ))}
          </div>
        </div>
      </div>
    );
  }
}

export default Search;





*/
