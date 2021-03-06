import React, { Component } from 'react';
import NavBar from '../components/NavBar/NavBar'
import Header from '../components/Header/Header'
import AboutMe from '../components/AboutMe/AboutMe'
import Skills from './Skills/Skills';
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <NavBar />
        <Header />
        <AboutMe />
        <Skills />
      </div>
    );
  }
}

export default App;
