import React, { Component } from 'react'
import ReactDOM from 'react-dom'
import Actors from './components/Actors'
import Shows from './components/Shows'

class App extends Component {

	render(){
		return (
			<div>
				<Actors />
				<Shows />
			</div>
		)
	}
}

ReactDOM.render(<App />, document.getElementById('app'))