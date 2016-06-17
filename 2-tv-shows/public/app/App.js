import React, { Component } from 'react'  // var react = require('react')
import ReactDOM from 'react-dom'
import Shows from './components/Shows'

class App extends Component {

	render(){

		return (
			<div>
				HELLO REACT!
				<Shows />
			</div>
		)

	}
}

ReactDOM.render(<App />, document.getElementById('app'))