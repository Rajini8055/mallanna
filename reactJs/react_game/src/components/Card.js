import React, { Component } from 'react';

const card = (props)=>{
	return(
		<div style={{margin:'1em'}}>
			<img width='75' src={props.avatar_url}/>
			<div style={{display:'inline-block',marginLeft:10}}>
				<div style={{fontSize:'1.25em',fontWeight:'bold'}}>
				{props.name}
				</div>
				<div>company Name Here</div>
			</div>
		</div>
	) 
}

export default card;