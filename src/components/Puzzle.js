import React from 'react'
import { connect } from 'react-redux'
import { startPuzzleItems } from '../actions/puzzle'
import { PuzzleItem } from './'

export default class Puzzle extends React.Component {
  render() {
    return (
      <div className="puzzle-box">
        {this.props.puzzle.puzzle_items.map(item => {
          return (
            <PuzzleItem 
              key={item.id} 
              from_position={this.props.puzzle.from_position}
              to_position={this.props.puzzle.to_position}
              {...item} 
              />
          )
        })}
      </div>
    );
  }
}
