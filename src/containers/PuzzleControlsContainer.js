import React from 'react'
import { connect } from 'react-redux'
import Sound from 'react-sound'
import { PuzzleControls } from '../components'
import { movePuzzleItem } from '../actions/puzzle'
import { play, stop } from '../actions/sound'
import { validMove, getFromTo } from '../helpers'

class PuzzleControlsContainer extends React.Component {
  handleControl(direction, e) {
    e.preventDefault()
    if (validMove(direction, this.props.puzzle)) {
      const { from_position, to_position } = getFromTo(direction, this.props.puzzle)
      let { moves } = this.props.puzzle
      this.props.movePuzzleItem(direction, from_position, to_position, ++moves)
      this.props.stop()
      this.props.play('puzzle_move')
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
        <Sound
          url={this.props.sound.current_sound}
          playStatus={this.props.sound.play_status}
          onLoading={({bytesLoaded, bytesTotal}) => console.log(`${bytesLoaded / bytesTotal * 100}% loaded`)}
          onPlaying={({position}) => console.log(position)}
          onFinishedPlaying={this.props.stop}
          />
      </div>
    );
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
    movePuzzleItem: (direction, from_position, to_position, moves) => {
      return dispatch(movePuzzleItem(direction, from_position, to_position, moves))
    },
    play: (sound) => {
      return dispatch(play(sound))
    },
    stop: () => {
      return dispatch(stop())
    }
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(PuzzleControlsContainer)
