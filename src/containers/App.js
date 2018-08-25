import React, { Component } from 'react';
import NavBar from '../components/NavBar/NavBar'
import Header from '../components/Header/Header'
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <NavBar />
        <Header />
      </div>
    );
  }
}

export default App;
