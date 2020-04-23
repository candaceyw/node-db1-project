import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import { getAccounts } from '../actions/accountsAction';
import AccountsCard from './AccountsCard';

const Accounts = ({ getAccounts, accounts, loading }) => {
	console.log('accounts posts', accounts);
	useEffect(() => {
		getAccounts();
		//eslint-disable-next-line
	}, []);

	if (loading || accounts === null) {
		return 'Loading...';
	}

	return (
		<div>
			<h1> Accounts </h1>

			<div>
				{!loading && accounts.length === 0 ? (
					<p className='center'>No Accounts available... </p>
				) : (
					accounts.map((e) => (
						<AccountsCard
							name={e.name}
							budget={e.budget}
							id={e.id}
							key={e.id}
						/>
					))
				)}
			</div>
		</div>
	);
};

const mapStateToProps = (state) => {
	return {
		accounts: state.accounts,
		error: state.error,
	};
};

export default connect(mapStateToProps, { getAccounts })(Accounts);
