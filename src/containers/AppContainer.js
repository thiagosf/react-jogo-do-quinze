import React from 'react'
import { connect } from 'react-redux'
import classNames from 'classnames'
import { start, solve } from '../actions/puzzle'
import { PuzzleContainer } from './'

class AppContainer extends React.Component {
  resolving(e) {
    const { resolving_movements, resolving } = this.props.puzzle
    if (resolving_movements.length > 0 && !resolving) {
      this.props.solve()
    }
  }
  render() {
    const { resolving_movements, resolving } = this.props.puzzle
    const resolving_classname = classNames({
      'btn': true,
      'btn-success': true,
      'btn-lg': true,
      'disabled': resolving_movements.length == 0 || resolving
    })
    return (
      <div className="container-fluid">
        <h1>Jogo do Quinze</h1>
        <p>Teste suas <strong>habilidades cerebrais</strong> com esse incrível quebra-cabeças!</p>
        <div className="start-puzzle-box">
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
            <span className={resolving_classname} onClick={this.resolving.bind(this)}>Resolver jogo</span>
          </p>
        </div>
        <PuzzleContainer />
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
    solve: () => {
      return dispatch(solve())
    }
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(AppContainer)
