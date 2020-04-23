import axios from 'axios';

export const START = 'START';
export const SUCCESS = 'SUCCESS';
export const FAIL = 'FAIL';
export const ADD_ACCOUNT = 'ADD_ACCOUNT';
export const ADD_ACCOUNT_SUCCESS = 'ADD_ACCOUNT_SUCCESS';
export const ADD_ACCOUNT_FAIL = 'ADD_ACCOUNT_FAIL';
export const SET_CURRENT = 'SET_CURRENT';
export const CLEAR_CURRENT = 'CLEAR_CURRENT';
export const SET_LOADING = 'SET_LOADING';
export const DELETE_ACCOUNT = 'DELETE_ACCOUNT';

export const getAccounts = () => (dispatch) => {
	dispatch({ type: START });

	//GET accounts
	return axios
		.get(`http://localhost:5000/api/accounts`)
		.then((res) => {
			console.log('get all accounts action', res.data);
			dispatch({ type: SUCCESS, payload: res.data });
		})
		.catch((err) => {
			console.log('err', err);

			dispatch({
				type: FAIL,
				payload: err,
			});
		});
};

// Add Account to db
export const addAccount = (accounts) => (dispatch) => {
	dispatch({ type: ADD_ACCOUNT });
	axios
		.post(`http://localhost:5000/api/accounts`, accounts)
		.then((res) => {
			console.log('add ACCOUNT', res);
			dispatch({ type: ADD_ACCOUNT_SUCCESS, payload: res.data });
		})
		.catch((err) => {
			dispatch({ type: ADD_ACCOUNT_FAIL, payload: err });
		});
};

//Delete account from server
export const deleteAccount = (id) => (dispatch) => {
	console.log('delete account', id);
	dispatch({ type: DELETE_ACCOUNT });

	axios
		.delete(`http://localhost:5000/api/accounts/${id}`)
		.then((res) => {
			console.log('delete account:', res.data);
			dispatch({ type: DELETE_ACCOUNT, payload: id });
		})
		.catch((err) => {
			dispatch({ type: FAIL, payload: err });
		});
};

// Set current account
export const setCurrent = (accounts) => {
	return {
		type: SET_CURRENT,
		payload: accounts,
	};
};

// Clear current account
export const clearCurrent = () => {
	return {
		type: CLEAR_CURRENT,
	};
};

// Set Loading to true
export const setLoading = () => {
	return {
		type: SET_LOADING,
	};
};
