import constants from '../constants/constants'

export default {

	actorsReceived: function(actors){
		return {
			type: constants.ACTORS_RECEIVED,
			actors: actors
		}
	},

	actorCreated: function(actor){
		return {
			type: constants.ACTOR_CREATED,
			actor: actor
		}
	},

}