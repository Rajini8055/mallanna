import React, { Component } from 'react';
//import Buttons from './components/Buttons';
//import Result from './components/Result';
import CardList from './components/CardList';
import CardForm from './components/CardForm';


class App extends Component {

	state = {
	cards:[	]
	};
   
   addNewcard =(cardInfo)=>{
   	this.setState((prevState)=>({
   		cards: prevState.cards.concat(cardInfo)
   	}));
   }
   render(){
   	return(
   		<div>
   			<CardForm onSubmit={this.addNewcard}/>
   			<CardList cards={this.state.cards}/>
   		</div>
   	)
   }
}

export default App;
