import React, { Component, PropTypes } from 'react'

export default class PuzzleControls extends Component {
  render() {
    return (
      <div className="text-center">
        <hr />
        <a href="#" onClick={this.props.goLeft} className="btn btn-info">&#8592;</a>
        <span> </span>
        <a href="#" onClick={this.props.goRight} className="btn btn-info">&#8594;</a>
        <span> </span>
        <a href="#" onClick={this.props.goTop} className="btn btn-info">&#8593;</a>
        <span> </span>
        <a href="#" onClick={this.props.goBottom} className="btn btn-info">&#8595;</a>
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
