import React from 'react'
import { connect } from 'react-redux'
import classNames from 'classnames'
import { start, solve, changePuzzleType } from '../actions/puzzle'
import { enable, disable } from '../actions/sound'
import { PuzzleContainer } from './'
import { Icon } from '../components'

class AppContainer extends React.Component {
  resolving(e) {
    const { resolving_movements, resolving } = this.props.puzzle
    if (resolving_movements.length > 0 && !resolving) {
      this.props.solve()
    }
  }
  puzzleTypeClassname(puzzle_type)  {
    return classNames({
      'btn': true,
      'btn-xs': true,
      'btn-default': true,
      'disabled': puzzle_type == this.props.puzzle.puzzle_type
    })
  }
  render() {
    const { resolving_movements, resolving } = this.props.puzzle
    const resolving_classname = classNames({
      'btn': true,
      'btn-success': true,
      'btn-lg': true,
      'disabled': resolving_movements.length == 0 || resolving
    })
    const sound_classname = classNames({
      'btn': true,
      'btn-xs': true,
      'btn-info': this.props.sound.enabled,
      'btn-warning': !this.props.sound.enabled
    })
    return (
      <div className="container-fluid">
        <a href="https://github.com/thiagosf/react-jogo-do-quinze/" className="go-to-github">
          <Icon name="github" />
        </a>
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
          <div className="row">
            <div className="col-xs-6">
              <p>
                <span className={resolving_classname} onClick={this.resolving.bind(this)}>Resolver jogo</span>
              </p>
            </div>
            <div className="col-xs-6 text-right">
              <p>
                <span className={sound_classname} onClick={this.props.sound.enabled ? this.props.disableSound : this.props.enableSound}>
                  {this.props.sound.enabled ? 'Som ativo' : 'Som desativado'}
                </span>
              </p>
            </div>
            <div className="col-xs-12">
              <small>Tipo</small>
              <br />
              <span className={this.puzzleTypeClassname('number')} onClick={this.props.changePuzzleType.bind(this, 'number')}>Número</span>
              <span> </span>
              <span className={this.puzzleTypeClassname('image-1')} onClick={this.props.changePuzzleType.bind(this, 'image-1')}>Imagem 1</span>
              <span> </span>
              <span className={this.puzzleTypeClassname('image-2')} onClick={this.props.changePuzzleType.bind(this, 'image-2')}>Imagem 2</span>
              <span> </span>
              <span className={this.puzzleTypeClassname('image-3')} onClick={this.props.changePuzzleType.bind(this, 'image-3')}>Imagem 3</span>
            </div>
          </div>
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
    puzzle: state.puzzle,
    sound: state.sound
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    start: (level) => {
      return dispatch(start({ level: level }))
    },
    solve: () => {
      return dispatch(solve())
    },
    enableSound: () => {
      return dispatch(enable())
    },
    disableSound: () => {
      return dispatch(disable())
    },
    changePuzzleType: (puzzle_type) => {
      return dispatch(changePuzzleType(puzzle_type))
    }
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(AppContainer)
