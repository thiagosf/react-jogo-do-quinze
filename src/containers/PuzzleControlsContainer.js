import React from 'react'
import { connect } from 'react-redux'
import { PuzzleControls } from '../components'
import { movePuzzleItem } from '../actions/puzzle'
import { validMove, getFromTo } from '../helpers'

class PuzzleControlsContainer extends React.Component {
  handleControl(direction, e) {
    e.preventDefault()
    if (validMove(direction, this.props.puzzle)) {
      const { from_position, to_position } = getFromTo(direction, this.props.puzzle)
      this.props.movePuzzleItem(direction, from_position, to_position)
    }
  }
  componentDidMount() {
    document.querySelector('body').addEventListener('keydown', e => {
      let direction

      switch(e.which) {
        case 37: direction = 'left'; break;
        case 39: direction = 'right'; break;
        case 38: direction = 'top'; break;
        case 40: direction = 'bottom'; break;
      }

      if (direction) {
        this.handleControl(direction, e)
      }
    })
  }
  render() {
    return (
      <div>
        <PuzzleControls
          goLeft={this.handleControl.bind(this, 'left')}
          goRight={this.handleControl.bind(this, 'right')}
          goTop={this.handleControl.bind(this, 'top')}
          goBottom={this.handleControl.bind(this, 'bottom')}
          />
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
    movePuzzleItem: (direction, from_position, to_position) => {
      return dispatch(movePuzzleItem(direction, from_position, to_position))
    }
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(PuzzleControlsContainer)
