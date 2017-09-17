import React, { Component } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import axios from 'axios';


class PostData extends Component{
	


	handlePostData =(event)=>{
		event.preventDefault();
		axios.post('https://reqres.in/api/users',{"firstname":"kk","job":"Developer"})
			.then(response => {
				console.log("posted Successfully")
			})
	}
	



	render(){
		return(
			<div>
				<button type="submit" className="btn btn-primary">Post</button>
				<div className="jumbotron">{}</div>
			</div>
		)
	}
}

export default PostData;