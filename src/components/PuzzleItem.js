import React from 'react'

const PuzzleItem = ({ id, label, position, from_position, to_position, onClick }) => {
  return (
    <div className={`puzzle-item puzzle-item-${position}`} onClick={onClick}>
      <div className="puzzle-item-number">{label}</div>
    </div>
  );
}

export default PuzzleItem
