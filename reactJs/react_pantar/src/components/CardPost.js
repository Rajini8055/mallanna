//remember to add component while adding class
import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';

const CardPost = (props)=>{
		return(
			    <tr>
			      <td>{props.id}</td>
			      <td>{props.firstname}</td>
			      <td>{props.job}</td>
			      <td>{props.createdAt}</td>
			    </tr>			
		)
}

export default CardPost;