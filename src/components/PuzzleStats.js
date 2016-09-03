import React, { Component, PropTypes } from 'react'
import { FormattedMessage } from 'react-intl'

export default class PuzzleStats extends Component {
  render() {
    const { puzzle } = this.props
    return (
      <div className="puzzle-stats">
        <div className="row">
          <div className="col-sm-6">
            <p>
              <FormattedMessage id="moves" /> <span className="highlight">{this.props.puzzle.moves}</span>
            </p>
          </div>
          <div className="col-sm-6">
            <p>
              <FormattedMessage id="perfect_moves" /> <span className="highlight">{puzzle.perfect_moves}</span>
            </p>
          </div>
          <div className="col-sm-12">
            <h3 className="puzzle-time">
              <FormattedMessage id="time" /> <span className="highlight">{puzzle.seconds}</span>s
            </h3>
          </div>
        </div>
      </div>
    )
  }
}
