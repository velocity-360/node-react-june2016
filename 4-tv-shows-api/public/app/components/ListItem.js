import React, { Component } from 'react'

class ListItem extends Component {

	render(){
		var content = this.props.entity.name+', '
		if (this.props.type == 'show'){
			content += this.props.entity.network
		}
		else {
			content += this.props.entity.gender
		}


		return (
			<li>{content}</li>
		)

	}
}

export default ListItem