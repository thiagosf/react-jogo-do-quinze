let actions = {}

export function startPuzzleItems () {
  var puzzle_items = []
  for (let i = 1; i <= 15; i++) {
    puzzle_items.push({ id: i, label: i, position: i })
  }
  return {
    type: 'START_ITEMS',
    puzzle_items
  }
}

export function movePuzzleItem (direction, from_position, to_position) {
  console.log("valido!", direction, from_position, to_position)
  return {
    type: 'MOVE_PUZZLE_ITEM',
    direction,
    from_position,
    to_position
  }
}
