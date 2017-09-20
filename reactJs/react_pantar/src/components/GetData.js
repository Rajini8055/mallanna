import React, { Component } from 'react';
import {Table} from 'react-bootstrap';
import axios from 'axios';
import CardGet from './CardGet';

	/**
	*Child component of App.js
	**/
class GetData extends Component{

constructor(props){
	super(props);

	this.handleSubmit = this.handleSubmit.bind(this);
	this.displayGetData = this.displayGetData.bind(this);
}

	/**
	*@handleSubmit function to excute on form submission
	*Holds the get request 
	*@axios is an jquery library to perform CRUD operations
	**/
handleSubmit(event){
	event.preventDefault();
	axios.get(`https://reqres.in/api/users?page=2`)
		.then( resp => {
			this.props.getData(resp.data.data)
	});
}

	/**
	*@displayGetData function display the data received by "get" request
	*propsData is ref of state objects in App.js 
	*@<CardGet/> is a child component from CardGet.js used for display
	*update and rempve are sent as ref to CardGet.js to perform corresponding operations
	**/
displayGetData(){
	return(
		this.props.propsData.map((person)=><CardGet key={person.id} 
													{...person}
													update={this.props.updateData} 
													remove={this.props.removeData}
													id={person.id} />)
		)
}

render(){
	return(
		<div>
	{/**
	*form hold the Get Button and Table to dislay the data for "Get" request
	**/}
	<div className="jumbotron" >
		<form onSubmit={this.handleSubmit}>
			<button type="submit" className="btn btn-primary">Get</button>
				<Table striped bordered condensed hover>
					  <thead style={{backgroundColor:"#bfc9c9"}}>
					    <tr>
					      <th>Id</th>
					      <th>First Name</th>
					      <th>Last Name</th>
					    </tr>
					  </thead>
					  <tbody>
					     {this.displayGetData()}
					  </tbody>
				</Table>
			</form>
		</div>
	</div>
	)
	}
}

export default GetData;