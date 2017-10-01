import React, { Component } from 'react';
import './Footer.css';

class Footer extends Component {
  render() {
    return (
        <nav className="navbar navbar-inverse navbar-fixed-bottom">
            <div className="container-fluid">
                <div className="navbar-header">
                    <button type="button" className="navbar-toggle collapsed" data-toggle="collapse" data-target="#bs-example-navbar-collapse-1" aria-expanded="false">
                            <span className="sr-only">Toggle navigation</span>
                            <span className="icon-bar"></span>
                            <span className="icon-bar"></span>
                            <span className="icon-bar"></span>
                        </button>
                    <a className="navbar-brand" href="#">Travel is Fun</a>
                </div>
                <div className="collapse navbar-collapse" id="bs-example-navbar-collapse-1">
                    <ul className="nav navbar-nav navbar-right">
                    <li><a href="#">Facebook Link</a></li>
                    </ul>
                </div>
            </div>
        </nav>
    );
  }
}

export default Footer;