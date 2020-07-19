import React, { useState } from 'react';
import { connect } from 'react-redux';
import { addAccount } from '../actions/accountsAction';

const AddAcount = ({ addAccount }) => {
	const [name, setName] = useState('');
	const [budget, setBudget] = useState('');

	const onSubmit = () => {
		if (name === '' || budget === '') {
			alert({ html: 'Please enter information in all fields' });
		} else {
			const newAccount = {
				name,
				budget,
			};
			console.log(newAccount);
			addAccount(newAccount);

			// Clear Fields
			setName('');
			setBudget('');
		}
	};

	return (
		<div>
			<h1>Enter New Account Information</h1>
			<form>
				<input
					type='text'
					title='name'
					value={name}
					placeholder='Enter Name'
					onChange={(e) => setName(e.target.value)}
				/>

				<input
					type='text'
					title='budget'
					placeholder='Enter Budget'
					value={budget}
					onChange={(e) => setBudget(e.target.value)}
				/>

				<button onClick={onSubmit}>Submit</button>
			</form>
		</div>
	);
};
export default connect(null, { addAccount })(AddAcount);
