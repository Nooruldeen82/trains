import React, { Component } from "react";
import shortid from "shortid";
export class Register extends Component {
  state = {
    from: "",
    to: "",
    date: "",
    number: ""
  };
  //   input
  handleInput = event => {
    event.preventDefault();
    this.setState({ number: shortid.generate() });
    this.setState({
      [event.target.name]: event.target.value
    });
  };
  //   submit
  handleSubmit = event => {
    event.preventDefault();
    this.props.referPropsObject(this.state);
    this.setState({
      from: "",
      to: "",
      date: ""
    });
  };
  render() {
    return (
      <div className="p-5">
        <form className="from form-group" onSubmit={this.handleSubmit}>
          <label htmlFor="from">From</label>
          <input
            type="text"
            name="from"
            value={this.state.from}
            className="form-control form-control-lg"
            onChange={this.handleInput}
          />
          <label htmlFor="to">To</label>
          <input
            type="text"
            name="to"
            value={this.state.to}
            className="form-control form-control-lg"
            onChange={this.handleInput}
          />
          <label htmlFor="date">Date</label>
          <input
            type="Date"
            name="date"
            value={this.state.date}
            className="form-control form-control-lg"
            onChange={this.handleInput}
          />
          <button type="submit" className="btn btn-dark mt-3">
            Submit
          </button>
        </form>
      </div>
    );
  }
}

export default Register;
