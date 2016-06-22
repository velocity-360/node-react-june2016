import constants from '../constants/constants'

var initialState = {
	actors: [],
	actorsArray: []
}

export default function(state = initialState, action){

	switch (action.type) {
		case constants.ACTORS_RECEIVED:
			console.log('ACTORS_RECEIVED: '+JSON.stringify(action.actors))
			var newState = Object.assign({}, state)
			newState['actorsArray'] = action.actors

			return newState


		case constants.ACTOR_CREATED:
			console.log('ACTOR_CREATED: '+JSON.stringify(action.actor))
			var newState = Object.assign({}, state)
			var newArray = Object.assign([], newState.actorsArray)
			newArray.push(action.actor)

			newState['actorsArray'] = newArray
			return newState

		default:
			return state

		}

}