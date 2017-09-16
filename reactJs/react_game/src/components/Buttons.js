import React, { Component } from 'react';

class Buttons extends Component{
	
	handleclick = ()=>{
		this.props.onClickFunction(this.props.incrementValue)
	}
	render(){
		return (
			<div>
				<button onClick={this.handleclick}>
				{this.props.incrementValue}
				</button>
			</div>
		)
	}
}


export default Buttons;