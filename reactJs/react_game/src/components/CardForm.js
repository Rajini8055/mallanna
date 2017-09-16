import React, { Component } from 'react';
import axios from 'axios';


class CardForm extends Component{
	
	state ={
		userName: ""
	}

	handleSubmit = (event)=>{
		event.preventDefault();
		console.log	("form Submitted", this.state.userName);
		axios.get(`https://api.github.com/users/${this.state.userName}`)
			.then(resp =>{
				this.props.onSubmit(resp.data);
			});
	}

	render(){
		return(
		<div>
			<form onSubmit={this.handleSubmit}>
				<input type="text"
				value = {this.state.userName}
				onChange = {(event)=>this.setState({userName: event.target.value})}
				 placeholder="Git username" required/>
				
				
				
				<button type="submit">Add Card</button>
			</form>
		</div>
		)
	}
}

export default CardForm;