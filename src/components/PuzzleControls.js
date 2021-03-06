import React, { Component, PropTypes } from 'react'
import { FormattedMessage } from 'react-intl'

export default class PuzzleControls extends Component {
  render() {
    return (
      <div className="puzzle-controls">
        <hr />
        <p>
          <a href="#" onClick={this.props.goTop} className="btn btn-info">&#8593;</a>
        </p>
        <a href="#" onClick={this.props.goLeft} className="btn btn-info">&#8592;</a>
        <span> </span>
        <a href="#" onClick={this.props.goBottom} className="btn btn-info">&#8595;</a>
        <span> </span>
        <a href="#" onClick={this.props.goRight} className="btn btn-info">&#8594;</a>
        <p className="tip-keyboard">
          <small className="visible-xs visible-sm">
            <em><FormattedMessage id="or_touch" /></em>
          </small>
          <small className="hidden-xs hidden-sm">
            <em><FormattedMessage id="or_keyboard" /></em>
          </small>
        </p>
      </div>
    )
  }
}

PuzzleControls.propTypes = {
  goLeft: PropTypes.func.isRequired,
  goRight: PropTypes.func.isRequired,
  goTop: PropTypes.func.isRequired,
  goBottom: PropTypes.func.isRequired
}
