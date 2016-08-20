import React from 'react'
import { connect } from 'react-redux'
import { startPuzzleItems } from '../actions/puzzle'
import { PuzzleItem } from './'

class Puzzle extends React.Component {
  componentDidMount() {
    console.log("componentDidMount");
    this.props.startPuzzleItems();
  }
  render() {
    return (
      <div className="puzzle-box">
        {this.props.puzzle_items.map(item => {
          return <PuzzleItem key={item.id} {...item} />
        })}
      </div>
    );
  }
}

Puzzle.propTypes = { puzzle_items: React.PropTypes.array };

const mapStateToProps = (state) => {
  return {
    puzzle_items: state.puzzle.puzzle_items
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    startPuzzleItems: () => {
      return dispatch(startPuzzleItems())
    }
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Puzzle)
