import React, { Component } from 'react';
import {Button} from 'react-bootstrap';
import '../App.css'

class EditAndRemove extends Component{
	constructor(props){
		super(props);

		this.state = {
			editing:false
		}

		this.normalDisplay = this.normalDisplay.bind(this);
		this.editDisplay = this.editDisplay.bind(this);
		this.display = this.display.bind(this);
		this.edit = this.edit.bind(this);
		this.save = this.save.bind(this);
		this.removeD = this.removeD.bind(this);
	}

	edit(){
		this.setState({
			editing:true
		})
	}

	save(){
		this.setState({
			editing:false
		})
	}

	editDisplay(){
		console.log("editDisplay")
		return(
			<div>
				<input type="text" defaultValue={this.props.data.first_name} required/>
				<input type="text" defaultValue={this.props.data.last_name} required/>
				<Button onClick={this.save} 
						bsStyle="success">Save</Button>
			</div>
			
			)
	}

	normalDisplay(){
		console.log("normalDisplay")
		return(
			<div>
			<Button className="margins" 
					bsStyle="primary"
					onClick={this.edit}>Edit</Button>
			<Button className="margins" bsStyle="danger" onClick={this.removeD}>Remove</Button>
			</div>
		)
	}

		removeD(){
			console.log("removeD");
			this.props.rdata(5);
		}

		display(){

			if(this.state.editing){
					return this.editDisplay();
					}
				else{
					return this.normalDisplay();
					}
		}

	render(){
			return(
				<div>
					{this.display()}
				</div>
				)
			}
		}

export default EditAndRemove;