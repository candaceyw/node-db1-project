import {
	START,
	SUCCESS,
	FAIL,
	ADD_ACCOUNT,
	ADD_ACCOUNT_SUCCESS,
	ADD_ACCOUNT_FAIL,
	DELETE_ACCOUNT,
	SET_CURRENT,
	CLEAR_CURRENT,
	SET_LOADING,
} from '../actions/accountsAction';

const initialState = {
	accounts: [],
	loading: false,
	error: null,
};

export default (state = initialState, action) => {
	switch (action.type) {
		case START:
			return {
				...state,
				loading: true,
				error: null,
			};
		case SUCCESS:
			return {
				...state,
				accounts: action.payload,
				loading: false,
				error: null,
			};
		case FAIL:
			return {
				...state,
				accounts: [],
				loading: false,
				error: action.payload,
			};
		case ADD_ACCOUNT_FAIL:
			return {
				...state,
				loading: true,
				error: '',
			};
		case ADD_ACCOUNT_SUCCESS:
			return {
				...state,
				loading: false,
				account: [...state.account, action.payload],
			};
		case ADD_ACCOUNT_FAIL:
			return {
				...state,
				loading: false,
				error: action.payload,
			};
		case DELETE_ACCOUNT:
			return {
				...state,
				accounts: state.accounts.filter(
					(account) => account.id !== action.payload
				),
				loading: false,
			};
		case SET_CURRENT:
			return {
				...state,
				current: action.payload,
			};

		case CLEAR_CURRENT:
			return {
				...state,
				current: null,
			};
		case SET_LOADING:
			return {
				...state,
				loading: true,
			};
		default:
			return state;
	}
};
