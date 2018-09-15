import React from 'react';
import ReactDOM from 'react-dom';
import {BrowserRouter, Route, Switch} from 'react-router-dom';
import './index.css';
import App from './App';
import User from './user';
import registerServiceWorker from './registerServiceWorker';


export default () =>
(
	<BrowserRouter>
		<Switch>
			<Route path="/"component ={App} />
			<Route path="/login" component={User} />
		</Switch>
	</BrowserRouter>
);
ReactDOM.render(<App />, document.getElementById('root'));
registerServiceWorker();

