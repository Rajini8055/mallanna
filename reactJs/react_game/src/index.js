import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
//NOTE: Don't use lowercase at declaration
import App from './App';
import CardList from './components/CardList'
import registerServiceWorker from './registerServiceWorker';




ReactDOM.render(<App />, document.getElementById('root'));
//testng the card components
//ReactDOM.render(<CardList />, document.getElementById('root'));

registerServiceWorker();
