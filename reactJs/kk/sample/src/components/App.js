import React from 'react';
import Header from './Header';
import Order from './Order';
import Inventory from './Inventory';
import Fish from './Fish';
import sampleFishes from './sample-fishes';
import base from '../base'


class App extends React.Component{
	constructor(){
		super();

		this.addFish = this.addFish.bind(this);
		this.removeFish = this.removeFish.bind(this);
		this.loadSamples = this.loadSamples.bind(this);
		this.addToOrder = this.addToOrder.bind(this);
		this.updateFish = this.updateFish.bind(this);

		//get the initial state
		this.state = {
			fishes:{},
			order:{}
		}
	}

	componentWillMount(){
		this.ref = base.syncState(`${this.props.match.params.storeId}/fishes`
			,{
				context:this,
				state: 'fishes'
			});

		const localStorageRef = localStorage.getItem(`order-${this.props.match.params.storeId}`);
		// console.log(localStorageRef);
		if(localStorageRef){
			//update our Apps component order state
			this.setState({
				order: JSON.parse(localStorageRef)
			});
		}
	}

	componentWillUnmount(){
		base.removeBinding(this.ref);
	}

	componentWillUpdate(nextProps, nextState){
		// console.log('something changed');
		// console.log({nextProps,nextState});
		// console.log(`order-${this.props.match.params.storeId}`);
		// console.log(nextState.order);
		localStorage.setItem(`order-${this.props.match.params.storeId}`, 
	 	JSON.stringify(nextState.order));
	}

	addFish(fish){
		//update the state
		// this.state.fishes.fish1 = fish;
		const fishes = {...this.state.fishes};
		const timeStamp = Date.now();
		fishes[`fish-${timeStamp}`] = fish;
		//set the state
		this.setState({fishes:fishes}); //we can also write ({fishes}), In es6 key&value is same
	}

	updateFish(key, updateFish){
  		const fishes = {...this.props.fishes};
  		fishes[key] = updateFish;
  		this.setState({fishes});
  	}

  	removeFish(key){
  		const fishes = {...this.state.fishes};
  		fishes[key] = null;
  		this.setState({ fishes });
  	}

	 loadSamples() {
    	this.setState({
      	fishes: sampleFishes
    	});
  	}

  	addToOrder(key){
  		//get the copy of the state
  		const order = {...this.state.order };
  		//update or add the new number of fish ordered
  		order[key] = order[key]+1 || 1;
  		//update the state
  		this.setState({order:order}); //else ({orders}) 
  	}

	render(){
		{/*here index for us, key is for component*/}
		return(
			<div className="catch-of-the-day">
				<div className="menu">
				<Header tagline="Fresh Sea food Market"/>
				<ul className="list-of-fishes">
					{ 
						Object
						.keys(this.state.fishes)
						.map((key)=> <Fish key={key} index={key}  
											details={this.state.fishes[key]} 
											 addToOrder={this.addToOrder}/>)
					}
				</ul>
				</div>
				<Order 
				fishes={this.state.fishes} 
				order={this.state.order} 
				params = {this.props.match.params}
				/>
				<Inventory addFish = {this.addFish} 
							loadSamples = {this.loadSamples} 
							fishes={this.state.fishes} 
							updateFish={this.updateFish}
							removeFish={this.removeFish} />
			</div>
		)
	}
}

export default App;