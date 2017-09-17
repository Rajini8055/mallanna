import React, { Component } from 'react';
import './App.css';
import axios from 'axios';
import GetData from './components/GetData';
//import PostData from './components/PostData';

class App extends Component {
  
  constructor(props){
  	super(props);

	this.state = {
		personInfo:[
		]
	};

	this.addPersondata = this.addPersondata.bind(this);
  }

	addPersondata(info){
		this.setState((prevState)=>({
			personInfo: prevState.personInfo.concat(info)
		}))
		//console.log(info)
	}

  render() {
    return (
      <div>
        This is pantar app
        <GetData  personData={this.addPersondata} persons={this.state.personInfo}/>
      </div>
    );
  }
}

export default App;
