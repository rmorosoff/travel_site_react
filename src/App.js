import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Navigation from './components/navigation/Navigation';
import Travelcarousel from './components/travelcarousel/Travelcarousel';
import Card from './components/card/Card';
import Tablerow from './components/tablerow/Tablerow';
import Footer from './components/footer/Footer';

class App extends Component {
  render() {
    return (
      <div className="App">
        <Navigation />
        <Travelcarousel />
        {/* pass picture, country and link as props to Card.js */}
        <Card picture="/assets/aruba_flag.svg" country="Aruba" link="http://www.arubatourism.com/" />
        <Card picture="/assets/chile_flag.svg" country="Chile" link="http://chile.travel/en/" />
        <Card picture="/assets/italy_flag.svg" country="Italy" link="http://www.italia.it/en/home.html" />
        <Card picture="/assets/spain_flag.svg" country="Spain" link="http://www.spain.info/en_US/" />

        <div className="page-row" id="travel-table">
          <h3>Some information about the places I would like to visit</h3>
          <table id="mytable" className="table table-striped">
            <thead>
              <tr>
                <th className="destination">Destination</th>
                <th className="capital">Capital</th>
                <th className="language">Official Language</th>
                <th className="population">Population (aprox.)</th>
                <th className="bird">National Bird</th>
              </tr>
            </thead>
            <tbody>
              {/* pass props to Tablerow.js to build the row */}
              <Tablerow destination="Aruba" capital="Oranjestad" language="Dutch" population="102,911" bird="Aruban Burrowing Owl"/>
              <Tablerow destination="Chile" capital="Santiago" language="Spanish" population="17.62 million" bird="Andean condor"/>
              <Tablerow destination="Italy" capital="Rome" language="Italian" population="59.83 million" bird="Bluebirds"/>
              <Tablerow destination="Spain" capital="Madrid" language="Spanish" population="46.77 million" bird="Eagle"/>
            </tbody>
          </table>
        </div>
        <Footer />
      </div>
    );
  }
}

export default App;
