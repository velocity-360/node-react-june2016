import React, { Component } from 'react'
import ReactDOM from 'react-dom'
import Actors from './components/Actors'
import Shows from './components/Shows'
import { Provider } from 'react-redux'
import store from './stores/store'

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

ReactDOM.render(<Provider store={store}><App /></Provider>, document.getElementById('app'))