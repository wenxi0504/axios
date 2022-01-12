import React,{Component} from 'react'
import axios 
import './App.css';

import React, { Component } from 'react'

export default class App extends Component {

  getStudentData=()=>{
    axios.get('http://localhost:5000/students').then(
      response=>{console.log('successful', response.data);},
      error=>{console.log('failed',error);}
    )

  }

  render() {
    return (
      <div>
        <button onClick={this.getStudentData}>Click Me to get student Data</button>
      </div>
    )
  }
}



