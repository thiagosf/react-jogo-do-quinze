import React from 'react'
import { connect } from 'react-redux'
import classNames from 'classnames'
import { start, resolution, reset } from '../actions/puzzle'
import { PuzzleContainer } from './'

class AppContainer extends React.Component {
  resolving(e) {
    const { resolution_movements, resolving } = this.props.puzzle
    if (resolution_movements.length > 0 && !resolving) {
      this.props.resolution()
    }
  }
  render() {
    const { resolution_movements, resolving } = this.props.puzzle
    const resolving_classname = classNames({
      'btn': true,
      'btn-success': true,
      'btn-lg': true,
      'disabled': resolution_movements.length == 0 || resolving
    })
    return (
      <div className="container-fluid">
        <h1>Jogo do Quinze</h1>
        <p>Teste suas <strong>habilidades cerebrais</strong> com esse incrível quebra-cabeças!</p>
        <PuzzleContainer />
        <div className="start-game-box">
          <p>Inicie um jogo:</p>
          <p>
            <span className="btn btn-info" onClick={this.props.start.bind(this, 1)}>Fácil</span>
            <span> </span>
            <span className="btn btn-primary" onClick={this.props.start.bind(this, 2)}>Médio</span>
            <span> </span>
            <span className="btn btn-warning" onClick={this.props.start.bind(this, 3)}>Díficil</span>
            <span> </span>
            <span className="btn btn-danger" onClick={this.props.start.bind(this, 4)}>Ninja</span>
          </p>
          <p>
            <span className={resolving_classname} onClick={this.resolving.bind(this)}>Resolver</span>
          </p>
          <p>
            <span className="text-primary" onClick={this.props.reset}>Reiniciar</span>
          </p>
        </div>
        <footer className="text-center">
          <hr />
          <p>
            Desenvolvido com <a href="https://facebook.github.io/react/" target="_blank">React</a> por <a href="https://github.com/thiagosf" target="_blank">Thiago S.F.</a>
          </p>
        </footer>
      </div>
    )
  }
}

const mapStateToProps = (state) => {
  return {
    puzzle: state.puzzle
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    start: (level) => {
      return dispatch(start({ level: level }))
    },
    resolution: () => {
      return dispatch(resolution())
    },
    reset: () => {
      return dispatch(reset())
    }
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(AppContainer)
