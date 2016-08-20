import React from 'react'

const PuzzleItem = ({ id, label }) => {
  return (
    <div className={`puzzle-item puzzle-item-${id}`}>
      <div className="puzzle-item-number">{label}</div>
    </div>
  );
}

export default PuzzleItem
