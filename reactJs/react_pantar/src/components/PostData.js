import React, { Component } from 'react';
import {Table} from 'react-bootstrap';
import axios from 'axios';
import CardPost from './CardPost';

	/**
	*Child Component to App.js
	**/
class PostData extends Component{

constructor(props){
	super(props);
	/**
	*this is local state to be used in this component
	**/
	this.state ={
		firstname:"",
		job:""
	}

	this.displayPostData = this.displayPostData.bind(this);
	this.handlePostData = this.handlePostData.bind(this);
	}
	
	/**
	*@handlePostData function holds 
	*axios performs post request and pass data on to addPostData in App.js
	**/
handlePostData(event){
	event.preventDefault();
	let data = 
		{
		"firstname":`${this.state.firstname}`,
		"job":`${this.state.job}`
		};
	axios.post('https://reqres.in/api/users',data)
		.then(response => {this.props.postData(response.data)})
	}
	
	/**
	*@displayPostData posted data 
	*@<CardPost /> component from CardPost.js
	**/
displayPostData(){
	return(
	this.props.propsData.map((person)=><CardPost key={person.id} {...person}/>)
	)
	}

render(){
	return(
		<div>
			<div className="jumbotron" >
			<form onSubmit={this.handlePostData}>
				<input type="text" 
						value = {this.state.firstname}
						onChange = {(event)=>this.setState({firstname: event.target.value})}
						name="firstname" 
						required
				/>
				<input type="text" 
						value = {this.state.job}
						onChange = {(event)=>this.setState({job: event.target.value})}
						name="job" 
						required
				/>

				<button type="submit" className="btn btn-primary">Post</button>
					<Table striped bordered condensed hover>
						  <thead style={{backgroundColor:"#bfc9c9"}}>
						    <tr>
						      <th>id</th>
						      <th>First Name</th>
						      <th>Job</th>
						      <th>createdAt</th>
						    </tr>
						  </thead>
							  <tbody>
							 		 {this.displayPostData()}
							  </tbody>
						 </Table>
			</form>
			</div>
		</div>
		)
	}
}

export default PostData;