import React, { Component } from 'react';
import axios from 'axios';

class GetData extends Component{
	render(){
		return(
			<div>
				This is kumaraswamy
				axios.get(`https://reqres.in/api/users?page=2`)
					.then((resp)=>{
						console.log(resp)
					})
			</div>
		)
	}
}

export default GetData;