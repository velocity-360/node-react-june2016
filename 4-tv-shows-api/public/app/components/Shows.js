import React, { Component } from 'react'
import ListItem from '../components/ListItem'

class Shows extends Component {

	constructor(props, context){
		super(props, context)
		this.updateNextShow = this.updateNextShow.bind(this)
		this.addNextShow = this.addNextShow.bind(this)
		this.state = {
			shows: [
				{name:'How I Met Your Mother', network:'abc'},
				{name:'Big Bang Theory', network:'cbs'},
				{name:'Game of Thrones', network:'hbo'}
			],
			show: {
				name: '',
				network: ''
			}
		}
	}

	updateNextShow(event){
		console.log('updateNextShow: '+event.target.id+' == '+event.target.value)
//		this.state.show[event.target.id] = event.target.value // NO! do not mutate state

		var updatedShow = Object.assign({}, this.state.show)
		updatedShow[event.target.id] = event.target.value

		this.setState({
			show: updatedShow
		})
	}

	addNextShow(event){
		console.log('addNextShow: '+JSON.stringify(this.state.show))
		var nextShow = Object.assign({}, this.state.show)
		var updatedShows = Object.assign([], this.state.shows)
		updatedShows.push(nextShow)

		this.setState({
			shows: updatedShows,
			show:{
				name:'',
				network:''
			}
		})

	}

	render(){
		var showsList = this.state.shows.map(function(show, i){
			return <ListItem key={i} type="show" entity={show} />

		})

		return (
			<div style={{marginTop:24, backgroundColor:'#f1f9f5', border:'1px solid #ddd', padding:16}}>
				<h2>Shows</h2>

				<ol>
					{showsList}
				</ol>

				<h4 style={{marginBottom:0}}>Add Show</h4>
				<span>{this.state.show.name}</span><br /><br />
				<input onChange={this.updateNextShow} value={this.state.show.name} type="text" id="name" placeholder="Name" /><br />
				<input onChange={this.updateNextShow} value={this.state.show.network} type="text" id="network" placeholder="Network" /><br />
				<button onClick={this.addNextShow}>Add Show</button>
			</div>
		)

	}
}

export default Shows