import React, { Component } from 'react';
import './Travelcarousel.css';
import { Carousel } from 'react-bootstrap';

class Travelcarousel extends Component {
  render() {
    return (
        // use React-Bootstrap Carousel
        <Carousel id="carousel-travel">
            <Carousel.Item>
                <img src="/assets/venice.jpeg" alt="venice"/>
                <Carousel.Caption>
                    <h1>Welcome to my travel site</h1>
                    <h2>This site is about places I would like to travel</h2>
                    <h3>Here are some places I would like to visit</h3>
                </Carousel.Caption>
            </Carousel.Item>
            <Carousel.Item>
                <img src="/assets/newyork.jpeg" alt="new york"/>
                <Carousel.Caption>
                    <h1>Welcome to my travel site</h1>
                    <h2>This site is about places I would like to travel</h2>
                    <h3>Here are some places I would like to visit</h3>
                </Carousel.Caption>
            </Carousel.Item>
            <Carousel.Item>
                <img src="/assets/paris.jpeg" alt="paris"/>
                <Carousel.Caption>
                    <h1>Welcome to my travel site</h1>
                    <h2>This site is about places I would like to travel</h2>
                    <h3>Here are some places I would like to visit</h3>
                </Carousel.Caption>
            </Carousel.Item>
            <Carousel.Item>
                <img src="/assets/sanfran.jpeg" alt="san fran"/>
                <Carousel.Caption>
                    <h1>Welcome to my travel site</h1>
                    <h2>This site is about places I would like to travel</h2>
                    <h3>Here are some places I would like to visit</h3>
                </Carousel.Caption>
            </Carousel.Item>
            <Carousel.Item>
                <img src="/assets/amsterdam.jpeg" alt="amsterdam"/>
                <Carousel.Caption>
                    <h1>Welcome to my travel site</h1>
                    <h2>This site is about places I would like to travel</h2>
                    <h3>Here are some places I would like to visit</h3>
                </Carousel.Caption>
            </Carousel.Item>
      </Carousel>
    );
  }
}

export default Travelcarousel;