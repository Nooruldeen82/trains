import React, { Component } from "react";
import shortid from "shortid";

export class Search extends Component {
  state = {
    stopName: "", // I changed this
    origin: "", // I changed this
    id: "",
    result: []
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
              <button type="submit" className="btn mainRed text-white">
                Search
              </button>
            </div>
          </div>
        </form>
        <table className="table table-bordered ">
          <thead className="bg-dark text-white">
            {/*  I changed this */}
            <tr>
              <th>Type</th>
              <th>From</th>
              <th>Date</th>
              <th>To</th>
              <th>Track</th>
            </tr>
          </thead>
          <tbody className="bg-light">
            {/*  I changed this */}
            {this.state.result.map(trip => (
              <tr key={trip.detailsId}>
                <td>{trip.type}</td>
                <td>{trip.stopName}</td>
                <td>{trip.dateTime}</td>
                <td>{trip.origin}</td>
                <td>{trip.track}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    );
  }
}

export default Search;
