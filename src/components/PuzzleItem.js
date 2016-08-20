import React from 'react'

const PuzzleItem = ({ id, label, position, from_position, to_position }) => {
  return (
    <div className={`puzzle-item puzzle-item-${position}`}>
      <div className="puzzle-item-number">{label}</div>
    </div>
  );
}

export default PuzzleItem
