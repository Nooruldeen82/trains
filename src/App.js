import React, { Component } from "react";
import "./App.css";
//import Register from "./components/Register";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Header from "./components/Header";
import Home from "./components/Home";
import About from "./components/About";
import DB from "./db.png";
import Visa from "./visa.png";
import Master from "./master.png";
import Search from "./components/Search";
export class App extends Component {
  state = {
    registeration: [],
    hasErrors: false,
    trips: [] // Api
  };
  // push new object to registeration

  pushNewObject = info => {
    this.state.registeration.push(info);
    this.forceUpdate();
    console.log(this.state);
  };
  //  delete
  deleteElement = event => {
    event.preventDefault();

    const registerationArray = this.state.registeration.filter(
      element => element.number !== event.target.value
    );

    this.setState({
      registeration: registerationArray
    });
  };
  // fetch API
  componentDidMount = () => {
    fetch(
      `https://cors-anywhere.herokuapp.com/https://api.deutschebahn.com/freeplan/v1/arrivalBoard/wuppertal?date=2019-11-06`
    )
      .then(res => res.json())
      .then(json => {
        this.setState({
          isLoaded: true,
          trips: json
        });
      });
  };
  // End of Api
  render() {
    return (
      <Router>
        <div className="container">
          <div className="row">
            <div className="col-12 p-0 bg-white">
              <img
                src={DB}
                alt="tomas"
                width="200px"
                style={{ padding: "10px" }}
              />
              <Header />
            </div>
          </div>
          <div className="row">
            <div className="col-12  text-center">
              <Switch>
                <React.Fragment>
                  <Route path="/" exact component={Home} />
                  <Route path="/about" exact component={About} />
                </React.Fragment>
              </Switch>
            </div>
          </div>
          <div className="row">
            {/* <div className="col-lg-4 pt-2">
              <h3 className="text-center">Register</h3>
              <Register referPropsObject={this.pushNewObject} />
            </div> */}
            <div className="col-12 bg-light text-center p-4">
              <div className="">
                <h3>Where should it go next?</h3>
                <Search searchObj={this.state.trips} />
              </div>
            </div>
          </div>
          <div className="row">
            <div className="col-12 text-center">
              <span>* Currently supports all VISA and MasterCard cards</span>
              <img src={Visa} alt="visa" width="50px" />
              <img src={Master} alt="master" width="50px" />
            </div>
          </div>
          <div className="row footer  mainRed">
            <div className="col-12  p-4 text-white text-center">
              <p>Copyright © 2019. Tomas Cook, All rights reserved.</p>
            </div>
          </div>
        </div>
      </Router>
    );
  }
}

export default App;
