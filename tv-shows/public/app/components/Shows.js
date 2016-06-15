import React, { Component } from 'react'
import ListItem from '../components/ListItem'

class Shows extends Component {
	constructor(props, context){
		super(props, context)
		this.state = {
			shows: [
				{name: 'Two and a Half Men', network:'cbs'},
				{name: 'Kardashian Show', network:'vh1'},
				{name: 'Silicon Valley', network:'hbo'},
				{name: 'Game of Thrones', network:'hbo'}
			]
		}
	}

	render(){
		var showList = this.state.shows.map(function(show, i){
			return <ListItem key={i} show={show} />
		})

		return (
			<div>
				<h1>Shows</h1>

				<ol>
					{showList}
				</ol>
			</div>
		)
	}
}

export default Shows // module.exports = Shows