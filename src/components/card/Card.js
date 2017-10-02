import React, { Component } from 'react';
import './Card.css';
import { Grid, Col } from 'react-bootstrap';

class Card extends Component {
  render() {
    return (
      <div className="cards">
        {/* using React-Bootstrap for grid */}
        <Col sm={6} md={3} className="card">
        {/* The picture and country name and link to tourism will be passed in as props */}
          <img src={this.props.picture}/>
          <h3>{this.props.country}</h3>
          <a href={this.props.link} target="_blank">{this.props.country} Tourism Site</a>
        </Col>
      </div>
    );
  }
}

export default Card;