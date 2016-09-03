import React from 'react'
import { connect } from 'react-redux'
import classNames from 'classnames'
import { FormattedMessage } from 'react-intl'
import { start, solve, changePuzzleType } from '../actions/puzzle'
import { enable, disable } from '../actions/sound'
import { changeLanguage } from '../actions/intl'
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
  changeLanguage(locale, e) {
    e.preventDefault()
    this.props.changeLanguage(locale)
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
    let brain_skills = (
      <strong>
        <FormattedMessage id="brain_skills" />
      </strong>
    )
    return (
      <div className="container-fluid">
        <div className="locales-box">
          <a href="?locale=pt-BR" onClick={this.changeLanguage.bind(this, 'pt-BR')}>Português</a>
          <span> | </span>
          <a href="?locale=en-US" onClick={this.changeLanguage.bind(this, 'en-US')}>English</a>
        </div>
        <a href="https://github.com/thiagosf/react-jogo-do-quinze/" className="go-to-github">
          <Icon name="github" />
        </a>
        <h1>
          <FormattedMessage id="title" />
        </h1>
        <p>
          <FormattedMessage id="text" values={{ brain_skills: brain_skills }} />
        </p>
        <div className="start-puzzle-box">
          <p>
            <FormattedMessage id="start_game" />
          </p>
          <p>
            <span className="btn btn-info" onClick={this.props.start.bind(this, 1)}>
              <FormattedMessage id="easy" />
            </span>
            <span> </span>
            <span className="btn btn-primary" onClick={this.props.start.bind(this, 2)}>
              <FormattedMessage id="medium" />
            </span>
            <span> </span>
            <span className="btn btn-warning" onClick={this.props.start.bind(this, 3)}>
              <FormattedMessage id="hard" />
            </span>
            <span> </span>
            <span className="btn btn-danger" onClick={this.props.start.bind(this, 4)}>
              <FormattedMessage id="ninja" />
            </span>
          </p>
          <div className="row">
            <div className="col-xs-6">
              <p>
                <span className={resolving_classname} onClick={this.resolving.bind(this)}>
                  <FormattedMessage id="solve_game" />
                </span>
              </p>
            </div>
            <div className="col-xs-6 text-right">
              <p>
                <span className={sound_classname} onClick={this.props.sound.enabled ? this.props.disableSound : this.props.enableSound}>
                  {this.props.sound.enabled ? <FormattedMessage id="sound_on" /> : <FormattedMessage id="sound_off" />}
                </span>
              </p>
            </div>
            <div className="col-xs-12">
              <small>
                <FormattedMessage id="type" />
              </small>
              <br />
              <span className={this.puzzleTypeClassname('number')} onClick={this.props.changePuzzleType.bind(this, 'number')}>
                <FormattedMessage id="number" />
              </span>
              <span> </span>
              <span className={this.puzzleTypeClassname('image-1')} onClick={this.props.changePuzzleType.bind(this, 'image-1')}>
                <FormattedMessage id="image_1" />
              </span>
              <span> </span>
              <span className={this.puzzleTypeClassname('image-2')} onClick={this.props.changePuzzleType.bind(this, 'image-2')}>
                <FormattedMessage id="image_2" />
              </span>
              <span> </span>
              <span className={this.puzzleTypeClassname('image-3')} onClick={this.props.changePuzzleType.bind(this, 'image-3')}>
                <FormattedMessage id="image_3" />
              </span>
            </div>
          </div>
        </div>
        <PuzzleContainer />
        <footer className="text-center">
          <hr />
          <p>
            <FormattedMessage 
              id="developed_by"
              values={{
                react: <a href="https://facebook.github.io/react/" target="_blank">React</a>,
                author: <a href="https://github.com/thiagosf" target="_blank">Thiago S.F.</a>
              }}
              />
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
    },
    changeLanguage: (locale) => {
      return dispatch(changeLanguage(locale))
    }
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(AppContainer)
