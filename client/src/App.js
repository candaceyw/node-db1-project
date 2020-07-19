import React from 'react';
import './App.scss';
import Accounts from './components/Accounts';
import AddAccount from './components/AddAcount';

function App() {
	return (
		<div className='app'>
			<AddAccount />
			<Accounts />
		</div>
	);
}

export default App;
