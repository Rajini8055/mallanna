import React, { Component } from 'react';
import {Table} from 'react-bootstrap';
import axios from 'axios';
import CardGet from './test.cardGet';
//testing
import EditAndRemove from './EditAndRemove';

class testGetData extends Component{

	constructor(props){
		super(props);

		this.handleSubmit = this.handleSubmit.bind(this);
		this.displayGetData = this.displayGetData.bind(this);
	}

	handleSubmit(event){
		event.preventDefault();
		axios.get(`https://reqres.in/api/users?page=2`)
			.then( resp => {
				this.props.getData(resp.data.data)
			});
	}

	displayGetData(){
		
		return(
			//console.log("kumar")
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
				<form onSubmit={this.handleSubmit}>
					<button type="submit" className="btn btn-primary">Get</button>
					<div className="jumbotron" >
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
					</div>
				</form>

				<div>
					<EditAndRemove rdata={this.props.removeData}/>
				</div>
			</div>
		)
	}
}

export default testGetData;