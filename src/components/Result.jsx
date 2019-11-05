import React, { Component } from "react";
import Search from "./Search";
export class Result extends Component {
  render() {
    return (
      <div>
        <table>
          <tr>
            <th>From</th>
            <th>To</th>
          </tr>
        </table>
        <Search />
      </div>
    );
  }
}

export default Result;
