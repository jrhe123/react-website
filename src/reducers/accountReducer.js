import constants from '../constants';

var initialState = {

	currentUser: null
}

export default (state = initialState, action) => {


	let updated = Object.assign({}, state);
	switch(action.type){

		case constants.PROFILE_CREATED:

			console.log('reducer received, call back to component');
			
			updated['currentUser'] = action.profile;
			return updated;


		case constants.CURRENT_URDER_RECEIVED:

			console.log('reducer received, call back to component');
			
			updated['currentUser'] = action.profile;
			return updated;	

		default:
			
			return state;	

	}

}