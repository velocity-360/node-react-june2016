import React, { Component } from 'react'

class ListItem extends Component {

	render(){

		return (
			<li>
				{this.props.show.name}, {this.props.show.network.toUpperCase()}
			</li>
		)
	}
}

export default ListItem 