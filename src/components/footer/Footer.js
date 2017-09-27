import React, { Component } from 'react';
import './Footer.css';

class Footer extends Component {
  render() {
    return (
        <nav class="navbar navbar-inverse navbar-fixed-bottom">
            <div class="container-fluid">
                <div class="navbar-header">
                    <button type="button" class="navbar-toggle collapsed" data-toggle="collapse" data-target="#bs-example-navbar-collapse-1" aria-expanded="false">
                            <span class="sr-only">Toggle navigation</span>
                            <span class="icon-bar"></span>
                            <span class="icon-bar"></span>
                            <span class="icon-bar"></span>
                        </button>
                    <a class="navbar-brand" href="#">Travel is Fun</a>
                </div>
                <div class="collapse navbar-collapse" id="bs-example-navbar-collapse-1">
                    <ul class="nav navbar-nav navbar-right">
                    <li><a href="#">Facebook Link</a></li>
                    </ul>
                </div>
            </div>
        </nav>
    );
  }
}

export default Footer;