import React, { Component } from 'react';
import {Button} from 'react-bootstrap';
import '../App.css'

	/**
	*Child component for GetData.js
	**/
class CardGet extends Component{
constructor(props){
	super(props);

	this.state = {
		editing:false
	}

	this.normalDisplay = this.normalDisplay.bind(this);
	this.editDisplay = this.editDisplay.bind(this);
	// this.display = this.display.bind(this);
	this.edit = this.edit.bind(this);
	this.save = this.save.bind(this);
	this.removePerson = this.removePerson.bind(this);
}

	/**
	*@edit set's the state to perform edit operation 
	**/
edit(){
	this.setState({
		editing:true
	})
}

	/**
	*@save set's the state to perform save operation 
	*@update is the ref from GetData(ref from App.js)
	**/
save(event){
	this.setState({
		editing:false
	})
	const id = this.props.id;
	const fname = this.fname.value;
	const lname = this.lname.value;
	this.props.update(id,fname,lname);
}
	
	/**
	*@removePerson ref from GetData.js(refers App.js) 
	**/
removePerson(){
	this.props.remove(this.props.id);
}

	/**
	*@editDisplay function displays the edit mode 
	*td turns into TextInput for editing
	**/
editDisplay(){
	console.log("editDisplay")
	return(
		<tr>
			<td>{this.props.id}</td>
			<td><input ref={(input)=>{this.fname=input}} type="text" defaultValue={this.props.first_name} required/></td>
			<td><input ref={(input)=>{this.lname=input}} type="text" defaultValue={this.props.last_name} required/></td>
			<td>
			<Button id={this.props.id}
					onClick={this.save} 
					className="editAndRemoveBtn" 
					bsStyle="success">Save</Button>
			</td>
		</tr>
		
	)
}

	/**
	*@normalDisplay function displays the normal mode 
	*when editing state is false
	**/
normalDisplay(){
	return(
		<tr onClick={this.edit}>
			<td>{this.props.id}</td>
			<td>{this.props.first_name}</td>
			<td>{this.props.last_name}</td>
			<td>
				<Button id={this.props.id} className="editAndRemoveBtn" 
						bsStyle="primary"
						onClick={this.edit}>Edit</Button>
				<Button id={this.props.id} className="editAndRemoveBtn" 
						bsStyle="danger"
						onClick={this.removePerson}>Remove</Button>
			</td>
		</tr>
	)
	}

	/**
	*@render function returns the mode to display(either normal or edit)
	**/
render(){
	if(this.state.editing){
		return this.editDisplay();
		}
	else{
		return this.normalDisplay();
		}		
	}
}	
export default CardGet;