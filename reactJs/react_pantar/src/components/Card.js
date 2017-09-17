import React, { Component } from 'react';


const card = (props)=>{
		return(
			
				<div style={{display:'inline-block',marginLeft:10}}>
					<div style={{fontSize:'1.25em',fontWeight:'bold'}}>
					{props.first_name}
					<div>{props.last_name}</div>
					</div>

				</div>
			
		)
}

export default card;