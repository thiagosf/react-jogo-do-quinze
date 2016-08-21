import React, { Component, PropTypes } from 'react'

export default class PuzzleStats extends Component {
  render() {
    const { puzzle } = this.props
    return (
      <div className="puzzle-stats">
        <div className="row">
          <div className="col-sm-6">
            <p>
              Movimentos: <span>{this.props.puzzle.moves}</span>
            </p>
          </div>
          <div className="col-sm-6">
            <p>
              Movimentos perfeitos: <span>{puzzle.perfect_moves}</span>
            </p>
          </div>
          <div className="col-sm-12">
            <h3 className="puzzle-time">Tempo: <span>{puzzle.seconds}</span>s</h3>
          </div>
        </div>
      </div>
    )
  }
}
