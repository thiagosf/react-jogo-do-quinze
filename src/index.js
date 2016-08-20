import React from 'react'
import ReactDOM from 'react-dom'
import { Provider, connect } from 'react-redux'
import { createStore, combineReducers } from 'redux'

import reducers from './reducers'
import { startPuzzleItems } from './actions/puzzle'
import { PuzzleContainer } from './containers'

require('../scss/index.scss')

class App extends React.Component {
  render() {
    return (
      <div className="container-fluid">
        <h1>Jogo do Quinze</h1>
        <p>Teste suas habilidades cerebrais com esse incrível quebra-cabeças!</p>
        <PuzzleContainer />
        <div className="start-game-box">
          <a href="#" className="btn btn-primary">Começar jogo</a>
        </div>
      </div>
    )
  }
}

let store = createStore(reducers)

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>, 
  document.getElementById('app')
)
