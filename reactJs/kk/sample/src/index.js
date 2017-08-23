import React from 'react';
import ReactDOM from 'react-dom';
/*Introducing the Router */
import { BrowserRouter, Route } from 'react-router-dom';

 //this is default file
// import registerServiceWorker from './registerServiceWorker';
/* my Components */
import './css/style.css';
import StorePicker from './components/StorePicker';
import App from './components/App';
import NotFound from './components/NotFound';


const Root = () => {
	return(
		<BrowserRouter>
			<div>
				<Route exact path="/home" component = { StorePicker } />	
				<Route exact path="/store/:storeId" component = { App }>
					
				</Route>					
			</div>
		</BrowserRouter>
	)
}

ReactDOM.render(<Root />, document.querySelector('#root'));
// registerServiceWorker();

