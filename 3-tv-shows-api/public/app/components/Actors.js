import React, { Component } from 'react'
import ListItem from '../components/ListItem'

class Actors extends Component {

	constructor(props, context){
		super(props, context)
		this.state = {
			actors: [
				{name:'Sofia Vergara', gender:'f'},
				{name:'Ed ONeil', gender:'m'},
				{name:'Ty Burrell', gender:'m'}
			]
		}
	}

	render(){

		var actorsList = this.state.actors.map(function(actor, i){
			return <ListItem key={i} type="actor" entity={actor} />

		})

		return (
			<div style={{backgroundColor:'#f9f9f9', border:'1px solid #ddd', padding:16}}>
				<h2>Actors</h2>

				<ol>
					{actorsList}
				</ol>
			</div>

		)

	}
}

export default Actors