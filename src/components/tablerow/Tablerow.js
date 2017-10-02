import React, { Component } from 'react';
import './Tablerow.css';

class Tablerow extends Component {
  render() {
    return (
      // build table row from props sent in from App.js
      <tr>
        <td>{this.props.destination}</td>
        <td>{this.props.capital}</td>
        <td>{this.props.language}</td>
        <td>{this.props.population}</td>
        <td>{this.props.bird}</td>
      </tr>
    );
  }
}

export default Tablerow;