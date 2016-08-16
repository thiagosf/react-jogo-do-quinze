import React from 'react'
import ReactDOM from 'react-dom'

require('../scss/index.scss')

class App extends React.Component {
  render() {
    return (
      <div className="container-fluid">
        <h1>Teste</h1>
        <a className="btn btn-primary">Vai</a>
      </div>
    )
  }
}

// ReactDOM.render(<App />, document.getElementById('app'))
