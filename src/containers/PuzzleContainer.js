import React from 'react'
import { connect } from 'react-redux'
import { startPuzzleItems } from '../actions/puzzle'
import { Puzzle } from '../components'
import { PuzzleControlsContainer } from './'

class PuzzleContainer extends React.Component {
  componentDidMount() {
    this.props.startPuzzleItems()
  }
  render() {
    return (
      <div className="puzzle-container-box">
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
    }
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(PuzzleContainer)
