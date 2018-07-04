import React, { Component } from 'react';
import './App.css';
import Header from './layout/Header';
import Footer from './layout/Footer';
import { Container } from "semantic-ui-react";

class App extends Component {
  render() {
    return (
      <div className="App">
        <Header/>
        <div class="ui hidden divider"></div>
        <Container>
          <h1>Main Page</h1>
          <Footer/>
        </Container>
      </div>
    );
  }
}

export default App;
