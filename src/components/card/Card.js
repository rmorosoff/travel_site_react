import React, { Component } from 'react';
import './Card.css';

class Card extends Component {
  render() {
    return (
      <div className="cards">
        <div className="card col-sm-12 col-md-4 col-lg-3">
          <img src={this.props.picture}/>
          <h3>{this.props.country}</h3>
          <a href={this.props.link} target="_blank">{this.props.country} Tourism Site</a>
        </div>
      </div>
    );
  }
}

export default Card;