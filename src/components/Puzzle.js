import React from 'react'
import { connect } from 'react-redux'
import classNames from 'classnames'
import { startPuzzleItems } from '../actions/puzzle'
import { PuzzleItem } from './'

export default class Puzzle extends React.Component {
  render() {
    const puzzle_box = classNames({
      'puzzle-box': true,
      starting: this.props.puzzle.starting,
      resolving: this.props.puzzle.resolving
    })
    return (
      <div className={puzzle_box}>
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
