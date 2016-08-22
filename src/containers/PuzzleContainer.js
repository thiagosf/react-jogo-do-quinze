import React from 'react'
import { connect } from 'react-redux'
import classNames from 'classnames'
import { startPuzzleItems, checkWinner } from '../actions/puzzle'
import { play, stop } from '../actions/sound'
import { Puzzle, PuzzleStats } from '../components'
import { PuzzleControlsContainer } from './'
import { directions, getFromTo } from '../helpers'

class PuzzleContainer extends React.Component {
  componentDidMount() {
    this.props.startPuzzleItems()
  }
  componentWillReceiveProps() {
    this.props.checkWinner()
  }
  onClickItem(position) {
    const { puzzle } = this.props
    let { moves } = puzzle
    
    directions.map(direction => {
      const { from_position, to_position } = getFromTo(direction, puzzle)
      if (from_position == position) {
        this.refs.puzzleControlsContainer.dispatchProps.movePuzzleItem(
          direction,
          from_position,
          to_position,
          ++moves
        )
        this.props.stop()
        this.props.play('puzzle_move')
      }
    })
  }
  render() {
    const congratulations = classNames({
      'winner-message': true,
      'on': this.props.puzzle.winner,
      'computer': this.props.puzzle.winner_computer
    })
    return (
      <div className="puzzle-container-box">
        <h2 className={congratulations}>Parabéns! <span>Você ganhou!</span></h2>
        <Puzzle puzzle={this.props.puzzle} onClickItem={this.onClickItem.bind(this)} />
        <PuzzleStats puzzle={this.props.puzzle} />
        <PuzzleControlsContainer ref="puzzleControlsContainer" />
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
    },
    play: (sound) => {
      return dispatch(play(sound))
    },
    stop: () => {
      return dispatch(stop())
    }
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(PuzzleContainer)
