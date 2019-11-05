import React, { Component } from "react";
import DB from "../db.png";
export class About extends Component {
  render() {
    return (
      <div className="bg-light p-4 mb-4">
        <h3>About</h3>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Doloribus
          accusantium unde consequatur aperiam, illum sequi. Totam veritatis
          corrupti deleniti illum.
        </p>
        <img src={DB} alt="db" width="50%" />
      </div>
    );
  }
}

export default About;
