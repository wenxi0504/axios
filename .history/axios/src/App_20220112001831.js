import React,{Component} from 'react'
import axios 
import './App.css';

import React, { Component } from 'react'

export default class App extends Component {

  getStudentData=()=>{
    // must change 5000 to 3000, bc proxy is 3000,same as client side
    axios.get('http://localhost:3000/students').then(
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



