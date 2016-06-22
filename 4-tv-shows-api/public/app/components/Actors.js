import React, { Component } from 'react'
import ListItem from '../components/ListItem'
import APIManager from '../utils/APIManager'
import actions from '../actions/actions'
import store from '../stores/store'
import { connect } from 'react-redux'

class Actors extends Component {

	constructor(props, context){
		super(props, context)
		this.updateActor = this.updateActor.bind(this)
		this.addActor = this.addActor.bind(this)
		this.state = {
			actor:{
				name:'',
				gender:'',
				age: 0
			}
		}
	}

	componentDidMount(){
		var _this = this
		APIManager.get('/api/actor', null, function(err, response){
			if (err){
				alert(err)
				return
			}

//			console.log(JSON.stringify(response))
			store.dispatch(actions.actorsReceived(response.results))
		})
	}

	updateActor(event){
		console.log('updateActor: '+event.target.id+' == '+event.target.value)
		// this.state.actor[event.target.id] = event.target.value // NO

		var updatedActor = Object.assign({}, this.state.actor) // create copy
		updatedActor[event.target.id] = event.target.value // YES

		this.setState({
			actor: updatedActor
		})
	}

	addActor(event){
		var _this = this
		APIManager.post('/api/actor', this.state.actor, function(err, response){
			if (err){
				alert(err)
				return
			}

//			console.log('addActor: '+JSON.stringify(response.result))
			store.dispatch(actions.actorCreated(response.result))
		})
	}

	render(){

		var actorsList = this.props.actors.map(function(actor, i){
			return <ListItem key={i} type="actor" entity={actor} />

		})

		return (
			<div style={{backgroundColor:'#f9f9f9', border:'1px solid #ddd', padding:16}}>
				<h2>Actors</h2>

				<ol>
					{actorsList}
				</ol>

				<input onChange={this.updateActor} placeholder="Name" id="name" type="text" /><br />
				<input onChange={this.updateActor} placeholder="Gender" id="gender" type="text" /><br />
				<input onChange={this.updateActor} placeholder="Age" id="age" type="text" /><br />
				<button onClick={this.addActor}>Add Actor</button>
			</div>

		)

	}
}

const stateToProps = function(state){
	console.log('STATE TO PROPS: '+JSON.stringify(state))

	return {
		actors: state.actorsReducer.actorsArray
	}

}

export default connect (stateToProps)(Actors)





