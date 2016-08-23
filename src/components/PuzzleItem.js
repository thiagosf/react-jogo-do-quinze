import React from 'react'
import classNames from 'classnames'

export default class PuzzleItem extends React.Component {
  render() {
    const {
      id,
      label,
      position,
      onClick,
      puzzle_type
    } = this.props

    const puzzle_item_classname = classNames({
      'puzzle-item': true,
      [`puzzle-item-${position}`]: true,
      [`puzzle-item-image-${id}`]: true,
      'puzzle-item-image': puzzle_type.includes('image')
    })

    let styles = {}
    if (puzzle_type.includes('image')) {
      const images = {
        'image-1': 'images/image-1.jpg',
        'image-2': 'images/image-2.jpg',
        'image-3': 'images/image-3.jpg'
      }
      const image = images[puzzle_type]
      styles.backgroundImage = `url(${image})`
    }

    return(
      <div className={puzzle_item_classname} onClick={onClick} style={styles}>
        <div className="puzzle-label">{label}</div>
      </div>
    )
  }
}

PuzzleItem.propTypes = {
  id: React.PropTypes.number.isRequired,
  label: React.PropTypes.number.isRequired,
  puzzle_type: React.PropTypes.string,
  position: React.PropTypes.number.isRequired,
  onClick: React.PropTypes.func.isRequired
}
