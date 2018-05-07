import React, { Component } from 'react';
import { render } from 'react-dom';
// Import routing components
import { Router, Route, IndexRoute, browserHistory } from 'react-router';

import Main from './common/main.component.jsx'
import Home from './common/home.component.jsx'
import About from './common/about.component.jsx'
import User from './user/user.component.jsx'
import UserDetail from './user/user-detail.component.jsx'

const data = [
	{
		id: 1,
		name: 'Javier',
		surname: 'Cansado',
		profession: 'Carpintero',
		media: 'http://www.lacaffe.es/video-entrevista-javier-cansado/'

	},
	{
		id: 2,
		name: 'Pepin',
		surname: 'Tre',
		profession: 'Carnicero',
		media: 'http://ocioengalicia.com/vigo/concierto-de-pepin-tre-en-vigo/'

	}
];

render(
	<Router history={browserHistory}>
		<Route component={Main}>
			<Route path="/" component={Home} />
			<Route path="/users" component={User} data={data} />
			{/* Parameter route*/}
			<Route path="/users/:id" component={UserDetail} data={data} />
			<Route path="/about" component={About} />
		</Route>
	</Router>,
	document.getElementById('container')
);
