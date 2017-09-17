import React, { Component } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import axios from 'axios';
import Card from './Card';

class GetData extends Component{

	constructor(props){
		super(props);

		this.state ={
			
		};

		this.handleSubmit = this.handleSubmit.bind(this);
		this.displayData = this.displayData.bind(this);
		this.displayPersonData = this.displayPersonData.bind(this);
	}

	handleSubmit(event){
		event.preventDefault();
		axios.get(`https://reqres.in/api/users`)
			.then( resp => {
				this.props.personData(resp.data.data)
			})
	}

	displayPersonData(){
		return(
			//console.log("kumar")
			this.props.persons.map((person)=><Card key={person.id} {...person}/>)
		)
	}

	displayData(){
		return(
			this.props.persons.map(()=><Card/>)
		);
	}
	
	render(){
		return(
			<div>
				<form onSubmit={this.handleSubmit}>
					<button type="submit" className="btn btn-primary">User</button>
					<div className="jumbotron" >
						{this.displayPersonData()}
					</div>
				</form>
			</div>
		)
	}
}

export default GetData;