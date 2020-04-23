import React from 'react';
import { connect } from 'react-redux';
import { deleteAccount, setCurrent } from '../actions/accountsAction';

const AccountsCard = (props) => {
	const onDelete = () => {
		props.deleteAccount(props.id);
		// M.toast({ html: 'post deleted' });
	};

	return (
		<div>
			<h1>Account Name: {props.name}</h1>
			<p>Budget:{props.budget}</p>
			<a href='#!' onClick={onDelete} className='secondary-content'>
				<i className='material-icons grey-text'>delete</i>
			</a>
		</div>
	);
};

export default connect(null, { deleteAccount, setCurrent })(AccountsCard);
