import constants from '../constants';

export default {


	profileCreated: (profile) => {

		console.log('action called, now go to reducer');
		return {
			type: constants.PROFILE_CREATED,
			profile: profile
		}
	},


	currentUserReceived: (profile) => {

		console.log('action called, now go to reducer');
		return {
			type: constants.CURRENT_URDER_RECEIVED,
			profile: profile
		}
	}


}