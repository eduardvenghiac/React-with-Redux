import React, { Component } from 'react';
import TaskList from './TaskList/TaskList'
import Header from './Header/Header'
import Footer from './Footer/Footer'

import './App.css';

class App extends Component{
  render(){
    return (
      <div className="App">
        <Header />
        <hr></hr>
        <TaskList/>
        <hr></hr>
        <Footer />
      </div>
    );
  }
}

export default App;
