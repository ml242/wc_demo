import React, { Component } from 'react';
import {Nav} from 'react-bootstrap';
import './App.css';
import Report from './Report';
import Why from './Why';
import Donate from './Donate';
import Press from './Press';
import Footer from './Footer';



const jumboStyle ={
  backgroundColor: "lightblue"
}

const navStyle = {
    backgroundColor: '#5bc0de'
}

class App extends Component {


  render() {
    return (
      <div className="App">
        <div className="container-fluid" style={jumboStyle}>
          <div className="App-header">
            <a href="https://www.teepublic.com/user/morgancline" target="_blank">
              <img src={'trump.png'} className="App-logo" alt="logo" />
            </a>
            <h2>White Crimes List</h2>
          </div>
        </div>
        <Nav className="App-intro" bsStyle="pills" style={navStyle}>
          <Report bsStyle='inline'></Report>
          <Why bsStyle='inline'>Report a White Crime</Why>
          <Donate bsStyle='inline'>Donate</Donate>
        </Nav>
        <Press>Press</Press>
        <Footer />        
      </div>
    );
  }
}

export default App;
