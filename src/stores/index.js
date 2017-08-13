import { combineReducers, applyMiddleware, createStore } from 'redux';
import thunk from 'redux-thunk';
import { accountReducer } from '../reducers';

var store;
export default{

	configureStore: () => {

		const reducers = combineReducers({

			// match to stateToProps 'account'
			account: accountReducer,

		})

		store = createStore(
			reducers,
			applyMiddleware(thunk)
		)
		return store
	},

	currentStore: () => {
		return store
	}

}