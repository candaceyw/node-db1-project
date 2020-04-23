import React from 'react';
import './App.css';
import Accounts from './components/Accounts';
import AddAccount from './components/AddAcount';

function App() {
	return (
		<div className='App'>
			<AddAccount />
			<Accounts />
		</div>
	);
}

export default App;
