import React, { Component } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import PostData from './components/PostData';
import GetData from './components/GetData';

class App extends Component {
	/**
 	*@constructor to hold state and all binded function
 	**/
constructor(props){
	super(props);

	this.state = {
	getPersonData:[],
	postPersonData:[]
	};

	this.addGetdata = this.addGetdata.bind(this);
	this.addPostData = this.addPostData.bind(this);
	this.updateData = this.updateData.bind(this);
	this.removeData = this.removeData.bind(this);
	}
	/**
 	*@addGetData to reset the state after Get request
 	*sent as props to use it in PostData.js
 	**/
addGetdata(getInfo){
	this.setState((prevState)=>({
		getPersonData: prevState.getPersonData.concat(getInfo)
	}))
	}

	/**
 	*@addPostData to reset the state after Post request
 	*sent as props to use it in PostData.js
 	**/
addPostData(postInfo){
	this.setState((prevState)=>({
		postPersonData: prevState.postPersonData.concat(postInfo)
		}))
	}

	/**
 	*@removeData to remove data from the state and to reset the state after deletion
 	*sent as props to use it in getData.js and here to CardData.js as props
 	**/
removeData(id){
	console.log("this is from removeData " );
	var getPerson = this.state.getPersonData;
	const i = this.state.getPersonData.findIndex(e=>e.id===id)
	getPerson.splice(i,1)
	this.setState({getPersonData:getPerson});
	}

	/**
 	*@removeData to remove data from the state and to reset the state after deletion
 	*sent as props to use it in getData.js and here to CardData.js as props
 	**/
updateData(id,fname,lname){
	var getPerson = this.state.getPersonData;
	const i = this.state.getPersonData.findIndex(e=>e.id===id)
	 getPerson[i].first_name = fname;
	 getPerson[i].last_name = lname;
	this.setState({getPersonData:getPerson});
	}
		
render() {
	return (
	  <div>
	   <h1>Sample Get, Post, Update and Delete operations</h1>
	    
	    {/*
	    *accessing GetData component from GetData.js
		**/}
	    <GetData  	getData={this.addGetdata} 
    				propsData={this.state.getPersonData} 
    				removeData={this.removeData}
        			updateData={this.updateData}/>
        
        {/**
        *accessing PostData component from PostData.js
    	**/}
        <PostData 	postData={this.addPostData} 
        			propsData={this.state.postPersonData}/>
      </div>
    );
  }
}

export default App;
