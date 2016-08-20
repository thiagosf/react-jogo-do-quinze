import React from 'react'
import { connect } from 'react-redux'
import classNames from 'classnames'
import { startPuzzleItems, checkWinner } from '../actions/puzzle'
import { Puzzle } from '../components'
import { PuzzleControlsContainer } from './'

class PuzzleContainer extends React.Component {
  componentDidMount() {
    this.props.startPuzzleItems()
  }
  componentWillReceiveProps() {
    this.props.checkWinner()
  }
  render() {
    const congratulations = classNames({
      'winner-message': true,
      on: this.props.puzzle.winner
    })
    return (
      <div className="puzzle-container-box">
        <h2 className={congratulations}>Parabéns! Você ganhou!</h2>
        <Puzzle puzzle={this.props.puzzle} />
        <PuzzleControlsContainer />
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    puzzle: state.puzzle
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    startPuzzleItems: () => {
      return dispatch(startPuzzleItems())
    },
    checkWinner: () => {
      return dispatch(checkWinner())
    }
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(PuzzleContainer)
